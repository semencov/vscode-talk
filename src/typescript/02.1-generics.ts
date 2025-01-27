const form = {
    name: {
        type: 'input',
        label: 'Name',
        value: 'John Doe',
    },
    email: {
        type: 'input',
        label: 'Email',
        value: '',
    },
    country: {
        type: 'select',
        label: 'Country',
        selected: 'USA',
        options: ['USA', 'Canada'],
    },
    consent: {
        type: 'checkbox',
        label: 'I agree to the terms and conditions',
        checked: false,
    },
};

type Form = typeof form;
//   ^?

// ---------------------------------------------------------

const getFormField = <T extends Form, K extends keyof T>(obj: T, key: K) => obj[key];

// ---------------------------------------------------------

const name = getFormField(form, 'name');
//    ^?

console.log(name.value);
//               ^?

// ---------------------------------------------------------

const country = getFormField(form, 'country');
//    ^?

console.log(country.selected);
//                  ^?

// ---------------------------------------------------------

const consent = getFormField(form, 'consent');
//    ^?

console.log(consent.checked);
//                  ^?

