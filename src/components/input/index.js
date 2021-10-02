import s from "./style.module.css"
const Input = ({value, label, name, onChange, type = "text", required, autoComplete="off"}) => {
    return (
        <div className={s.root}>
                <input 
                    value={value}
                    type={type} 
                    className={s.input} 
                    onChange={onChange}
                    name={name} 
                    autoComplete={autoComplete}
                    required={required ? 1 : 0}
                />
                <span className={s.highlight}></span>
                <span className={s.bar}></span>
                <label className={s.label}>{label}</label>
            </div>
    )
}

export default Input; 