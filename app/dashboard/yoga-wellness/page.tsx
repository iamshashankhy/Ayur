"use client";

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Play, Clock, Target, Calendar, CheckCircle, Circle } from 'lucide-react';

export default function YogaWellness() {
  const [completedPractices, setCompletedPractices] = useState<string[]>(['morning-yoga']);
  const [selectedWeek, setSelectedWeek] = useState('current');

  const togglePracticeCompletion = (practiceId: string) => {
    setCompletedPractices(prev => 
      prev.includes(practiceId) 
        ? prev.filter(id => id !== practiceId)
        : [...prev, practiceId]
    );
  };

  const todayPractices = [
    {
      id: 'morning-yoga',
      title: 'Morning Vata-Balancing Yoga',
      duration: '20 minutes',
      time: '6:30 AM',
      type: 'Asana Practice',
      description: 'Gentle, grounding poses to balance Vata energy',
      poses: ['Sun Salutation', 'Warrior I', 'Tree Pose', 'Child\'s Pose', 'Savasana'],
      benefits: 'Increases stability, reduces anxiety, grounds nervous system'
    },
    {
      id: 'pranayama',
      title: 'Nadi Shodhana Pranayama',
      duration: '10 minutes',
      time: '7:00 AM',
      type: 'Breathing Practice',
      description: 'Alternate nostril breathing for balance',
      steps: ['Sit comfortably', 'Use thumb and ring finger', 'Alternate nostrils', 'Focus on breath'],
      benefits: 'Balances nervous system, calms mind, improves focus'
    },
    {
      id: 'meditation',
      title: 'Mindfulness Meditation',
      duration: '15 minutes',
      time: '7:15 AM',
      type: 'Meditation',
      description: 'Guided mindfulness practice for mental clarity',
      technique: 'Body scan and breath awareness',
      benefits: 'Reduces stress, improves concentration, emotional balance'
    },
    {
      id: 'evening-yoga',
      title: 'Evening Pitta-Cooling Yoga',
      duration: '25 minutes',
      time: '6:00 PM',
      type: 'Asana Practice',
      description: 'Cooling poses to balance Pitta energy',
      poses: ['Moon Salutation', 'Seated Forward Fold', 'Pigeon Pose', 'Legs Up Wall'],
      benefits: 'Cools body temperature, releases tension, prepares for rest'
    }
  ];

  const weeklySchedule = [
    { day: 'Monday', focus: 'Grounding & Stability', practices: ['Hatha Yoga', 'Pranayama', 'Meditation'] },
    { day: 'Tuesday', focus: 'Strength & Balance', practices: ['Vinyasa Flow', 'Core Work', 'Breathing'] },
    { day: 'Wednesday', focus: 'Flexibility & Release', practices: ['Yin Yoga', 'Meditation', 'Relaxation'] },
    { day: 'Thursday', focus: 'Energy & Vitality', practices: ['Power Yoga', 'Pranayama', 'Chanting'] },
    { day: 'Friday', focus: 'Cooling & Calming', practices: ['Restorative Yoga', 'Meditation', 'Yoga Nidra'] },
    { day: 'Saturday', focus: 'Integration', practices: ['Mixed Practice', 'Self-reflection', 'Nature Walk'] },
    { day: 'Sunday', focus: 'Rest & Renewal', practices: ['Gentle Yoga', 'Meditation', 'Journaling'] }
  ];

  const progressStats = {
    currentStreak: 12,
    totalSessions: 45,
    weeklyGoal: 7,
    completed: 5,
    favoriteStyle: 'Hatha Yoga',
    totalMinutes: 680
  };

  const startPractice = (practiceId: string) => {
    alert(`Starting ${practiceId} practice...`);
    // Implement practice timer/video logic
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Yoga & Wellness</h2>
            <p className="text-gray-600">Personalized practices for your Vata-Pitta constitution</p>
          </div>
          <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
            🧘 Today's Focus: Balance & Calm
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{progressStats.currentStreak}</div>
            <p className="text-sm text-gray-600">Day Streak</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{progressStats.completed}/{progressStats.weeklyGoal}</div>
            <p className="text-sm text-gray-600">Weekly Goal</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{progressStats.totalSessions}</div>
            <p className="text-sm text-gray-600">Total Sessions</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{progressStats.totalMinutes}</div>
            <p className="text-sm text-gray-600">Minutes Practiced</p>
          </div>
        </div>

        {/* Today's Practice */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Today's Practice</h3>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-600">January 15, 2025</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {todayPractices.map((practice) => (
              <div key={practice.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-600">{practice.time}</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                      {practice.type}
                    </span>
                  </div>
                  <button
                    onClick={() => togglePracticeCompletion(practice.id)}
                    className={`${
                      completedPractices.includes(practice.id)
                        ? 'text-green-500'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {completedPractices.includes(practice.id) ? (
                      <CheckCircle size={20} />
                    ) : (
                      <Circle size={20} />
                    )}
                  </button>
                </div>

                <h4 className="text-lg font-semibold text-gray-800 mb-2">{practice.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{practice.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{practice.duration}</span>
                  </div>
                  <button
                    onClick={() => startPractice(practice.id)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center space-x-2"
                  >
                    <Play size={16} />
                    <span>Start</span>
                  </button>
                </div>

                <div className="text-sm">
                  <p className="text-gray-600 mb-2">Benefits:</p>
                  <p className="text-gray-700">{practice.benefits}</p>
                </div>

                {practice.poses && (
                  <div className="mt-3 pt-3 border-t">
                    <p className="text-xs text-gray-500 mb-1">Key Poses:</p>
                    <div className="flex flex-wrap gap-1">
                      {practice.poses.map((pose, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {pose}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Weekly Wellness Schedule</h3>
          <div className="grid md:grid-cols-7 gap-4">
            {weeklySchedule.map((day, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <h4 className="font-semibold text-gray-800 mb-2">{day.day}</h4>
                <p className="text-sm text-gray-600 mb-3">{day.focus}</p>
                <div className="space-y-1">
                  {day.practices.map((practice, practiceIndex) => (
                    <div key={practiceIndex} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                      {practice}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Library */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Practice Library</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧘‍♀️</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Vata-Balancing Yoga</h4>
              <p className="text-sm text-gray-600 mb-3">Grounding poses for stability</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                Explore
              </button>
            </div>

            <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌙</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Pitta-Cooling Practices</h4>
              <p className="text-sm text-gray-600 mb-3">Cooling poses and breathing</p>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
                Explore
              </button>
            </div>

            <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕉️</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation & Pranayama</h4>
              <p className="text-sm text-gray-600 mb-3">Breathing and mindfulness</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* Wellness Tips */}
        <div className="bg-purple-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Daily Wellness Tips</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <span className="text-purple-600 mt-1">🌅</span>
              <div>
                <h4 className="font-semibold text-gray-800">Morning Practice</h4>
                <p className="text-gray-700 text-sm">Start with gentle movement to awaken your body mindfully</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-purple-600 mt-1">🌙</span>
              <div>
                <h4 className="font-semibold text-gray-800">Evening Wind-Down</h4>
                <p className="text-gray-700 text-sm">Practice cooling poses to prepare for restful sleep</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-purple-600 mt-1">🧘</span>
              <div>
                <h4 className="font-semibold text-gray-800">Consistent Practice</h4>
                <p className="text-gray-700 text-sm">Even 10 minutes daily is more beneficial than longer irregular sessions</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-purple-600 mt-1">🌿</span>
              <div>
                <h4 className="font-semibold text-gray-800">Listen to Your Body</h4>
                <p className="text-gray-700 text-sm">Adjust practices based on your energy and constitution needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}