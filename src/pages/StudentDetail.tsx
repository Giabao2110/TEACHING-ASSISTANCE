import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Target, 
  BookOpen, 
  Video, 
  ClipboardCheck, 
  AlertCircle, 
  FileText, 
  MoreVertical,
  Calendar,
  Clock,
  ChevronRight,
  TrendingUp,
  Star,
  Plus,
  CheckCircle2
} from 'lucide-react';
import { cn, getStatusColor } from '../lib/utils';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis
} from 'recharts';

const tabs = [
  { id: 'overview', label: 'Tổng quan', icon: FileText },
  { id: 'roadmap', label: 'Lộ trình', icon: BookOpen },
  { id: 'sessions', label: 'Buổi học', icon: Video },
  { id: 'tasks', label: 'Bài tập & Test', icon: ClipboardCheck },
  { id: 'mistakes', label: 'Sổ tay lỗi sai', icon: AlertCircle },
  { id: 'reports', label: 'Báo cáo', icon: TrendingUp },
];

const mockStudent = {
  id: '1',
  fullName: 'Lê Văn An',
  studentCode: 'HS202401',
  subject: 'Vật lí',
  targetScore: 9.2,
  currentLevel: 7.5,
  status: 'On Track',
  progress: 65,
  school: 'THPT Chu Văn An',
  goals: ['Nắm vững dao động cơ', 'Target 9 điểm kỉ thi thử tháng 5', 'Giảm lỗi sai tính toán'],
  strengths: ['Tư duy đồ thị', 'Lý thuyết điện từ'],
  weaknesses: ['Tính toán nhanh', 'Bài tập thực tế'],
};

const skillData = [
  { subject: 'Lý thuyết', A: 90, fullMark: 100 },
  { subject: 'Vận dụng', A: 75, fullMark: 100 },
  { subject: 'VD Cao', A: 60, fullMark: 100 },
  { subject: 'Tính toán', A: 50, fullMark: 100 },
  { subject: 'Tốc độ', A: 85, fullMark: 100 },
];

const roadmapStages = [
  { name: 'Quét lỗ hổng kiến thức', weeks: 4, status: 'Completed', tasks: 12 },
  { name: 'Nâng cao vận dụng 8+', weeks: 6, status: 'In Progress', tasks: 18 },
  { name: 'Thực chiến đề tổng hợp', weeks: 8, status: 'Pending', tasks: 20 },
  { name: 'Tổng ôn & Chốt lỗi sai', weeks: 2, status: 'Pending', tasks: 5 },
];

const sessions = [
  { date: '12/04/2024', topic: 'Dao động con lắc lò xo', understanding: 4, active: 5, notes: 'HS hiểu bài nhanh, làm được bài vận dụng cao' },
  { date: '10/04/2024', topic: 'Lý thuyết đại cương dao động', understanding: 5, active: 4, notes: 'Thuộc hết công thức cơ bản' },
];

const mistakes = [
  { type: 'Đơn vị', topic: 'Điện xoay chiều', desc: 'Quên đổi cm sang m', severity: 3 },
  { type: 'Bấm máy', topic: 'Phóng xạ', desc: 'Bấm nhầm log cơ số 10 thành ln', severity: 4 },
  { type: 'Công thức', topic: 'Giao thoa ánh sáng', desc: 'Nhầm công thức vân tối', severity: 2 },
];

const StudentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Header */}
      <header className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate('/students')}
            className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Quay lại danh sách
          </button>
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <MoreVertical className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-indigo-100">
              {mockStudent.fullName.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{mockStudent.fullName}</h1>
                <div className={cn(
                  "px-3 py-1 rounded-full text-xs font-bold border",
                  getStatusColor(mockStudent.status)
                )}>
                  {mockStudent.status === 'On Track' ? 'Đúng tiến độ' : 'Chậm tiến độ'}
                </div>
              </div>
              <p className="text-slate-500 font-medium">
                {mockStudent.studentCode} • {mockStudent.subject} 12 • {mockStudent.school}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 min-w-[140px]">
              <div className="bg-amber-50 p-2 rounded-xl">
                <Target className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Mục tiêu</p>
                <p className="text-xl font-bold text-slate-900">{mockStudent.targetScore.toFixed(1)}</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 min-w-[140px]">
              <div className="bg-indigo-50 p-2 rounded-xl">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hiện tại</p>
                <p className="text-xl font-bold text-slate-900">{mockStudent.currentLevel.toFixed(1)}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100/50 rounded-2xl overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-200",
              activeTab === tab.id 
                ? "bg-white text-indigo-600 shadow-sm" 
                : "text-slate-500 hover:text-slate-700 hover:bg-white/50"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
            {/* Left Column: Stats & Charts */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-8 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-indigo-600" />
                  Biểu đồ hình thoi kỹ năng
                </h3>
                <div className="h-[300px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                      <PolarGrid stroke="#e2e8f0" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} />
                      <Radar
                        name="Kỹ năng"
                        dataKey="A"
                        stroke="#4f46e5"
                        fill="#4f46e5"
                        fillOpacity={0.15}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-4">Điểm mạnh</h3>
                  <div className="space-y-3">
                    {mockStudent.strengths.map((s, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-emerald-600 font-semibold bg-emerald-50 px-4 py-2 rounded-xl">
                        <Star className="w-4 h-4 fill-emerald-600" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-4">Mục tiêu ngắn hạn</h3>
                  <div className="space-y-3">
                    {mockStudent.goals.map((g, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-indigo-600 font-semibold bg-indigo-50 px-4 py-2 rounded-xl">
                        <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                        {g}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Lỗ hổng & Chú ý */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm h-full">
                <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  Lỗ hổng cần can thiệp
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-100 space-y-2">
                    <p className="font-bold text-red-700">Đơn vị & Thứ tự thực hiện</p>
                    <p className="text-sm text-red-600/80">Thường xuyên nhầm đơn vị Micro, Nano trong bài tập Sóng ánh sáng.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100 space-y-2">
                    <p className="font-bold text-amber-700">Tốc độ bấm máy tính</p>
                    <p className="text-sm text-amber-600/80">Mất quá nhiều thời gian cho các phép tính số phức trong Điện xoay chiều.</p>
                  </div>
                </div>
                <button className="w-full mt-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-100">
                  Tạo buổi học bổ trợ
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-bold text-slate-900">Lộ trình cá nhân hóa</h3>
              <button className="flex items-center gap-2 text-indigo-600 font-bold hover:bg-indigo-50 px-4 py-2 rounded-xl transition-all">
                <Plus className="w-5 h-5" />
                Thêm giai đoạn
              </button>
            </div>
            
            <div className="relative space-y-8 pl-12">
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-100"></div>
              {roadmapStages.map((stage, idx) => (
                <div key={idx} className="relative group">
                  <div className={cn(
                    "absolute -left-12 top-0 w-12 h-12 rounded-2xl border-4 border-white flex items-center justify-center shadow-md transition-all duration-300",
                    stage.status === 'Completed' ? "bg-emerald-500" : 
                    stage.status === 'In Progress' ? "bg-indigo-600 scale-110" : "bg-slate-200"
                  )}>
                    {stage.status === 'Completed' ? <CheckCircle2 className="w-6 h-6 text-white" /> : 
                     <span className="text-white font-bold">{idx + 1}</span>}
                  </div>
                  
                  <div className={cn(
                    "p-6 rounded-2xl border transition-all duration-300",
                    stage.status === 'In Progress' ? "border-indigo-200 bg-indigo-50/30 shadow-sm" : "border-slate-100 bg-slate-50/30"
                  )}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">{stage.name}</h4>
                        <p className="text-sm text-slate-500 font-medium">Thời gian: {stage.weeks} tuần • {stage.tasks} nội dung chủ chốt</p>
                      </div>
                      <div className={cn(
                        "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                        stage.status === 'Completed' ? "bg-emerald-100 text-emerald-700" :
                        stage.status === 'In Progress' ? "bg-indigo-100 text-indigo-700" : "bg-slate-200 text-slate-500"
                      )}>
                        {stage.status === 'Completed' ? 'Hoàn thành' : 
                         stage.status === 'In Progress' ? 'Đang thực hiện' : 'Chờ bắt đầu'}
                      </div>
                    </div>
                    {stage.status === 'In Progress' && (
                      <div className="space-y-2 mt-4">
                         <div className="flex justify-between text-xs font-bold text-indigo-600 mb-1">
                           <span>Tiến độ giai đoạn</span>
                           <span>75%</span>
                         </div>
                         <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                           <div className="h-full bg-indigo-600 w-3/4 rounded-full"></div>
                         </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'sessions' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
               <h3 className="text-xl font-bold text-slate-900">Lịch sử buổi học</h3>
               <button className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-indigo-100 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                 <Plus className="w-5 h-5" />
                 Ghi nhận buổi học mới
               </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {sessions.map((s, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:border-indigo-200 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-slate-50 p-3 rounded-2xl">
                        <Calendar className="w-6 h-6 text-slate-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{s.topic}</h4>
                        <p className="text-sm text-slate-500 font-medium">{s.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="text-center">
                         <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Hiểu bài</p>
                         <div className="flex gap-0.5">
                           {[1,2,3,4,5].map(v => (
                             <div key={v} className={cn("w-2 h-4 rounded-sm", v <= s.understanding ? "bg-emerald-500" : "bg-slate-100")}></div>
                           ))}
                         </div>
                       </div>
                       <div className="text-center">
                         <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Chủ động</p>
                         <div className="flex gap-0.5">
                           {[1,2,3,4,5].map(v => (
                             <div key={v} className={cn("w-2 h-4 rounded-sm", v <= s.active ? "bg-indigo-500" : "bg-slate-100")}></div>
                           ))}
                         </div>
                       </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl text-slate-700 text-sm italic border border-slate-100">
                    "{s.notes}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'mistakes' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {['Công thức', 'Tính toán', 'Đọc đề'].map(type => (
                 <div key={type} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center mb-4 font-bold text-xl",
                      type === 'Công thức' ? "bg-amber-50 text-amber-600" : 
                      type === 'Tính toán' ? "bg-red-50 text-red-600" : "bg-blue-50 text-blue-600"
                    )}>
                      {type === 'Công thức' ? 'Ω' : type === 'Tính toán' ? '±' : '?'}
                    </div>
                    <h4 className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mb-1">{type}</h4>
                    <p className="text-2xl font-bold text-slate-900">
                      {type === 'Công thức' ? 12 : type === 'Tính toán' ? 24 : 8}
                    </p>
                    <p className="text-xs text-slate-400 font-medium">Lượt sai ghi nhận</p>
                 </div>
               ))}
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-50 bg-slate-50/30 flex justify-between items-center">
                <h3 className="font-bold text-slate-900">Chi tiết sổ tay lỗi sai</h3>
                <button className="text-indigo-600 font-bold text-sm">Xem tất cả</button>
              </div>
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50/50">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Loại lỗi</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Chủ đề</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mô tả</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nghiêm trọng</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {mistakes.map((m, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <span className={cn(
                          "px-2 py-1 rounded-lg text-xs font-bold",
                          m.type === 'Công thức' ? "bg-amber-100 text-amber-700" : 
                          m.type === 'Tính toán' ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                        )}>
                          {m.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-700">{m.topic}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{m.desc}</td>
                      <td className="px-6 py-4">
                         <div className="flex gap-0.5">
                           {[1,2,3,4,5].map(v => (
                             <div key={v} className={cn("h-1 w-4 rounded-full", v <= m.severity ? "bg-red-500" : "bg-slate-100")}></div>
                           ))}
                         </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDetail;
