import React from 'react';
import { 
  Users, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Clock 
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

const data = [
  { name: 'Tuần 1', score: 7.5 },
  { name: 'Tuần 2', score: 7.8 },
  { name: 'Tuần 3', score: 8.2 },
  { name: 'Tuần 4', score: 8.0 },
  { name: 'Tuần 5', score: 8.5 },
  { name: 'Tuần 6', score: 8.9 },
];

const stats = [
  { label: 'Tổng học sinh', value: '12', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Đúng tiến độ', value: '9', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Cần chú ý', value: '3', icon: AlertCircle, color: 'text-amber-600', bg: 'bg-amber-50' },
  { label: 'Lịch dạy tuần này', value: '18', icon: Calendar, color: 'text-indigo-600', bg: 'bg-indigo-50' },
];

const upcomingSessions = [
  { student: 'Lê Văn An', subject: 'Vật lí 12', time: '18:00 - Thứ 2', topic: 'Dao động cơ học' },
  { student: 'Nguyễn Thị Bình', subject: 'Toán 12', time: '19:30 - Thứ 2', topic: 'Hàm số bậc 3' },
  { student: 'Trần Minh Tâm', subject: 'Vật lí 12', time: '17:00 - Thứ 3', topic: 'Điện xoay chiều' },
];

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Tổng quan</h1>
          <p className="text-slate-500 mt-1">Chào mừng trở lại! Hôm nay bạn có 3 buổi dạy.</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-100">
          <button className="px-4 py-2 text-sm font-semibold bg-indigo-600 text-white rounded-lg shadow-sm">Tháng này</button>
          <button className="px-4 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-50 rounded-lg">Tuần này</button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <div className={stat.bg + " p-3 rounded-2xl"}>
                <stat.icon className={stat.color + " w-6 h-6"} />
              </div>
              <TrendingUp className="text-emerald-500 w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
            <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Progress Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-slate-900">Tiến độ điểm số trung bình</h2>
            <select className="bg-slate-50 border border-slate-200 text-sm font-semibold py-2 px-4 rounded-xl focus:outline-none">
              <option>Kì thi THPT Quốc gia</option>
              <option>Đánh giá năng lực</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} dx={-10} domain={[0, 10]} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#4f46e5" 
                  strokeWidth={4} 
                  dot={{ r: 6, fill: '#4f46e5', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 8, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-6 font-display">Lịch dạy sắp tới</h2>
          <div className="space-y-6">
            {upcomingSessions.map((session, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="relative">
                  <div className="bg-indigo-50 p-2 rounded-xl">
                    <Clock className="w-5 h-5 text-indigo-600" />
                  </div>
                  {idx !== upcomingSessions.length - 1 && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-slate-100"></div>
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <div className="text-sm text-indigo-600 font-bold mb-1">{session.time}</div>
                  <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors uppercase tracking-wide text-xs">
                    {session.student} • {session.subject}
                  </div>
                  <div className="text-slate-500 text-sm mt-1">{session.topic}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl transition-colors border border-slate-100">
            Xem tất cả lịch dạy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
