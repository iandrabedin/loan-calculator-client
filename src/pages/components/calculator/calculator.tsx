import React, {Fragment, useEffect, useState} from 'react';
import {Slider} from '../../components';

interface CalculatorProps {
  amountInterval: {
    min: number;
    max: number;
    defaultValue: number;
    step: number;
  };
  termInterval: {
    min: number;
    max: number;
    defaultValue: number;
    step: number;
  };
  offerAction: (amountValue: number, termValue: number) => void;
}

export const Calculator = (props: CalculatorProps) => {
  const {amountInterval, termInterval, offerAction} = props;
  const [amountValue, setAmountValue] = useState(amountInterval?.defaultValue);
  const [termValue, setTermValue] = useState(termInterval?.defaultValue);

  const handleOnChangeInterval = (e: any) => {
    setAmountValue(e.target.value);
  };

  const handleOnChangeTerm = (e: any) => {
    setTermValue(e.target.value);
  };

  useEffect(() => {
    offerAction(amountValue, termValue);
  }, [amountValue, termValue, offerAction]);

  return (
    <Fragment>
      <Slider
        id="amountInterval"
        title="How much money do you need?"
        min={amountInterval.min}
        max={amountInterval.max}
        step={amountInterval.step}
        onChange={handleOnChangeInterval}
        value={amountValue}
        icon="€"
      />
      <Slider
        id="termInterval"
        title="When would you like to repay it?"
        min={termInterval.min}
        max={termInterval.max}
        step={termInterval.step}
        onChange={handleOnChangeTerm}
        value={termValue}
        icon="d"
      />
    </Fragment>
  );
};
