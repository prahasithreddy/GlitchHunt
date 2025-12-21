<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🐛 GlitchHunt

**Where bugs go to die.**

GlitchHunt is a community-driven bug reporting and tracking platform. It serves as the front page of the broken internet, where hunters collaborate to identify, document, and resolve glitches in their favorite apps.

---

## ✨ Features

- 🎭 **Dynamic UI Variants**: Toggle between different interfaces—Reddit (Social), Confluence (Docs), and Discourse (Forums)—tailored to your workflow.
- 🤖 **AI-Powered Insights**: Integrated with **Google Gemini AI** to assist in generating high-quality copy and bug analysis via AI Studio capabilities.
- 🧱 **Scalable Backend**: Powered by **Supabase** for real-time data storage and user registration tracking.
- 📊 **Insightful Analytics**: Full **Google Analytics 4** integration to monitor performance and user engagement.
- 📱 **Premium Responsive Design**: A modern, sleek interface built with React and Tailwind CSS, optimized for all devices.

## 🚀 Getting Started

### Prerequisites

- **Node.js**: (v18 or higher recommended)
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/prahasithreddy/GlitchHunt.git
   cd GlitchHunt
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add the following:
   ```env
   # Google Gemini API Key
   GEMINI_API_KEY=your_gemini_api_key_here

   # Supabase Configuration
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Google Analytics
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

4. **Initialize Supabase Database:**
   Run the SQL provided in `supabase-setup.sql` in your Supabase SQL Editor to set up the necessary tables (user_registrations, etc.).

5. **Start the development server:**
   ```bash
   npm run dev
   ```

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS (Lucide Icons, React Icons)
- **Backend/DB**: Supabase
- **AI**: Google Generative AI (Gemini)
- **Analytics**: Google Analytics 4 (React-GA4)
- **Deployment**: Optimized for Vercel

## 📊 Analytics Tracking

The application automatically tracks:
- **Page Views**: Navigation between Home, Product, Solutions, Privacy, and Terms.
- **Modal Events**: When users open or close the registration modal.
- **Conversions**: Successful email registrations stored in Supabase.
- **Interactions**: Button clicks and UI variant switches.

## 🤝 Contributing

Join the hunt! Feel free to submit issues, pull requests, or suggestions to make the internet a less glitchy place.

---

<div align="center">
  Built with ❤️ for the hunting community.
</div>
