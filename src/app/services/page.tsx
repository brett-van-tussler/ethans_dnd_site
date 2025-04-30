'use client';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-6xl font-cinzel font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-900 to-red-600">
        Services
      </h1>

      <div className="max-w-3xl mx-auto space-y-16">
        <section id="consultation">
          <div className="bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800/70 transition-colors">
            <h2 className="text-3xl font-cinzel font-bold mb-4 text-red-700">Free Consultation</h2>
            <p className="text-gray-300 mb-6">Begin your journey with a consultation to discuss your vision and requirements:</p>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>30-minute video call with an experienced Dungeon Master</li>
              <li>Discussion of your group's play style and preferences</li>
              <li>Overview of available campaign settings and themes</li>
              <li>Explanation of services and pricing options</li>
              <li>Opportunity to ask questions and address concerns</li>
            </ul>
            <div className="mt-6">
              <a href="/contact" className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-bold transition-colors">
                Book Free Consultation
              </a>
            </div>
          </div>
        </section>

        <section id="sessions">
          <div className="bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800/70 transition-colors">
            <h2 className="text-3xl font-cinzel font-bold mb-4 text-red-700">Sessions</h2>

            <div className="space-y-8">
              <div className="border border-red-800/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-3 text-red-600">Single Session Adventure</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>One-shot adventure</li>
                  <li>Pre-generated characters available, or a free character creation session</li>
                  <li>Perfect for trying out D&D or my DMing style</li>
                  <li>All necessary materials provided</li>
                </ul>
              </div>

              <div className="border border-red-800/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-3 text-red-600">Campaign Package</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Continuous storyline and character development</li>
                  <li>Custom-built world and campaign setting</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a href="/contact" className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full text-lg font-bold transition-colors">
                Schedule Your Session
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}