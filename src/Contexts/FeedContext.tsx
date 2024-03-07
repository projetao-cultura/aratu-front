import React, { createContext, useContext, ReactNode, useState } from 'react';
import api from '../services/APIServices'
import { useUser } from '../UserContext';

interface FeedProviderProps {
    children: ReactNode;
}

interface FeedContextData {
    eventosAmigos: EventData;
    eventosCategoria: EventData;
    setEventosAleatorio: EventData;
    getEventosAmigos: () => void;
    getEventosCategoria: () => void;
    getEventosAleatorio: () => void;
}

interface EventData {
    id: number;
    nome: string;
    descricao: string;
    banner: string;
    categoria: string[];
    avaliacao: number;
    local: string;
    endereco: string;
    data_hora: string;
    data_fim: string;
    id_sistema_origem: number;
    fonte: string;
    organizador: string;
    gratis: boolean;
    atualizado_em: string;
    valor: number;
    onde_comprar_ingressos: string;
}

const FeedContext = createContext<FeedContextData>({} as FeedContextData);

export function FeedProvider({ children }: FeedProviderProps) {
    const [eventosAmigos, setEventosAmigos] = useState<EventData[]>([]);
    const [eventosCategoria, setEventosCategoria] = useState<EventData[]>([]);
    const [eventosAleatorio, setEventosAleatorio] = useState<EventData[]>([]);

    const { user } = useUser()

    const getEventosAmigos = async () => {}

    const getEventosCategoria = async () => {
        try {
            const { data } = await api.post('/eventos/selectedCategories/false', user.categorias)
            setEventosCategoria(data)
        } catch (e) {
        }
    }

    const getEventosAleatorio = async () => {}

    return (
        <FeedContext.Provider value={{
            eventosAmigos, 
            eventosCategoria, 
            eventosAleatorio, 
            getEventosAmigos, 
            getEventosCategoria, 
            getEventosAleatorio 
        }}>
            {children}
        </FeedContext.Provider>
    );
}

export function useFeed() {
  const context = useContext(FeedContext);
  return context;
}
