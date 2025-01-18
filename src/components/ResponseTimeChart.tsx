import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { ResponseTimes } from '../types/ai-data';

interface Props {
  data: ResponseTimes;
}

export const ResponseTimeChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Day-wise Response Time Chart */}
      <div className="h-[500px] w-full">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">Daily Response Times</h3>
        <ResponsiveContainer>
          <LineChart data={data.day_wise} margin={{ top: 5, right: 30, left: 20, bottom: 50 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="date" 
              stroke="rgba(255,255,255,0.5)"
              tick={{ fill: 'rgba(255,255,255,0.5)' }}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.5)"
              tick={{ fill: 'rgba(255,255,255,0.5)' }}
              label={{ 
                value: 'Average Response Time (s)', 
                angle: -90, 
                position: 'insideLeft',
                style: { fill: 'rgba(255,255,255,0.5)' }
              }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                color: 'white'
              }}
              formatter={(value: number) => [`${value.toFixed(2)}s`, 'Response Time']}
            />
            <Legend wrapperStyle={{ color: 'rgba(255,255,255,0.7)' }} />
            <Line 
              type="monotone" 
              dataKey="average_time" 
              stroke="#0ea5e9" 
              name="Average Response Time"
              strokeWidth={2}
              dot={{ fill: '#0ea5e9', strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Week-wise Response Time Chart */}
      <div className="h-[500px] w-full">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">Weekly Response Times</h3>
        <ResponsiveContainer>
          <LineChart data={data.week_wise} margin={{ top: 5, right: 30, left: 20, bottom: 50 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="week" 
              stroke="rgba(255,255,255,0.5)"
              tick={{ fill: 'rgba(255,255,255,0.5)' }}
              label={{ 
                value: 'Week Number', 
                position: 'insideBottom',
                offset: -5,
                style: { fill: 'rgba(255,255,255,0.5)' }
              }}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.5)"
              tick={{ fill: 'rgba(255,255,255,0.5)' }}
              label={{ 
                value: 'Average Response Time (s)', 
                angle: -90, 
                position: 'insideLeft',
                style: { fill: 'rgba(255,255,255,0.5)' }
              }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                color: 'white'
              }}
              formatter={(value: number) => [`${value.toFixed(2)}s`, 'Response Time']}
              labelFormatter={(week) => `Week ${week}`}
            />
            <Legend  wrapperStyle={{ color: 'rgba(255,255,255,0.7)', bottom: '35px' }} />
            <Line 
              type="monotone" 
              dataKey="average_time" 
              stroke="#06b6d4" 
              name="Average Response Time"
              strokeWidth={2}
              dot={{ fill: '#06b6d4', strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};