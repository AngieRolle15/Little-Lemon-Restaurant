import * as Yup from 'yup';

export const FormValidation = Yup.object({
    selectedDate: Yup.string()
        .required('Please select a date')
        .test('is-future-date', 'The selected date has already passed.', 
            (value) => new Date(value) >= new Date().setHours(0, 0, 0, 0)),
    selectedTime: Yup.string().required('Please select a time'),
    guests: Yup.number()
        .min(1, 'At least one guest is required')
        .max(10, 'A maximum of 10 guests are allowed')
        .required('Please enter the number of guests'),
    occasion: Yup.string().required('Please select an occasion'),
});

export default FormValidation;
