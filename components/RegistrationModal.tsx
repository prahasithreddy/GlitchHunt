import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Loader2, User, Mail, Calendar, Search, ChevronDown, AlertCircle } from 'lucide-react';
import { saveRegistration, RegistrationData } from '../services/supabaseService';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledEmail: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, prefilledEmail }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: prefilledEmail,
    dateOfBirth: '',
    referralSource: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Update local email when prefilledEmail changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, email: prefilledEmail }));
      setIsSuccess(false);
      setIsSubmitting(false);
      setError(null);
    }
  }, [isOpen, prefilledEmail]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const registrationData: RegistrationData = {
      name: formData.name,
      email: formData.email,
      date_of_birth: formData.dateOfBirth,
      referral_source: formData.referralSource,
    };

    const result = await saveRegistration(registrationData);

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        dateOfBirth: '',
        referralSource: '',
      });
    } else {
      setError(result.error || 'Registration failed. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200 ring-1 ring-slate-900/5">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600 rounded-full transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-12 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-100">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Registration Complete!</h3>
            <p className="text-slate-600 mb-8 max-w-xs mx-auto">
              Welcome to the hunt. You will be the first to know when the hunt begins.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="pt-8 px-8 pb-6 bg-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-indigo-50 rounded-xl border border-indigo-100">
                  <User className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 leading-none">Join the Hunt</h3>
                  <p className="text-sm text-slate-500 mt-1">Create your account to start tracking bugs.</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="px-8 pb-8 space-y-5">

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800 font-medium">{error}</p>
                </div>
              )}

              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                  </div>
                  <input
                    required
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Jane Doe"
                    className="w-full bg-white text-slate-900 border border-slate-200 rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 shadow-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="modal-email" className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                  </div>
                  <input
                    required
                    id="modal-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="name@company.com"
                    className={`w-full text-slate-900 border rounded-xl pl-11 pr-4 py-3 outline-none transition-all shadow-sm ${prefilledEmail
                      ? 'bg-slate-50 border-slate-200 text-slate-500 cursor-not-allowed'
                      : 'bg-white border-slate-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 hover:border-slate-300'
                      }`}
                    readOnly={!!prefilledEmail}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Date of Birth */}
                <div className="space-y-1.5">
                  <label htmlFor="dob" className="text-sm font-semibold text-slate-700 ml-1">Date of Birth</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                    </div>
                    <input
                      required
                      id="dob"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                      className="w-full bg-white text-slate-900 border border-slate-200 rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all hover:border-slate-300 shadow-sm text-sm"
                    />
                  </div>
                </div>

                {/* Source */}
                <div className="space-y-1.5">
                  <label htmlFor="source" className="text-sm font-semibold text-slate-700 ml-1">Referral</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                    </div>
                    <select
                      id="source"
                      required
                      value={formData.referralSource}
                      onChange={(e) => setFormData(prev => ({ ...prev, referralSource: e.target.value }))}
                      className="w-full bg-white text-slate-900 border border-slate-200 rounded-xl pl-11 pr-10 py-3 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all appearance-none hover:border-slate-300 shadow-sm text-sm"
                    >
                      <option value="">Select...</option>
                      <option value="social">Social Media</option>
                      <option value="search">Search Engine</option>
                      <option value="friend">Friend</option>
                      <option value="blog">Blog</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Creating Account...
                    </>
                  ) : (
                    "Complete Registration"
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-4 leading-relaxed px-4">
                  By registering, you agree to our <button type="button" className="text-indigo-600 hover:underline font-medium">Terms of Service</button> and <button type="button" className="text-indigo-600 hover:underline font-medium">Privacy Policy</button>.
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};