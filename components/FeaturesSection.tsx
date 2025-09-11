export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 px-6" style={{ backgroundColor: '#A7D5A7' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Features</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">AI-based Dosha Classification</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Uses machine learning models to identify individual Ayurvedic body constitution through questionnaires and real-time wearable data.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Real-Time Health Monitoring</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Continuously tracks physiological parameters like heart rate, sleep, and stress via IoT and wearable devices.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Cancer Risk Prediction</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Identifies prolonged dosha imbalances associated with inflammatory conditions and early cancer risk indicators.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Personalized Wellness Recommendations</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Provides dynamic, tailored advice on diet, yoga, meditation, and lifestyle practices based on current dosha status.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}