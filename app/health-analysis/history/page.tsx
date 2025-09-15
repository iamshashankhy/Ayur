"use client";

import DashboardLayout from '@/components/DashboardLayout';

export default function AnalysisHistory() {
  const assessmentHistory = [
    {
      id: 1,
      date: '2025-09-24',
      primaryDosha: 'Vata-Pitta',
      riskLevel: 'High-Risk',
      scores: { vata: 45, pitta: 40, kapha: 15 },
      wellnessScore: 78
    },
    {
      id: 2,
      date: '2025-08-15',
      primaryDosha: 'Pitta',
      riskLevel: 'Medium-Risk',
      scores: { vata: 30, pitta: 50, kapha: 20 },
      wellnessScore: 72
    },
    {
      id: 3,
      date: '2025-07-10',
      primaryDosha: 'Vata-Pitta',
      riskLevel: 'Low-Risk',
      scores: { vata: 42, pitta: 38, kapha: 20 },
      wellnessScore: 85
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High-Risk': return 'bg-red-100 text-red-800';
      case 'Medium-Risk': return 'bg-yellow-100 text-yellow-800';
      case 'Low-Risk': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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

          {/* Assessment Entries */}
          <div className="space-y-4">
            {assessmentHistory.map((assessment, index) => (
              <div key={assessment.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-lg font-semibold text-gray-800">
                      {index === 0 ? 'Latest Assessment' : `Assessment ${assessmentHistory.length - index}`}
                    </span>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        {assessment.primaryDosha}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getRiskColor(assessment.riskLevel)}`}>
                        {assessment.riskLevel}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-800">
                      {new Date(assessment.date).getDate()}
                    </div>
                    <div className="text-sm text-gray-600">
                      {new Date(assessment.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Dosha Distribution:</p>
                  <div className="flex space-x-4 text-sm">
                    <span>Vata: {assessment.scores.vata}%</span>
                    <span>Pitta: {assessment.scores.pitta}%</span>
                    <span>Kapha: {assessment.scores.kapha}%</span>
                  </div>
                </div>

                {/* Progress Chart Placeholder */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4 text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{assessment.wellnessScore}</div>
                      <div className="text-xs text-gray-600">Wellness Score</div>
                    </div>
                    <div className="w-px h-12 bg-gray-300"></div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-800">{assessment.primaryDosha}</div>
                      <div className="text-xs text-gray-600">Primary Constitution</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors text-sm">
                    View Detailed Report
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition-colors text-sm">
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Overview */}
          <div className="mt-8 bg-green-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Progress Overview</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">{assessmentHistory.length}</div>
                <div className="text-sm text-gray-600">Total Assessments</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">+6</div>
                <div className="text-sm text-gray-600">Wellness Improvement</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-sm text-gray-600">Months Tracking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}