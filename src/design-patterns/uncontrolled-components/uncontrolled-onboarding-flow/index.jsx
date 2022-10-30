import React, { isValidElement } from 'react'
import { cloneElement } from 'react';
import { Children } from 'react';

const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
  const [onBoardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentChild = Children.toArray(children)[currentIndex];

  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;

    const updatedData = {
      ...onBoardingData,
      ...stepData
    };

    if (nextIndex <= children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish()
    }

    setOnboardingData(updatedData);

  }

  if (isValidElement(currentChild)) {
    return cloneElement(currentChild, { goToNext });
  }

  return currentChild;
}

export default UncontrolledOnboardingFlow