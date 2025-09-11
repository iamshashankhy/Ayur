export default function DoshaSection() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#A7D5A7' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Understand Your Dosha
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Vata is characterized by the elements of air and space governing
          movement and communication
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Vata</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Vata is characterized by the elements of air and ether,
              governing movement and flexibility in the
              body and mind.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Pitta</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Pitta is characterized by the elements of fire and water,
              digestion, metabolism in the
              body and mind.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Kapha</h3>
            <p className="text-gray-600 text-center leading-relaxed">
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