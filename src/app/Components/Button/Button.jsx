import style from './Button.module.css'

const Button = ({text, type}) => {
    return(


        <button className={`${style.Button} ${type === 'primary' ? style.Primary : style.Secondary}`} type="button">{text}</button>

        
    )
}

export default Button