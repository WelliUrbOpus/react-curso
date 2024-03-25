import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import { UsuarioLogadoContext } from '../../shared/contexts';

export const Dashboard = () => {
    const counterRef = useRef({ counter: 0 });

    const usuarioLogadoContext = useContext(UsuarioLogadoContext);

    return (
        <div>
            <p>Dashboard</p>

            <p>{usuarioLogadoContext.nomeDoUsuario}</p>

            <p>Contador: {counterRef.current.counter} </p>

            <button onClick={()=> counterRef.current.counter++}>Somar</button>
            <br/><br/>

            <Link to={"/login"}>Login</Link>
        </div>

    );
}