import React from 'react';

const FormError = (props) => {
    return (
        <div className="error-prompt">
            {props.error}
        </div>
    );
}

export default FormError;