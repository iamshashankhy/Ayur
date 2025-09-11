export default function ConstitutionSection() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#A7D5A7' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Discover Your Ayurvedic Constitution
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          AI-powered dosha analysis for personalized wellness and preventive 
          healthcare
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Personalized Analysis</h3>
            <p className="text-gray-600 leading-relaxed">
              Get insights into your unique Vata, Pitta, and
              Kapha balance
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Preventive Care</h3>
            <p className="text-gray-600 leading-relaxed">
              Early detection insights for optimal health
              maintenance
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Holistic Wellness</h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive lifestyle and dietary
              recommendations
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors font-medium text-lg">
            Start your Analysis
          </button>
        </div>
      </div>
    </section>
  );
}