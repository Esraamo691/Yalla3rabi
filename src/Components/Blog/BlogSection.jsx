import { Link } from "react-router-dom";
import imageTea from "../../assets/tea1.png";
export default function BlogSection() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-900 mb-4">
            The Arabic Coffee and Tea Culture
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            In the Arab world, coffee and tea are more than just beverages –
            they’re an integral part of the culture and tradition. For
            centuries, Arabs have welcomed guests with a steaming cup of coffee
            or tea, symbolizing hospitality, respect, and generosity.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 rounded-full bg-orange-900 text-white font-semibold hover:bg-orange-800 transition"
          >
            Explore the Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
