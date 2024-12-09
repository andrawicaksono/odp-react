import { Search } from "lucide-react";

const History = ({ transactions }) => {
  return (
    <div className="px-6 sm:px-4 lg:px-8 mb-9">
      <SearchAndFilter />
      <TransactionList transactions={transactions} />
    </div>
  );
};

const SearchAndFilter = () => {
  return (
    <div className="flex justify-between items-center">
      {/* Search */}
      <div className="relative flex items-center bg-white rounded-lg  max-w-4xl">
        <div className="absolute left-4">
          <Search className="h-4 w-4 text-gray-400" />
        </div>

        <input
          type="text"
          placeholder="Search"
          className="pl-12 flex-1 shadow-md p-2 rounded-md"
        />
      </div>

      {/* Filter */}
      <div className="flex justify-between gap-14">
        <div className="flex items-center space-x-4">
          <label className="text-gray-400">Show</label>
          <select className="rounded-md px-3 py-2 shadow-md text-gray-400">
            <option value="Last 10 transactions">Last 10 transactions</option>
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <label className="text-gray-400">Sort By</label>
          <select className="rounded-md px-3 py-2 shadow-md text-gray-400">
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>

          <select className="rounded-md px-3 py-2 shadow-md text-gray-400">
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const TransactionList = ({ transactions }) => {
  let formatter = new Intl.NumberFormat("de-DE", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="container py-6">
      <table className="min-w-full table-auto border-collapse border border-gray-100">
        <thead>
          <tr className="bg-white">
            <th className="px-4 py-2 text-left border-b">Date & Time</th>
            <th className="px-4 py-2 text-left border-b">Type</th>
            <th className="px-4 py-2 text-left border-b">From/To</th>
            <th className="px-4 py-2 text-left border-b">Description</th>
            <th className="px-4 py-2 text-left border-b">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="odd:bg-gray-100 even:bg-white">
              <td className="px-4 py-2 border-b text-left">
                {transaction.datetime}
              </td>
              <td className="px-4 py-2 border-b text-left">
                {transaction.type}
              </td>
              <td className="px-4 py-2 border-b text-left">
                {transaction.fromTo}
              </td>
              <td className="px-4 py-2 border-b text-left">
                {transaction.description}
              </td>
              {transaction.type === "DEBIT" ? (
                <td className={`px-4 py-2 border-b text-left text-red-500`}>
                  - {formatter.format(transaction.amount)}
                </td>
              ) : (
                <td className={`px-4 py-2 border-b text-left text-green-500`}>
                  + {formatter.format(transaction.amount)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
