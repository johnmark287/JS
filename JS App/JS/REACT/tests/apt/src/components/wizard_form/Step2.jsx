import React from 'react'

export const Step2 = ({onNext, onPrevious}) => {
    return (
        <div>
            <button onClick={onPrevious}>previous</button>
            <button onClick={onNext}>next</button>
        </div>
    )
}
