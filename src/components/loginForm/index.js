import { useState } from "react";
import Input from "../input";
import s from "./style.module.css"

const LoginForm = ({onSubmit, authTypeName, authChangeTo, changeAuth}) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit && onSubmit({
            email,
            password
        });
        setEmail("");
        setPassword("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                label="Email"
            />
            <Input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                label="Password"
                type="password"
            />
            <div className={s.wrapBtn}>
                <button>{authTypeName}</button>
                <span onClick={changeAuth}>{authChangeTo}</span>
            </div>
        </form>
    );
};

export default LoginForm;