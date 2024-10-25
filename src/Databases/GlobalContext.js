import React, { createContext } from 'react';

// Crée un contexte
export const GlobalContext = createContext();

// Crée un fournisseur de contexte
export const GlobalProvider = ({ children }) => {
    const regionsSenegal = ["Dakar","Diourbel","Fatick","Kaffrine","Kaolack","Kédougou","Kolda","Louga","Matam","Saint-Louis","Sédhiou","Tambacounda","Thiès","Ziguinchor"];
    return (
        <GlobalContext.Provider value={{ regionsSenegal }}>
        {children}
        </GlobalContext.Provider>
    );
};
