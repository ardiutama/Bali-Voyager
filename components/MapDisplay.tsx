import React from 'react';
import { Area } from '../types';
import { ExternalLink } from 'lucide-react';

interface MapDisplayProps {
  area: Area;
}

const MapDisplay: React.FC<MapDisplayProps> = ({ area }) => {
  // Using a simple embed iframe for demonstration. 
  // In a real production app with a Maps JavaScript API Key, we would use the official Google Maps React component.
  const query = encodeURIComponent(area.name + ", Bali, Indonesia");
  const embedUrl = `https://www.google.com/maps?q=${query}&output=embed&z=14`;
  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-gray-100 relative group">
      <iframe
        title={`Map of ${area.name}`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={embedUrl}
        className="w-full h-full"
      ></iframe>
      
      <a 
        href={externalMapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md text-xs font-bold text-teal-800 hover:bg-teal-600 hover:text-white transition-all cursor-pointer flex items-center gap-2"
        title="Open in Google Maps App"
      >
        <span>Open Live Map</span>
        <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  );
};

export default MapDisplay;
