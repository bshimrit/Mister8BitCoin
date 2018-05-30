import React from 'react';

const Input = (props) => {

    const whenInput = (e) => {
        const value = e.target.value
        props.onInput({ [props.id]: value })
    }

    return (
        <input onInput={whenInput} value={props.value}/>
    );
}

export default Input;
