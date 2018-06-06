import React from 'react';

const Input = (props) => {

    const whenInput = (e) => {
        const value = e.target.value
        props.onInput({ [props.id]: value })
    }

    return (
        <input onInput={whenInput} value={props.value} type={props.type} placeholder={props.placeHolder}/>
    );
}

export default Input;
