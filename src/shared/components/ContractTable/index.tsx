import { Contract } from "@/types/contracts";

const ContractTable = ({ contracts }: { contracts: Contract[] }) => {
  return (
    <div className="relative shadow-md rounded-lg mx-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              market
            </th>
            <th scope="col" className="px-6 py-3">
              Base
            </th>
            <th scope="col" className="px-6 py-3">
              Quote
            </th>
            <th scope="col" className="px-6 py-3">
              Exchange
            </th>
            <th scope="col" className="px-6 py-3">
              Active
            </th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract: Contract) => (
            <tr
              key={contract.market_quadra}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {contract.market_quadra}
              </th>
              <td className="px-6 py-4">{contract.base}</td>
              <td className="px-6 py-4">{contract.quote}</td>
              <td className="px-6 py-4">{contract.exchange}</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  {contract.active ? "Yes" : "No"}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContractTable;
