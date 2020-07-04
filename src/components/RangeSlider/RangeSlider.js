import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import AttachMoney from '@material-ui/icons/AttachMoney';

import './range-slider.css';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 60,
  },
});

export default function RangeSlider(props) {
  const classes = useStyles();
  const { minPrice, maxPrice, setMaxPrice } = props;
  const [value, setValue] = React.useState(0);

  if (maxPrice !== 0 && value === 0) {
    setValue(maxPrice);
  }
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    setMaxPrice(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    setMaxPrice(event.target.value);
  };

  const handleBlur = () => {
    if (value < minPrice) {
      setValue(minPrice);
      setMaxPrice(minPrice);
    } else if (value > maxPrice) {
      setValue(maxPrice);
      setMaxPrice(maxPrice);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <AttachMoney />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={minPrice}
            max={maxPrice}
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: minPrice,
              max: maxPrice,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

RangeSlider.propTypes = {
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  setMaxPrice: PropTypes.func,
};

RangeSlider.defaultTypes = {
  minPrice: 0,
  maxPrice: 0,
  setMaxPrice: () => {},
};
