"use client";

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Calendar, Clock, Utensils, Droplets, Plus, Check } from 'lucide-react';

export default function DietPlan() {
  const [selectedDay, setSelectedDay] = useState('today');
  const [waterIntake, setWaterIntake] = useState(6);
  const [completedMeals, setCompletedMeals] = useState<string[]>(['breakfast']);

  const toggleMealCompletion = (mealId: string) => {
    setCompletedMeals(prev => 
      prev.includes(mealId) 
        ? prev.filter(id => id !== mealId)
        : [...prev, mealId]
    );
  };

  const addWaterGlass = () => {
    setWaterIntake(prev => Math.min(prev + 1, 12));
  };

  const todayMeals = {
    breakfast: {
      id: 'breakfast',
      time: '7:00 AM',
      title: 'Warm Oatmeal Bowl',
      description: 'Steel-cut oats with cinnamon, almonds, and warm milk',
      calories: 320,
      doshaBalance: 'Vata-balancing',
      ingredients: ['Steel-cut oats', 'Cinnamon', 'Almonds', 'Warm milk', 'Honey'],
      benefits: 'Grounding and nourishing for Vata constitution'
    },
    lunch: {
      id: 'lunch',
      time: '12:30 PM',
      title: 'Quinoa Vegetable Bowl',
      description: 'Quinoa with roasted vegetables and cooling herbs',
      calories: 450,
      doshaBalance: 'Pitta-cooling',
      ingredients: ['Quinoa', 'Roasted vegetables', 'Cilantro', 'Cucumber', 'Coconut oil'],
      benefits: 'Cooling and satisfying for Pitta constitution'
    },
    snack: {
      id: 'snack',
      time: '4:00 PM',
      title: 'Herbal Tea & Dates',
      description: 'Chamomile tea with 2-3 Medjool dates',
      calories: 120,
      doshaBalance: 'Tri-doshic',
      ingredients: ['Chamomile tea', 'Medjool dates', 'Cardamom'],
      benefits: 'Calming and energizing afternoon boost'
    },
    dinner: {
      id: 'dinner',
      time: '7:00 PM',
      title: 'Mung Dal Soup',
      description: 'Split mung beans with digestive spices',
      calories: 280,
      doshaBalance: 'Tri-doshic',
      ingredients: ['Split mung beans', 'Turmeric', 'Cumin', 'Ginger', 'Ghee'],
      benefits: 'Easy to digest and deeply nourishing'
    }
  };

  const weeklyPlan = [
    { day: 'Monday', focus: 'Grounding Foods', theme: 'Vata Balance' },
    { day: 'Tuesday', focus: 'Cooling Foods', theme: 'Pitta Balance' },
    { day: 'Wednesday', focus: 'Light Foods', theme: 'Kapha Balance' },
    { day: 'Thursday', focus: 'Warming Spices', theme: 'Digestive Fire' },
    { day: 'Friday', focus: 'Fresh Fruits', theme: 'Detox Day' },
    { day: 'Saturday', focus: 'Comfort Foods', theme: 'Nourishment' },
    { day: 'Sunday', focus: 'Mindful Eating', theme: 'Reflection' }
  ];

  const nutritionTips = [
    "Eat your largest meal at lunch when digestive fire is strongest",
    "Include all six tastes in your daily diet",
    "Drink warm water throughout the day",
    "Avoid cold drinks and ice with meals",
    "Eat in a calm, peaceful environment"
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Personalized Diet Plan</h2>
            <p className="text-gray-600">Nutrition guidance based on your Vata-Pitta constitution</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
              🍂 Autumn Focus: Grounding Foods
            </div>
          </div>
        </div>

        {/* Today's Meals */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">Today's Meal Plan</h3>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-600">January 15, 2025</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.values(todayMeals).map((meal) => (
              <div key={meal.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-600">{meal.time}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      meal.doshaBalance.includes('Vata') ? 'bg-purple-100 text-purple-800' :
                      meal.doshaBalance.includes('Pitta') ? 'bg-orange-100 text-orange-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {meal.doshaBalance}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleMealCompletion(meal.id)}
                    className={`p-2 rounded-full ${
                      completedMeals.includes(meal.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                    }`}
                  >
                    <Check size={16} />
                  </button>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{meal.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{meal.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Calories:</span>
                    <span className="font-medium">{meal.calories}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Benefits:</span>
                    <p className="text-gray-700 mt-1">{meal.benefits}</p>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs text-gray-500 mb-1">Key Ingredients:</p>
                  <div className="flex flex-wrap gap-1">
                    {meal.ingredients.map((ingredient, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hydration Tracker */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">Daily Hydration</h3>
            <div className="flex items-center space-x-2">
              <Droplets className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-gray-600">{waterIntake}/8 glasses</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className={`w-8 h-10 rounded ${
                    index < waterIntake ? 'bg-blue-500' : 'bg-gray-200'
                  }`}
                ></div>
              ))}
            </div>
            <button
              onClick={addWaterGlass}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <p className="text-sm text-gray-600 mt-3">
            Drink warm water throughout the day to support digestion and balance Vata
          </p>
        </div>

        {/* Weekly Plan Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Weekly Focus Plan</h3>
          <div className="grid md:grid-cols-7 gap-4">
            {weeklyPlan.map((day, index) => (
              <div key={index} className="text-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h4 className="font-semibold text-gray-800 mb-2">{day.day}</h4>
                <p className="text-sm text-gray-600 mb-1">{day.focus}</p>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                  {day.theme}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Nutrition Guidelines */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Foods to Include */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Foods to Include</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">Warm, cooked foods</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">Sweet, sour, and salty tastes</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">Healthy fats (ghee, olive oil)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">Grounding grains (rice, oats)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">Cooling herbs (cilantro, mint)</span>
              </div>
            </div>
          </div>

          {/* Foods to Avoid */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Foods to Limit</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-red-500">×</span>
                <span className="text-gray-700">Cold drinks and ice</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500">×</span>
                <span className="text-gray-700">Excessive spicy foods</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500">×</span>
                <span className="text-gray-700">Raw foods in excess</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500">×</span>
                <span className="text-gray-700">Irregular meal times</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500">×</span>
                <span className="text-gray-700">Processed and packaged foods</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ayurvedic Nutrition Tips */}
        <div className="bg-green-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Ayurvedic Nutrition Tips</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {nutritionTips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-green-600 mt-1">💡</span>
                <p className="text-gray-700 text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}