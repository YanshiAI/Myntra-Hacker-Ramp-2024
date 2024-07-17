import icon1 from "../../public/icon1.png";
import icon2 from "../../public/icon2.png";
import icon3 from "../../public/icon3.png";

const SellCloth2 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Sell your Cloth for 500₹</h1>

      <div className="relative mb-8">
        <button className="bg-green-500">Sell now</button>
      </div>

      <h2 className="text-2xl font-bold mb-6">Why Myntra?</h2>

      <h2 className="text-5xl font-bold mb-6 mt-8">Why Myntra?</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4  rounded-full">
              <img src={icon1} alt="" className="w-24" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Check Price</h3>
          <p className="text-gray-600 text-sm">
            Select your device & tell us about its current condition, and our
            advanced AI tech will tailor make the perfect price for you.
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4  rounded-full">
              <img src={icon2} alt="" className="w-24" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Schedule Pickup</h3>
          <p className="text-gray-600 text-sm">
            Book a free pickup from your home or work at a time slot that best
            suits your convenience.
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4  rounded-full">
              <img src={icon3} alt="" className="w-24" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
          <p className="text-gray-600 text-sm">
            Did we mention you get paid as soon as our executive picks up your
            device? Its instant payment all the way!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellCloth2;
