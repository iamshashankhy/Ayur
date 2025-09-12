"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardLayout from '@/components/DashboardLayout';

const questions = [
  {
    id: 1,
    question: "How would you describe your body build?",
    options: [
      { text: "Thin, light frame, hard to gain weight", dosha: "vata", points: 3 },
      { text: "Medium build, moderate weight", dosha: "pitta", points: 3 },
      { text: "Large frame, easy to gain weight", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 2,
    question: "How is your digestion?",
    options: [
      { text: "Irregular, sometimes bloated, gas", dosha: "vata", points: 3 },
      { text: "Strong, can eat large meals, gets hungry", dosha: "pitta", points: 3 },
      { text: "Slow, feels heavy after eating", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 3,
    question: "How do you handle stress?",
    options: [
      { text: "Get anxious, worried, mind races", dosha: "vata", points: 3 },
      { text: "Get irritated, angry, impatient", dosha: "pitta", points: 3 },
      { text: "Remain calm, withdraw, get depressed", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 4,
    question: "What is your sleep pattern like?",
    options: [
      { text: "Light sleeper, difficulty falling asleep", dosha: "vata", points: 3 },
      { text: "Moderate sleep, wake up refreshed", dosha: "pitta", points: 3 },
      { text: "Deep sleeper, hard to wake up", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 5,
    question: "How is your energy level throughout the day?",
    options: [
      { text: "Comes in bursts, then crashes", dosha: "vata", points: 3 },
      { text: "Steady, high energy, focused", dosha: "pitta", points: 3 },
      { text: "Steady but low, need motivation", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 6,
    question: "What health issues do you commonly face?",
    options: [
      { text: "Anxiety, insomnia, dry skin, constipation", dosha: "vata", points: 3 },
      { text: "Acidity, heartburn, skin rashes, anger", dosha: "pitta", points: 3 },
      { text: "Weight gain, congestion, lethargy, depression", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 7,
    question: "How do you prefer the weather?",
    options: [
      { text: "Warm, humid weather, dislike cold", dosha: "vata", points: 3 },
      { text: "Cool weather, dislike heat", dosha: "pitta", points: 3 },
      { text: "Warm, dry weather, dislike cold & damp", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 8,
    question: "How would you describe your skin?",
    options: [
      { text: "Dry, rough, thin", dosha: "vata", points: 3 },
      { text: "Oily, warm, prone to rashes", dosha: "pitta", points: 3 },
      { text: "Thick, oily, smooth", dosha: "kapha", points: 3 }
    ]
  }
];

export default function HealthAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: any}>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const router = useRouter();

  const handleAnswer = (questionId: number, option: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const calculateResults = () => {
    const scores = { vata: 0, pitta: 0, kapha: 0 };
    
    Object.values(answers).forEach((answer: any) => {
      scores[answer.dosha as keyof typeof scores] += answer.points;
    });

    const total = scores.vata + scores.pitta + scores.kapha;
    const percentages = {
      vata: Math.round((scores.vata / total) * 100),
      pitta: Math.round((scores.pitta / total) * 100),
      kapha: Math.round((scores.kapha / total) * 100)
    };

    // Determine primary dosha
    const primaryDosha = Object.entries(scores).reduce((a, b) => 
      scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores] ? a : b
    )[0];

    // Store results in localStorage for the dashboard
    localStorage.setItem('assessmentResults', JSON.stringify({
      percentages,
      primaryDosha,
      completedAt: new Date().toISOString()
    }));

    // Redirect to dashboard
    router.push('/dashboard');
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  if (isCompleted) {
    return (
      <DashboardLayout>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Assessment Complete!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for completing the health assessment. We're analyzing your responses 
              to determine your Ayurvedic constitution.
            </p>
            <button
              onClick={calculateResults}
              className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              View My Results
            </button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-gray-800">Health Assessment</h2>
            <span className="text-sm text-gray-600">
              {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            {question.question}
          </h3>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(question.id, option)}
                className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-4 h-4 border border-gray-300 rounded-full mr-3"></div>
                  <span className="text-gray-700">{option.text}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={goBack}
              disabled={currentQuestion === 0}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>
            <span className="text-sm text-gray-500">
              Select an option to continue
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}