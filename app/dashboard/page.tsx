"use client";

import { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';

interface AssessmentResults {
  percentages: {
    vata: number;
    pitta: number;
    kapha: number;
  };
  primaryDosha: string;
  completedAt: string;
}

export default function Dashboard() {
  const [results, setResults] = useState<AssessmentResults | null>(null);
  const [hasAssessment, setHasAssessment] = useState(false);

  useEffect(() => {
    const savedResults = localStorage.getItem('assessmentResults');
    if (savedResults) {
      setResults(JSON.parse(savedResults));
      setHasAssessment(true);
    }
  }, []);

  if (!hasAssessment || !results) {
    // Show empty state if no assessment completed
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
                  <button 
                    onClick={() => window.location.href = '/health-analysis/assessment'}
                    className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors"
                  >
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
                  <button 
                    onClick={() => window.location.href = '/health-analysis/assessment'}
                    className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors font-medium"
                  >
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

  // Show results dashboard after assessment completion
  const getDoshaColor = (dosha: string) => {
    switch (dosha) {
      case 'vata': return '#8b5cf6';
      case 'pitta': return '#f97316';
      case 'kapha': return '#10b981';
      default: return '#6b7280';
    }
  };

  const getDoshaDescription = (primaryDosha: string) => {
    switch (primaryDosha) {
      case 'vata':
        return "You have a Vata constitution, which means you're naturally creative and energetic, with a quick mind and active lifestyle. You may be prone to anxiety and digestive irregularities.";
      case 'pitta':
        return "You have a Pitta constitution, which means you're naturally driven and focused, with strong digestion and leadership qualities. You may be prone to anger and heat-related imbalances.";
      case 'kapha':
        return "You have a Kapha constitution, which means you're naturally calm and stable, with strong immunity and endurance. You may be prone to weight gain and sluggishness.";
      default:
        return "You have a mixed constitution with balanced doshas.";
    }
  };

  const primaryDosha = results.primaryDosha.charAt(0).toUpperCase() + results.primaryDosha.slice(1);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome back, Sarah!</h2>
              <p className="text-gray-600">Your {primaryDosha} constitution is looking balanced today</p>
            </div>
            <div className="text-right">
              <div className="bg-green-100 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Wellness Score</p>
                <p className="text-3xl font-bold text-green-600">78</p>
                <p className="text-xs text-gray-500">Last updated: Today, 9:00 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dosha Constitution Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">Your Dosha Constitution</h3>
            <div className="flex items-center space-x-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Assessment Complete</span>
              <span className="text-sm text-gray-500">Sept 3, 2025</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-teal-600 mb-2">{primaryDosha}</h4>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">Embedded App</span>
              <p className="text-gray-600 mt-4 leading-relaxed">
                {getDoshaDescription(results.primaryDosha)}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                    strokeDasharray={`${results.percentages.vata}, 100`}
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="3"
                    strokeDasharray={`${results.percentages.pitta}, 100`}
                    strokeDashoffset={`-${results.percentages.vata}`}
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeDasharray={`${results.percentages.kapha}, 100`}
                    strokeDashoffset={`-${results.percentages.vata + results.percentages.pitta}`}
                  />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded mr-3"></div>
                <span className="text-gray-700">Vata</span>
              </div>
              <span className="font-semibold">{results.percentages.vata}%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-orange-500 rounded mr-3"></div>
                <span className="text-gray-700">Pitta</span>
              </div>
              <span className="font-semibold">{results.percentages.pitta}%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                <span className="text-gray-700">Kapha</span>
              </div>
              <span className="font-semibold">{results.percentages.kapha}%</span>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-between bg-green-50 p-4 rounded-lg">
            <div>
              <span className="text-sm text-gray-600">Confidence Level:</span>
              <span className="font-bold text-green-600 ml-2">91%</span>
            </div>
            <div>
              <span className="text-sm text-gray-600">Risk Level:</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm ml-2">Low</span>
            </div>
          </div>
        </div>

        {/* Health Metrics Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Health Metrics */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Health Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">😴</span>
                  <span className="text-sm text-gray-600">Sleep Quality</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">85</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">🔥</span>
                  <span className="text-sm text-gray-600">Digestive Health</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">72</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">🧘</span>
                  <span className="text-sm text-gray-600">Stress Level</span>
                </div>
                <p className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Moderate</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">⚡</span>
                  <span className="text-sm text-gray-600">Energy Level</span>
                </div>
                <p className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Good</p>
              </div>
            </div>
          </div>

          {/* Today's Focus */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Today's Focus</h3>
              <span className="text-sm text-orange-600">🍂 Autumn: Focus on grounding practices</span>
            </div>
            <div className="flex space-x-2 mb-4">
              <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium">Diet</button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm">Lifestyle</button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm">Yoga</button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Start with warm oatmeal with cinnamon</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Include sweet, sour, and salty tastes</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Avoid cold drinks and raw foods</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className="text-gray-700">Have your largest meal at lunch</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Health Insights and Progress Tracking */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* AI Health Insights */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">AI Health Insights</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">🔥</span>
                    <span className="font-semibold text-gray-800">Digestive Fire</span>
                  </div>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">High Priority</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Your {primaryDosha} influence affects your digestion. {results.primaryDosha === 'pitta' ? 'Strong digestion but avoid spicy foods.' : results.primaryDosha === 'vata' ? 'Irregular digestion, eat at consistent times.' : 'Slow digestion, avoid heavy foods.'}
                </p>
              </div>
              
              <div className="border-l-4 border-orange-400 bg-orange-50 p-4 rounded-r-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">😴</span>
                    <span className="font-semibold text-gray-800">Sleep Pattern</span>
                  </div>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">Medium Priority</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Your {primaryDosha} nature affects sleep. {results.primaryDosha === 'vata' ? 'Light sleeper, establish calming bedtime routine.' : results.primaryDosha === 'pitta' ? 'Good sleep but avoid late meals.' : 'Deep sleeper but may oversleep.'}
                </p>
              </div>
              
              <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">⚠️</span>
                    <span className="font-semibold text-gray-800">Stress Response</span>
                  </div>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">High Priority</span>
                </div>
                <p className="text-gray-700 text-sm">
                  {results.primaryDosha === 'vata' ? 'Prone to anxiety and worry. Regular meditation is essential.' : results.primaryDosha === 'pitta' ? 'Prone to anger and irritation. Cool, calming practices help.' : 'Prone to lethargy when stressed. Active practices are beneficial.'}
                </p>
              </div>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Progress Tracking</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-teal-600">12</p>
                <p className="text-sm text-gray-600">Day Streak</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-teal-600">7/10</p>
                <p className="text-sm text-gray-600">Goals Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-teal-600">+2</p>
                <p className="text-sm text-gray-600">Weekly Improvement</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-teal-600 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">70% of weekly goals completed</p>
            </div>
          </div>
        </div>

        {/* Quick Actions and Today's Tasks */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <div className="text-2xl mb-2">📊</div>
                <p className="text-sm font-medium text-gray-800">View Full Report</p>
              </button>
              <button className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <div className="text-2xl mb-2">💡</div>
                <p className="text-sm font-medium text-gray-800">Today's Tips</p>
              </button>
              <button className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <div className="text-2xl mb-2">🔗</div>
                <p className="text-sm font-medium text-gray-800">Connect Device</p>
              </button>
              <button className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <div className="text-2xl mb-2">📅</div>
                <p className="text-sm font-medium text-gray-800">Schedule Follow-up</p>
              </button>
              <button className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <div className="text-2xl mb-2">📚</div>
                <p className="text-sm font-medium text-gray-800">Learn About Dosha</p>
              </button>
              <button className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-sm font-medium text-gray-800">Set New Goals</p>
              </button>
            </div>
          </div>

          {/* Today's Tasks */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Today's Tasks</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input type="checkbox" className="mr-3 w-4 h-4 text-teal-600 rounded" />
                <span className="text-gray-700">Complete daily meditation</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-3 w-4 h-4 text-teal-600 rounded" />
                <span className="text-gray-700">Log evening meal</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-3 w-4 h-4 text-teal-600 rounded" />
                <span className="text-gray-700">Take stress assessment</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-3 w-4 h-4 text-teal-600 rounded" />
                <span className="text-gray-700">Review weekly progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}