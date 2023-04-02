const LoadingSkeleton = () => (
  <div className="flex justify-between items-center">
    <div className="flex flex-col space-y-2 w-4/5 ">
      <div className="h-[60px] bg-gray-200 animate-pulse" />
      <div className="h-[32px] bg-violet-200 animate-pulse w-1/2" />
    </div>
  </div>
)

export default LoadingSkeleton
