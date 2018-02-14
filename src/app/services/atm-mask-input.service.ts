import { Injectable } from '@angular/core';
declare var $: any;
@Injectable()
export class AtmMaskInputService {
  inputEntered: string;
  constructor() {
    this.inputEntered = '';
  }

  /**
   * Input Masker
   * @param e
   * @param id
   * @returns {boolean}
   * @constructor
   */
  ATMInputMask (e, id) {
    const getKeyValue = function (keyCode) {
      if (keyCode > 57) { // also check for num-pad keys
        keyCode -= 48;
      }
      if (keyCode >= 48 && keyCode <= 57) {
        return String.fromCharCode(keyCode);
      }
    };
    // handle backspace key
    if (e.keyCode === 8 && this.inputEntered.length > 0) {
      this.inputEntered = this.inputEntered.slice(0, this.inputEntered.length - 1); // remove last digit
      $('#' + id).val(this.formatNumber(this.inputEntered));
      console.log('Original Value: ', this.unFormatAmount(this.inputEntered));
    } else {
      const key = getKeyValue(e.keyCode);
      if (key) {
        this.inputEntered += key; // add actual digit to the input string
        console.log('Original Value: ', this.unFormatAmount(this.inputEntered));
        $('#' + id).val(this.formatNumber(this.inputEntered)); // format input string and set the input box value to it
      } else {
      }
    }
    return false;
  }

  /**
   * Format the input
    * @param value
   * @returns {string}
   */
  formatNumber (value) {
    console.log('Format value');
    if (isNaN(parseFloat(value))) {
      return '0.00'; // set value to 0.00 if input value is not valid/ not a number
    }
    const num = parseFloat(value);
    const a = (num / 100).toFixed(2); // move the decimal up to places return a X.00 format
    return a.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  };
  /**
   * Save the original value
   * @param {string} input
   * @returns {string}
   */
  unFormatAmount(input: string) {
    // console.log('Input', input, this.inputEntered);
    input =  input.split(',').join('');
    const num = parseFloat(input);
    if (isNaN(num)) {
      return '0.00'; // if the input is invalid just set the value to 0.00
    }
    const a = (num / 100).toFixed(2); // move the decimal up to places return a X.00 format
    return a;
  }


  /**
   * Return the unformatted value
   * @returns {{unformattedValue: string | string; formattedValue: string | string}}
   */
  getValue() {
    return {
      unformattedValue: this.unFormatAmount(this.inputEntered),
      formattedValue: this.formatNumber(this.inputEntered)
    };
  }
}
