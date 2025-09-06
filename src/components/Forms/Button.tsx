function Button ({ text = "", disabled = false, onClick = () => {}, className }: { text?: string, disabled?: boolean, onClick?: () => void, className?: string }){
    return (
        <button className={ className } onClick={ onClick } disabled={ disabled }>{ text }</button>
    )
}

export default Button;