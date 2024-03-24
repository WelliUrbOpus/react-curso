import { useNavigate } from 'react-router-dom';


export const Login = () => {
const navigate = useNavigate();

const handleClick = () =>{
    navigate("/home");
};

    return (
        <div>
            <p>Login</p>
            <button onClick={handleClick}>Home</button>
        </div>
    );
}