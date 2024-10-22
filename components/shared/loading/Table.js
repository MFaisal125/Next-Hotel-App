import React from "react";

const Table = ({ repeat }) => {
  return (
    <tr className="bg-white hover:bg-secondary/50 transition-colors">
      {Array(repeat)
        .fill(0)
        .map((_, index) => (
          <td
            key={index}
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            <span className="h-5 animate-pulse w-40 rounded block bg-gray-200 border" />
          </td>
        ))}
    </tr>
  );
};

export default Table;
