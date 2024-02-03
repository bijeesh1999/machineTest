import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTableData } from '../../Redux/Slices/homeSlice';
import "./Table.css";

const Table = () => {
    const dispatch = useDispatch();
    const tableData = useSelector((state) => state.graphDatas.tableData.data);

    // console.log(tableData);

    useEffect(() => {
        dispatch(getTableData());
    }, [dispatch]);

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        {tableData&&tableData.length > 0 &&
                            Object.keys(tableData[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData?.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
