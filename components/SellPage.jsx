import image1 from "../../public/image1.png";
import icon1 from "../../public/icon1.png";
import icon2 from "../../public/icon2.png";
import icon3 from "../../public/icon3.png";
import smooth from "../../public/Smooth-Wall.png";
const SellClothes = () => {
  return (
    <div className="p-12 ">
      <div className="flex justify-between flex-row ">
        <img src={smooth} alt="" className="h-80 w-7/12" />
        {/* <div className="flex justify-between flex-col absolute inset-0  items-center  bg-black bg-opacity-10">
          <h1 className="text-4xl font-bold pt-8">
            Sell your Cloths for Instant Cash
          </h1>
          <div className="flex space-x-4 mb-6">
            <span className="flex items-center text-green-600">
              <FaCheckCircle className="mr-1" /> Maximum Value
            </span>
            <span className="flex items-center text-green-600">
              <FaLeaf className="mr-1" /> Eco Friendly
            </span>
            <span className="flex items-center text-green-600">
              <FaTruck className="mr-1" /> Free Doorstep Pickup
            </span>
          </div> */}

        {/* <div className="relative mb-8">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search your Cloth Brand to sell"
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
          </div> */}
        {/* </div> */}

        <img src={image1} alt="" className="w-5/12 h-80" />
      </div>

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

export default SellClothes;
