/*global rangeSlider */

import BaseWidget from './BaseWidget.js';
import {select, settings} from './../settings.js';
import {utils} from './../utils.js';

class HourPicker extends BaseWidget{
  constructor(wrapper){
    super(wrapper, settings.hours.open);
    const thisWidget = this;
    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.hourPicker.input);
    thisWidget.dom.output = thisWidget.dom.wrapper.querySelector(select.widgets.hourPicker.output);
    thisWidget.value = thisWidget.dom.input.value;
    thisWidget.initPlugin();
  }
  initPlugin(){
    const thisWidget = this;
    rangeSlider.create(thisWidget.dom.input);
    thisWidget.dom.input.addEventListener('input', function(){
      thisWidget.value = thisWidget.dom.input.value;
    });
  }
  parseValue(value){
    const hour = utils.numberToHour(value);
    return hour;
  }
  isValid(){
    return true;
  }
  renderValue(){
    const thisWidget = this;
    thisWidget.dom.output.value = thisWidget.value;
    thisWidget.dom.output.innerHTML = thisWidget.value;
  }
}

export default HourPicker;
