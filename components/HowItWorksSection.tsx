export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 px-6" style={{ backgroundColor: '#A7D5A7' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How it works</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Data Collection</h3>
            <p className="text-gray-600 leading-relaxed">
              User completes personalized questionnaire and connects wearable devices for comprehensive data collection.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">AI Analysis</h3>
            <p className="text-gray-600 leading-relaxed">
              Machine learning models analyze dosha patterns and identify potential health imbalances.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Risk Assessment</h3>
            <p className="text-gray-600 leading-relaxed">
              System identifies potential health risks and imbalances associated with inflammatory conditions.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full text-xl font-bold mb-4">
              4
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Personalized Recommendations</h3>
            <p className="text-gray-600 leading-relaxed">
              Dynamic suggestions for diet, lifestyle, yoga, and meditation practices based on current dosha status.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}