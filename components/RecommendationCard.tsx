import React from 'react';
import { GeminiResponse } from '../types';
import ReactMarkdown from 'react-markdown';
import { Map, ExternalLink, Info } from 'lucide-react';

interface RecommendationCardProps {
  data: GeminiResponse | null;
  loading: boolean;
  areaName: string;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ data, loading, areaName }) => {
  if (loading) {
    return (
      <div className="p-6 bg-white rounded-2xl shadow-sm border border-teal-100 animate-pulse">
        <div className="h-6 bg-teal-100 rounded w-3/4 mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-100 rounded"></div>
          <div className="h-4 bg-gray-100 rounded w-5/6"></div>
          <div className="h-4 bg-gray-100 rounded w-4/6"></div>
        </div>
        <div className="mt-6 h-32 bg-teal-50 rounded-xl"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-6 bg-white rounded-2xl shadow-sm border border-teal-100 text-center">
        <Info className="h-10 w-10 text-teal-300 mx-auto mb-3" />
        <p className="text-gray-500">Select an area to see AI-powered recommendations.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-2xl shadow-lg shadow-teal-900/5 border border-teal-100 overflow-hidden">
        <div className="bg-teal-600 px-6 py-4 flex items-center justify-between">
          <h3 className="text-white font-bold text-lg flex items-center gap-2">
            <Map className="h-5 w-5" />
            Gemini Recommendations for {areaName}
          </h3>
        </div>
        <div className="p-6 prose prose-teal prose-sm max-w-none text-gray-700">
           <ReactMarkdown>{data.text}</ReactMarkdown>
        </div>
      </div>

      {/* Grounding Sources Section */}
      {data.groundingChunks && data.groundingChunks.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6">
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Verified Locations (Google Maps)
          </h4>
          <div className="grid gap-3 sm:grid-cols-2">
            {data.groundingChunks.map((chunk, index) => {
              if (chunk.maps) {
                return (
                  <a
                    key={index}
                    href={chunk.maps.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start p-3 rounded-xl border border-gray-100 hover:border-teal-300 hover:bg-teal-50 transition-colors group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-200">
                        <MapPinIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="ml-3 flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate group-hover:text-teal-700">
                        {chunk.maps.title}
                      </p>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        View on Maps <ExternalLink className="ml-1 w-3 h-3" />
                      </div>
                    </div>
                  </a>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  )
}

export default RecommendationCard;
