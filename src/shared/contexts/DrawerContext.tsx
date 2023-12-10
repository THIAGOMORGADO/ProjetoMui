import { createContext, useCallback, useContext, useState } from "react";


interface IDrawerContextData {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOtions[];
  toggleDrawerOpen: () => void;
  setDrawerOption: (newDrawerOption: IDrawerOtions[]) => void
}

interface IAppProviderChildren {
  children: React.ReactNode
}
interface IDrawerOtions {
  icon: string;
  label: string;
  path: string
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
}

export const DrawerProvider: React.FC<IAppProviderChildren> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDraweOptions] = useState<IDrawerOtions[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
  }, [])

  const handleSetDrawerOptions = useCallback((newDrawerOption: IDrawerOtions[]) => {
    setDraweOptions(newDrawerOption)
  }, [])

  return (
    <DrawerContext.Provider value={{ drawerOptions, isDrawerOpen, toggleDrawerOpen, setDrawerOption: handleSetDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  )
}