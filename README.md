<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1sfKsOtkZ-RkNJCHxEUli1Xx6Ms3ebQV7

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables in `.env.local`:
   - `GEMINI_API_KEY`: Your Gemini API key for AI copy generation
   - `VITE_SUPABASE_URL`: Your Supabase project URL (already configured)
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key (already configured)
   - `VITE_GA_MEASUREMENT_ID`: Your Google Analytics 4 Measurement ID (see [Analytics Setup](ANALYTICS_SETUP.md))

3. Run the app:
   ```bash
   npm run dev
   ```

## Features

- 🎨 **AI-Powered Copy Generation**: Uses Gemini AI to generate marketing copy
- 📊 **Google Analytics Integration**: Track user behavior and site performance
- 💾 **Supabase Backend**: Store user registrations and data
- 🎯 **A/B Testing Ready**: Multiple landing page variants
- 📱 **Responsive Design**: Works on all devices

## Google Analytics Setup

This app includes Google Analytics 4 integration to monitor performance and user behavior. 

**What's tracked:**
- Page views (all navigation)
- Registration attempts (success/failure)
- Modal interactions
- Button clicks
- Form submissions

**To enable analytics:**
1. Follow the detailed setup guide in [ANALYTICS_SETUP.md](ANALYTICS_SETUP.md)
2. Add your GA4 Measurement ID to `.env.local`
3. Restart your dev server

## Environment Setup

Copy the `.env.local` file and fill in your API keys:

```env
# Gemini API Key
GEMINI_API_KEY=your_gemini_api_key_here

# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```
