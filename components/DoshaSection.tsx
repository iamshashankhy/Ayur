export default function DoshaSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🕉️</div>
        <div className="absolute top-20 right-20 text-4xl">🌿</div>
        <div className="absolute bottom-20 left-20 text-5xl">🧘‍♀️</div>
        <div className="absolute bottom-10 right-10 text-4xl">🌸</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6 shadow-lg">
            <span className="text-3xl text-white">🕉️</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Understand Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Dosha</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover the three fundamental energies that govern your body, mind, and consciousness. 
            Each dosha represents a unique combination of the five elements, creating your individual constitution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Vata Card */}
          <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 hover:border-purple-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">💨</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                Vata
              </h3>
              
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-2">
                  Air + Space
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Governs movement, breathing, and nervous system. Creative, energetic, and quick-thinking, 
                but prone to anxiety and irregularity when imbalanced.
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Movement & Circulation
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Nervous System
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Creativity & Communication
                </div>
              </div>
            </div>
          </div>

          {/* Pitta Card */}
          <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100 hover:border-orange-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">🔥</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
                Pitta
              </h3>
              
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 mb-2">
                  Fire + Water
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Controls digestion, metabolism, and transformation. Intelligent, focused, and driven, 
                but can become irritable and overheated when out of balance.
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Digestion & Metabolism
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Body Temperature
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Intelligence & Focus
                </div>
              </div>
            </div>
          </div>

          {/* Kapha Card */}
          <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100 hover:border-green-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">🌍</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                Kapha
              </h3>
              
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-2">
                  Earth + Water
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Provides structure, stability, and immunity. Calm, steady, and nurturing, 
                but may experience sluggishness and weight gain when imbalanced.
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Structure & Stability
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Immunity & Strength
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Emotional Balance
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Element */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Most people have a combination of doshas
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Your unique constitution is determined by the proportion of each dosha in your body and mind. 
            Understanding your dominant doshas helps create personalized wellness strategies.
          </p>
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
            <a href="/auth/signin" className="flex items-center space-x-2">
              <span>Discover Your Dosha Balance</span>
              <span className="text-xl">→</span>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}