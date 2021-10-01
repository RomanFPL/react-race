import { useState } from "react";
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
            <div className={s.root}>
                <input 
                    type="text" 
                    className={s.input} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email" 
                    autoComplete="off"
                    required
                />
                <span className={s.highlight}></span>
                <span className={s.bar}></span>
                <label className={s.label}>Email</label>
            </div>
            <div className={s.root}>
                <input 
                    type="password" 
                    className={s.input} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password" 
                    autoComplete="off"
                    required
                />
                <span className={s.highlight}></span>
                <span className={s.bar}></span>
                <label className={s.label}>Password</label>
            </div>
            <div className={s.wrapBtn}>
                <button>{authTypeName}</button>
                <span onClick={changeAuth}>{authChangeTo}</span>
            </div>
        </form>
    );
};

export default LoginForm;