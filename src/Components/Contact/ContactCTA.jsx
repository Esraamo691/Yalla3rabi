import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your Arabic Journey?
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Have a question or ready to begin your Arabic journey? Reach out today
          and let’s build your learning path together.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 px-10 py-3 btn2 rounded-full text-white font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
