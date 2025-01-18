import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Rating, UserSatisfaction } from '../types/ai-data';

interface Props {
  data: Rating[];
}

const COLORS = ['#0ea5e9', '#06b6d4', '#0891b2', '#0e7490'];

export const SatisfactionChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="count"
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#ffffffa3', 
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              color: 'red'
            }}
          />
          <Legend wrapperStyle={{ color: 'rgba(255,255,255,0.7)' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};