import React from 'react';
import { Shield, CheckCircle, Users, Lock, FileText } from 'lucide-react';

export const ProductPage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-16">
    <h1 className="text-4xl font-bold text-slate-900 mb-6">Product Overview</h1>
    <p className="text-xl text-slate-600 mb-12">
      GlitchHunt is the premier platform for community-driven software quality assurance. We bridge the gap between observant users and responsive development teams.
    </p>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><CheckCircle className="text-indigo-600 w-5 h-5"/> Bug Reporting</h3>
        <p className="text-slate-600">Intuitive tools to capture and report bugs with rich context, including screenshots and environment data.</p>
      </div>
      <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><Users className="text-indigo-600 w-5 h-5"/> Community Voting</h3>
        <p className="text-slate-600">Democratized prioritization ensures the most critical issues get the attention they deserve.</p>
      </div>
    </div>
  </div>
);

export const SolutionsPage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-16">
    <h1 className="text-4xl font-bold text-slate-900 mb-6">Solutions</h1>
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">For Startups</h2>
        <p className="text-slate-600 leading-relaxed">
          Launch with confidence. Use GlitchHunt to crowd-source your QA process and find critical bugs before they impact your growth metrics.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">For Enterprise</h2>
        <p className="text-slate-600 leading-relaxed">
          Maintain your reputation. Our enterprise tier allows for private bug bounties and integration with your existing Jira or Linear workflows.
        </p>
      </section>
    </div>
  </div>
);

export const PrivacyPolicyPage: React.FC = () => (
  <div className="max-w-3xl mx-auto px-6 py-16">
    <div className="flex items-center gap-3 mb-8">
      <Lock className="w-8 h-8 text-indigo-600" />
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
    </div>
    <div className="prose prose-slate">
      <p className="mb-4 text-slate-600">Last updated: October 2024</p>
      <p className="mb-4 text-slate-600">
        At GlitchHunt, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website.
      </p>
      <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Data Collection</h3>
      <p className="mb-4 text-slate-600">
        We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services.
      </p>
      <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Use of Information</h3>
      <p className="mb-4 text-slate-600">
        We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect GlitchHunt and our users.
      </p>
    </div>
  </div>
);

export const TermsPage: React.FC = () => (
  <div className="max-w-3xl mx-auto px-6 py-16">
    <div className="flex items-center gap-3 mb-8">
      <FileText className="w-8 h-8 text-indigo-600" />
      <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
    </div>
    <div className="prose prose-slate">
      <p className="mb-4 text-slate-600">
        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the GlitchHunt website operated by GlitchHunt Inc.
      </p>
      <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Accounts</h3>
      <p className="mb-4 text-slate-600">
        When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms.
      </p>
      <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Content</h3>
      <p className="mb-4 text-slate-600">
        Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the Content that you post to the Service.
      </p>
    </div>
  </div>
);