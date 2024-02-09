import React, { createContext, useContext, useState, ReactNode } from 'react';

type Station = {
  stationName: string;
  colors: string[];
};

type StationContextType = {
  currentStation: Station;
  setCurrentStation: (station: Station) => void;
};

const StationContext = createContext<StationContextType | undefined>(undefined);

export const useStationContext = () => {
  const context = useContext(StationContext);
  if (!context) {
    throw new Error('useStationContext must be used within a StationProvider');
  }
  return context;
};

type StationProviderProps = {
  children: ReactNode;
};

export const StationProvider = ({ children }: StationProviderProps) => {
  const [currentStation, setCurrentStation] = useState<Station>({
    stationName: 'Diversey',
    colors: []
  });

  return (
    <StationContext.Provider value={{ currentStation, setCurrentStation }}>
      {children}
    </StationContext.Provider>
  );
};
