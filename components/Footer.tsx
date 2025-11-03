export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <div>
            <h4 className="font-bold text-green-800 mb-3 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base text-green-700">
              <li><a href="/" className="hover:text-green-900 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-green-900 transition-colors">Analysis</a></li>
              <li><a href="/about" className="hover:text-green-900 transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-green-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-green-800 mb-3 text-base sm:text-lg">Resources</h4>
            <ul className="space-y-2 text-sm sm:text-base text-green-700">
              <li><a href="#" className="hover:text-green-900 transition-colors">Ayurveda Research</a></li>
              <li><a href="#" className="hover:text-green-900 transition-colors">Health Guidelines</a></li>
              <li><a href="#" className="hover:text-green-900 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">🕉</span>
              </div>
              <span className="text-green-800 font-semibold text-lg">AyurInsights</span>
            </div>
            <p className="text-green-700 text-sm sm:text-base leading-relaxed">
              Bridging ancient wisdom with modern technology for personalized wellness.
            </p>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-green-200">
          <p className="text-sm sm:text-base text-green-700">
            © 2025 AyurInsights. All rights reserved. For educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}