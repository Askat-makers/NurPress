import React from 'react';

const Pagination = () => {
  return (
    <>
      <div className="col-xs-12 hidden-print">
        <ul className="pagination">
          <li className="prev"><span>«</span></li>
          <li className="next"><span>»</span></li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;