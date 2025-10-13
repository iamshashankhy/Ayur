export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-6 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            The Science Behind Doshas
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ayurveda, the ancient Indian system of medicine, recognizes three fundamental energies or doshas that govern all 
            biological, psychological, and physiological functions of the body, mind, and consciousness. These doshas are 
            Vata, Pitta, and Kapha, each with their own unique combination of the five elements and their governing diseases.
          </p>
        </div>

        <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            AI-Enhanced Analysis
          </h3>
          <p className="text-gray-600 max-w-4xl mx-auto text-center leading-relaxed mb-8">
            Our platform combines traditional Ayurvedic wisdom with modern AI algorithms to provide personalized insights into 
            your constitution and health tendencies.
          </p>
        </div>

        <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Preventive Healthcare
          </h3>
          <p className="text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
            Through our comprehensive analysis, you can make informed lifestyle choices that support your natural constitution and 
            promote long-term wellness.
          </p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-bold text-red-800 mb-2">Important Disclaimer</h4>
          <p className="text-red-700 text-sm leading-relaxed">
            This system is for educational purposes only and is not intended to replace professional medical advice. 
            Always consult with qualified healthcare professionals for medical decisions. The Ayurvedic 
            analysis provided here is based on traditional Ayurvedic principles and should be used as a complementary tool 
            for wellness, not as a substitute for professional medical care.
          </p>
        </div>
      </div>
    </section>
  );
}