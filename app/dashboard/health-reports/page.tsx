"use client";

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Download, Share2, Eye, Calendar, TrendingUp, AlertTriangle } from 'lucide-react';

export default function HealthReports() {
  const [selectedReport, setSelectedReport] = useState('latest');
  const [showDetailedReport, setShowDetailedReport] = useState(false);

  const reports = [
    {
      id: 'latest',
      title: 'Latest Health Assessment',
      date: '2025-01-15',
      type: 'Comprehensive Analysis',
      status: 'Complete',
      riskLevel: 'Low',
      wellnessScore: 78,
      primaryDosha: 'Vata-Pitta'
    },
    {
      id: 'previous',
      title: 'Previous Assessment',
      date: '2024-12-15',
      type: 'Follow-up Analysis',
      status: 'Complete',
      riskLevel: 'Medium',
      wellnessScore: 72,
      primaryDosha: 'Pitta'
    }
  ];

  const healthMetrics = {
    digestiveHealth: 85,
    sleepQuality: 78,
    stressLevel: 'Moderate',
    energyLevel: 'Good',
    immunityScore: 82
  };

  const downloadReport = (reportId: string) => {
    alert(`Downloading report: ${reportId}`);
    // Implement actual download logic
  };

  const shareReport = (reportId: string) => {
    alert(`Sharing report: ${reportId}`);
    // Implement sharing logic
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Health Reports</h2>
            <p className="text-gray-600">Comprehensive analysis of your wellness journey</p>
          </div>
          <button 
            onClick={() => setShowDetailedReport(!showDetailedReport)}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center space-x-2"
          >
            <Eye size={16} />
            <span>{showDetailedReport ? 'Hide Details' : 'View Details'}</span>
          </button>
        </div>

        {/* Reports Overview */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Latest Report</h3>
              <Calendar className="w-5 h-5 text-gray-500" />
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-600">78</p>
              <p className="text-sm text-gray-600">Wellness Score</p>
              <p className="text-xs text-gray-500">Generated on Jan 15, 2025</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Health Trends</h3>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-600">+6</p>
              <p className="text-sm text-gray-600">Improvement</p>
              <p className="text-xs text-gray-500">Since last assessment</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Risk Assessment</h3>
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="space-y-2">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Low Risk</span>
              <p className="text-sm text-gray-600">Overall Health</p>
              <p className="text-xs text-gray-500">Based on current analysis</p>
            </div>
          </div>
        </div>

        {/* Detailed Reports */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Detailed Health Reports</h3>
          
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{report.title}</h4>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm text-gray-600">{new Date(report.date).toLocaleDateString()}</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{report.type}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">{report.status}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => downloadReport(report.id)}
                      className="bg-gray-100 text-gray-700 p-2 rounded-md hover:bg-gray-200 transition-colors"
                      title="Download Report"
                    >
                      <Download size={16} />
                    </button>
                    <button 
                      onClick={() => shareReport(report.id)}
                      className="bg-gray-100 text-gray-700 p-2 rounded-md hover:bg-gray-200 transition-colors"
                      title="Share Report"
                    >
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>

                {showDetailedReport && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Constitution Analysis</h5>
                        <p className="text-sm text-gray-600 mb-2">Primary Dosha: {report.primaryDosha}</p>
                        <p className="text-sm text-gray-600">Wellness Score: {report.wellnessScore}/100</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Risk Assessment</h5>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          report.riskLevel === 'Low' ? 'bg-green-100 text-green-800' :
                          report.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {report.riskLevel} Risk
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Health Metrics */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Current Health Metrics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔥</span>
              </div>
              <h4 className="font-semibold text-gray-800">Digestive Health</h4>
              <p className="text-2xl font-bold text-green-600">{healthMetrics.digestiveHealth}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">😴</span>
              </div>
              <h4 className="font-semibold text-gray-800">Sleep Quality</h4>
              <p className="text-2xl font-bold text-blue-600">{healthMetrics.sleepQuality}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🧘</span>
              </div>
              <h4 className="font-semibold text-gray-800">Stress Level</h4>
              <p className="text-lg font-bold text-purple-600">{healthMetrics.stressLevel}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-800">Energy Level</h4>
              <p className="text-lg font-bold text-yellow-600">{healthMetrics.energyLevel}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-semibold text-gray-800">Immunity Score</h4>
              <p className="text-2xl font-bold text-red-600">{healthMetrics.immunityScore}</p>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">AI Health Insights</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-green-400 bg-green-50 p-4 rounded-r-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Positive Trends</h4>
              <p className="text-gray-700 text-sm">Your digestive health has improved by 15% since last assessment. Continue with current dietary practices.</p>
            </div>
            <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded-r-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Areas for Improvement</h4>
              <p className="text-gray-700 text-sm">Consider incorporating more grounding practices to balance your Vata constitution, especially during seasonal transitions.</p>
            </div>
            <div className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded-r-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Recommendations</h4>
              <p className="text-gray-700 text-sm">Based on your Vata-Pitta constitution, focus on warm, cooked foods and establish regular meal times for optimal health.</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}