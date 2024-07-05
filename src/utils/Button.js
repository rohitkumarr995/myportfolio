const Button = ({children, onclick, style, className}) =>{
    return <button className={className} style={style} onClick={onclick}>{children}</button>
}

export default Button