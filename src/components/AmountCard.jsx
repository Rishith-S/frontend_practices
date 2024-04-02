// eslint-disable-next-line react/prop-types
function AmountCard({ text, amount, orders, warning }) {
  return (
    <div className="flex flex-col">
      <div className={warning ? "bg-blue-1200 hover:bg-blue-700  rounded-tl-md rounded-tr-md shadow-3xl p-6 text-white" : "bg-white rounded shadow-3xl p-6" }>
        <div className={warning ? "flex gap-2 text-white": "flex gap-2 text-gray-600 mb-4"}>
          {text}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
        <div className="flex justify-between mt-4">
          <div className="text-3xl font-medium">₹ {amount}</div>
          {orders && (
            <div className={warning ? "flex text-white underline justify-center pt-2" : "flex text-blue-700 underline justify-center pt-2"}>
              <div>{orders} orders</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      {
        warning && 
        <div className="flex justify-between p-2 bg-blue-900 rounded-bl-md rounded-br-md text-white">
            <div>
            {warning[0]}
            </div>
            <div>
            {warning[1]}
            </div>
        </div>
      }
    </div>
  );
}

export default AmountCard;
