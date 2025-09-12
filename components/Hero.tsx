export default function Hero() {
  return (
    <section className="relative h-96 bg-gradient-to-r from-amber-900 to-amber-800">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5938435/pexels-photo-5938435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionize your Health<br />
            with wellness & intelligence
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Personalized diet, lifestyle and wellness powered by<br />
            Artificial intelligence
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors font-medium text-lg">
            <a href="/health-analysis">Start with Health Analysis</a>
          </button>
        </div>
      </div>
    </section>
  );
}