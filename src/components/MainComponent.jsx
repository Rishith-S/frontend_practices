import AmountCard from "./AmountCard";
import Table from "./Table";
function MainComponent() {
  return (
    <div className="bg-gray-1200">
      <div className="flex justify-between p-6">
        <div className="text-xl font-semibold  sm:col-span-8">Overview</div>
        <div className="flex border-solid border-2 p-2 rounded-lg justify-end">
          This Month
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mt-1 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-6 pr-6 pb-6 gap-4">
        <AmountCard
          text={"Next payout"}
          amount={"2,312.23"}
          orders={23}
          warning={["Next payout date:", "Today,04:00 PM"]}
        />
        <AmountCard text={"Amount Pending"} amount={"92,312.20"} orders={13} />
        <AmountCard text={"Amount Processed"} amount={"23,92,312.19"} />
      </div>
      <div className="pl-6 ">
        <div className="text-xl font-semibold mb-6">
          Transactions | This Month
        </div>
        <div className="flex">
          <div className="flex justify-center pt-1 bg-gray-200 rounded-full text-gray-700 text-sm w-[7rem] h-[2rem]">
            Payouts (22)
          </div>
          <div className="flex justify-center pt-1 bg-blue-700 text-white rounded-full ml-2 text-sm w-[7rem] h-[2rem]">
            Refunds (6)
          </div>
        </div>
      </div>
      <Table
        rows={[
          [
            "#231456",
            "Successful",
            "1234567890",
            "Today, 08:45 PM",
            "₹1,125.00",
          ],
          [
            "#231456",
            "Processing",
            "1234567890",
            "Today, 08:45 PM",
            "₹1,125.00",
          ],
          ["#231456", "Failed", "1234567890", "Today, 08:45 PM", "₹1,125.00"],
          [
            "#231456",
            "Successful",
            "1234567890",
            "Today, 08:45 PM",
            "₹1,125.00",
          ],
          [
            "#231456",
            "Successful",
            "1234567890",
            "Today, 08:45 PM",
            "₹1,125.00",
          ],
          [
            "#231456",
            "Successful",
            "1234567890",
            "Today, 08:45 PM",
            "₹1,125.00",
          ],
          [
            "#231456",
            "Successful",
            "1234567890",
            "Today, 08:45 PM",
            "₹1,125.00",
          ],
          [
            "#231456",
            "Successful",
            "1234567890",
            "Today, 08:45 PM",
            "₹1,125.00",
          ],
          [
            "#231456",
            "Successful",
            "1234567890",
            "Today, 08:45 PM",
            "₹1,125.00",
          ],
          [
            "#231456",
            "Successful",
            "1234567890",
            "Today, 08:45 PM",
            "₹1,125.00",
          ],
          [
            "#231456",
            "Successful",
            "1234567890",
            "Today, 08:45 PM",
            "₹1,125.00",
          ],
          [
            "#231456",
            "Successful",
            "1234567890",
            "Today, 08:45 PM",
            "₹1,125.00",
          ],
          [
            "#231456",
            "Successful",
            "1234567890",
            "Today, 08:45 PM",
            "₹1,125.00",
          ],
          [
            "#231456",
            "Successful",
            "1234567890",
            "Today, 08:45 PM",
            "₹1,125.00",
          ],
          [
            "#231456",
            "Successful",
            "1234567890",
            "Today, 08:45 PM",
            "₹1,125.00",
          ],
          [
            "#231456",
            "Successful",
            "1234567890",
            "Today, 08:45 PM",
            "₹1,125.00",
          ],
          [
            "#231456",
            "Successful",
            "1234567890",
            "Today, 08:45 PM",
            "₹1,125.00",
          ],
        ]}
      />
    </div>
  );
}

export default MainComponent;
