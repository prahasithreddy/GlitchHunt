import React from 'react';
import { 
  Bug, Zap, MessageSquare, TrendingUp, Star, Mail, ArrowRight
} from 'lucide-react';
import { CopySuggestion } from '../services/geminiService';

interface VariantRendererProps {
  copy: CopySuggestion;
  email: string;
  setEmail: (email: string) => void;
  onStartHunting: () => void;
}

// --- Mock Data for UI ---
const mockIssues = [
  { id: 1, title: "Login button overlaps on iPhone 14", app: "FoodDash", votes: 432, comments: 24 },
  { id: 2, title: "Dark mode causes text to be invisible", app: "BankSafe", votes: 210, comments: 15 },
  { id: 3, title: "API rate limit incorrect in documentation", app: "DevCloud", votes: 89, comments: 45 },
];

const features = [
  {
    title: "Bug Posting",
    description: "Submit detailed bug reports with screenshots, logs, and reproduction steps in seconds to get them fixed faster.",
    icon: Bug
  },
  {
    title: "Issue Tracking",
    description: "Follow the lifecycle of a bug from discovery to resolution with real-time status updates and notifications.",
    icon: TrendingUp
  },
  {
    title: "User Conversation",
    description: "Connect with other hunters, share workarounds, and collaborate on fixes in thread-based discussions.",
    icon: MessageSquare
  }
];

export const VariantRenderer: React.FC<VariantRendererProps> = ({ copy, email, setEmail, onStartHunting }) => {
  
  const handleStartHuntingClick = () => {
    if (email) {
      onStartHunting();
    } else {
      // Focus the input if empty (simple validation)
      const input = document.getElementById('email-input');
      input?.focus();
    }
  };

  // --- SUB-COMPONENTS ---

  const MockFeed = () => (
    <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {mockIssues.map((issue) => (
        <div key={issue.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 flex gap-4">
          <div className="flex flex-col items-center gap-1">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <span className="font-bold text-gray-700 text-sm">{issue.votes}</span>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 leading-tight">{issue.title}</h4>
            <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
              <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">{issue.app}</span>
              <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {issue.comments} comments</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // --- RENDERING LOGIC ---
  return (
    <>
      <header className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            {copy.headline}
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {copy.subheadline}
          </p>
          
          <div className="flex flex-col gap-4 mb-8">
            <div className="relative group w-full max-w-lg">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                
                <div className="relative flex flex-col sm:flex-row p-1.5 bg-white rounded-2xl shadow-xl ring-1 ring-gray-900/5 items-center gap-2">
                    <div className="flex-1 flex items-center px-3 h-14 w-full">
                        <Mail className="w-5 h-5 text-slate-400 shrink-0 ml-1" />
                        <input 
                          id="email-input"
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@work-email.com" 
                          className="w-full bg-transparent border-none px-3 py-2 text-slate-900 placeholder-slate-400 outline-none focus:ring-0 text-base"
                        />
                    </div>
                    <button 
                      onClick={handleStartHuntingClick}
                      className="w-full sm:w-auto bg-slate-900 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 whitespace-nowrap group"
                    >
                      Start Hunting
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
            
            <p className="text-sm font-semibold text-indigo-600 flex items-center gap-1.5 pl-2 mt-2">
              <Zap className="w-4 h-4 fill-indigo-100" /> 
              <span>Early hunters get lifetime free access <span className="text-indigo-400 font-medium opacity-80">(LIMITED SEATS)</span></span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
               {[11, 29, 33, 45].map((i) => (
                 <img 
                   key={i} 
                   src={`https://i.pravatar.cc/150?img=${i}`} 
                   alt="Hunter" 
                   className="w-10 h-10 rounded-full border-2 border-white shadow-sm" 
                 />
               ))}
            </div>
            <div>
               <div className="flex items-center gap-0.5 mb-1">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
               </div>
               <p className="text-sm font-semibold text-slate-700">Trusted by 734+ testers</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-indigo-100 rounded-full blur-3xl opacity-50" />
          <div className="relative bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <MockFeed />
          </div>
        </div>
      </header>

      {/* Features Section - Clean Style */}
      <section className="bg-slate-50 py-24 px-6 border-t border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to squash bugs</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Powerful tools designed for the modern developer community.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                    <feature.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Product Screenshot Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
           <div className="mb-12">
             <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Product Preview</span>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">See how it works</h2>
             <p className="text-slate-600 max-w-2xl mx-auto">A clean, intuitive interface built for rapid bug reporting and community triage.</p>
           </div>
           
           <div className="relative rounded-xl border border-slate-200 bg-slate-50 shadow-2xl overflow-hidden group">
             {/* Browser Chrome Placeholder */}
             <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex gap-2 items-center">
               <div className="flex gap-1.5">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
               </div>
               <div className="ml-4 bg-white px-3 py-1 rounded text-xs text-slate-400 w-64 text-left border border-slate-200">glitchhunt.com/dashboard</div>
             </div>
             
             {/* Actual Image Placeholder */}
             <div className="relative aspect-video bg-slate-50">
                <img 
                  src="https://placehold.co/1200x800/f8fafc/cbd5e1?text=GlitchHunt+Dashboard+UI" 
                  alt="GlitchHunt Application Dashboard" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient for effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
             </div>
           </div>
        </div>
      </section>
    </>
  );
};