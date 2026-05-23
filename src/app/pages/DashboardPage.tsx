import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, Package, Heart, MapPin, Settings, LogOut, 
  ShoppingBag, CheckCircle2, Clock, MapPin as MapPinIcon
} from 'lucide-react';
import { RippleButton } from '../components/effects/RippleButton';
import { useNavigate } from 'react-router';

const mockOrders = [
  { id: 'ORD-7392', date: 'May 12, 2026', total: 1197, status: 'Delivered', items: 3 },
  { id: 'ORD-6210', date: 'April 28, 2026', total: 849, status: 'Processing', items: 2 },
];

const mockAddresses = [
  { id: 1, type: 'Home', address: '123 Organic Lane, Dehradun, Uttarakhand 248001', isDefault: true },
  { id: 2, type: 'Work', address: '45 Green Tech Park, Sector 62, Noida, UP 201309', isDefault: false },
];

export function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const tabs = [
    { id: 'profile', label: 'Overview', icon: User },
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#fcfbfa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl sm:text-5xl text-[#2a2a2a] mb-2"
          >
            My Account
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#6b6560] text-lg"
          >
            Manage your orders, profile, and preferences.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/4 shrink-0"
          >
            <div className="bg-white rounded-[28px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#e6dfd3] sticky top-28">
              
              {/* User Mini Profile */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[#e6dfd3]">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4a6741] to-[#3a5233] flex items-center justify-center text-white text-xl font-serif shadow-md shrink-0">
                  {user?.name.charAt(0) || 'U'}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#2a2a2a] leading-tight">{user?.name}</h3>
                  <p className="text-sm text-[#6b6560]">{user?.email}</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-[16px] transition-all duration-300 font-medium ${
                        isActive 
                          ? 'bg-[#1c3a2b] text-white shadow-md' 
                          : 'text-[#6b6560] hover:bg-[#f5f0e8] hover:text-[#1c3a2b]'
                      }`}
                    >
                      <tab.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#8b7d6b]'}`} />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>

              <div className="mt-8 pt-8 border-t border-[#e6dfd3]">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-4 px-4 py-3.5 rounded-[16px] text-[#d34a4a] hover:bg-red-50 hover:text-red-600 transition-colors font-medium"
                >
                  <LogOut className="w-5 h-5" />
                  Sign Out
                </button>
              </div>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:w-3/4"
          >
            <AnimatePresence mode="wait">
              {activeTab === 'profile' && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Welcome Banner */}
                  <div className="bg-gradient-to-br from-[#4a6741] to-[#3a5233] rounded-[32px] p-8 sm:p-10 text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                    <div className="relative z-10">
                      <h2 className="font-serif text-3xl sm:text-4xl mb-2">Welcome back, {user?.name.split(' ')[0]}!</h2>
                      <p className="text-white/80 text-lg max-w-lg">
                        We're glad to see you. You have 2 pending orders arriving soon.
                      </p>
                    </div>
                  </div>

                  {/* Quick Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Recent Orders Preview */}
                    <div className="bg-white rounded-[28px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#e6dfd3]">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-serif text-xl text-[#2a2a2a] flex items-center gap-2">
                          <ShoppingBag className="w-5 h-5 text-[#4a6741]" />
                          Recent Order
                        </h3>
                        <button onClick={() => setActiveTab('orders')} className="text-sm font-medium text-[#4a6741] hover:text-[#1c3a2b]">
                          View All
                        </button>
                      </div>
                      <div className="bg-[#fcfbfa] p-5 rounded-[20px] border border-[#e6dfd3]">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <p className="text-sm text-[#6b6560] mb-1">{mockOrders[0].date}</p>
                            <p className="font-semibold text-[#2a2a2a]">{mockOrders[0].id}</p>
                          </div>
                          <span className="px-3 py-1 bg-[#4a6741]/10 text-[#4a6741] rounded-full text-xs font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            {mockOrders[0].status}
                          </span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-[#e6dfd3]">
                          <span className="text-[#6b6560] text-sm">{mockOrders[0].items} items</span>
                          <span className="font-semibold text-[#1c3a2b]">₹{mockOrders[0].total}</span>
                        </div>
                      </div>
                    </div>

                    {/* Default Address Preview */}
                    <div className="bg-white rounded-[28px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#e6dfd3]">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-serif text-xl text-[#2a2a2a] flex items-center gap-2">
                          <MapPinIcon className="w-5 h-5 text-[#4a6741]" />
                          Default Address
                        </h3>
                        <button onClick={() => setActiveTab('addresses')} className="text-sm font-medium text-[#4a6741] hover:text-[#1c3a2b]">
                          Manage
                        </button>
                      </div>
                      <div className="bg-[#fcfbfa] p-5 rounded-[20px] border border-[#e6dfd3]">
                        <p className="font-semibold text-[#2a2a2a] mb-1">{mockAddresses[0].type}</p>
                        <p className="text-[#6b6560] text-sm leading-relaxed mb-4">
                          {mockAddresses[0].address}
                        </p>
                        <button className="text-sm font-medium text-[#2a2a2a] border border-[#e6dfd3] px-4 py-2 rounded-xl hover:bg-[#f5f0e8] transition-colors">
                          Edit Address
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'orders' && (
                <motion.div
                  key="orders"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white rounded-[32px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#e6dfd3]"
                >
                  <h2 className="font-serif text-2xl text-[#2a2a2a] mb-6">Order History</h2>
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="p-6 rounded-[24px] border border-[#e6dfd3] hover:border-[#4a6741]/30 transition-colors group">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="font-semibold text-lg text-[#2a2a2a]">{order.id}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                                order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                              }`}>
                                {order.status === 'Delivered' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                                {order.status}
                              </span>
                            </div>
                            <p className="text-sm text-[#6b6560]">Placed on {order.date}</p>
                          </div>
                          <div className="text-left sm:text-right">
                            <p className="text-sm text-[#6b6560] mb-1">{order.items} items</p>
                            <p className="font-bold text-[#1c3a2b] text-xl">₹{order.total}</p>
                          </div>
                        </div>
                        <div className="flex justify-end pt-4 border-t border-[#f5f0e8]">
                          <RippleButton className="px-5 py-2.5 bg-[#f5f0e8] hover:bg-[#e6dfd3] text-[#2a2a2a] rounded-[14px] text-sm font-semibold transition-colors">
                            View Details
                          </RippleButton>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Placeholder for other tabs */}
              {['wishlist', 'addresses', 'settings'].includes(activeTab) && (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="bg-white rounded-[32px] p-16 text-center shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#e6dfd3]"
                >
                  <div className="w-24 h-24 bg-[#f5f0e8] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Settings className="w-10 h-10 text-[#8b7d6b]" />
                  </div>
                  <h2 className="font-serif text-2xl text-[#2a2a2a] mb-2 capitalize">{activeTab}</h2>
                  <p className="text-[#6b6560]">This section is currently under construction.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
