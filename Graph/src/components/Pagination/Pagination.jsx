import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getTableData } from '../../Redux/Slices/homeSlice'
import "./Pagination.css"

const Pagination = () => {
  const dispatch=useDispatch();
  const [page,setPage]=useState(1)
  const tableData = useSelector((state) => state.graphDatas.tableData);

  useEffect(()=>{
    dispatch(getTableData(page))
  },[page])

  const renderPaginationButtons = () => {
    const maxVisibleButtons = 5;
    const pageButtons = [];

    if (tableData.totalPages <= maxVisibleButtons) {
      for (let i = 1; i <= tableData.totalPages; i++) {
        pageButtons.push(
          <button
            key={i}
            onClick={() => setPage(i)}
            disabled={tableData.currentPage === i}
          >
            {i}
          </button>
        );
      }
    } else {
      for (let i = 1; i <= 2; i++) {
        pageButtons.push(
          <button
            key={i}
            onClick={() => setPage(i)}
            disabled={tableData.currentPage === i}
          >
            {i}
          </button>
        );
      }

      pageButtons.push(
        <button key="ellipsis" disabled>
          ...
        </button>
      );
      for (let i = tableData.totalPages - 1; i <= tableData.totalPages; i++) {
        pageButtons.push(
          <button
            key={i}
            onClick={() => setPage(i)}
            disabled={tableData.currentPage === i}
          >
            {i}
          </button>
        );
      }
    }

    return pageButtons;
  }

  return (
           <div className="pagination">
        <button
          onClick={() => setPage(tableData.currentPage - 1)}
          disabled={tableData.currentPage === 1}
        >
          {"<"}
        </button>
        {renderPaginationButtons()}
        <button
          onClick={() => setPage(tableData.currentPage + 1)}
          disabled={tableData.currentPage === tableData.totalPages}
        >
        {">"}
        </button>
      </div>

  )
}

export default Pagination;
