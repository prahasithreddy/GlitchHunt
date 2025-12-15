import React from 'react';
import { 
  Bug, Zap, MessageSquare, TrendingUp, Star, Mail, ArrowRight, 
  Search, Bell, Plus, Filter, ChevronUp, ChevronDown, MoreHorizontal,
  Home, ArrowUpRight, Globe, BarChart2, MessageCircle, Settings,
  Menu, Share2, Bookmark, X, Image as ImageIcon, Video, ShieldAlert
} from 'lucide-react';
import { 
  SiStripe, SiNotion, SiSpotify, SiFigma, SiDropbox, 
  SiAsana, SiSlack, SiVercel, SiNetlify 
} from 'react-icons/si';

interface VariantRendererProps {
  email: string;
  setEmail: (email: string) => void;
  onStartHunting: () => void;
}

// --- Mock Data for UI ---
const mockRedditIssues = [
  { 
    id: 1, 
    subreddit: "g/stripe", 
    user: "u/payment_dev", 
    time: "4h ago", 
    title: "Stripe payment modal freezes on iOS Safari 17 when dark mode is toggled", 
    votes: "1.2k", 
    comments: 89,
    tag: "Critical",
    color: "red",
    hasImage: true
  },
  { 
    id: 2, 
    subreddit: "g/notion", 
    user: "u/productivity_guru", 
    time: "6h ago", 
    title: "PDF export cuts off wide tables and images in landscape mode", 
    votes: "856", 
    comments: 42,
    tag: "Bug",
    color: "orange",
    hasImage: false
  },
  { 
    id: 3, 
    subreddit: "g/spotify", 
    user: "u/music_lover", 
    time: "12h ago", 
    title: "Web player audio stutter on high latency connections (reproducible)", 
    votes: "543", 
    comments: 21,
    tag: "Performance",
    color: "blue",
    hasImage: false
  },
   { 
    id: 4, 
    subreddit: "g/figma", 
    user: "u/designer_steve", 
    time: "1d ago", 
    title: "Auto-layout constraints break when nesting 4+ levels deep", 
    votes: "2.1k", 
    comments: 156,
    tag: "UI/UX",
    color: "purple",
    hasImage: true
  }
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

export const VariantRenderer: React.FC<VariantRendererProps> = ({ email, setEmail, onStartHunting }) => {
  // Default copy text
  const headline = "Where Bugs Go To Die.";
  const subheadline = "The front page of the broken internet. Join thousands of users reporting and fixing glitches in your favorite apps.";
  
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
      {mockRedditIssues.slice(0, 3).map((issue) => (
        <div key={issue.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 flex gap-4">
          <div className="flex flex-col items-center gap-1">
            <TrendingUp className="w-5 h-5 text-indigo-500" />
            <span className="font-bold text-slate-700 text-sm">{issue.votes}</span>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-slate-900 leading-tight">{issue.title}</h4>
            <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
              <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">{issue.subreddit}</span>
              <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {issue.comments} comments</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const DashboardMockUI = () => (
    <div className="w-full h-full bg-[#DAE0E6] flex text-xs select-none cursor-default font-sans text-slate-600 overflow-hidden">
      {/* Sidebar */}
      <div className="w-16 md:w-64 bg-white border-r border-slate-200 flex flex-col shrink-0">
         {/* Sidebar Header Space */}
         <div className="p-0 space-y-1 mt-4">
            <div className="px-3 md:px-6 py-2 bg-slate-100 border-r-2 border-indigo-600 cursor-pointer flex items-center gap-3 text-slate-900">
               <Home className="w-5 h-5" />
               <span className="hidden md:inline font-bold">Home</span>
            </div>
            <div className="px-3 md:px-6 py-2 hover:bg-slate-50 cursor-pointer flex items-center gap-3 text-slate-600">
               <ArrowUpRight className="w-5 h-5" />
               <span className="hidden md:inline font-medium">Popular</span>
            </div>
            <div className="px-3 md:px-6 py-2 hover:bg-slate-50 cursor-pointer flex items-center gap-3 text-slate-600">
               <Globe className="w-5 h-5" />
               <span className="hidden md:inline font-medium">Explore</span>
            </div>
            <div className="px-3 md:px-6 py-2 hover:bg-slate-50 cursor-pointer flex items-center gap-3 text-slate-600">
               <BarChart2 className="w-5 h-5" />
               <span className="hidden md:inline font-medium">All</span>
            </div>
         </div>

         <div className="mt-4 border-t border-slate-100 pt-4">
             <div className="px-6 mb-2 hidden md:flex justify-between items-center group cursor-pointer hover:bg-slate-50 py-1">
                <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Your Communities</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
             </div>
             
             <div className="px-2 space-y-1 hidden md:block">
                 {['g/startups', 'g/webdev', 'g/reactjs', 'g/saas'].map(sub => (
                     <div key={sub} className="px-4 py-1.5 hover:bg-slate-50 rounded-md cursor-pointer flex items-center gap-2 text-slate-600">
                         <div className="w-5 h-5 rounded-full bg-slate-200"></div>
                         <span>{sub}</span>
                     </div>
                 ))}
             </div>
             
             <div className="px-6 mb-2 mt-4 hidden md:flex justify-between items-center group cursor-pointer hover:bg-slate-50 py-1">
                <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Custom Feeds</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
             </div>
         </div>

         <div className="mt-auto p-4 border-t border-slate-100 hidden md:block">
            <div className="text-[10px] text-slate-400">
               GlitchHunt Inc © 2025.
            </div>
         </div>
      </div>
  
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#DAE0E6]">
         {/* Top Bar */}
         <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 sticky top-0 z-20">
            <div className="flex items-center gap-2 md:gap-4 flex-1">
               <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center shrink-0">
                  <Bug className="w-5 h-5 text-white" />
               </div>
               <span className="font-bold text-lg hidden sm:block tracking-tight text-slate-900">glitchhunt</span>
               
               {/* Search Bar */}
               <div className="hidden sm:flex flex-1 max-w-xl mx-4 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <Search className="h-4 w-4 text-slate-400" />
                  </div>
                  <input 
                     type="text" 
                     placeholder="Search GlitchHunt" 
                     className="block w-full rounded-full bg-slate-100 border border-transparent hover:bg-white hover:border-slate-300 py-1.5 pl-10 pr-3 text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:bg-white text-sm transition-all"
                     readOnly
                  />
               </div>
            </div>

            <div className="flex items-center gap-3 text-slate-600">
               <button className="p-2 hover:bg-slate-100 rounded-full"><MessageCircle className="w-5 h-5" /></button>
               <button className="p-2 hover:bg-slate-100 rounded-full"><Plus className="w-5 h-5" /></button>
               <button className="p-2 hover:bg-slate-100 rounded-full"><Bell className="w-5 h-5" /></button>
               <div className="w-8 h-8 rounded-full bg-indigo-100 ml-2 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold relative">
                  JD
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
               </div>
            </div>
         </div>
  
         {/* Feed Content */}
         <div className="flex-1 overflow-y-auto custom-scrollbar flex justify-center">
            <div className="w-full max-w-6xl flex gap-6 p-6">
                
                {/* Center Feed */}
                <div className="flex-1 space-y-4">
                    {/* Create Post Input */}
                    <div className="bg-white p-2 rounded border border-slate-200 flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">JD</div>
                        <input type="text" placeholder="Create Post" className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 rounded px-4 py-2 flex-1 text-sm outline-none transition-all" />
                        <button className="p-2 hover:bg-slate-100 rounded text-slate-400"><ImageIcon className="w-5 h-5" /></button>
                        <button className="p-2 hover:bg-slate-100 rounded text-slate-400"><Video className="w-5 h-5" /></button>
                    </div>

                    {/* Sort Filters */}
                    <div className="flex items-center gap-4 mb-4 text-slate-500 font-bold text-xs pl-1">
                        <span className="text-indigo-600 bg-slate-200 px-3 py-1.5 rounded-full cursor-pointer hover:bg-slate-300">Best</span>
                        <span className="cursor-pointer hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors">Hot</span>
                        <span className="cursor-pointer hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors">New</span>
                        <span className="cursor-pointer hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors">Top</span>
                        <MoreHorizontal className="w-5 h-5 cursor-pointer" />
                    </div>

                    {/* Posts Loop */}
                    {mockRedditIssues.map((issue) => (
                        <div key={issue.id} className="bg-white border border-slate-200 rounded hover:border-slate-400 cursor-pointer transition-colors group">
                            <div className="flex">
                                {/* Vote Column */}
                                <div className="w-10 bg-slate-50/50 border-r border-transparent flex flex-col items-center pt-3 gap-1 rounded-l">
                                    <button className="text-slate-500 hover:text-orange-500 hover:bg-slate-100 p-1 rounded"><ArrowUpRight className="w-5 h-5 rotate-45" /></button>
                                    <span className="text-xs font-bold text-slate-800">{issue.votes}</span>
                                    <button className="text-slate-500 hover:text-indigo-500 hover:bg-slate-100 p-1 rounded"><ArrowUpRight className="w-5 h-5 rotate-[225deg]" /></button>
                                </div>

                                {/* Content Column */}
                                <div className="p-3 flex-1">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                                        <div className="w-5 h-5 rounded-full bg-slate-200"></div>
                                        <span className="font-bold text-slate-900 hover:underline">{issue.subreddit}</span>
                                        <span>•</span>
                                        <span className="hover:underline text-slate-400">Posted by {issue.user}</span>
                                        <span className="text-slate-400">{issue.time}</span>
                                    </div>

                                    <h3 className="text-lg font-medium text-slate-900 mb-2 leading-snug pr-4">{issue.title}</h3>
                                    
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`px-2 py-0.5 rounded-full bg-${issue.color}-100 text-${issue.color}-700 text-[10px] font-bold uppercase border border-${issue.color}-200`}>
                                            {issue.tag}
                                        </span>
                                    </div>

                                    {issue.hasImage && (
                                        <div className="w-full h-64 bg-slate-100 rounded-lg border border-slate-200 mb-3 flex items-center justify-center relative overflow-hidden group-hover:border-slate-300 transition-colors">
                                            <div className="text-slate-300 flex flex-col items-center">
                                                <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                                                <span className="text-xs font-medium">Image Preview</span>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-center gap-1 text-slate-500 font-bold text-xs">
                                        <div className="flex items-center gap-2 hover:bg-slate-100 px-2 py-1.5 rounded transition-colors">
                                            <MessageSquare className="w-4 h-4" />
                                            <span>{issue.comments} Comments</span>
                                        </div>
                                        <div className="flex items-center gap-2 hover:bg-slate-100 px-2 py-1.5 rounded transition-colors">
                                            <Share2 className="w-4 h-4" />
                                            <span>Share</span>
                                        </div>
                                        <div className="flex items-center gap-2 hover:bg-slate-100 px-2 py-1.5 rounded transition-colors">
                                            <Bookmark className="w-4 h-4" />
                                            <span>Save</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Sidebar (Desktop) */}
                <div className="hidden lg:block w-80 shrink-0 space-y-4">
                    {/* Community Info Card */}
                    <div className="bg-white rounded border border-slate-200 overflow-hidden">
                        <div className="h-10 bg-indigo-600"></div>
                        <div className="px-3 pb-3">
                            <div className="flex items-center gap-2 -mt-4 mb-2">
                                <div className="w-10 h-10 bg-white p-1 rounded-full">
                                    <div className="w-full h-full bg-indigo-600 rounded-full flex items-center justify-center text-white"><Bug className="w-5 h-5"/></div>
                                </div>
                                <span className="font-bold text-slate-800 text-sm mt-3">g/GlitchHunt</span>
                            </div>
                            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                                The official community for bug hunters and QA professionals. Report bugs, earn bounties, and improve the web.
                            </p>
                            <div className="flex justify-between text-xs text-slate-900 font-bold border-b border-slate-100 pb-3 mb-3">
                                <div className="flex flex-col">
                                    <span>2.4m</span>
                                    <span className="font-normal text-slate-500">Hunters</span>
                                </div>
                                <div className="flex flex-col">
                                    <span>4.2k</span>
                                    <span className="font-normal text-slate-500">Online</span>
                                </div>
                            </div>
                            <button className="w-full bg-indigo-600 text-white font-bold py-1.5 rounded-full text-xs hover:bg-indigo-700 transition-colors">Join Community</button>
                        </div>
                    </div>

                    {/* Recent Posts Card */}
                    <div className="bg-white rounded border border-slate-200">
                        <div className="p-3 border-b border-slate-100">
                            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Recent Activity</span>
                        </div>
                        <div>
                            {[
                                { title: "New bounty program for Fintech apps announced", sub: "g/Bounties", up: 45 },
                                { title: "How to inspect WebSocket frames in Chrome?", sub: "g/webdev", up: 12 },
                                { title: "Critical auth bypass found in popular library", sub: "g/netsec", up: 892 },
                            ].map((item, i) => (
                                <div key={i} className="px-3 py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 cursor-pointer flex gap-3">
                                    {/* Thumbnail Placeholder */}
                                    {i === 2 ? (
                                        <div className="w-16 h-12 bg-slate-200 rounded shrink-0"></div>
                                    ) : null}
                                    <div>
                                        <div className="font-medium text-xs text-slate-800 mb-1 leading-snug">{item.title}</div>
                                        <div className="text-[10px] text-slate-500">{item.sub} • {item.up} upvotes</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-2">
                             <button className="w-full py-1.5 text-xs font-bold text-indigo-600 hover:bg-slate-50 rounded">View All</button>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="px-2 text-[10px] text-slate-500 space-y-2">
                        <div className="flex flex-wrap gap-2">
                            <span>User Agreement</span>
                            <span>Privacy Policy</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span>Content Policy</span>
                            <span>Moderator Code of Conduct</span>
                        </div>
                        <div className="pt-2 border-t border-slate-200">
                            GlitchHunt Inc © 2025. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </div>
  );

  // --- RENDERING LOGIC ---
  return (
    <>
      <header className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            {headline}
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {subheadline}
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
        </div>
      </header>

      {/* Trusted Companies Scrolling Section */}
      <section className="bg-white py-12 border-y border-slate-200 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider">Trusted by teams at</p>
        </div>
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex animate-scroll gap-16 items-center">
            {/* First set of logos */}
            <div className="flex gap-16 items-center shrink-0">
              <SiStripe className="h-10 w-auto text-slate-700" />
              <SiNotion className="h-10 w-auto text-slate-700" />
              <SiSpotify className="h-10 w-auto text-slate-700" />
              <SiFigma className="h-10 w-auto text-slate-700" />
              <SiDropbox className="h-10 w-auto text-slate-700" />
              <SiAsana className="h-10 w-auto text-slate-700" />
              <SiSlack className="h-10 w-auto text-slate-700" />
              <SiVercel className="h-10 w-auto text-slate-700" />
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-16 items-center shrink-0">
              <SiStripe className="h-10 w-auto text-slate-700" />
              <SiNotion className="h-10 w-auto text-slate-700" />
              <SiSpotify className="h-10 w-auto text-slate-700" />
              <SiFigma className="h-10 w-auto text-slate-700" />
              <SiDropbox className="h-10 w-auto text-slate-700" />
              <SiAsana className="h-10 w-auto text-slate-700" />
              <SiSlack className="h-10 w-auto text-slate-700" />
              <SiVercel className="h-10 w-auto text-slate-700" />
            </div>
          </div>
        </div>
      </section>

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
        <div className="max-w-7xl mx-auto text-center">
           <div className="mb-12">
             <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Product Preview</span>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">See how it works</h2>
             <p className="text-slate-600 max-w-2xl mx-auto">A clean, intuitive interface built for rapid bug reporting and community triage.</p>
           </div>
           
           <div className="relative rounded-xl border border-slate-200 bg-slate-50 shadow-2xl overflow-hidden group max-w-7xl mx-auto h-[800px]">
             {/* Browser Chrome Placeholder */}
             <div className="bg-white border-b border-slate-200 px-4 py-3 flex gap-4 items-center">
               <div className="flex gap-1.5">
                 <div className="w-3 h-3 rounded-full bg-slate-200 group-hover:bg-red-400 transition-colors"></div>
                 <div className="w-3 h-3 rounded-full bg-slate-200 group-hover:bg-yellow-400 transition-colors"></div>
                 <div className="w-3 h-3 rounded-full bg-slate-200 group-hover:bg-green-400 transition-colors"></div>
               </div>
               <div className="flex-1 bg-slate-50 px-3 py-1.5 rounded-lg text-xs text-slate-500 flex items-center justify-center border border-slate-200 font-mono">
                  glitchhunt.com/g/all
               </div>
               <div className="w-16"></div>
             </div>
             
             {/* Actual Dashboard UI Implementation */}
             <div className="relative w-full h-full bg-[#DAE0E6] text-left">
                <DashboardMockUI />
             </div>
           </div>
        </div>
      </section>
    </>
  );
};