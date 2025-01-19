# AI Insights Dashboard

A modern, interactive dashboard built with React and TypeScript for visualizing AI model performance metrics, usage statistics, and user satisfaction data.

![AI Insights Dashboard]

## Features

- 📊 Real-time performance metrics visualization
- 🤖 AI model performance tracking
- 📈 Response time analysis (daily and weekly trends)
- 🌍 Geographic usage distribution
- 📱 Platform-wise usage statistics
- ⭐ User satisfaction ratings
- 🎯 Category-wise query distribution

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create-React-App

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sainesh25/AI_Dashboard.git
   cd ai-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── CategoryChart.tsx
│   ├── MetricsChart.tsx
│   ├── ModelCard.tsx
│   ├── ResponseTimeChart.tsx
│   ├── SatisfactionChart.tsx
│   └── UsageChart.tsx
├── store/              # Redux store configuration
│   ├── aiSlice.ts
│   └── store.ts
├── types/              # TypeScript interfaces
│   └── ai-data.ts
├── data/               # Mock data
│   └── ai-data.json
├── App.tsx             # Main application component
└── index.tsx           # Application entry point
```

## Features in Detail

### Performance Metrics
- Real-time tracking of AI model accuracy and latency
- Historical performance data visualization
- Response time analysis with daily and weekly breakdowns

### Usage Analytics
- Geographic distribution of users
- Platform-wise usage statistics
- Category distribution of queries
- User satisfaction ratings

### Interactive Visualizations
- Responsive charts that adapt to screen size
- Interactive tooltips with detailed information
- Smooth animations and transitions
- Dark theme with neon accents

## Customization

### Theme
The dashboard uses a custom dark theme with neon accents. You can modify the theme in:
- `tailwind.config.js` for color schemes
- `index.css` for global styles and animations

### Data Source
Currently using mock data from `src/data/ai-data.json`. To connect to a real API:
1. Update the `fetchAIData` thunk in `src/store/aiSlice.ts`
2. Modify the data interfaces in `src/types/ai-data.ts` if needed

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)