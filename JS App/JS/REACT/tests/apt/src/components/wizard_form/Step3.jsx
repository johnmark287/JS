import React from 'react'

export const Step3 = ({onPrevious, onSubmit}) => {
    return (
        <div>
            <button onClick={onPrevious}>Previous</button>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}
