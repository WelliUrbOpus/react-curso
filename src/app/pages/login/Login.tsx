import { useState, useEffect, useMemo } from 'react';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailLength = useMemo(() => {
        console.log('executou')
        return email.length * 1000;
    }, [email.length]);

    const handleEntrar = () => {
        console.log(email);
        console.log(password);
    }

    return (
        <div>
            <form>
                <p>Quantidade de caractere no email: {emailLength}</p>
                <label>
                    <span>Email</span>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </label>

                <label>
                    <span>Password</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>

                <button onClick={handleEntrar} type="button">Entrar</button>
            </form>
        </div>
    );
}