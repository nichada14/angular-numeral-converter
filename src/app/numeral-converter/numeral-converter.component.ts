import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeral-converter',
  templateUrl: './numeral-converter.component.html',
  styleUrls: ['./numeral-converter.component.scss']
})
export class NumeralConverterComponent {

  inputNumeral: string = '';
  convertedNumber: number | null = null;

  // Define the numeral to number mapping
  private numeralMap: { [key: string]: number } = {
    'A': 1,
    'B': 5,
    'Z': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'R': 1000
  };

  // Function to convert numeral string to a number
  convertNumeralToNumber(): void {
    let result = 0;
    let prevValue = 0;

    // Iterate through the numeral string from right to left
    for (let i = this.inputNumeral.length - 1; i >= 0; i--) {
      let currentChar = this.inputNumeral[i].toUpperCase();
      let currentValue = this.numeralMap[currentChar];

      // If the current numeral value is smaller than the previous, subtract it
      if (currentValue < prevValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }

      // Update the previous value for next iteration
      prevValue = currentValue;
    }

    // Assign the result to the convertedNumber property
    this.convertedNumber = result;
  }

}
