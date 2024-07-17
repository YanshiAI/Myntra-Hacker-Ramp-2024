import { useState } from "react";

const ClothInfoForm = () => {
  const [type, setType] = useState("Tops");
  const [condition, setCondition] = useState("Good");
  const [style, setStyle] = useState(["Formal", "Festival"]);
  const [material, setMaterial] = useState("Wool");

  const handleStyleChange = (value) => {
    if (style.includes(value)) {
      setStyle(style.filter((item) => item !== value));
    } else {
      setStyle([...style, value]);
    }
  };
  console.log(type);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Tell us more about your Cloth</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">
          1. What is type of your Cloth?
        </h3>
        <div className="flex space-x-4">
          {["Tops", "Bottoms", "Dresses"].map((option) => (
            <label
              key={option}
              className="flex items-center justify-center px-4 py-2 bg-white border rounded-md shadow-sm cursor-pointer"
            >
              <input
                type="radio"
                name="type"
                value={option}
                checked={type === option}
                onChange={() => setType(option)}
                className="sr-only"
              />
              <span
                className={`${
                  type === option ? "text-blue-600 " : "text-gray-700"
                }`}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">
          2. What is style of your Cloth?
        </h3>
        <div className="flex space-x-4">
          {["Casual", "Formal", "Western", "Festival"].map((option) => (
            <label
              key={option}
              className="flex items-center justify-center px-4 py-2 bg-white border rounded-md shadow-sm cursor-pointer"
            >
              <input
                type="checkbox"
                name="style"
                value={option}
                checked={style.includes(option)}
                onChange={() => handleStyleChange(option)}
                className="sr-only"
              />
              <span
                className={`${
                  style.includes(option) ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          3. What is material of your Cloth?
        </h3>
        <div className="flex space-x-4">
          {["Cotton", "Polyster", "Wool", "Silk"].map((option) => (
            <label
              key={option}
              className="flex items-center justify-center px-4 py-2 bg-white border rounded-md shadow-sm cursor-pointer"
            >
              <input
                type="radio"
                name="material"
                value={option}
                checked={material === option}
                onChange={() => setMaterial(option)}
                className="sr-only"
              />
              <span
                className={`${
                  material === option ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">
          1. What is condition of your item?
        </h3>
        <div className="flex space-x-4">
          {["Like New", "Good", "Fair"].map((option) => (
            <label
              key={option}
              className="flex items-center justify-center px-4 py-2 bg-white border rounded-md shadow-sm cursor-pointer"
            >
              <input
                type="radio"
                name="type"
                value={option}
                checked={condition === option}
                onChange={() => setCondition(option)}
                className="sr-only"
              />
              <span
                className={`${
                  condition === option ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">
          2. What is Wear/Tear condition of Your Cloth? (More than one might be
          correct)
        </h3>
        <div className="flex space-x-4">
          {["Holes", "Stains", "Fading"].map((option) => (
            <label
              key={option}
              className="flex items-center justify-center px-4 py-2 bg-white border rounded-md shadow-sm cursor-pointer"
            >
              <input
                type="checkbox"
                name="style"
                value={option}
                checked={style.includes(option)}
                onChange={() => handleStyleChange(option)}
                className="sr-only"
              />
              <span
                className={`${
                  style.includes(option) ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          3. What is age of your Cloth?
        </h3>
        <div className="flex space-x-4">
          {["Less than 1 years", "1 to 3 years", "More than 3 years"].map(
            (option) => (
              <label
                key={option}
                className="flex items-center justify-center px-4 py-2 bg-white border rounded-md shadow-sm cursor-pointer"
              >
                <input
                  type="radio"
                  name="material"
                  value={option}
                  checked={material === option}
                  onChange={() => setMaterial(option)}
                  className="sr-only"
                />
                <span
                  className={`${
                    material === option ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {option}
                </span>
              </label>
            )
          )}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">
          1. What is size of your Cloth?
        </h3>
        <div className="flex space-x-4">
          {["XS", "S", "M", "L", "XL"].map((option) => (
            <label
              key={option}
              className="flex items-center justify-center px-4 py-2 bg-white border rounded-md shadow-sm cursor-pointer"
            >
              <input
                type="radio"
                name="type"
                value={option}
                checked={type === option}
                onChange={() => setType(option)}
                className="sr-only"
              />
              <span
                className={`${
                  type === option ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">
          1. What is fit type of your Cloth?
        </h3>
        <div className="flex space-x-4">
          {["Slim-Fit", "Regular-Fit", "Oversized"].map((option) => (
            <label
              key={option}
              className="flex items-center justify-center px-4 py-2 bg-white border rounded-md shadow-sm cursor-pointer"
            >
              <input
                type="radio"
                name="type"
                value={option}
                checked={type === option}
                onChange={() => setType(option)}
                className="sr-only"
              />
              <span
                className={`${
                  type === option ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClothInfoForm;
