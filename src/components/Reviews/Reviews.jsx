import star from "../../assets/icons/star.svg";

const Reviews = () => {
  const data = [
    { label: "Excellent", value: 100 },
    { label: "Good", value: 11 },
    { label: "Average", value: 3 },
    { label: "Below Average", value: 8 },
    { label: "Poor", value: 1 },
  ];

  const rating = 4.8;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white">
      <h2 className="text-2xl font-bold mb-6">Reviews</h2>
      <div className="flex items-center mb-6 space-x-6">
        <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-center items-center shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300">
          <span className="text-5xl font-bold text-black">{rating}</span>
          <span className="text-sm text-gray-700 mt-1">of 125 reviews</span>
          <div className="flex mt-3 text-yellow-500">
            {Array.from({ length: 5 }, (_, i) => (
              <img
                key={i}
                src={star}
                alt={`${i + 1 <= Math.round(rating) ? "Filled" : "Empty"} Star`}
                className={`w-5 h-5 ${i < Math.round(rating) ? "text-yellow-600" : "text-gray-300"}`}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 space-y-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 hover:bg-gray-100 hover:shadow-md rounded-lg transition-all duration-300"
            >
              <span className="w-28 text-sm font-medium text-black">
                {item.label}
              </span>
              <div className="flex-1 h-3 bg-gray-200 rounded-full relative overflow-hidden">
                <div
                  className="h-full bg-yellow-500 rounded-full"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-500">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-700"
          rows="3"
          placeholder="Leave Comment"
        ></textarea>
      </div>
    </div>
  );
}

export default Reviews;
