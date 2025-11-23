import React from 'react';
import { TourPackage } from '../types';
import { Clock, Tag, Home, CheckCircle, CalendarDays } from 'lucide-react';

interface TourPackageCardProps {
  tourPackage?: TourPackage;
}

const TourPackageCard: React.FC<TourPackageCardProps> = ({ tourPackage }) => {
  if (!tourPackage) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-teal-100 overflow-hidden transform transition-all hover:scale-[1.01]">
      <div className="bg-gradient-to-r from-teal-700 to-teal-600 px-6 py-4 flex items-center justify-between">
        <h3 className="text-white font-bold text-lg flex items-center gap-2">
          <Tag className="h-5 w-5" />
          Featured Tour Package
        </h3>
        <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full font-medium backdrop-blur-sm">
          Best Value
        </span>
      </div>
      
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-2">{tourPackage.title}</h4>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {tourPackage.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col gap-1 p-3 bg-teal-50 rounded-xl border border-teal-100">
            <div className="flex items-center gap-2 text-teal-700 text-xs font-semibold uppercase tracking-wide">
              <Clock className="w-3 h-3" /> Duration
            </div>
            <span className="font-semibold text-gray-800">{tourPackage.duration}</span>
          </div>

          <div className="flex flex-col gap-1 p-3 bg-teal-50 rounded-xl border border-teal-100">
            <div className="flex items-center gap-2 text-teal-700 text-xs font-semibold uppercase tracking-wide">
              <Home className="w-3 h-3" /> Stay
            </div>
            <span className="font-semibold text-gray-800 truncate" title={tourPackage.accommodation}>
              {tourPackage.accommodation}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <h5 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-teal-500" />
            Package Inclusions
          </h5>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {tourPackage.inclusions.map((item, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
          <div>
            <span className="text-xs text-gray-500 block">Starting from</span>
            <span className="text-xl font-bold text-teal-700">{tourPackage.price}</span>
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 shadow-sm">
            <CalendarDays className="w-4 h-4" />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourPackageCard;