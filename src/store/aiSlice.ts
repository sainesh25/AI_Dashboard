import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { AIData } from '../types/ai-data';

const mockData: AIData = {
  insight_summary: {
    total_queries: 1500,
    successful_queries: 1350,
    failed_queries: 150,
    average_response_time: 0.45
  },
  category_distribution: {
    small_talk: 300,
    technical_support: 450,
    sales_inquiries: 350,
    customer_service: 400
  },
  response_times: {
    day_wise: [
      { date: "2023-05-01", average_time: 0.4 },
      { date: "2023-05-02", average_time: 0.42 },
      { date: "2023-05-03", average_time: 0.35 },
      { date: "2023-05-04", average_time: 0.5 },
      { date: "2023-05-05", average_time: 0.47 }
    ],
    week_wise: [
      { week: "18", average_time: 0.45 },
      { week: "19", average_time: 0.43 },
      { week: "20", average_time: 0.5 },
      { week: "21", average_time: 0.46 },
      { week: "22", average_time: 0.41 }
    ]
  },
  user_satisfaction: {
    ratings: [
      { rating: 1, count: 15 },
      { rating: 2, count: 35 },
      { rating: 3, count: 200 },
      { rating: 4, count: 500 },
      { rating: 5, count: 600 }
    ]
  },
  usage_statistics: {
    by_platform: {
      iOS: 600,
      Android: 700,
      Web: 200
    },
    by_country: {
      USA: 800,
      India: 250,
      Germany: 150,
      Japan: 100,
      Brazil: 200
    }
  }
};

interface AIState {
  data: AIData | null;
  loading: boolean;
  error: string | null;
}

const initialState: AIState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchAIData = createAsyncThunk(
  'ai/fetchData',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockData;
  }
);

const aiSlice = createSlice({
  name: 'ai',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAIData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAIData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAIData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch AI data';
      });
  },
});

export default aiSlice.reducer;