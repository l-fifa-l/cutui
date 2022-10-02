import React, { useState } from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';
import Stepper from '../components/Stepper';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';
import StepFour from '../components/StepFour';

function OnBoard() {
  let [step, setStep] = useState(1);
  function stepUp() {
    step < 4 ? setStep(step + 1) : (step = 0);
  }

  return (
    <>
      <Logo />
      <Stepper step={step} />
      {step === 1 ? (
        <StepOne />
      ) : step === 2 ? (
        <StepTwo />
      ) : step === 3 ? (
        <StepThree />
      ) : step === 4 ? (
        <StepFour />
      ) : null}
      <Button stepfun={stepUp} step={step} />
    </>
  );
}

export default OnBoard;
