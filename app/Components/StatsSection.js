import { FaStar } from "react-icons/fa";

const statsData = [
    { value: "30+", label: "Courses" },
    { value: "10+", label: "School" },
    { value: "100+", label: "Student" },
    { value: "5+", label: "Certificate" },
];

const ratingData = [
    { icon: "U", rating: 5.2, count: 340, label: "On User Reviews" },
    { icon: "P", rating: 5.2, count: 485, label: "On Platform Ratings" },
];

const StatsSection = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-6">
            {/* Happy Customers */}
            <div className="relative flex items-center px-6 py-2 bg-white rounded-full shadow-md">
                <div className="flex -space-x-2 overflow-hidden">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="/avatar1.jpg" alt="User 1" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="/avatar2.jpg" alt="User 2" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="/avatar3.jpg" alt="User 3" />
                </div>
                <span className="ml-3 text-sm font-semibold text-gray-700">980+ Happy Customers</span>
            </div>

            {/* Stats Boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {statsData.map((stat, index) => (
                    <div key={index} className="p-6 bg-purple-100 rounded-lg text-center shadow-md">
                        <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                        <p className="text-gray-600">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Rating Section */}
            <div className="flex flex-col md:flex-row gap-6">
                {ratingData.map((rating, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2 p-4 bg-gray-100 rounded-lg shadow-md">
                        <span className="text-lg font-bold text-purple-600">{rating.icon}</span>
                        <div className="flex items-center bg-gray-200 px-3 py-1 rounded-full">
                            <FaStar className="text-yellow-500" />
                            <span className="ml-2 font-semibold">{rating.rating}</span>
                            <span className="ml-2 text-gray-600">{rating.count}</span>
                        </div>
                        <p className="text-sm text-gray-600">{rating.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;
