"use client";

import DashboardLayout from '@/components/DashboardLayout';

export default function AnalysisHistory() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">History</h2>
          <p className="text-gray-600">Your assessment journey over time</p>
        </div>

        {/* Analysis History Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Analysis History</h3>
          
          <div className="flex space-x-4 mb-6">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium">
              Assessment Timeline
            </button>
            <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-md">
              Download Report
            </button>
          </div>

          {/* Assessment Entry */}
          <div className="border rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-lg font-semibold text-gray-800">Latest Assessment</span>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    Vata-Pitta
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                    High-Risk
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-800">24</div>
                <div className="text-sm text-gray-600">Sept</div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">Primary: Pitta</p>
            
            {/* Chart Placeholder */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4 text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-sm text-gray-600">
                Complete more assessments to see your<br />
                progress over time
              </p>
            </div>
            
            <button className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition-colors">
              Start New Assessment
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}