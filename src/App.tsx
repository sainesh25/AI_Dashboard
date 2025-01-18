import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Brain, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { AppDispatch, RootState } from './store/store.ts';
import { fetchAIData } from './store/aiSlice.ts';
import { ResponseTimeChart } from './components/ResponseTimeChart.tsx';
import { CategoryChart } from './components/CategoryChart.tsx';
import { SatisfactionChart } from './components/SatisfactionChart.tsx';
import { UsageChart } from './components/UsageChart.tsx';
import InsightSummary from './components/InsightSummary.tsx';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.ai);

  useEffect(() => {
    dispatch(fetchAIData());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="bg-slate-950 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-sky-400 flex items-center gap-2"
        >
          <Sparkles className="w-6 h-6 animate-pulse" />
          Loading AI Insights...
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-semibold text-red-400">{error}</div>
      </div>
    );
  }

  if (!data) return null;

  // Transform category distribution data
  const categoryData = Object.entries(data.category_distribution).map(([category, count]) => ({
    category,
    count
  }));

  // Transform platform and country usage data
  const platformData = Object.entries(data.usage_statistics.by_platform).map(([platform, users]) => ({
    platform,
    users
  }));

  const countryData = Object.entries(data.usage_statistics.by_country).map(([country, users]) => ({
    country,
    users
  }));

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="glass-nav sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <Brain className="w-8 h-8 text-sky-400" />
                <div className="absolute inset-0 bg-sky-400/20 blur-xl"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                AI Insights Dashboard
              </span>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <InsightSummary data={data.insight_summary}/>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div variants={item} className="chart-container neon-border">
            <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent relative z-10">
              Category Distribution
            </h2>
            <div className="relative z-10">
              <CategoryChart data={categoryData} />
            </div>
          </motion.div>

          <motion.div variants={item} className="chart-container neon-border">
            <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent relative z-10">
              Response Times Analysis
            </h2>
            <div className="relative z-10">
              <ResponseTimeChart data={data?.response_times} />
            </div>
          </motion.div>

          <motion.div variants={item} className="chart-container neon-border">
            <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent relative z-10">
              User Satisfaction
            </h2>
            <div className="relative z-10">
              <SatisfactionChart data={data?.user_satisfaction?.ratings} />
            </div>
          </motion.div>

          <motion.div variants={item} className="chart-container neon-border">
            <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent relative z-10">
              Usage Statistics
            </h2>
            <div className="relative z-10">
              <UsageChart platformData={platformData} countryData={countryData} />
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default App;