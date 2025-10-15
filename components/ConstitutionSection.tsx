export default function ConstitutionSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6" style={{ backgroundColor: '#A7D5A7' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
          Discover Your Ayurvedic Constitution
        </h2>
        <p className="text-center text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          AI-powered dosha analysis for personalized wellness and preventive 
          healthcare
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Personalized Analysis</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Get insights into your unique Vata, Pitta, and
              Kapha balance
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Preventive Care</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Early detection insights for optimal health
              maintenance
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Holistic Wellness</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Comprehensive lifestyle and dietary
              recommendations
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-green-600 text-white px-6 sm:px-8 py-3 rounded-md hover:bg-green-700 transition-all font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
            <a href="/auth/signin" className="block">Start your Analysis</a>
          </button>
        </div>
      </div>
    </section>
  );
}