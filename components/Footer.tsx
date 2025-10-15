export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="/" className="hover:text-gray-900">Home</a></li>
              <li><a href="/about" className="hover:text-gray-900">Analysis</a></li>
              <li><a href="/about" className="hover:text-gray-900">About</a></li>
              <li><a href="/contact" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#" className="hover:text-gray-900">Ayurveda Research</a></li>
              <li><a href="#" className="hover:text-gray-900">Health Guidelines</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">🕉</span>
              </div>
              <span className="text-gray-800 font-semibold">AyurInsights</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Bridging ancient wisdom with modern technology for personalized wellness.
            </p>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-gray-300">
          <p className="text-sm text-gray-700">
            © 2025 AyurInsights. All rights reserved. For educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}