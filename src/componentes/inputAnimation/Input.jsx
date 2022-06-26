import React from 'react';
import "./Input.css"

const Input = ({type, label,id, required, pattern, itens, value, onChange, readOnly}) => {

    const req = required ? true : false
    
    return (

        <div className="formGroup field">
            {type === 'select' ?(

                <select className="formField"  required={req} id={id} name={id} autoComplete='none'
                disabled={readOnly}
                value={value} onChange={onChange}
                placeholder=" ">
                    {itens && itens.map((item,i) => 
                        <option key={i} value={item.id}>{item.nome}</option>
                    )}

                </select>

            ):(

                <input type={type} className="formField"  required={req} id={id} name={id} autoComplete='none'
                readOnly={readOnly}
                value={value} onChange={onChange}
                pattern={pattern} placeholder=" "/>

            )}
            
            <label htmlFor={id} className="formLabel">{label}</label>

        </div>
    )
}

export default Input;