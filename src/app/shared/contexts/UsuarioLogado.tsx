import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    logout?: () => void;

}

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {

    const [nomeDoUsuario, setNomeDoUsuario] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setNomeDoUsuario("Lucas");
        }, 1000);
    });

    const handleLogout = useCallback(() => {
        console.log('Logout executou');
    }, []);

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nomeDoUsuario, logout: handleLogout }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
};