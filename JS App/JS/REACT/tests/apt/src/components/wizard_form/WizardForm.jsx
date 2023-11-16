import React, { useState } from 'react'
import { Step } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
// State handled by the parent i.e. WizardForm

const WizardForm = () => {
    const[step, setStep] = useState(1);
// carries user data
    const[formState, setFormState] = useState();
    
    const nextStep = () => setStep(step +1);
    const previousStep = () => setStep(step - 1);

    if (step === 1)
        return <Step onNext={ nextStep }/>
    if (step === 2)
        return <Step2 onNext={ nextStep } onPrevious={ previousStep }/>
    return <Step3 onPrevious={ previousStep }/>

}

export default WizardForm