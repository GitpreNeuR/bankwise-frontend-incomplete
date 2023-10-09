import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center  justify-center mt-4">
     
      <div className="flex  space-x-2">
        {pageNumbers.map((pageNumber) => (
        
          <span
            key={pageNumber}
            className={`px-4 py-2  rounded-md  cursor-pointer ${
              pageNumber === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
