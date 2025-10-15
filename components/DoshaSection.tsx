export default function DoshaSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6" style={{ backgroundColor: '#A7D5A7' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
          Understand Your Dosha
        </h2>
        <p className="text-center text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Vata is characterized by the elements of air and space governing
          movement and communication
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">Vata</h3>
            <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base">
              Vata is characterized by the elements of air and ether,
              governing movement and flexibility in the
              body and mind.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">Pitta</h3>
            <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base">
              Pitta is characterized by the elements of fire and water,
              digestion, metabolism in the
              body and mind.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">Kapha</h3>
            <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base">
              Kapha is characterized by the elements of earth and water,
              bringing stability, strength, and
              calmness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}