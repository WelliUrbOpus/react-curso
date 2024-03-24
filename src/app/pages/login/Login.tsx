import { useState, useMemo, useCallback, useRef } from 'react';

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailLength = useMemo(() => {
        return email.length * 1000;
    }, [email.length]);

    const handleEntrar = useCallback(() => {
        console.log(email);
        console.log(password);
    }, [email, password]);

    return (
        <div>
            <form>
                <p>Quantidade de caractere no email: {emailLength}</p>
                <label>
                    <span>Email</span>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined} />
                </label>

                <label>
                    <span>Password</span>
                    <input
                        type="password"
                        value={password}
                        ref={inputPasswordRef}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>

                <button onClick={handleEntrar} type="button">Entrar</button>
            </form>
        </div>
    );
}