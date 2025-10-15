export default function ConstitutionSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-8 shadow-2xl">
            <span className="text-4xl text-white">🧬</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Discover Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Ayurvedic Constitution
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Unlock the secrets of your unique body-mind constitution through AI-powered dosha analysis. 
            Get personalized insights for optimal wellness and preventive healthcare.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Scientifically Backed</span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>AI-Powered Analysis</span>
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span>Personalized Results</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Personalized Analysis Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-indigo-100 hover:border-indigo-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full -translate-y-20 translate-x-20 opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-3xl text-white">🎯</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors">
                Personalized Analysis
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Get deep insights into your unique Vata, Pitta, and Kapha balance through our comprehensive assessment system.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-indigo-600">📊</span>
                  </div>
                  <span className="text-sm">Detailed Dosha Percentages</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-indigo-600">🧠</span>
                  </div>
                  <span className="text-sm">AI-Powered Insights</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-indigo-600">📈</span>
                  </div>
                  <span className="text-sm">Progress Tracking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Preventive Care Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-green-100 hover:border-green-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full -translate-y-20 translate-x-20 opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-3xl text-white">🛡️</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                Preventive Care
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Early detection insights and personalized recommendations for optimal health maintenance and disease prevention.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-green-600">⚡</span>
                  </div>
                  <span className="text-sm">Early Risk Detection</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-green-600">🎯</span>
                  </div>
                  <span className="text-sm">Targeted Interventions</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-green-600">📅</span>
                  </div>
                  <span className="text-sm">Health Monitoring</span>
                </div>
              </div>
            </div>
          </div>

          {/* Holistic Wellness Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-purple-100 hover:border-purple-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-20 translate-x-20 opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-3xl text-white">🌸</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                Holistic Wellness
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Comprehensive lifestyle and dietary recommendations tailored to your constitution for complete mind-body wellness.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-purple-600">🍽️</span>
                  </div>
                  <span className="text-sm">Personalized Diet Plans</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-purple-600">🧘</span>
                  </div>
                  <span className="text-sm">Yoga & Meditation</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-purple-600">🌿</span>
                  </div>
                  <span className="text-sm">Lifestyle Guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Start Your Wellness Journey
              </h3>
            </div>
            
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands who have discovered their Ayurvedic constitution and transformed their health. 
              Get your personalized analysis in just 10 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                <span>Free Assessment</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                <span>Instant Results</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span>Personalized Plan</span>
              </div>
            </div>
            
            <button className="bg-white text-gray-800 px-10 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105">
              <a href="/auth/signin" className="flex items-center space-x-3">
                <span>Start Your Analysis</span>
                <span className="text-2xl">✨</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}