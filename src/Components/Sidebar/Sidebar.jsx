import { useState } from "react"
import {
  Bolt,
  LayoutGrid,
  CheckSquare,
  MessageCircle,
  Trophy,
  Settings,
  Plus,
  Moon,
} from "lucide-react"

export default function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div
      className={`flex h-screen w-[270px] flex-col border-r transition-all duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
      style={{ position: 'sticky', top: '0' }}
    >
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Bolt size={18} />
          </div>
          <span className="text-2xl py-10 font-semibold">Hiphonic</span>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-4">
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="text-Meniot font-bold px-2 text-md py-2 tracking-wider">
              MENU
            </div>
            <nav className="space-y-1">
              <button className="flex w-full justify-start gap-2 p-2 text-left hover:bg-accent" style={{ backgroundColor: '#E5E7EB' }}>
                <LayoutGrid size={20} className="mt-1" style={{ color: '#2563EB' }} />
                <span style={{ color: '#2563EB' }} className="font-bold mb-2">Dashboard</span>
              </button>
              <button className="flex w-full justify-start gap-2 p-2 text-left hover:bg-accent">
                <CheckSquare className="mt-2" size={20} />
                <span className="mt-2">My Tasks</span>
              </button>
              <button className="flex w-full justify-start gap-2 p-2 text-left hover:bg-accent">
                <MessageCircle className="mt-2" size={20} />
                <span className="mt-2">Message</span>
              </button>
              <button className="flex w-full justify-start gap-2 p-2 text-left hover:bg-accent">
                <Trophy className="mt-2" size={20} />
                <span className="mt-2">Goals</span>
              </button>
            </nav>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between px-2">
              <span className="text-Meniot font-bold px-2 text-md py-2 tracking-wider">
                PROJECTS
              </span>
              <button className="h-6 w-6">
                <Plus size={16} style={{ color: '#2563EB' }} />
              </button>
            </div>
            <nav className="space-y-1">
              <button className="flex items-center w-full justify-start gap-2 p-2 text-left hover:bg-accent">
                <div className="h-2 w-2 rounded-full bg-Sicake" />
                <span className="flex-1 font-bold">Website Design</span>
              </button>
              <button className="flex items-center w-full justify-start gap-2 p-2 text-left hover:bg-accent">
                <div className="h-2 w-2 rounded-full bg-Macoke" />
                <span className="flex-1 font-bold">SEO Analytics</span>
              </button>
              <button className="flex items-center w-full justify-start gap-2 p-2 text-left hover:bg-accent">
                <div className="h-2 w-2 rounded-full bg-Hiphone" />
                <span className="flex-1 font-bold">Hiphonic App</span>
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t p-4">
        <nav className="space-y-1">
          <button className="flex w-full justify-start gap-2 p-2 text-left hover:bg-accent">
            <Settings size={20} />
            <span>Settings</span>
          </button>
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-sm flex items-center">
              <Moon size={16} className="mr-1 w-5 h-5" />
              Dark Mode
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
              />
              <div className={`w-11 h-6 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-gray-200'} transition`} />
              <div className={`absolute w-4 h-4 bg-white rounded-full shadow transition ${isDarkMode ? 'translate-x-5' : 'translate-x-1'}`} />
            </label>
          </div>
        </nav>
      </div>
    </div>
  )
}
