"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface IntroContextType {
  hasCompletedIntro: boolean;
  completeIntro: () => void;
}

const IntroContext = createContext<IntroContextType>({
  hasCompletedIntro: false,
  completeIntro: () => {},
});

export const useIntro = () => useContext(IntroContext);

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [hasCompletedIntro, setHasCompletedIntro] = useState(false);
  const completeIntro = useCallback(() => setHasCompletedIntro(true), []);

  return (
    <IntroContext.Provider value={{ hasCompletedIntro, completeIntro }}>
      {children}
    </IntroContext.Provider>
  );
}

