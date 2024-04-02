/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
function Table({ rows }) {
  return (
    <div className="bg-white pt-1 pl-0 ml-2 mt-4 mr-2 rounded-lg">
      <div className="sm:flex mt-6 justify-between pl-4">
        <div className="inline-flex w-3/4 border-2 border-solid p-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mt-1 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            className="w-[20rem] focus:outline-none"
            placeholder="Order ID or Transaction ID"
          ></input>
        </div>
        <div className="flex gap-2 mt-2 sm:mr-8">
          <div className="flex border-2 border-solid p-2 rounded-md">
            <div className="text-md">Sort</div>
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
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>
          <div className="flex border-2 border-solid p-2 rounded-md">
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
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto mt-4 p-6">
        <table className="w-full text-sm text-left">
          <thead className="text-xsuppercase">
            <tr>
              <th scope="col" className="px-6 py-3 text-md font-medium">
                ORDER ID
              </th>
              <th scope="col" className="px-6 py-3 text-md font-medium">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3 text-md font-medium">
                TRANSACTION ID
              </th>
              <th scope="col" className="px-6 py-3 text-md font-medium">
                REFUND DATE
              </th>
              <th 
                scope="col"
                className="px-6 py-3 text-md font-medium text-right"
              >
                ORDER AMOUNT
              </th>
            </tr>
          </thead>

          {rows &&
            rows.map((row) => (
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 text-md font-medium text-blue-700">
                    {row[0]}
                  </td>
                  <td className="px-6 py-4 flex gap-1">
                    <div
                      className={`p-1 rounded-full w-1 h-1 mt-2 ${
                        row[1] === "Successful"
                          ? "bg-green-500"
                          : row[1] === "Processing"
                          ? "bg-gray-500"
                          : "bg-red-500"
                      }`}
                    ></div>
                    {row[1]}
                  </td>
                  <td className="px-6 py-4">{row[2]}</td>
                  <td className="px-6 py-4">{row[3]}</td>
                  <td className="px-6 py-4 text-right">{row[4]}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
}

export default Table;
