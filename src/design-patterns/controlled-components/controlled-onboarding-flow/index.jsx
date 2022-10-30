import React, {
  isValidElement,
  cloneElement,
  Children,
  useState
} from 'react'

export const ControlledOnboardingFlow = ({ children, currentIndex, onNext }) => {

  const currentChild = Children.toArray(children)[currentIndex];

  const goToNext = stepData => {
    onNext(stepData)
  }

  if (isValidElement(currentChild)) {
    return cloneElement(currentChild, { goToNext });
  }

  return currentChild;
}

export const UsageControlledOnboardingFlow = () => {
  const [onBoardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = stepData => {
    setOnboardingData({
      ...onBoardingData,
      ...stepData
    })
    setCurrentIndex(currentIndex + 1)
  }

  const StepOne = ({ goToNext }) => {
    return (<>
      <h1>Step 1</h1>
      <button onClick={() => goToNext({})}>Next</button>
    </>)
  }

  const StepTwo = ({ goToNext }) => {
    return (<>
      <h1>Step 2</h1>
      <button onClick={() => goToNext({})}>Next</button>
    </>)
  }

  return <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
    <StepOne />
    <StepTwo />
  </ControlledOnboardingFlow>
}