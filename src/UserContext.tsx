import React, { createContext, useContext, ReactNode, useState } from 'react';

interface UserContextData {
  user: UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserData {
  nome: string;
  email: string;
  numero: string;
  senha: string;
  categorias?: SelectedCategories;
}

interface SelectedCategories {
  [key: string]: boolean;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserData>({
    nome: '',
    email: '',
    numero: '',
    senha: '',
    categorias: {},
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}