import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    const onChangeValue = (e) => {
        setInputValue(e.target.value);
    };
    
    const handledSubmit = ( e ) => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ){
            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit = { handledSubmit }>
            <input
                type='text'
                value={ inputValue }
                onChange = { onChangeValue }
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
