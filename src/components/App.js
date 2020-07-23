import React from 'react';

import Dropdown from './Dropdown';
import RadioButton from './RadioButton';
import DatePickerMonthYear from './DatePickerMonthYear';
import Transition from './Transition';

const App = () => {
  return (
    <div className="ui three column centered grid">
      <div className="four column centered row">
        <div className="column" />
        <div className="column">
          <h1>Dropdown</h1>
          <Dropdown />
        </div>
        <div className="column">
          <h1>Radio Button</h1>
          <RadioButton />
        </div>
        <div className="column">
          <h1>Date Picker w/Month Year</h1>
          <DatePickerMonthYear />
        </div>
      </div>
      <div className="four column centered row">
        <div className="column" />
        <div className="column">
          <h1>Transition</h1>
          <Transition />
        </div>
      </div>
      <div className="four column centered row">
        <div className="column" />
        <div className="column">
          <h1>Place Holder</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
