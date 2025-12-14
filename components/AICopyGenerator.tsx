import React, { useState } from 'react';
import { generateMarketingCopy, CopySuggestion } from '../services/geminiService';
import { Sparkles, Loader2 } from 'lucide-react';

interface AICopyGeneratorProps {
  currentStyle: string;
  onUpdate: (copy: CopySuggestion) => void;
}

export const AICopyGenerator: React.FC<AICopyGeneratorProps> = ({ currentStyle, onUpdate }) => {
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!niche) return;
    setLoading(true);
    try {
      const result = await generateMarketingCopy(niche, currentStyle);
      onUpdate(result);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl mb-6 shadow-lg">
      <div className="flex items-center gap-2 mb-2 text-white">
        <Sparkles className="w-4 h-4 text-yellow-400" />
        <span className="font-semibold text-sm">Gemini AI Copywriter</span>
      </div>
      <p className="text-xs text-white/70 mb-3">
        Validate your idea faster. Ask AI to write copy for your specific target audience.
      </p>
      <div className="flex gap-2">
        <input
          type="text"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          placeholder="E.g., Fintech apps, Gaming glitches..."
          className="flex-1 px-3 py-2 rounded-lg bg-black/20 text-white border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white/40"
        />
        <button
          onClick={handleGenerate}
          disabled={loading || !niche}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Generate'}
        </button>
      </div>
    </div>
  );
};
