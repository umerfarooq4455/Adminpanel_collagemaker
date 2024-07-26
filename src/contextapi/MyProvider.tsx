import axios, { Axios } from 'axios';
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface State {
  user: { name: string; email: string } | null;
  theme: string;
}

interface StikerItem {
  name: string;
  itemLeftMargin: string;
  itemTopMargin: string;
  itemRightMargin: string;
  itemBottomMargin: string;
  disableSelect: boolean;
}

interface ImageItem {
  itemWidth: string;
  itemHeight: string;
  itemLeftMargin: string;
  itemTopMargin: string;
  itemRightMargin: string;
  itemBottomMargin: string;
  rotated: string;
  mask: string;
}

interface TextItem {
  text: string;
  itemLeftMargin: string;
  itemTopMargin: string;
  itemRightMargin: string;
  itemBottomMargin: string;
  rotated: string;
  fontUrl: string;
  textColor: string;
  textSize: string;
  textAlignment: string;
  fontID: string;
  letterSpacing: string;
}

interface DetailedCategory {
  id: number;
  name: string;
}

interface Categorid {
  id: number;
  name: string;
}

interface ContextType {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  handleSignIn: () => void;
  handleSignUp: () => void;
  handleSignOut: () => void;
  textsitems: TextItem[];
  setTextsitems: React.Dispatch<React.SetStateAction<TextItem[]>>;
  stickersitems: StikerItem[];
  setStickersitems: React.Dispatch<React.SetStateAction<StikerItem[]>>;
  Imagesitems: ImageItem[];
  setImagesitems: React.Dispatch<React.SetStateAction<ImageItem[]>>;
  instance: Axios;
  detailedCategory: DetailedCategory | null;
  setDetailedCategory: React.Dispatch<
    React.SetStateAction<DetailedCategory | null>
  >;
  Categoryid: Categorid | null;
  setCategoryid: React.Dispatch<React.SetStateAction<Categorid | null>>;
}

const MyContext = createContext<ContextType | undefined>(undefined);

export const useMyContext = (): ContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

// Create provider component
export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<State>({
    user: null,
    theme: 'light',
  });

  const instance = axios.create({
    baseURL: 'https://collage-maker.trippleapps.com',
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
      // Add other headers if needed
    },
  });

  const [detailedCategory, setDetailedCategory] =
    useState<DetailedCategory | null>(null);
  const [Categoryid, setCategoryid] = useState<Categorid | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const authState = localStorage.getItem('isAuthenticated');
    return authState ? JSON.parse(authState) : false;
  });

  const handleSignIn = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
  };

  const handleSignUp = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  const [textsitems, setTextsitems] = useState<TextItem[]>([
    {
      text: '',
      itemLeftMargin: '',
      itemTopMargin: '',
      itemRightMargin: '',
      itemBottomMargin: '',
      rotated: '',
      textAlignment: '',
      fontID: '',
      fontUrl: '',
      textColor: '',
      textSize: '',
      letterSpacing: '',
    },
  ]);

  const [stickersitems, setStickersitems] = useState<StikerItem[]>([
    {
      name: '',
      itemLeftMargin: '',
      itemTopMargin: '',
      itemRightMargin: '',
      itemBottomMargin: '',
      disableSelect: false,
    },
  ]);

  const [Imagesitems, setImagesitems] = useState<ImageItem[]>([
    {
      itemWidth: '',
      itemHeight: '',
      itemLeftMargin: '',
      itemTopMargin: '',
      itemRightMargin: '',
      itemBottomMargin: '',
      rotated: '',
      mask: '',
    },
  ]);

  return (
    <MyContext.Provider
      value={{
        state,
        Categoryid,
        setCategoryid,
        detailedCategory,
        setDetailedCategory,
        instance,
        setState,
        isAuthenticated,
        setIsAuthenticated,
        handleSignIn,
        handleSignUp,
        handleSignOut,
        textsitems,
        setTextsitems,
        stickersitems,
        setStickersitems,
        Imagesitems,
        setImagesitems,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
