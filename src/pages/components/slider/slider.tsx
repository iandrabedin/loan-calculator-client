import React, {Fragment} from 'react';
import styles from './slider.module.scss';

interface SliderProps {
  id: string;
  title: string;
  min: number;
  max: number;
  step: number;
  value: number;
  icon: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const Slider = (props: SliderProps) => {
  const {id, title, min, max, step, value, icon, onChange} = props;

  return (
    <Fragment>
      <div className={styles.heading}>
        <h2>{title}</h2>
        <div className={styles['input-number']}>
          <input
            type="number"
            min={min}
            max={max}
            value={value}
            onChange={onChange}
          />
          <span className={styles['input-number__icon']}>{icon}</span>
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        value={value}
        id={id}
      />
      <div className={styles['input-range__legend']}>
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </Fragment>
  );
};
