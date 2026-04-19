import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Settings, 
  LogOut, 
  GraduationCap
} from 'lucide-react';
import { auth } from '../../lib/firebase';
import { cn } from '../../lib/utils';

const Sidebar = () => {
  const navigate = useNavigate();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Học sinh', path: '/students' },
    { icon: BookOpen, label: 'Lộ trình mẫu', path: '/templates' },
    { icon: Settings, label: 'Cài đặt', path: '/settings' },
  ];

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white flex flex-col z-50">
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <div className="bg-indigo-600 p-2 rounded-lg">
          <GraduationCap className="w-6 h-6" />
        </div>
        <span className="font-bold text-xl tracking-tight">TutorFlow 12</span>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-2 font-medium">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-slate-800 group",
              isActive ? "bg-indigo-600 text-white" : "text-slate-400"
            )}
          >
            <item.icon className={cn("w-5 h-5", "group-hover:scale-110 transition-transform")} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          Đăng xuất
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
