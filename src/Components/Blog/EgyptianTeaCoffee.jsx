import coffetea from "../../assets/cof4.jpg";
import egImg from "../../assets/eg2.jpg";
import egImg2 from "../../assets/eg3.jpg";
export default function EgyptianTeaCoffee() {
  return (
    <section className="bg-linear-to-b from-amber-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:space-y-32 space-y-16">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-amber-900 mb-6">
            Tea & Coffee in Egyptian Traditions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            More than drinks — tea and coffee are woven into the heart of
            Egyptian daily life, traditions, and social connections.
          </p>
        </div>

        {/* Section 1 */}
        <div className="grid lg:grid-cols-2  lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-6 ">
            <h3 className="text-3xl font-semibold text-amber-900">
              Traditions & Rituals
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">Ramadan:</span> Tea and coffee are
              traditionally served after sunset, helping Egyptians break their
              fast and gather with family.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">Funerals:</span> Served as a quiet
              gesture of comfort, tea and coffee offer warmth and solace to
              mourners.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="h-96 rounded-3xl  flex items-center justify-center text-amber-700 text-lg font-medium">
            <img src={egImg} className="w-full rounded-3xl" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center lg:flex-row-reverse">
          {/* Image */}
          <div className="h-96 rounded-3xl  flex items-center justify-center text-amber-700 text-lg font-medium">
            <img src={coffetea} className="w-full rounded-3xl" />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-amber-900">
              Tea & Coffee Culture
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">Hospitality:</span> Offering tea
              or coffee is a fundamental sign of respect and generosity in
              Egypt.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">Social gatherings:</span> These
              drinks spark conversation and strengthen community bonds.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">Traditional cafés:</span> Historic
              spots like Café Fishawi and Café el-Borsa remain iconic meeting
              places across generations.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-amber-900">
              Daily Egyptian Life
            </h3>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">Morning routine:</span> Many
              Egyptians begin their day with tea or coffee — tea with milk and
              sugar or coffee flavored with cardamom.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">Afternoon tea:</span> Shared with
              sweet and savory pastries during relaxed gatherings.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">Work breaks:</span> Short pauses
              at work to enjoy tea or coffee are part of daily rhythm.
            </p>
          </div>

          {/* Image */}
          <div className="h-96 rounded-3xl  flex items-center justify-center text-amber-700 text-lg font-medium">
            <img src={egImg2} className="w-full  rounded-3xl" />
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-amber-900 text-white rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-semibold mb-6">Conclusion</h3>
          <p className="max-w-4xl mx-auto leading-relaxed text-lg text-amber-100">
            Arabic tea and coffee culture is a vibrant and essential part of
            Egyptian life. These drinks bring people together, strengthen social
            bonds, and symbolize hospitality and respect. Whether you are a tea
            or coffee lover, experiencing this tradition in Egypt is truly
            unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
}
