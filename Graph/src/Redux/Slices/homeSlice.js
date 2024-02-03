import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

export const getTableData = createAsyncThunk(
    "getTableData",
    async (page) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/table?page=${page}`);
            return response.data
        } catch(error) {
            console.log(error.message);
        }
    }
)

export const getPieChartData = createAsyncThunk(
    "getPieChartData",
    async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/pie-chart");
            return response.data
        } catch(error) {
            console.log(error.message);
        }
    }
)

export const getGraphData = createAsyncThunk(
    "getGraphData",
    async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/graph");
            return response.data
        } catch(error) {
            console.log(error.message);
        }
    }
)

export const homeSlice = createSlice({
  name: 'homeSlice',
  initialState: {
    tableData: [],
    pieChartData: [],
    graphData: [],
    isError: false
  },

  extraReducers: (builder) => {
    builder
        .addCase(getTableData.fulfilled, (state, action) => {
            state.tableData = action.payload
        })
        .addCase(getGraphData.fulfilled, (state, action) => {
            state.graphData = action.payload
        })
        .addCase(getPieChartData.fulfilled, (state, action) => {
            state.pieChartData = action.payload
        })
        .addCase(getTableData.rejected, (state, action) => {
            state.isError = true;
            console.log("Error in getTableData method");
        })
        .addCase(getGraphData.rejected, (state, action) => {
            state.isError = true;
            console.log("Error in getGraphData method");
        })
        .addCase(getPieChartData.rejected, (state, action) => {
            state.isError = true;
            console.log("Error in getPieChartData method");
        })
  }
})

// export const {  } = homeSlice.actions

export default homeSlice.reducer