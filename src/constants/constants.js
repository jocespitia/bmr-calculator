/**
 * the "label" is how the radio button labels will display
 */

const UNITS = [
    {
        label: 'kg / cm',
        value: 'kilos',
      },
      {
        label: 'lbs / in',
        value: 'pounds'
      },
];
const GENDER = [
  {
    label: 'Female',
    value: 'female',
  },
  {
    label: 'Male',
    value: 'male'
  },
];
const LEVEL = [
  {
    label:  'Sedentary',
    value: 'sedentary'
  },
  {
    label: 'Moderate',
    value: 'moderate',
  },
  {
      label: 'Active',
      value: 'active'
  }
];

const CONSTANTS = {
    female: {
        sedentary: [537.112, 11.096, 3.718, 5.196],

        moderate: [693.769, 14.333, 4.802, 6.712],

        active: [850.427, 17.569, 5.886, 8.227]
    },
    male: {
        sedentary: [106.034, 16.076, 5.759, 6.812],

        moderate: [136.961, 20.765, 7.438, 8.799],

        active: [167.888, 25.454, 9.118, 10.786]
    }
        
};


export {
    UNITS,
    GENDER,
    LEVEL,
    CONSTANTS,
}