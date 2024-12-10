import { Eye, Plus, Send } from "lucide-react";

const AccountStats = ({ accountNo, balance }) => {
  return (
    <div className="flex gap-12 px-6 sm:px-4 lg:px-8 mb-9">
      <AccountInfo accountNo={accountNo} />
      <BalanceInfo balance={balance} />
    </div>
  );
};

const AccountInfo = ({ accountNo }) => {
  return (
    <div className="flex items-center justify-center h-56 w-72 bg-primary rounded-3xl p-6">
      <div>
        <h4 className="font-normal text-2xl">Account No</h4>
        <p className="font-bold text-4xl">{accountNo}</p>
      </div>
    </div>
  );
};

const BalanceInfo = ({ balance }) => {
  return (
    <div className="flex-1 text-left items-center bg-white rounded-3xl p-6  w-full h-56">
      <div className="flex flex-col justify-center h-full">
        <h4 className="text-2xl font-normal">Balance</h4>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-16">
              <p className="text-3xl font-semibold">Rp{balance}</p>
              <button>
                <Eye className="text-gray-400" size={36} />
              </button>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button className="p-1 bg-teal-600 text-white rounded-xl">
              <Plus size={32} />
            </button>
            <button className="p-1 bg-teal-600 text-white rounded-xl">
              <Send size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountStats;
