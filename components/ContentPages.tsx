import React from 'react';
import { Shield, CheckCircle, Users, Lock, FileText, MessageSquare, TrendingUp, Zap, Search } from 'lucide-react';

export const ProductPage: React.FC = () => (
  <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Product Overview</h1>
    <p className="text-lg sm:text-xl text-gray-400 mb-12 sm:mb-16 leading-relaxed">
      GlitchHunt is the unified workspace for modern teams. Combine documentation, updates, and discussions in one platform designed for clarity and speed.
    </p>
    
    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
      <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all">
        <FileText className="text-indigo-400 w-6 h-6 sm:w-8 sm:h-8 mb-4" />
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Living Documentation</h3>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
          Create rich, collaborative docs with version history, @mentions, and powerful search. Documentation that stays up-to-date.
        </p>
      </div>
      
      <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all">
        <TrendingUp className="text-purple-400 w-6 h-6 sm:w-8 sm:h-8 mb-4" />
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Team Updates Feed</h3>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
          Share quick wins, announcements, and progress. Like an internal Twitter without the noise—everything stays organized.
        </p>
      </div>
      
      <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all">
        <MessageSquare className="text-pink-400 w-6 h-6 sm:w-8 sm:h-8 mb-4" />
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Threaded Discussions</h3>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
          Deep conversations organized by topic. Forums that make it easy to find and reference past discussions.
        </p>
      </div>
      
      <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all">
        <Search className="text-cyan-400 w-6 h-6 sm:w-8 sm:h-8 mb-4" />
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Unified Search</h3>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
          Find anything instantly across docs, updates, and discussions. One search bar for your entire team's knowledge.
        </p>
      </div>
    </div>

    <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6 sm:p-8 lg:p-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Why teams choose GlitchHunt</h2>
      <ul className="space-y-3 sm:space-y-4">
        {[
          "Replace 6+ tools with one unified workspace",
          "Onboard new team members in hours, not days",
          "Never lose context in endless Slack threads",
          "Built for remote and hybrid teams",
          "Integrates with your existing workflow"
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const SolutionsPage: React.FC = () => (
  <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Solutions</h1>
    <p className="text-lg sm:text-xl text-gray-400 mb-12 sm:mb-16 leading-relaxed">
      Purpose-built for engineering, product, and operations teams who need to move fast without losing alignment.
    </p>
    
    <div className="space-y-12 sm:space-y-16">
      <section className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 lg:p-10">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">For Startups</h2>
        </div>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6">
          Move fast without breaking alignment. GlitchHunt gives your lean team the structure of a big company without the overhead.
        </p>
        <ul className="space-y-3">
          {[
            "Start free, scale as you grow",
            "Document your product and processes as you build",
            "Keep investors and stakeholders in the loop",
            "Ship faster with better internal communication"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </section>
      
      <section className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 lg:p-10">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">For Scale-ups</h2>
        </div>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6">
          Growing from 20 to 200 people? Keep everyone aligned without drowning in tools, meetings, and message threads.
        </p>
        <ul className="space-y-3">
          {[
            "Multi-workspace support for different teams",
            "Advanced permissions and access controls",
            "Integrations with Slack, Linear, and GitHub",
            "Custom onboarding flows for new hires"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 lg:p-10">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">For Enterprise</h2>
        </div>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6">
          Enterprise-grade security, compliance, and support. Deploy on-premise or in your private cloud.
        </p>
        <ul className="space-y-3">
          {[
            "SSO and SAML authentication",
            "SOC 2 Type II certified",
            "Dedicated success manager",
            "Custom SLAs and uptime guarantees",
            "Advanced analytics and audit logs"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </div>
);

export const PrivacyPolicyPage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
    <div className="flex items-center gap-3 mb-6 sm:mb-8">
      <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Privacy Policy</h1>
    </div>
    <div className="prose prose-invert max-w-none">
      <p className="mb-4 text-sm sm:text-base text-gray-400">Last updated: December 2024</p>
      <p className="mb-6 text-sm sm:text-base text-gray-300 leading-relaxed">
        At GlitchHunt, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
      </p>
      
      <div className="space-y-8">
        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Information We Collect</h3>
          <p className="mb-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            We collect information you provide directly to us, including when you create an account, post content, or communicate with other users. This includes your name, email address, and any content you create within the platform.
          </p>
        </section>

        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">How We Use Your Information</h3>
          <p className="mb-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, to monitor and analyze trends, and to protect GlitchHunt and our users.
          </p>
        </section>

        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Data Security</h3>
          <p className="mb-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All data is encrypted in transit and at rest.
          </p>
        </section>

        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Your Rights</h3>
          <p className="mb-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            You have the right to access, correct, or delete your personal information. You can export your data at any time or request account deletion from your settings.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export const TermsPage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
    <div className="flex items-center gap-3 mb-6 sm:mb-8">
      <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Terms of Service</h1>
    </div>
    <div className="prose prose-invert max-w-none">
      <p className="mb-6 text-sm sm:text-base text-gray-300 leading-relaxed">
        Please read these Terms of Service ("Terms") carefully before using the GlitchHunt platform operated by GlitchHunt Inc.
      </p>
      
      <div className="space-y-8">
        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Acceptance of Terms</h3>
          <p className="mb-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            By accessing or using GlitchHunt, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
          </p>
        </section>

        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Accounts</h3>
          <p className="mb-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your password and for any activities under your account.
          </p>
        </section>

        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">User Content</h3>
          <p className="mb-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            You retain all rights to the content you post on GlitchHunt. By posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, store, and display your content as necessary to provide the service.
          </p>
        </section>

        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Acceptable Use</h3>
          <p className="mb-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            You agree not to misuse the GlitchHunt service. This includes not engaging in illegal activities, not harassing other users, and not attempting to gain unauthorized access to the service.
          </p>
        </section>

        <section>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">Termination</h3>
          <p className="mb-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            We may terminate or suspend your account and access to the service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
          </p>
        </section>
      </div>
    </div>
  </div>
);