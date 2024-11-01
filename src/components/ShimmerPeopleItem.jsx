export default function ShimmerPeopleItem() {
  return (
    <div className="relative w-80 bg-white shadow-md rounded-lg overflow-hidden mx-auto animate-pulse">
      {/* Shimmer Image Placeholder */}
      <div className="h-64 bg-gray-900 shimmer"></div>

      <div className="px-3 py-6">
        {/* Title Shimmer Lines */}
        <div className="w-full h-6 bg-gray-900 rounded-lg shimmer mb-4"></div>

        {/* Content Shimmer Lines */}
        <div className="w-2/3 h-4 bg-gray-900 rounded-lg shimmer"></div>
      </div>
    </div>
  );
}
