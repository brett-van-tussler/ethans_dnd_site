import Image from "next/image";

export default function Home() {
  return (
    <div 
      className="min-h-screen text-white"
      style={{
        backgroundImage: 'url("/images/background_wizard.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
    >
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }} 
      />
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-6xl sm:text-6xl font-bold mb-6" 
                      style={{
                        background: 'linear-gradient(90deg, #7f1d1d 0%, #991b1b 40%, #7e22ce 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                    Epic Adventures Await
                  </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional Dungeon Master crafting unforgettable campaigns and immersive storytelling experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Campaign Creation</h2>
            <p className="text-gray-300">Custom-crafted adventures tailored to your party's preferences and play style</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Professional DMing</h2>
            <p className="text-gray-300">Experienced storytelling and rule management for seamless gameplay sessions</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-red-700">World Building</h2>
            <p className="text-gray-300">Rich, detailed universes with deep lore and engaging characters</p>
          </div>
        </div>

        <div className="text-center">
          <a href="/services" className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full text-lg font-bold transition-colors">
            Begin Your Journey
          </a>
        </div>
      </main>
    </div>
  );
}
