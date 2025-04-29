
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { Area, AreaChart, ResponsiveContainer, Line, LineChart, Tooltip, Bar, BarChart } from "recharts";

// Sample data for charts
const lineChartData = [
  { name: "Jan", value: 12 },
  { name: "Feb", value: 19 },
  { name: "Mar", value: 15 },
  { name: "Apr", value: 25 },
  { name: "May", value: 32 },
  { name: "Jun", value: 45 },
  { name: "Jul", value: 58 },
  { name: "Aug", value: 72 },
  { name: "Sep", value: 80 },
];

const areaChartData = [
  { name: "Q1", value: 400 },
  { name: "Q2", value: 300 },
  { name: "Q3", value: 600 },
  { name: "Q4", value: 800 },
];

const barChartData = [
  { name: "A", value: 20 },
  { name: "B", value: 50 },
  { name: "C", value: 40 },
  { name: "D", value: 70 },
  { name: "E", value: 30 },
  { name: "F", value: 60 },
];

const StatsCard = ({ title, value, subtitle, chartType }: { title: string, value: string, subtitle: string, chartType: "line" | "area" | "bar" }) => {
  const renderChart = () => {
    switch (chartType) {
      case "line":
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineChartData}>
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        );
      case "area":
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaChartData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="value" stroke="#3b82f6" fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        );
      case "bar":
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barChartData}>
              <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="bg-gray-900/60 rounded-xl p-6 border border-gray-800 backdrop-blur-sm"
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(66, 153, 225, 0.3)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full">
        <h4 className="text-gray-400 text-sm mb-2">{title}</h4>
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        <p className="text-xs text-gray-500 mb-4">{subtitle}</p>
        <div className="h-24 mt-auto">
          {renderChart()}
        </div>
      </div>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <AnimatedText 
          text="ELYSIA Stats"
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
          delay={0.1}
        />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
        >
          <motion.div variants={itemVariants}>
            <StatsCard 
              title="Total Value Locked" 
              value="$10,724,944" 
              subtitle="Increased by 14.5% this month"
              chartType="line"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatsCard 
              title="Daily Active Users" 
              value="24,521" 
              subtitle="Up by 7.2% from yesterday"
              chartType="area"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatsCard 
              title="Total Transactions" 
              value="5.4M+" 
              subtitle="247,945 in the last 24 hours"
              chartType="bar"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatsCard 
              title="Network Validators" 
              value="127" 
              subtitle="99.99% uptime"
              chartType="line"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <motion.div variants={itemVariants} className="bg-gray-900/60 rounded-xl p-6 border border-gray-800 backdrop-blur-sm">
            <h3 className="text-lg font-medium text-gray-300 mb-4">Network Health Score</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={lineChartData}>
                  <defs>
                    <linearGradient id="colorNetwork" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ background: '#111', border: '1px solid #333' }}
                    labelStyle={{ color: '#fff' }}
                    itemStyle={{ color: '#3b82f6' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#3b82f6" fill="url(#colorNetwork)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 gap-6 h-full">
              <div className="bg-gray-900/60 rounded-xl p-6 border border-gray-800 backdrop-blur-sm flex flex-col">
                <h3 className="text-sm font-medium text-gray-300 mb-2">Token Price</h3>
                <div className="text-2xl font-bold text-white mb-1">$2.84</div>
                <span className="text-xs text-green-500">+5.7%</span>
                <div className="mt-auto text-xs text-gray-500">Updated 5 min ago</div>
              </div>
              <div className="bg-gray-900/60 rounded-xl p-6 border border-gray-800 backdrop-blur-sm flex flex-col">
                <h3 className="text-sm font-medium text-gray-300 mb-2">Market Cap</h3>
                <div className="text-2xl font-bold text-white mb-1">$284M</div>
                <span className="text-xs text-green-500">+3.2%</span>
                <div className="mt-auto text-xs text-gray-500">Rank #42</div>
              </div>
              <div className="bg-gray-900/60 rounded-xl p-6 border border-gray-800 backdrop-blur-sm flex flex-col">
                <h3 className="text-sm font-medium text-gray-300 mb-2">Staking APY</h3>
                <div className="text-2xl font-bold text-white mb-1">12.4%</div>
                <span className="text-xs text-blue-500">Locked: 47.2%</span>
                <div className="mt-auto text-xs text-gray-500">30-day average</div>
              </div>
              <div className="bg-gray-900/60 rounded-xl p-6 border border-gray-800 backdrop-blur-sm flex flex-col">
                <h3 className="text-sm font-medium text-gray-300 mb-2">Block Height</h3>
                <div className="text-2xl font-bold text-white mb-1">15,482,941</div>
                <span className="text-xs text-blue-500">~2.1 sec/block</span>
                <div className="mt-auto text-xs text-gray-500">Current</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
