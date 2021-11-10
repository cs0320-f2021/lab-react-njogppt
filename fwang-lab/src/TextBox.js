const TextBox = (props) => {

    return (
        <div>
            <label>
                {props.label}:
            </label>
            <input type="text" onChange={ (event) => {
                props.change(event.target.value)
            }
            }/>
        </div>
    )
}

export default TextBox