import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, Lock, User, Eye, EyeOff, Sprout, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MagneticButton } from '../components/effects/MagneticButton';

import { RippleButton } from '../components/effects/RippleButton';
import { TiltCard } from '../components/effects/TiltCard';
import { useAuth } from '../contexts/AuthContext';

export function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || (!isLogin && !name)) return;
    
    setIsSubmitting(true);
    try {
      await login(email);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 relative overflow-hidden bg-[#1c271b]">
      {/* Background Decor - Organic Image Parallax */}
      <motion.div 
        animate={{ scale: [1.05, 1.08, 1.05], x: ['-2%', '0%', '-2%'], y: ['-2%', '0%', '-2%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-10%] z-0 bg-[url('/images/login-bg.png')] bg-cover bg-center opacity-20 blur-[8px]"
      />
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[rgba(40,70,40,0.82)] to-[rgba(60,90,55,0.72)] pointer-events-none mix-blend-multiply" />

      {/* Top Left Decorative Circle */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[12%] left-[12%] w-[42px] h-[42px] rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] backdrop-blur-[10px] shadow-[0_0_25px_rgba(180,255,180,0.08)] pointer-events-none z-0"
      />

      {/* Floating blurred blobs/light gradients */}
      <motion.div
        animate={{ rotate: [0, 90, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#78b478]/20 blur-[120px] pointer-events-none z-0"
      />
      <motion.div
        animate={{ rotate: [0, -90, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#d4a533]/15 blur-[120px] pointer-events-none z-0"
      />

      <TiltCard tiltIntensity={2} scaleIntensity={1.01} shadowIntensity={0.1}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[36px] shadow-[0_20px_60px_rgba(0,0,0,0.18)] p-8 sm:p-10 relative z-10"
        >
          
          {/* Top Logo - Option 1: Minimal premium organic brand illustration */}
          <div className="text-center mb-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{ 
                duration: 0.6, 
                ease: [0.25, 0.4, 0.25, 1],
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-20 h-20 mx-auto mb-6 bg-[rgba(255,255,255,0.08)] rounded-[24px] flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(120,180,120,0.15)] border border-[rgba(255,255,255,0.14)] relative group overflow-hidden"
            >
              <div className="absolute inset-0 rounded-[24px] bg-gradient-to-tr from-[#78b478]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Sprout className="w-9 h-9 text-[rgba(255,255,255,0.92)] drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] transition-transform duration-700 group-hover:scale-105" strokeWidth={1.2} />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="font-serif text-[32px] text-white mb-2 tracking-wide font-medium"
            >
              {isLogin ? 'Welcome Back' : 'Join Us'}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="text-[rgba(255,255,255,0.72)] font-medium text-[15px]"
            >
              {isLogin ? 'Sign in to your organic journey' : 'Start your organic journey today'}
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <AnimatePresence mode="popLayout">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginBottom: 20 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  className="overflow-hidden"
                >
                  <label className="block text-[13px] font-medium text-[rgba(255,255,255,0.72)] mb-2 tracking-wide uppercase">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#d8ffe1] group-focus-within:text-white transition-all duration-300" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full pl-[3.25rem] pr-4 py-3.5 bg-[rgba(20,25,20,0.85)] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] rounded-[18px] border border-[rgba(120,255,120,0.2)] text-white caret-[#9effa1] placeholder-[rgba(255,255,255,0.45)] focus:outline-none focus:border-[rgba(120,255,120,0.4)] focus:bg-[rgba(20,25,20,0.95)] focus:ring-[3px] focus:ring-[rgba(120,255,120,0.08)] transition-all duration-300 ease-out login-input"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-[13px] font-medium text-[rgba(255,255,255,0.72)] mb-2 tracking-wide uppercase">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#d8ffe1] group-focus-within:text-white transition-all duration-300" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  className="w-full pl-[3.25rem] pr-4 py-3.5 bg-[rgba(20,25,20,0.85)] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] rounded-[18px] border border-[rgba(120,255,120,0.2)] text-white caret-[#9effa1] placeholder-[rgba(255,255,255,0.45)] focus:outline-none focus:border-[rgba(120,255,120,0.4)] focus:bg-[rgba(20,25,20,0.95)] focus:ring-[3px] focus:ring-[rgba(120,255,120,0.08)] transition-all duration-300 ease-out login-input"
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-medium text-[rgba(255,255,255,0.72)] mb-2 tracking-wide uppercase">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#d8ffe1] group-focus-within:text-white transition-all duration-300" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-[3.25rem] pr-12 py-3.5 bg-[rgba(20,25,20,0.85)] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] rounded-[18px] border border-[rgba(120,255,120,0.2)] text-white caret-[#9effa1] placeholder-[rgba(255,255,255,0.45)] focus:outline-none focus:border-[rgba(120,255,120,0.4)] focus:bg-[rgba(20,25,20,0.95)] focus:ring-[3px] focus:ring-[rgba(120,255,120,0.08)] transition-all duration-300 ease-out login-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d8ffe1] hover:text-white transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm mt-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative w-4 h-4 rounded-sm border border-[rgba(210,240,210,0.22)] group-hover:border-[rgba(255,255,255,0.4)] transition-colors flex items-center justify-center bg-black/10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]">
                    <input type="checkbox" className="absolute opacity-0 w-full h-full cursor-pointer peer" />
                    <div className="w-2 h-2 rounded-[2px] bg-[#78b478] scale-0 peer-checked:scale-100 transition-transform duration-300" />
                  </div>
                  <span className="text-[rgba(255,255,255,0.72)] group-hover:text-white transition-colors duration-300 text-[13px]">Remember me</span>
                </label>
                <a href="#" className="text-[rgba(255,255,255,0.72)] hover:text-white text-[13px] font-medium hover:underline decoration-[rgba(255,255,255,0.3)] underline-offset-4 transition-all duration-300">
                  Forgot password?
                </a>
              </div>
            )}

            <div className="pt-5">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[54px] flex items-center justify-center bg-gradient-to-r from-white to-white/90 text-[#1c271b] rounded-full font-semibold text-[15px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-400 ease-out hover:shadow-[0_12px_24px_rgba(255,255,255,0.2)] hover:brightness-110 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  isLogin ? 'Sign In' : 'Create Account'
                )}
              </motion.button>
            </div>

            <div className="relative py-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[rgba(210,240,210,0.22)]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-[rgba(255,255,255,0.72)] backdrop-blur-3xl text-[12px] uppercase tracking-wider">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <MagneticButton strength={0.1}>
                <RippleButton type="button" className="w-full py-[14px] bg-[rgba(255,255,255,0.06)] border border-[rgba(210,240,210,0.22)] rounded-[18px] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(210,240,210,0.4)] text-[rgba(255,255,255,0.92)] transition-all font-medium flex items-center justify-center gap-2.5 text-[14px]">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </RippleButton>
              </MagneticButton>
              <MagneticButton strength={0.1}>
                <RippleButton type="button" className="w-full py-[14px] bg-[rgba(255,255,255,0.06)] border border-[rgba(210,240,210,0.22)] rounded-[18px] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(210,240,210,0.4)] text-[rgba(255,255,255,0.92)] transition-all font-medium flex items-center justify-center gap-2.5 text-[14px]">
                  <svg className="w-[18px] h-[18px] text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </RippleButton>
              </MagneticButton>
            </div>

            <p className="text-center text-[14px] text-[rgba(255,255,255,0.72)] pt-3">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-white font-medium hover:underline decoration-[rgba(255,255,255,0.5)] underline-offset-4 transition-all duration-300"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </form>
        </motion.div>
      </TiltCard>
    </div>
  );
}

