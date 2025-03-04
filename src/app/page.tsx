import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
        <div className="flex flex-col items-center justify-center gap-4">
          
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            SW-VISTA
          </h1>
          <p className="text-sm text-gray-600 sm:text-base">
            A web application for Student Welfare Venue Allocation and Scheduling Tool for Academics
          </p>
        </div>
      </div>        
    </div>
  );
}
