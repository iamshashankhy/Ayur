"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardLayout from '@/components/DashboardLayout';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { ArrowLeft, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';

const questions = [
  {
    id: 1,
    category: "physicalConstitution",
    question: "bodyBuildQuestion",
    options: [
      { text: "bodyBuildThin", dosha: "vata", points: 3 },
      { text: "bodyBuildMedium", dosha: "pitta", points: 3 },
      { text: "bodyBuildLarge", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 2,
    category: "digestion",
    question: "digestionQuestion",
    options: [
      { text: "digestionIrregular", dosha: "vata", points: 3 },
      { text: "digestionStrong", dosha: "pitta", points: 3 },
      { text: "digestionSlow", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 3,
    category: "mentalEmotional",
    question: "stressQuestion",
    options: [
      { text: "stressAnxious", dosha: "vata", points: 3 },
      { text: "stressIrritated", dosha: "pitta", points: 3 },
      { text: "stressCalm", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 4,
    category: "sleepPatterns",
    question: "sleepQuestion",
    options: [
      { text: "sleepLight", dosha: "vata", points: 3 },
      { text: "sleepModerate", dosha: "pitta", points: 3 },
      { text: "sleepDeep", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 5,
    category: "energyLevels",
    question: "energyQuestion",
    options: [
      { text: "energyBursts", dosha: "vata", points: 3 },
      { text: "energySteady", dosha: "pitta", points: 3 },
      { text: "energyLow", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 6,
    category: "healthTendencies",
    question: "healthIssuesQuestion",
    options: [
      { text: "healthVata", dosha: "vata", points: 3 },
      { text: "healthPitta", dosha: "pitta", points: 3 },
      { text: "healthKapha", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 7,
    category: "environmentalPreferences",
    question: "weatherQuestion",
    options: [
      { text: "weatherWarm", dosha: "vata", points: 3 },
      { text: "weatherCool", dosha: "pitta", points: 3 },
      { text: "weatherDry", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 8,
    category: "physicalCharacteristics",
    question: "skinQuestion",
    options: [
      { text: "skinDry", dosha: "vata", points: 3 },
      { text: "skinOily", dosha: "pitta", points: 3 },
      { text: "skinThick", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 9,
    category: "appetite",
    question: "appetiteQuestion",
    options: [
      { text: "appetiteVariable", dosha: "vata", points: 3 },
      { text: "appetiteStrong", dosha: "pitta", points: 3 },
      { text: "appetiteSteady", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 10,
    category: "learningStyle",
    question: "learningQuestion",
    options: [
      { text: "learningQuick", dosha: "vata", points: 3 },
      { text: "learningSharp", dosha: "pitta", points: 3 },
      { text: "learningSlow", dosha: "kapha", points: 3 }
    ]
  }
];

export default function HealthAssessment() {
  const { t } = useLanguage();
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('analyzingConstitution')}</h2>
            <p className="text-gray-600 mb-6">
              {t('analyzingDesc')}
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <p>✓ {t('evaluatingPatterns')}</p>
              <p>✓ {t('calculatingBalance')}</p>
              <p>✓ {t('generatingRecommendations')}</p>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('assessmentComplete')}</h2>
            <p className="text-gray-600 mb-6">
              {t('assessmentCompleteDesc')}
            </p>
            <div className="bg-green-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">{t('whatHappensNext')}</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• {t('aiAnalysis')}</li>
                <li>• {t('personalizedHealth')}</li>
                <li>• {t('customDiet')}</li>
                <li>• {t('wellnessTracking')}</li>
              </ul>
            </div>
            <button
              onClick={calculateResults}
              className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              {t('generateProfile')}
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
            <h2 className="text-2xl font-bold text-gray-800">{t('assessmentTitle')}</h2>
            <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              {currentQuestion + 1} {t('questionOf')} {questions.length}
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div 
              className="bg-green-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-sm text-gray-600">
            <span>{t(question.category)}</span>
            <span>{Math.round(progress)}% {t('complete')}</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            {t(question.question)}
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
                  <span className="text-gray-700">{t(option.text)}</span>
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
              <span>{t('previous')}</span>
            </button>

            <div className="text-sm text-gray-500">
              {currentAnswer ? t('clickNext') : t('selectOption')}
            </div>

            <button
              onClick={goNext}
              disabled={!currentAnswer}
              className="flex items-center space-x-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{currentQuestion === questions.length - 1 ? t('complete') : t('next')}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            {t('language') === 'kannada' ? 'ಹೆಚ್ಚಿನ ಸಮಯ ನಿಮ್ಮನ್ನು ಉತ್ತಮವಾಗಿ ವರ್ಣಿಸುವ ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ. ಸರಿ ಅಥವಾ ತಪ್ಪು ಉತ್ತರಗಳಿಲ್ಲ.' : 'Choose the option that best describes you most of the time. There are no right or wrong answers.'}
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}