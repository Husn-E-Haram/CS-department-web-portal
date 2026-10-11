import React, { useState } from 'react';
import { X, Eye, EyeOff, Lock, Mail, User, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, KeyRound } from 'lucide-react';
import { CSDepartmentLogo } from './CSDepartmentLogo';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (studentEmail: string) => void;
}

export const LoginModal: React.FC<Props> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register' | 'forgot'>('login');
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Register form state
  const [regName, setRegName] = useState('');
  const [regRoll, setRegRoll] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regDegree, setRegDegree] = useState('BSCS');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [regErrors, setRegErrors] = useState<Record<string, string>>({});
  const [regSuccess, setRegSuccess] = useState(false);
  const [regLoading, setRegLoading] = useState(false);

  // Forgot password state
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSubmitted, setForgotSubmitted] = useState(false);
  const [forgotError, setForgotError] = useState('');

  if (!isOpen) return null;

  const fillDemoCredentials = () => {
    setLoginEmail('student@gcwus.edu.pk');
    setLoginPassword('Password123');
    setLoginError('');
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    if (!loginEmail.trim()) {
      setLoginError('Please enter your university email or student ID.');
      return;
    }
    if (!loginPassword) {
      setLoginError('Please enter your password.');
      return;
    }

    setLoginLoading(true);

    // Simulate authentication check against demo student credentials
    setTimeout(() => {
      setLoginLoading(false);
      const isEmailMatch = loginEmail.trim().toLowerCase() === 'student@gcwus.edu.pk' || loginEmail.trim().toLowerCase() === 'cs-f23-042';
      const isPasswordMatch = loginPassword === 'Password123';

      if (isEmailMatch && isPasswordMatch) {
        onLoginSuccess(loginEmail);
        onClose();
      } else {
        setLoginError('Invalid demo credentials. Please use the documented demo account: student@gcwus.edu.pk / Password123');
      }
    }, 600);
  };

  const validateRegister = () => {
    const errs: Record<string, string> = {};
    if (!regName.trim()) errs.name = 'Full name is required.';
    if (!regRoll.trim()) errs.roll = 'Student ID / Roll number is required.';
    if (!regEmail.trim()) {
      errs.email = 'University email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regEmail)) {
      errs.email = 'Please provide a valid email format (e.g. name@gcwus.edu.pk).';
    }
    if (!regPassword) {
      errs.password = 'Password is required.';
    } else if (regPassword.length < 8) {
      errs.password = 'Password must be at least 8 characters long.';
    }
    if (regPassword !== regConfirmPassword) {
      errs.confirmPassword = 'Passwords do not match.';
    }
    if (!acceptTerms) {
      errs.terms = 'You must accept the student portal terms of use.';
    }
    setRegErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateRegister()) return;

    setRegLoading(true);
    setTimeout(() => {
      setRegLoading(false);
      setRegSuccess(true);
    }, 800);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotError('');
    if (!forgotEmail.trim()) {
      setForgotError('Please enter your registered email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forgotEmail)) {
      setForgotError('Please enter a valid email format.');
      return;
    }
    setForgotSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md my-6 bg-[#FFFDF8] border border-[#B5A18A]/40 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon with Department Emblem */}
        <div className="bg-[#EDE2D1]/80 border-b border-[#B5A18A]/30 px-6 py-5 flex items-center justify-between">
          <CSDepartmentLogo size="sm" showText={true} />
          <button
            onClick={onClose}
            className="p-1.5 text-[#332D27]/70 hover:text-[#332D27] hover:bg-[#EDE2D1] rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        {activeTab !== 'forgot' && (
          <div className="grid grid-cols-2 bg-[#F8F4EC] border-b border-[#EDE2D1]">
            <button
              onClick={() => {
                setActiveTab('login');
                setLoginError('');
              }}
              className={`py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
                activeTab === 'login'
                  ? 'border-[#8A6748] text-[#8A6748] bg-[#FFFDF8]'
                  : 'border-transparent text-[#332D27]/60 hover:text-[#332D27]'
              }`}
            >
              Student Login
            </button>
            <button
              onClick={() => {
                setActiveTab('register');
                setRegErrors({});
              }}
              className={`py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
                activeTab === 'register'
                  ? 'border-[#8A6748] text-[#8A6748] bg-[#FFFDF8]'
                  : 'border-transparent text-[#332D27]/60 hover:text-[#332D27]'
              }`}
            >
              Demo Registration
            </button>
          </div>
        )}

        <div className="p-6">
          {/* ================= LOGIN TAB ================= */}
          {activeTab === 'login' && (
            <div className="space-y-4">
              {/* Demo Credentials Box */}
              <div className="p-3 bg-[#EDE2D1]/50 border border-[#B5A18A]/40 rounded-lg text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[#8A6748] font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Demo Student Credentials</span>
                  </div>
                  <button
                    type="button"
                    onClick={fillDemoCredentials}
                    className="text-[11px] font-semibold text-[#8A6748] underline hover:text-[#332D27] cursor-pointer"
                  >
                    1-Click Auto Fill
                  </button>
                </div>
                <div className="font-mono text-[11px] text-[#332D27]/90 space-y-0.5">
                  <p>Email: <span className="font-bold text-[#332D27]">student@gcwus.edu.pk</span></p>
                  <p>Password: <span className="font-bold text-[#332D27]">Password123</span></p>
                </div>
              </div>

              {loginError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 text-xs text-red-700">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                  <span>{loginError}</span>
                </div>
              )}

              <form onSubmit={handleLoginSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#332D27] mb-1">
                    Student Email or Roll Number *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={loginEmail}
                      onChange={(e) => {
                        setLoginEmail(e.target.value);
                        if (loginError) setLoginError('');
                      }}
                      placeholder="student@gcwus.edu.pk"
                      className="w-full pl-9 pr-3 py-2 text-xs bg-[#FFFDF8] border border-[#B5A18A] rounded-lg focus:outline-hidden focus:border-[#8A6748] focus:ring-1 focus:ring-[#8A6748]"
                    />
                    <Mail className="w-4 h-4 text-[#8A6748] absolute left-2.5 top-2.5" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-[#332D27]">
                      Password *
                    </label>
                    <button
                      type="button"
                      onClick={() => setActiveTab('forgot')}
                      className="text-[11px] text-[#8A6748] hover:underline cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={loginPassword}
                      onChange={(e) => {
                        setLoginPassword(e.target.value);
                        if (loginError) setLoginError('');
                      }}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-10 py-2 text-xs bg-[#FFFDF8] border border-[#B5A18A] rounded-lg focus:outline-hidden focus:border-[#8A6748] focus:ring-1 focus:ring-[#8A6748]"
                    />
                    <Lock className="w-4 h-4 text-[#8A6748] absolute left-2.5 top-2.5" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2.5 top-2.5 text-[#8A6748] hover:text-[#332D27] cursor-pointer"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-[#332D27]/80">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-[#B5A18A] text-[#8A6748] focus:ring-[#8A6748]"
                    />
                    <span>Remember my session</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loginLoading}
                  className="w-full py-2.5 bg-[#8A6748] text-[#FFFDF8] hover:bg-[#725439] rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loginLoading ? (
                    <span>Authenticating...</span>
                  ) : (
                    <>
                      <span>Sign In to Student Portal</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="pt-2 text-center">
                <p className="text-xs text-[#332D27]/70">
                  New student?{' '}
                  <button
                    onClick={() => setActiveTab('register')}
                    className="font-semibold text-[#8A6748] hover:underline cursor-pointer"
                  >
                    Create demo account
                  </button>
                </p>
              </div>
            </div>
          )}

          {/* ================= REGISTER TAB ================= */}
          {activeTab === 'register' && (
            <div className="space-y-4">
              {regSuccess ? (
                <div className="p-5 bg-[#EDE2D1]/60 border border-[#85836A] rounded-lg text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#85836A] text-[#FFFDF8] flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#332D27]">Registration Completed!</h3>
                    <p className="text-xs text-[#332D27]/80 mt-1">
                      Demo account created for <strong>{regName}</strong> ({regRoll}). You can now log in using your registered credentials.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setLoginEmail(regEmail);
                      setLoginPassword(regPassword);
                      setActiveTab('login');
                      setRegSuccess(false);
                    }}
                    className="w-full py-2 bg-[#8A6748] text-[#FFFDF8] rounded text-xs font-semibold hover:bg-[#725439] transition-colors cursor-pointer"
                  >
                    Proceed to Login with Credentials
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-3">
                  <p className="text-xs text-[#8A6748] font-medium">
                    Create a simulated student profile for portal access testing.
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#332D27] mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={regName}
                        onChange={(e) => {
                          setRegName(e.target.value);
                          if (regErrors.name) setRegErrors({ ...regErrors, name: '' });
                        }}
                        placeholder="e.g. Fatima Tariq"
                        className={`w-full px-2.5 py-1.5 text-xs bg-[#FFFDF8] border rounded focus:outline-hidden ${
                          regErrors.name ? 'border-red-500' : 'border-[#B5A18A]'
                        }`}
                      />
                      {regErrors.name && <p className="text-[10px] text-red-600 mt-0.5">{regErrors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#332D27] mb-1">Student Roll No *</label>
                      <input
                        type="text"
                        value={regRoll}
                        onChange={(e) => {
                          setRegRoll(e.target.value);
                          if (regErrors.roll) setRegErrors({ ...regErrors, roll: '' });
                        }}
                        placeholder="CS-F24-088"
                        className={`w-full px-2.5 py-1.5 text-xs bg-[#FFFDF8] border rounded focus:outline-hidden ${
                          regErrors.roll ? 'border-red-500' : 'border-[#B5A18A]'
                        }`}
                      />
                      {regErrors.roll && <p className="text-[10px] text-red-600 mt-0.5">{regErrors.roll}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#332D27] mb-1">University Email *</label>
                    <input
                      type="email"
                      value={regEmail}
                      onChange={(e) => {
                        setRegEmail(e.target.value);
                        if (regErrors.email) setRegErrors({ ...regErrors, email: '' });
                      }}
                      placeholder="fatima.cs24@gcwus.edu.pk"
                      className={`w-full px-2.5 py-1.5 text-xs bg-[#FFFDF8] border rounded focus:outline-hidden ${
                        regErrors.email ? 'border-red-500' : 'border-[#B5A18A]'
                      }`}
                    />
                    {regErrors.email && <p className="text-[10px] text-red-600 mt-0.5">{regErrors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#332D27] mb-1">Enrolled Program</label>
                    <select
                      value={regDegree}
                      onChange={(e) => setRegDegree(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs bg-[#FFFDF8] border border-[#B5A18A] rounded focus:outline-hidden"
                    >
                      <option value="BSCS">BS Computer Science (BSCS)</option>
                      <option value="MSCS">MS Computer Science (MSCS)</option>
                      <option value="BSIT">BS Information Technology (BSIT)</option>
                      <option value="BSSE">BS Software Engineering (BSSE)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#332D27] mb-1">Password *</label>
                      <div className="relative">
                        <input
                          type={showRegPassword ? 'text' : 'password'}
                          value={regPassword}
                          onChange={(e) => {
                            setRegPassword(e.target.value);
                            if (regErrors.password) setRegErrors({ ...regErrors, password: '' });
                          }}
                          placeholder="Min 8 chars"
                          className={`w-full px-2.5 py-1.5 text-xs bg-[#FFFDF8] border rounded focus:outline-hidden ${
                            regErrors.password ? 'border-red-500' : 'border-[#B5A18A]'
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowRegPassword(!showRegPassword)}
                          className="absolute right-2 top-2 text-[#8A6748]"
                        >
                          {showRegPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                      {regErrors.password && <p className="text-[10px] text-red-600 mt-0.5">{regErrors.password}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#332D27] mb-1">Confirm Password *</label>
                      <input
                        type={showRegPassword ? 'text' : 'password'}
                        value={regConfirmPassword}
                        onChange={(e) => {
                          setRegConfirmPassword(e.target.value);
                          if (regErrors.confirmPassword) setRegErrors({ ...regErrors, confirmPassword: '' });
                        }}
                        placeholder="Re-type password"
                        className={`w-full px-2.5 py-1.5 text-xs bg-[#FFFDF8] border rounded focus:outline-hidden ${
                          regErrors.confirmPassword ? 'border-red-500' : 'border-[#B5A18A]'
                        }`}
                      />
                      {regErrors.confirmPassword && (
                        <p className="text-[10px] text-red-600 mt-0.5">{regErrors.confirmPassword}</p>
                      )}
                    </div>
                  </div>

                  <div className="pt-1">
                    <label className="flex items-start gap-2 cursor-pointer text-[11px] text-[#332D27]/80">
                      <input
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={(e) => {
                          setAcceptTerms(e.target.checked);
                          if (regErrors.terms) setRegErrors({ ...regErrors, terms: '' });
                        }}
                        className="mt-0.5 rounded border-[#B5A18A] text-[#8A6748]"
                      />
                      <span>I agree to academic computing policies and university conduct codes.</span>
                    </label>
                    {regErrors.terms && <p className="text-[10px] text-red-600 mt-0.5">{regErrors.terms}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={regLoading}
                    className="w-full py-2 bg-[#8A6748] text-[#FFFDF8] rounded text-xs font-semibold hover:bg-[#725439] transition-colors cursor-pointer disabled:opacity-60"
                  >
                    {regLoading ? 'Registering Account...' : 'Complete Registration'}
                  </button>
                </form>
              )}
            </div>
          )}

          {/* ================= FORGOT PASSWORD TAB ================= */}
          {activeTab === 'forgot' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8A6748]">
                <KeyRound className="w-4 h-4" />
                <span>Password Recovery Assistance</span>
              </div>

              {forgotSubmitted ? (
                <div className="p-4 bg-[#EDE2D1]/60 border border-[#85836A] rounded-lg text-center space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-[#85836A] mx-auto" />
                  <p className="text-xs font-bold text-[#332D27]">Recovery Instructions Dispatched</p>
                  <p className="text-xs text-[#332D27]/80">
                    A simulated password reset link has been dispatched to <strong>{forgotEmail}</strong>. Please check your institutional inbox.
                  </p>
                  <button
                    onClick={() => {
                      setActiveTab('login');
                      setForgotSubmitted(false);
                    }}
                    className="mt-2 text-xs font-semibold text-[#8A6748] underline hover:text-[#332D27] cursor-pointer"
                  >
                    Return to Student Login
                  </button>
                </div>
              ) : (
                <form onSubmit={handleForgotSubmit} className="space-y-3">
                  <p className="text-xs text-[#332D27]/80">
                    Enter the email associated with your student profile. We will simulate sending a secure reset link.
                  </p>

                  <div>
                    <label className="block text-xs font-semibold text-[#332D27] mb-1">Registered Email *</label>
                    <input
                      type="email"
                      value={forgotEmail}
                      onChange={(e) => {
                        setForgotEmail(e.target.value);
                        if (forgotError) setForgotError('');
                      }}
                      placeholder="student@gcwus.edu.pk"
                      className="w-full px-3 py-2 text-xs bg-[#FFFDF8] border border-[#B5A18A] rounded-lg focus:outline-hidden"
                    />
                    {forgotError && <p className="text-xs text-red-600 mt-1">{forgotError}</p>}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab('login')}
                      className="text-xs text-[#8A6748] hover:underline cursor-pointer"
                    >
                      Back to Login
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#8A6748] text-[#FFFDF8] rounded text-xs font-semibold hover:bg-[#725439] transition-colors cursor-pointer"
                    >
                      Send Reset Instructions
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Footer Notice */}
        <div className="bg-[#F8F4EC] border-t border-[#EDE2D1] px-6 py-3 text-center">
          <p className="text-[11px] text-[#8A6748]">
            Government College Women University Sialkot · Academic Portal Demo
          </p>
        </div>
      </div>
    </div>
  );
};
