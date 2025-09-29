import React from 'react';
// import { useAuth } from '../../Hooks/auth/useAuth';
// import { useNavigate } from 'react-router-dom';
import Glass from '../../components/UI/glass/Glass'
import Linechart from '../../components/Charts/Linechart';
import ButtonPrimary from '../../components/UI/ButtonPrimary/ButtonPrimary';


const DashboardPage = () => {
    return (
        <div className="pt-[50px] min-h-screen p-4 sm:p-6 md:p-10 gap-10">
      {/* title section */}
      <div className="flex flex-col mb-6">
        <p className="text-3xl sm:text-4xl bg-gradient-to-l from-cyan-400 to-blue-600 bg-clip-text text-transparent ">
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
        <Glass className="flex flex-col rounded-2xl p-4  border border-white/10 shadow-lg transition-all duration-300 hover:scale-[1.02] min-h-[210px]">
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
        <Glass className="flex flex-col rounded-2xl p-4  border border-white/10 shadow-lg transition-all duration-300 hover:scale-[1.02] min-h-[210px]">
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
        {/* Active Datasets */}
        <Glass className="flex flex-col rounded-2xl p-4  border border-white/10 shadow-lg transition-all duration-300 hover:scale-[1.02] min-h-[210px]">
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
        <Glass className="flex flex-col rounded-2xl p-4  border border-white/10 shadow-lg transition-all duration-300 hover:scale-[1.02] min-h-[210px]">
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

      {/* chart section */}
        <div className='pt-[30px] grid grid-cols-1 md:grid-cols-5 gap-8'>
            {/* Main Chart (takes up 3/5 columns on medium screens and up) */}
            <Glass className='flex flex-col col-span-1 md:col-span-3 min-h-[450px] rounded-2xl p-4 border border-white/10 shadow-lg transition-all duration-300 hover:scale-[1.01] gap-4'>
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center pt-[10px] sm:pt-[20px] px-0 sm:px-5'>
                    <p className='text-xl sm:text-2xl font-semibold mb-2 sm:mb-0'>
                        Real-time Data Usage
                    </p>
                    <ButtonPrimary
                        type="submit"
                        // Adjusted button width/height for better responsiveness
                        className="w-full sm:w-[200px] h-[40px] bg-gradient-to-l from-cyan-500 to-blue-500 flex items-center justify-center text-sm sm:text-base"
                    >
                        Add New Dataset
                    </ButtonPrimary>
                </div>
                {/* Chart area takes up remaining vertical space */}
                <div className="flex-grow min-h-0">
                    <Linechart />
                </div>
            </Glass>
            
            {/* Secondary Chart/Logs Panel (takes up 2/5 columns on medium screens and up) */}
            <Glass className='flex flex-col col-span-1 md:col-span-2 min-h-[450px] rounded-2xl p-4 border border-white/10 shadow-lg transition-all duration-300 hover:scale-[1.01] gap-4'>
                {/* Header Section */}
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center pt-[10px] sm:pt-[20px] px-0 sm:px-5'>
                    <p className='text-xl sm:text-2xl font-semibold mb-2 sm:mb-0'>
                        Tasks Tracking Log
                    </p>
                    <ButtonPrimary
                        type="submit"
                        // Button is full-width on mobile, auto-width on sm+
                        className="w-full sm:w-auto h-[40px] bg-gradient-to-l from-cyan-500 to-blue-500 flex items-center justify-center text-sm sm:text-base px-4"
                    >
                        View All Logs
                    </ButtonPrimary>
                </div>

                {/* Scrollable Tasks/Logs List */}
                <div className="flex-grow min-h-0 overflow-y-auto pr-2">
                    <div className="space-y-4">
                        
                        {/* Log Item 1: New Dataset Added */}
                        <div className="flex items-center space-x-3 border-b border-white/5 pb-3">
                            <span className="text-green-400 text-lg">
                                {/* Checkmark Icon */}
                                &#10003; 
                            </span>
                            <div className="flex-grow">
                                <p className="text-base font-medium text-white">
                                    <span className="text-cyan-300">Dr. Lee</span> added New Plankton Data
                                </p>
                                <p className="text-xs text-gray-400">
                                    Task ID: DS-401 · 2 minutes ago
                                </p>
                            </div>
                        </div>

                        {/* Log Item 2: User Approved */}
                        <div className="flex items-center space-x-3 border-b border-white/5 pb-3">
                            <span className="text-yellow-400 text-lg">
                                {/* User Icon (simplified) */}
                                &#9733; 
                            </span>
                            <div className="flex-grow">
                                <p className="text-base font-medium text-white">
                                    <span className="text-cyan-300">Admin</span> approved J. Smith's access request
                                </p>
                                <p className="text-xs text-gray-400">
                                    Task ID: UA-045 · 1 hour ago
                                </p>
                            </div>
                        </div>

                        {/* Log Item 3: System Alert/Error */}
                        <div className="flex items-center space-x-3 border-b border-white/5 pb-3">
                            <span className="text-red-400 text-lg">
                                {/* Alert Icon */}
                                &#9888; 
                            </span>
                            <div className="flex-grow">
                                <p className="text-base font-medium text-white">
                                    <span className="text-red-400">System Alert:</span> High CPU usage detected
                                </p>
                                <p className="text-xs text-gray-400">
                                    Task ID: SYS-002 · 4 hours ago
                                </p>
                            </div>
                        </div>
                        
                        {/* Log Item 4: Data Export */}
                        <div className="flex items-center space-x-3 border-b border-white/5 pb-3">
                            <span className="text-blue-400 text-lg">
                                {/* Download Icon (simplified) */}
                                &#8631;
                            </span>
                            <div className="flex-grow">
                                <p className="text-base font-medium text-white">
                                    <span className="text-cyan-300">Dr. Jones</span> exported Water Quality data
                                </p>
                                <p className="text-xs text-gray-400">
                                    Task ID: DE-112 · 1 day ago
                                </p>
                            </div>
                        </div>
                        
                        {/* Add more log items as needed */}
                        <div className="flex items-center space-x-3 border-b border-white/5 pb-3">
                            <span className="text-green-400 text-lg">
                                &#10003; 
                            </span>
                            <div className="flex-grow">
                                <p className="text-base font-medium text-white">
                                    Report Generation task completed successfully
                                </p>
                                <p className="text-xs text-gray-400">
                                    Task ID: RG-777 · 2 days ago
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 border-b border-white/5 pb-3">
                            <span className="text-yellow-400 text-lg">
                                &#9733; 
                            </span>
                            <div className="flex-grow">
                                <p className="text-base font-medium text-white">
                                    <span className="text-cyan-300">Admin</span> updated user roles
                                </p>
                                <p className="text-xs text-gray-400">
                                    Task ID: UA-046 · 3 days ago
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </Glass>
            
            {/* activity tracking system - The original third element was commented out, so it is omitted here */}
        </div>
    </div>
    );
};

export default DashboardPage;