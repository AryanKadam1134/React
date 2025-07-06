function Button({color, change}) {
    return (
        <button onClick={change} className='flex felx-wrap p-2 rounded-3xl' style={{backgroundColor : color}}>{color}</button>
    );
}

export default Button;