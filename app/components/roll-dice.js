/* global Materialize */

import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  rollName: '',
  numberOfDice: 1,
  numberOfSides: 6,

  didRender() {
    Materialize.updateTextFields();
  },

  actions: {
    triggerRoll() {
      // alert(`Rolling ${this.numberOfDice}D${this.numberOfSides} as "${this.rollName}"`);
      get(this, 'roll')(this.rollName, this.numberOfDice, this.numberOfSides);
      // return true;
    }
  }
});
