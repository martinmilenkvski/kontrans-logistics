import { useState } from "react";
import {
  MenuIcon,
  Share2Icon,
  ChevronDownIcon,
  HomeIcon,
  BellIcon,
  SearchIcon,
  InfoIcon,
} from "lucide-react";

export const PlaceholderAvatar = () => (
  <svg
    className="w-full h-full text-gray-400 bg-gray-100"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const userImage = "";

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-auto md:flex`}
      >
        <div className="flex flex-col h-full">
          <div className="px-4 py-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-[#0F1526] text-white h-8 w-8 rounded-full flex items-center justify-center font-medium text-sm">
                MM
              </div>
              <div>
                <div className="font-medium">Преглед</div>
                <div className="text-sm text-gray-500">на пратки</div>
              </div>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-2 px-3">
              {[
                { icon: HomeIcon, label: "Дома" },
                { icon: BellIcon, label: "Пратки" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6 space-y-6">
          {/* Header */}
          <header className="flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden p-2 rounded-lg bg-white shadow-sm"
            >
              <MenuIcon className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                  {userImage ? (
                    <img
                      src={userImage}
                      alt="User avatar"
                      className="w-full h-full object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  ) : (
                    <PlaceholderAvatar />
                  )}
                </div>
                <div>
                  <div className="font-medium">Никола Николовски</div>
                  <div className="text-sm text-gray-500">Адинг Инженеринг</div>
                </div>
              </div>
              <div className="relative">
                <input
                  type="search"
                  placeholder="Внесете број на контејнер ..."
                  className="w-[280px] pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20"
                />
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
          </header>

          {/* Date and Tasks Section */}
          <div className="flex items-center justify-between bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-6">
              <div>
                <div className="text-3xl font-semibold">
                  {new Date().getDate()}
                </div>
                <div className="text-sm text-gray-500">
                  {new Date().toLocaleDateString("en-US", { weekday: "short" })}
                  ,
                  <br />
                  {new Date().toLocaleDateString("en-US", { month: "long" })}
                </div>
              </div>
              <button className="px-6 py-2 bg-[#FF6B6B] text-white rounded-xl hover:bg-[#FF6B6B]/90 transition-colors">
                Детали за вашите пратки
              </button>
            </div>
            <div className="text-right">
              <h2 className="text-xl font-medium">Aктуелни пратки</h2>
              <div className="text-gray-500">
                <span className="font-semibold text-green-600">12</span> Во
                транспорт
                <span className="mx-2">•</span>
                <span className="font-semibold text-blue-600">5</span> Планирани
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Credit Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-lg">СМЕТКА</div>
                  <div className="text-sm text-gray-500">Број на сметка</div>
                  <div className="mt-2 text-gray-600">**** 2719</div>
                </div>
                <button className="p-1 rounded-lg hover:bg-gray-100">
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-6 flex gap-2">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Промена
                </button>
                <button className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  Потврди
                </button>
              </div>
              <div className="mt-6 border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Вид на договор</div>
                    <div className="font-medium">Контејнерски транспорт</div>
                  </div>
                  <button className="p-1 rounded-lg hover:bg-gray-100">
                    <Share2Icon className="w-4 h-4 text-[#FF6B6B]" />
                  </button>
                </div>
                <div className="text-xs text-[#FF6B6B] mt-2">
                  30 дена валута
                </div>
              </div>
            </div>
            {/* ЕТD period */}{" "}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-semibold">Ден 36</div>
                  <div className="text-sm text-gray-500">Вкупно патување</div>
                </div>
                <InfoIcon className="text-gray-400" />
              </div>

              <div className="mt-6">
                <select className="w-full p-2 border rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20">
                  <option>Денови</option>
                  <option>Месеци</option>
                </select>
              </div>
            </div>
            {/* Progress Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <div className="font-medium">11 Дена</div>
                  <div className="text-sm text-gray-500">
                    Денови до пристигнување
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 13 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 w-2 rounded-full ${
                          i < 7 ? "bg-[#FF6B6B]" : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="relative h-16 w-16">
                  <svg className="w-full h-full" viewBox="0 0 32 32">
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      fill="none"
                      stroke="#FF6B6B"
                      strokeWidth="4"
                      strokeDasharray="88"
                      strokeDashoffset="56"
                      transform="rotate(-90 16 16)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-medium">36%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
