import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Target, 
  ChevronRight,
  TrendingUp,
  User as UserIcon
} from 'lucide-react';
import { cn, getStatusColor } from '../lib/utils';

const dummyStudents = [
  { id: '1', fullName: 'Lê Văn An', studentCode: 'HS202401', subject: 'Vật lí', targetScore: 9.2, status: 'On Track', progress: 65, grade: 12, school: 'THPT Chu Văn An' },
  { id: '2', fullName: 'Nguyễn Thị Bình', studentCode: 'HS202402', subject: 'Toán', targetScore: 8.5, status: 'Delayed', progress: 40, grade: 12, school: 'THPT Kim Liên' },
  { id: '3', fullName: 'Trần Minh Tâm', studentCode: 'HS202403', subject: 'Vật lí', targetScore: 9.5, status: 'Accelerating', progress: 85, grade: 12, school: 'THPT Phan Đình Phùng' },
];

const StudentsList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Danh sách học sinh</h1>
          <p className="text-slate-500 mt-1">Quản lý lộ trình và tiến độ của các học sinh 1-1.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-4 rounded-2xl shadow-lg shadow-indigo-100 transition-all active:scale-95">
          <Plus className="w-5 h-5" />
          Thêm học sinh mới
        </button>
      </header>

      {/* Filters Corner */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 group">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Tìm kiếm theo tên hoặc mã học sinh..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
        <button className="flex items-center gap-2 px-6 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
          <Filter className="w-5 h-5" />
          Lọc
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-slate-900">
        {dummyStudents.map((student) => (
          <div 
            key={student.id} 
            onClick={() => navigate(`/students/${student.id}`)}
            className="group bg-white rounded-[32px] p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 -mr-8 -mt-8 rounded-full blur-2xl group-hover:bg-indigo-100 transition-colors"></div>

            <div className="flex justify-between items-start mb-6">
              <div className="bg-slate-100 p-3 rounded-2xl">
                <UserIcon className="w-6 h-6 text-slate-600" />
              </div>
              <div className={cn(
                "px-3 py-1 rounded-full text-xs font-bold border",
                getStatusColor(student.status)
              )}>
                {student.status === 'On Track' ? 'Đúng tiến độ' : 
                 student.status === 'Delayed' ? 'Chậm tiến độ' : 'Tăng tốc'}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-1">{student.fullName}</h3>
            <p className="text-sm text-slate-500 mb-4">{student.studentCode} • {student.school}</p>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-50 px-3 py-1 rounded-lg">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{student.subject}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <Target className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-bold">Aim: {student.targetScore}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wide">
                <span>Tiến độ lộ trình</span>
                <span>{student.progress}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-600 rounded-full transition-all duration-1000"
                  style={{ width: `${student.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-bold">+0.5 điểm từ lần cuối</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsList;
