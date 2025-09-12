"use client";

import DashboardLayout from '@/components/DashboardLayout';

export default function HealthAnalysis() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-teal-500 text-white rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Welcome to Your Wellness Journey</h2>
          <p className="text-teal-100">
            Ayurvedic combines ancient Ayurvedic wisdom with modern health monitoring to provide 
            personalized wellness guidance tailored to your unique body constitution.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Dosha Balance */}
            <div className="bg-green-100 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Dosha Balance</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="w-24 h-24 rounded-full border-8 border-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Loading...</div>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-700 text-sm">
                No Assessment Yet<br />
                We don't have assessment data for<br />
                you. Please complete assessment to see<br />
                your Ayurvedic body constitution.
              </p>
            </div>

            {/* Assessment History */}
            <div className="bg-red-100 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Assessment History</h3>
              <div className="text-center py-8">
                <div className="text-gray-500 mb-4">📋</div>
                <p className="text-gray-700 text-sm mb-4">
                  No Assessment History<br />
                  Your assessment history and<br />
                  health trends will appear here once<br />
                  you begin your wellness journey.
                </p>
                <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors">
                  Start Assessment
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Action */}
            <div className="bg-red-100 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Action</h3>
              <div className="space-y-3">
                <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors font-medium">
                  Health Assessment
                </button>
                <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors font-medium">
                  Explore Dosha Insights
                </button>
                <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors font-medium">
                  View Wellness Tips
                </button>
              </div>
            </div>

            {/* Wellness Insights */}
            <div className="bg-green-100 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Wellness Insights</h3>
              <div className="text-center py-4">
                <div className="text-gray-500 mb-4">💡</div>
                <p className="text-gray-700 text-sm">
                  Personalized Insights Await<br />
                  Connect devices and complete<br />
                  assessments to unlock detailed<br />
                  wellness insights and progress tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}