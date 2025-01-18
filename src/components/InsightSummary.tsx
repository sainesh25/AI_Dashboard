
import React from 'react'
import { motion } from 'framer-motion'

interface InsightSummaryProps {
  data: {
    total_queries: number
    successful_queries: number
    failed_queries: number
    average_response_time: number
  }
}

export default function InsightSummary({ data }: InsightSummaryProps) {
  if (!data) return null
  // console.log(data);
  
  return (
    <>
      <div className="flex gap-2 flex-wrap">

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex-grow my-2 glass-card rounded-xl p-6 neon-border"
        >
          <div className="z-10 relative flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-lg font-medium">Total Queries</div>
          </div>
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent relative z-10">
            {data.total_queries}
          </h3>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex-grow my-2 glass-card rounded-xl p-6 neon-border"
        >
          <div className="z-10 relative flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-lg font-medium">Successful Queries</div>
          </div>
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent relative z-10">
            {data.successful_queries}
          </h3>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex-grow my-2 glass-card rounded-xl p-6 neon-border"
        >
          <div className="z-10 relative flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-lg font-medium">Failed Queries</div>
          </div>
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent relative z-10">
            {data.failed_queries}
          </h3>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex-grow my-2 glass-card rounded-xl p-6 neon-border"
        >
          <div className="z-10 relative flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-lg font-medium">Avg. Response Time</div>
          </div>
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent relative z-10">
            {data.average_response_time.toFixed(2)}s
          </h3>
        </motion.div>
        
      </div>
    </>
  )
}

