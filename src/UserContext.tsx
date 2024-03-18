import React, { createContext, useContext, ReactNode, useState } from 'react';

interface UserContextData {
  user: UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserData {
  id: number;
  nome: string;
  email: string;
  numero: string;
  senha: string;
  categorias?: SelectedCategories;
  contatos?: string[]; // Adicionando a categoria "contatos"
}

interface SelectedCategories {
  [key: string]: boolean;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserData>({
    id: 0,
    nome: '',
    email: '',
    numero: '',
    senha: '',
    categorias: {},
    contatos: [], // Inicializando a lista de contatos como vazia
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
