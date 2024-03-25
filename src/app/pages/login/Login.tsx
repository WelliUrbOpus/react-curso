import { useState, useMemo, useCallback, useRef } from 'react';

import { InputLogin } from './components/InputLogin';

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

                <InputLogin
                    label='Email'
                    type='email'
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    label='Password'
                    type='password'
                    value={password}
                    onChange={newValue => setPassword(newValue)}
                />

                {/*<label>
                    <span>Password</span>
                    <input
                        type="password"
                        value={password}
                        ref={inputPasswordRef}
                        onChange={e => setPassword(e.target.value)}
                    />
    </label>*/}

                <button onClick={handleEntrar} type="button">Entrar</button>
            </form>
        </div>
    );
}