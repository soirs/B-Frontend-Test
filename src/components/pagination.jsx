// https://github.com/bradtraversy/simple_react_pagination
import React from 'react';

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const visibleNumbers = () => {
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }
    if (currentPage === 1) {
      return pageNumbers.slice(0, 7);
    } else if (currentPage <= 2) {
      return pageNumbers.slice(0, currentPage + 5);
    } else if (currentPage === 3) return pageNumbers.slice(0, 7);
    else {
      return pageNumbers.slice(currentPage - 4, currentPage + 3);
    }
  };
  const highlightCurrentPageNumber = (number) => {
    return currentPage === number ? 'active page-item' : 'page-item';
  };
  const disablePreviousButton = () => {
    return currentPage === 1 ? 'disabled page-item' : 'page-item';
  };
  const disableNextButton = () => {
    return currentPage === totalPages ? 'disabled page-item' : 'page-item';
  };

  return (
    <nav>
      <ul className='pagination d-flex justify-content-center border-0'>
        <li className={disablePreviousButton()}>
          <button
            onClick={() => paginate(currentPage !== 1 ? currentPage - 1 : null)}
            className='page-link'
          >
            Previous
          </button>
        </li>
        {visibleNumbers().map((number) => (
          <li key={number} className={highlightCurrentPageNumber(number)}>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
        <li className={disableNextButton()}>
          <button
            onClick={() =>
              paginate(currentPage !== totalPages ? currentPage + 1 : null)
            }
            className='page-link'
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
