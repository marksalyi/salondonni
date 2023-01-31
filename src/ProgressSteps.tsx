import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'




const MainContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 15px;
`


const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  position: relative;
  :before{
    content: '';
    position: absolute;
    background: #f3e7f3;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after{
    content: '';
    position: absolute;
    background: #4a154b;
    height: 4px;
    width: 33%;
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`

const StepStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #897067;
  border: 3px solid #897067;
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StepCount = styled.span`
  font-size: 19px;
  color: #f3e7f3;
  font-weight: bold;
  font-family: 'DM Serif Display';
`

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StepLabel = styled.span`
  font-size: 19px;
  color: #303030;
  font-family: 'DM Serif Display';
  font-weight: bold;  
`

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

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 100px;
`

const ButtonStyle = styled.button`
  border-radius: 4px;
  border: 0;
  background: #4a154b;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
  width: 90px;
  :active {
    transform: scale(0.98);
  }
  :disabled {
    background: #f3e7f3;
    color: #000000;
    cursor: not-allowed;
  }
`

const ProgressSteps = () => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1)
  };

  const totalSteps = steps.length;

 

  return (
    <MainContainer>
    <StepContainer>
    {steps.map(({step, label}) => (
    <StepWrapper>
      <StepStyle>
        <StepCount>{step}</StepCount>
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