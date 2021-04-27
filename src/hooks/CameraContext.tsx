import React, {createContext, useState, useContext} from 'react';

const CameraContext = createContext({});

interface ChildrenProps {
  children: React.ReactNode;
}

export const CameraProvider = ({children}: ChildrenProps) => {
  const [picture, setPicture] = useState(null);

  return (
    <CameraContext.Provider value={{picture, setPicture}}>
      {children}
    </CameraContext.Provider>
  );
};

export function useCamera() {
  const context = useContext(CameraContext);

  if (!context) {
    throw new Error('useCamera must be used within an CameraProvider');
  }

  return context;
}
