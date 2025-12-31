import { Coffee, HeartHandshake, Hand, Star } from "lucide-react";

export default function CoffeeTeaCulture() {
  return (
    <section className="py-20 bg-linear-to-br from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-14">
          Arabic Coffee & Tea Culture
        </h2>

        {/* Cultural Significance */}
        <div className="bg-white rounded-3xl shadow-lg p-10 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Coffee className="w-8 h-8 text-amber-700" />
            <h3 className="text-2xl font-semibold text-amber-900">
              Cultural Significance
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg">
            Arabic coffee and tea culture is deeply rooted in tradition and
            hospitality. Serving coffee and tea is a symbol of respect,
            generosity, and friendship. In many Arab countries, it plays an
            essential role in social gatherings, business meetings, and family
            reunions.
          </p>
        </div>

        {/* Etiquette Cards */}
        <div>
          <h3 className="text-3xl font-semibold text-center text-amber-900 mb-10">
            Etiquette
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <HeartHandshake className="w-10 h-10 text-amber-700 mb-4" />
              <h4 className="font-semibold text-lg mb-2">Respect for Elders</h4>
              <p className="text-gray-600 text-sm">
                Elders are always served first as a sign of respect and honor.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <Hand className="w-10 h-10 text-amber-700 mb-4" />
              <h4 className="font-semibold text-lg mb-2">
                Using the Right Hand
              </h4>
              <p className="text-gray-600 text-sm">
                Tea or coffee is served and received with the right hand.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <Coffee className="w-10 h-10 text-amber-700 mb-4" />
              <h4 className="font-semibold text-lg mb-2">
                Not Finishing the Cup
              </h4>
              <p className="text-gray-600 text-sm">
                Leaving a little implies satisfaction and politeness.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <Star className="w-10 h-10 text-amber-700 mb-4" />
              <h4 className="font-semibold text-lg mb-2">
                Showing Appreciation
              </h4>
              <p className="text-gray-600 text-sm">
                Always thank the host for serving tea or coffee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
