"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import SideBanners from "../courses/_components/SideBanners";
import WelcomeBannerDashboard from "./_components/WelcomeBannerDashboard";
import InProgressCourseList from "./_components/InProgressCourseList";
import GlobalApi from "@/app/_utils/GlobalApi";

export default function Dashboard() {
  const { user } = useUser();
  const [userEnrolledCourses, setUserEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getAllUserEnrolledCourses();
    }
  }, [user]);

  const getAllUserEnrolledCourses = async () => {
    try {
      setLoading(true);
      const resp = await GlobalApi.getUserAllEnrolledCourseList(
        user.primaryEmailAddress.emailAddress
      );
      setUserEnrolledCourses(resp.userEnrollCourses || []);
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-4">
      {/* Left Container */}
      <div className="col-span-3">
        <WelcomeBannerDashboard user={user} />
        {loading ? (
          <p>Loading courses...</p>
        ) : userEnrolledCourses.length > 0 ? (
          <InProgressCourseList userEnrolledCourses={userEnrolledCourses} />
        ) : (
          <p>No enrolled courses found.</p>
        )}
      </div>

      {/* Right Container */}
      <div className="p-5 bg-white rounded-xl">
        <SideBanners />
      </div>
    </div>
  );
}
