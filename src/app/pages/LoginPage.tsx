import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, Lock, User, Eye, EyeOff, Wheat, Droplet, Leaf, Loader2 } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-[#4a6741] to-[#3a5233] flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20"
          animate={{ rotate: [12, 18, 12], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Wheat className="w-64 h-64 text-white/30" strokeWidth={1} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20"
          animate={{ rotate: [-12, -18, -12], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <Droplet className="w-48 h-48 text-white/30" strokeWidth={1} />
        </motion.div>
      </div>

      <TiltCard tiltIntensity={4} scaleIntensity={1.01} shadowIntensity={0.2}>
        <div className="max-w-md w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] shadow-[0_8px_40px_rgba(0,0,0,0.12)] p-8 sm:p-10 relative z-10">
          
          {/* Top Logo */}
          <div className="text-center mb-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-white/30 to-white/5 rounded-[28px] flex items-center justify-center backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.1)] border border-white/30 relative group"
            >
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-[#d4a533]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Leaf className="w-10 h-10 text-white drop-shadow-md group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-3xl text-white mb-2 tracking-wide"
            >
              {isLogin ? 'Welcome Back' : 'Join Us'}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/70 font-medium"
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
                  <label className="block text-sm font-medium text-white/90 mb-2">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-white transition-colors" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-3.5 bg-white/5 rounded-2xl border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-white transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 rounded-2xl border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-white transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 bg-white/5 rounded-2xl border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors hover:scale-110 active:scale-95 duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm mt-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative w-4 h-4 rounded border border-white/30 group-hover:border-white/60 transition-colors flex items-center justify-center bg-white/5">
                    <input type="checkbox" className="absolute opacity-0 w-full h-full cursor-pointer peer" />
                    <div className="w-2 h-2 rounded-sm bg-white scale-0 peer-checked:scale-100 transition-transform duration-200" />
                  </div>
                  <span className="text-white/70 group-hover:text-white/90 transition-colors">Remember me</span>
                </label>
                <a href="#" className="text-white/80 hover:text-white font-medium hover:underline decoration-white/30 underline-offset-4 transition-all">
                  Forgot password?
                </a>
              </div>
            )}

            <div className="pt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[52px] flex items-center justify-center bg-white text-[#1c3a2b] rounded-full font-semibold text-[15px] shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-400 ease-out hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:brightness-105 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  isLogin ? 'Sign In' : 'Create Account'
                )}
              </motion.button>
            </div>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-white/60 backdrop-blur-xl">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <MagneticButton strength={0.1}>
                <RippleButton type="button" className="px-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 text-white transition-all font-medium flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </RippleButton>
              </MagneticButton>
              <MagneticButton strength={0.1}>
                <RippleButton type="button" className="px-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 text-white transition-all font-medium flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </RippleButton>
              </MagneticButton>
            </div>

            <p className="text-center text-sm text-white/70 pt-2">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-white font-semibold hover:underline decoration-white/50 underline-offset-4 transition-all"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </form>
        </div>
      </TiltCard>
    </div>
  );
}
