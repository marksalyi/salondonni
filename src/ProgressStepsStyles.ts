import styled from 'styled-components'


interface Property {
    newWidth: string;
}

interface Styling {
    stepStyle: string;
}

const MainContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 15px;
`


const StepContainer = styled.div<Property>`
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
    width: ${(props => props.newWidth)};
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

const StepStyle = styled.div<Styling>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #897067;
  border: 3px solid ${props => props.stepStyle === "completed" ? "black" : "red"};
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

const CheckMark = styled.div`
font-size: 26px;
font-weight: 600;
color: #4a154b;
-ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
-webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
transform: scaleX(-1) rotate(-46deg);
`

export {MainContainer, StepContainer, StepWrapper, StepStyle, StepCount, StepsLabelContainer, StepLabel, ButtonStyle, ButtonsContainer, CheckMark};


