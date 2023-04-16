import React from "react";

const Table = ({ data }) => {
  return (
    <div class="flex-grow p-4 bg-cover border border-gray-200 rounded-2xl shadow flex flex-col gap-2 relative overflow-x-auto">
      <span className="font-bold">Recent Notifications</span>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              User
            </th>
            <th scope="col" class="px-6 py-3">
              Message
            </th>
            <th scope="col" class="px-6 py-3">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {data || [1].map((ele) => (
            <tr class="">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-row items-center justify-start gap-4">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  />
                  <div>John Doe: InvestEd</div>
                </div>
              </th>
              <td class="px-6 py-4">Verification Email : <span className="font-bold">mmy-gmf-fej</span> </td>
              <td class="px-6 py-4">1:34pm</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
