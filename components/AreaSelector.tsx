import React, { useState, useEffect, useMemo } from 'react';
import { BALI_AREAS, BALI_REGENCIES } from '../constants';
import { Area } from '../types';
import { MapPin, Map, Navigation } from 'lucide-react';

interface AreaSelectorProps {
  selectedArea: Area;
  onSelectArea: (area: Area) => void;
}

const AreaSelector: React.FC<AreaSelectorProps> = ({ selectedArea, onSelectArea }) => {
  // Initialize regency based on the currently selected area
  const [selectedRegencyId, setSelectedRegencyId] = useState<string>(selectedArea.regencyId);

  // Sync internal regency state if selectedArea changes externally (e.g. from initial load)
  useEffect(() => {
    if (selectedArea.regencyId !== selectedRegencyId) {
      setSelectedRegencyId(selectedArea.regencyId);
    }
  }, [selectedArea]);

  const handleRegencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRegencyId = e.target.value;
    setSelectedRegencyId(newRegencyId);
    
    // Automatically select the first area in this regency
    const areasInRegency = BALI_AREAS.filter(area => area.regencyId === newRegencyId);
    if (areasInRegency.length > 0) {
      onSelectArea(areasInRegency[0]);
    }
  };

  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const areaId = e.target.value;
    const area = BALI_AREAS.find((a) => a.id === areaId);
    if (area) {
      onSelectArea(area);
    }
  };

  // Filter areas based on selected regency
  const filteredAreas = useMemo(() => {
    return BALI_AREAS.filter(area => area.regencyId === selectedRegencyId);
  }, [selectedRegencyId]);

  const currentRegencyName = BALI_REGENCIES.find(r => r.id === selectedRegencyId)?.name;

  return (
    <div className="w-full space-y-5">
      
      {/* Regency Selector */}
      <div>
        <label htmlFor="regency-select" className="block text-sm font-medium text-teal-900 mb-2">
          Select Regency (Kabupaten)
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Map className="h-5 w-5 text-teal-600" />
          </div>
          <select
            id="regency-select"
            value={selectedRegencyId}
            onChange={handleRegencyChange}
            className="block w-full pl-10 pr-10 py-3 text-base border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-xl shadow-sm bg-white text-gray-900 transition-all hover:border-teal-400"
          >
            {BALI_REGENCIES.map((regency) => (
              <option key={regency.id} value={regency.id}>
                {regency.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Destination Selector */}
      <div>
        <label htmlFor="area-select" className="block text-sm font-medium text-teal-900 mb-2">
          Select Destination in {currentRegencyName}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-teal-600" />
          </div>
          <select
            id="area-select"
            value={selectedArea.id}
            onChange={handleAreaChange}
            className="block w-full pl-10 pr-10 py-3 text-base border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-xl shadow-sm bg-white text-gray-900 transition-all hover:border-teal-400"
          >
            {filteredAreas.map((area) => (
              <option key={area.id} value={area.id}>
                {area.name}
              </option>
            ))}
          </select>
        </div>
        
        {/* Quick Select Chips - To show ALL destinations in the regency at a glance */}
        <div className="mt-4">
          <p className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-2 flex items-center gap-1">
            <Navigation className="w-3 h-3" />
            Explore {currentRegencyName}
          </p>
          <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-1">
            {filteredAreas.map(area => (
              <button
                key={area.id}
                onClick={() => onSelectArea(area)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 ${
                  selectedArea.id === area.id 
                    ? 'bg-teal-600 text-white border-teal-600 shadow-sm' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-teal-400 hover:text-teal-700 hover:bg-teal-50'
                }`}
              >
                {area.name}
              </button>
            ))}
          </div>
        </div>

        {/* Description Box */}
        <div className="mt-4 bg-teal-50 p-4 rounded-xl border border-teal-100">
          <p className="text-sm text-teal-800">
            <span className="font-semibold">{selectedArea.name}:</span> {selectedArea.description}
          </p>
        </div>
      </div>

    </div>
  );
};

export default AreaSelector;