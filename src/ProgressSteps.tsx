import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { ButtonsContainer, ButtonStyle, CheckMark, MainContainer, StepContainer, StepCount, StepLabel, StepsLabelContainer, StepStyle, StepWrapper } from './ProgressStepsStyles'





const steps = [
  {
    label: 'Szolgáltatás',
    step: 1,
  },
  {
    label: 'Munkatárs',
    step: 2,
  },
  {
    label: 'Időpont',
    step: 3,
  },
  {
    label: 'Véglegesítés',
    step: 4,
  },
]



const ProgressSteps = () => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1)
  };

  const totalSteps = steps.length;

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%` 



  return (
    <MainContainer>
    <StepContainer newWidth={width}>
    {steps.map(({step, label}) => (
    <StepWrapper>
      <StepStyle stepStyle={activeStep >= step ? "completed" : "incompleted"}>
        {activeStep > step ? 
        <CheckMark></CheckMark> : 
        <StepCount>{step}</StepCount>}
      </StepStyle>
      <StepsLabelContainer>
        <StepLabel>{label}</StepLabel>
      </StepsLabelContainer>
    </StepWrapper>
      ))}
    </StepContainer>
    <ButtonsContainer>
        <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>Previous</ButtonStyle>
        <ButtonStyle onClick={nextStep} disabled={activeStep === totalSteps}>Next</ButtonStyle>
      </ButtonsContainer>
    </MainContainer>

  )
}

export default ProgressSteps