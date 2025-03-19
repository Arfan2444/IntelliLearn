"use client";
import { useEffect, useState } from "react";

export default function SkillSphere() {
  const [isLoading, setIsLoading] = useState(true);
  const [teachers, setTeachers] = useState([]);
  const [skillRequests, setSkillRequests] = useState([]);
  const [activeExchanges, setActiveExchanges] = useState([]);

  useEffect(() => {
    // Mock Data
    const mockTeachers = [
      { id: "1", name: "Alice Johnson", teaching: "Python", learning: "React" },
      {
        id: "2",
        name: "Bob Smith",
        teaching: "JavaScript",
        learning: "Machine Learning",
      },
    ];

    const mockSkillRequests = [
      { id: "3", name: "Charlie Brown", wantToLearn: "Flutter", teach: "Java" },
      { id: "4", name: "David White", wantToLearn: "Node.js", teach: "C++" },
    ];

    const mockActiveExchanges = [
      { id: "5", name: "Emma Wilson", teaching: "SQL", learning: "TypeScript" },
      {
        id: "6",
        name: "Frank Miller",
        teaching: "AWS",
        learning: "Kubernetes",
      },
    ];

    // Simulate API loading
    setTimeout(() => {
      setTeachers(mockTeachers);
      setSkillRequests(mockSkillRequests);
      setActiveExchanges(mockActiveExchanges);
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="grid grid-cols-12 min-h-screen bg-gradient-to-r from-purple-50 to-white">
      {/* Main Content */}
      <div className="col-span-10 p-10">
        <h1 className="text-4xl font-bold text-purple-900">IntelliLearn</h1>

        {/* Navigation Tabs */}
        <nav className="flex space-x-6 bg-white shadow-md p-4 rounded-lg mt-6">
          <a
            href="#teachers"
            className="text-purple-700 font-semibold hover:underline"
          >
            Discover Teachers
          </a>
          <a
            href="#requests"
            className="text-purple-700 font-semibold hover:underline"
          >
            Skill Requests
          </a>
          <a
            href="#exchanges"
            className="text-purple-700 font-semibold hover:underline"
          >
            Active Exchanges
          </a>
        </nav>

        <div className="max-w-screen-lg mx-auto mt-10 space-y-10">
          {/* Discover Teachers */}
          <section id="teachers">
            <h2 className="text-2xl font-semibold text-purple-800">
              Discover Teachers
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                teachers.map((teacher) => (
                  <div
                    key={teacher.id}
                    className="bg-white shadow-md rounded-xl p-6"
                  >
                    <h2 className="text-xl font-semibold text-purple-800">
                      {teacher.name}
                    </h2>
                    <p>
                      Teaching:{" "}
                      <span className="text-purple-700">
                        {teacher.teaching}
                      </span>
                    </p>
                    <p>
                      Learning:{" "}
                      <span className="text-purple-700">
                        {teacher.learning}
                      </span>
                    </p>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Skill Requests */}
          <section id="requests">
            <h2 className="text-2xl font-semibold text-purple-800">
              Skill Requests
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                skillRequests.map((request) => (
                  <div
                    key={request.id}
                    className="bg-white shadow-md rounded-xl p-6"
                  >
                    <h2 className="text-xl font-semibold text-purple-800">
                      {request.name}
                    </h2>
                    <p>
                      Wants to Learn:{" "}
                      <span className="text-purple-700">
                        {request.wantToLearn}
                      </span>
                    </p>
                    <p>
                      Offers to Teach:{" "}
                      <span className="text-purple-700">{request.teach}</span>
                    </p>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Active Exchanges */}
          <section id="exchanges">
            <h2 className="text-2xl font-semibold text-purple-800">
              Active Exchanges
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                activeExchanges.map((exchange) => (
                  <div
                    key={exchange.id}
                    className="bg-white shadow-md rounded-xl p-6"
                  >
                    <h2 className="text-xl font-semibold text-purple-800">
                      {exchange.name}
                    </h2>
                    <p>
                      Teaching:{" "}
                      <span className="text-purple-700">
                        {exchange.teaching}
                      </span>
                    </p>
                    <p>
                      Learning:{" "}
                      <span className="text-purple-700">
                        {exchange.learning}
                      </span>
                    </p>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
