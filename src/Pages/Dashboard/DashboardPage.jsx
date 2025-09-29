import React from 'react';
// import { useAuth } from '../../Hooks/auth/useAuth';
// import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeProvider/Layer';
import Glass from '../../components/UI/glass/Glass'



const DashboardPage = () => {
    const theme = useTheme();
    return (
        <div className="pt-[50px] min-h-screen p-4 sm:p-6 md:p-10">
      {/* title section */}
      <div className="flex flex-col mb-6">
        <p className="text-3xl sm:text-4xl bg-gradient-to-l from-cyan-500 to-blue-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
          Admin Dashboard
        </p>
        <p className="text-gray-400 text-sm sm:text-base">
          Welcome back! Here's what's happening with your marine research
          platform.
        </p>
      </div>

      {/* insight section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* users panel */}
        <Glass className="flex flex-col rounded-2xl p-4 bg-gradient-to-br from-white/10 via-white/5 to-black/15 backdrop-blur-lg border border-white/10 shadow-lg transition-all duration-300 hover:scale-[1.02] min-h-[210px]">
          {/* Row 1: icon + percentage */}
          <div className="flex justify-between items-center w-full">
            {/* Left icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-l from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>

            {/* Right percentage */}
            <div className="text-green-400 flex items-center gap-1 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <p>+50%</p>
            </div>
          </div>

          {/* Row 2: stats */}
          <div className="mt-auto pt-6">
            <p className="text-3xl font-semibold">1247</p>
            <p className="text-md text-gray-300 pt-2">Total Users</p>
          </div>
        </Glass>

        {/* pending Approval */}
        <Glass className="flex flex-col rounded-2xl p-4 bg-gradient-to-br from-white/10 via-white/5 to-black/15 backdrop-blur-lg border border-white/10 shadow-lg transition-all duration-300 hover:scale-[1.02] min-h-[210px]">
          {/* Row 1: icon + percentage */}
          <div className="flex justify-between items-center w-full">
            {/* Left icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-l from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>

            {/* Right percentage */}
            {/* Changed to red for negative trend */}
            <div className="text-red-400 flex items-center gap-1 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 rotate-180" 
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <p>-5%</p>
            </div>
          </div>

          {/* Row 2: stats */}
          <div className="mt-auto pt-6">
            <p className="text-3xl font-semibold">23</p>
            <p className="text-md text-gray-300 pt-2">Pending Approvals</p>
          </div>
        </Glass>
        {/* Active Datasets  */}
        <Glass className="flex flex-col rounded-2xl p-4 bg-gradient-to-br from-white/10 via-white/5 to-black/15 backdrop-blur-lg border border-white/10 shadow-lg transition-all duration-300 hover:scale-[1.02] min-h-[210px]">
          {/* Row 1: icon + percentage */}
          <div className="flex justify-between items-center w-full">
            {/* Left icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-l from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>

            {/* Right percentage */}
            <div className="text-green-400 flex items-center gap-1 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <p>+8%</p>
            </div>
          </div>

          {/* Row 2: stats */}
          <div className="mt-auto pt-6">
            <p className="text-3xl font-semibold">156</p>
            <p className="text-md text-gray-300 pt-2">Active Datasets</p>
          </div>
        </Glass>
        {/* System health */}
        <Glass className="flex flex-col rounded-2xl p-4 bg-gradient-to-br from-white/10 via-white/5 to-black/15 backdrop-blur-lg border border-white/10 shadow-lg transition-all duration-300 hover:scale-[1.02] min-h-[210px]">
          {/* Row 1: icon + percentage */}
          <div className="flex justify-between items-center w-full">
            {/* Left icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-l from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>

            {/* Right percentage */}
            <div className="text-green-400 flex items-center gap-1 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <p>+0.2%</p>
            </div>
          </div>

          {/* Row 2: stats */}
          <div className="mt-auto pt-6">
            <p className="text-3xl font-semibold">98.5%</p>
            <p className="text-md text-gray-300 pt-2">System Health</p>
          </div>
        </Glass>
      </div>
    </div>
    );
};

export default DashboardPage;