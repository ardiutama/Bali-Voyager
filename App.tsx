import React, { useState, useEffect } from 'react';
import { BALI_AREAS } from './constants';
import AreaSelector from './components/AreaSelector';
import MapDisplay from './components/MapDisplay';
import RecommendationCard from './components/RecommendationCard';
import TourPackageCard from './components/TourPackageCard';
import { fetchAreaRecommendations } from './services/geminiService';
import { Area, GeminiResponse } from './types';
import { Compass, Map as MapIcon, Heart } from 'lucide-react';

const App: React.FC = () => {
  // Default to Bedugul as per user story example, or the first item
  const [selectedArea, setSelectedArea] = useState<Area>(BALI_AREAS[0]);
  const [geminiData, setGeminiData] = useState<GeminiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch Gemini data when area changes
  useEffect(() => {
    const getRecommendations = async () => {
      setLoading(true);
      // Clear previous data to show loading state effectively
      setGeminiData(null); 
      const data = await fetchAreaRecommendations(selectedArea.name);
      setGeminiData(data);
      setLoading(false);
    };

    getRecommendations();
  }, [selectedArea]);

  return (
    <div className="min-h-screen bg-teal-50 flex flex-col">
      {/* Header */}
      <header className="bg-teal-800 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="h-8 w-8 text-teal-300" />
            <h1 className="text-2xl font-bold tracking-tight">Bali Voyager</h1>
          </div>
          <div className="text-xs sm:text-sm text-teal-200 flex items-center gap-1">
            Powered by <span className="font-semibold text-white">Indovma + Google Maps</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
          
          {/* Left Column: Controls & Info */}
          <div className="lg:col-span-1 flex flex-col gap-6 h-full overflow-y-auto">
            {/* Welcome Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-teal-100">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Plan Your Trip</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Select an area in Bali to instantly update the map and get AI-curated recommendations.
              </p>
              <AreaSelector 
                selectedArea={selectedArea} 
                onSelectArea={setSelectedArea} 
              />
            </div>

            {/* Mobile Map Placeholder (Visible only on small screens) */}
            <div className="lg:hidden h-64 w-full">
               <MapDisplay area={selectedArea} />
            </div>

            {/* Tour Package Card */}
            <TourPackageCard tourPackage={selectedArea.tourPackage} />

            {/* Recommendations List */}
            <RecommendationCard 
              data={geminiData} 
              loading={loading} 
              areaName={selectedArea.name} 
            />
          </div>

          {/* Right Column: Map Display (Sticky on desktop) */}
          <div className="hidden lg:block lg:col-span-2 h-[calc(100vh-8rem)] sticky top-24">
            <div className="h-full flex flex-col">
              <div className="bg-white p-4 rounded-t-2xl border-t border-x border-teal-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapIcon className="h-5 w-5 text-teal-600" />
                  <span className="font-semibold text-gray-800">{selectedArea.name} Area Map</span>
                </div>
                <div className="flex gap-2">
                   <span className="inline-flex items-center rounded-full bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20">
                      Live Update
                   </span>
                </div>
              </div>
              <div className="flex-grow rounded-b-2xl shadow-xl overflow-hidden relative">
                <MapDisplay area={selectedArea} />
                
                {/* Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-teal-100 max-w-md">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="font-bold text-gray-900">{selectedArea.name}</h3>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{selectedArea.description}</p>
                        </div>
                        <button className="text-teal-600 hover:text-teal-800 p-1">
                            <Heart className="w-5 h-5" />
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-teal-100 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Bali Voyager. Built with React & Google App
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;