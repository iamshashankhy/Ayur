"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardLayout from '@/components/DashboardLayout';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

const questions = [
  {
    id: 1,
    category: "Physical Constitution",
    question: "How would you describe your body build?",
    options: [
      { text: "Thin, light frame, hard to gain weight", dosha: "vata", points: 3 },
      { text: "Medium build, moderate weight", dosha: "pitta", points: 3 },
      { text: "Large frame, easy to gain weight", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 2,
    category: "Digestion",
    question: "How is your digestion?",
    options: [
      { text: "Irregular, sometimes bloated, gas", dosha: "vata", points: 3 },
      { text: "Strong, can eat large meals, gets hungry", dosha: "pitta", points: 3 },
      { text: "Slow, feels heavy after eating", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 3,
    category: "Mental & Emotional",
    question: "How do you handle stress?",
    options: [
      { text: "Get anxious, worried, mind races", dosha: "vata", points: 3 },
      { text: "Get irritated, angry, impatient", dosha: "pitta", points: 3 },
      { text: "Remain calm, withdraw, get depressed", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 4,
    category: "Sleep Patterns",
    question: "What is your sleep pattern like?",
    options: [
      { text: "Light sleeper, difficulty falling asleep", dosha: "vata", points: 3 },
      { text: "Moderate sleep, wake up refreshed", dosha: "pitta", points: 3 },
      { text: "Deep sleeper, hard to wake up", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 5,
    category: "Energy Levels",
    question: "How is your energy level throughout the day?",
    options: [
      { text: "Comes in bursts, then crashes", dosha: "vata", points: 3 },
      { text: "Steady, high energy, focused", dosha: "pitta", points: 3 },
      { text: "Steady but low, need motivation", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 6,
    category: "Health Tendencies",
    question: "What health issues do you commonly face?",
    options: [
      { text: "Anxiety, insomnia, dry skin, constipation", dosha: "vata", points: 3 },
      { text: "Acidity, heartburn, skin rashes, anger", dosha: "pitta", points: 3 },
      { text: "Weight gain, congestion, lethargy, depression", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 7,
    category: "Environmental Preferences",
    question: "How do you prefer the weather?",
    options: [
      { text: "Warm, humid weather, dislike cold", dosha: "vata", points: 3 },
      { text: "Cool weather, dislike heat", dosha: "pitta", points: 3 },
      { text: "Warm, dry weather, dislike cold & damp", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 8,
    category: "Physical Characteristics",
    question: "How would you describe your skin?",
    options: [
      { text: "Dry, rough, thin", dosha: "vata", points: 3 },
      { text: "Oily, warm, prone to rashes", dosha: "pitta", points: 3 },
      { text: "Thick, oily, smooth", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 9,
    category: "Appetite",
    question: "How is your appetite?",
    options: [
      { text: "Variable, sometimes forget to eat", dosha: "vata", points: 3 },
      { text: "Strong, get irritable when hungry", dosha: "pitta", points: 3 },
      { text: "Steady, can skip meals easily", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 10,
    category: "Learning Style",
    question: "How do you learn best?",
    options: [
      { text: "Quick to learn, quick to forget", dosha: "vata", points: 3 },
      { text: "Sharp intellect, good retention", dosha: "pitta", points: 3 },
      { text: "Slow to learn, excellent retention", dosha: "kapha", points: 3 }
    ]
  }
];

export default function HealthAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: any}>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const router = useRouter();

  const handleAnswer = (questionId: number, option: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

  const goNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    setIsAnalyzing(true);
    
    // Simulate analysis time
    setTimeout(() => {
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
        completedAt: new Date().toISOString(),
        answers: answers
      }));

      // Redirect to dashboard
      router.push('/dashboard');
    }, 3000);
  };

  if (isAnalyzing) {
    return (
      <DashboardLayout>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="animate-spin w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Analyzing Your Constitution...</h2>
            <p className="text-gray-600 mb-6">
              Our AI is processing your responses using ancient Ayurvedic principles combined with modern analysis techniques.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <p>✓ Evaluating dosha patterns</p>
              <p>✓ Calculating constitutional balance</p>
              <p>✓ Generating personalized recommendations</p>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (isCompleted) {
    return (
      <DashboardLayout>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Assessment Complete!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for completing the comprehensive health assessment. We have gathered detailed information about your constitution, lifestyle, and health patterns.
            </p>
            <div className="bg-green-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">What happens next?</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• AI analysis of your Ayurvedic constitution</li>
                <li>• Personalized health recommendations</li>
                <li>• Custom diet and lifestyle plan</li>
                <li>• Wellness tracking dashboard</li>
              </ul>
            </div>
            <button
              onClick={calculateResults}
              className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              Generate My Health Profile
            </button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = answers[question.id];

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Ayurvedic Health Assessment</h2>
            <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div 
              className="bg-green-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-sm text-gray-600">
            <span>{question.category}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            {question.question}
          </h3>

          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(question.id, option)}
                className={`w-full text-left p-4 border-2 rounded-lg transition-all ${
                  currentAnswer?.text === option.text
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                    currentAnswer?.text === option.text
                      ? 'border-green-500 bg-green-500'
                      : 'border-gray-300'
                  }`}>
                    {currentAnswer?.text === option.text && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-gray-700">{option.text}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={goBack}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={16} />
              <span>Previous</span>
            </button>

            <div className="text-sm text-gray-500">
              {currentAnswer ? 'Click Next to continue' : 'Select an option to continue'}
            </div>

            <button
              onClick={goNext}
              disabled={!currentAnswer}
              className="flex items-center space-x-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Choose the option that best describes you most of the time. There are no right or wrong answers.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}