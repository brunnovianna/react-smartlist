import Input from "./Forms/Input";

function Item ({ ...props }){
    return (
        <>
            <Input value={ props.value } className='flex-auto' 
                onChange={ props.onChange }
                onKeyDown={ props.onKeyDown }
            />
        </>
    )
}

export default Item;