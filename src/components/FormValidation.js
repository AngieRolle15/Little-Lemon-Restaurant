import * as Yup from 'yup';

export const FormValidation = Yup.object({
    selectedDate: Yup.date()
    .min(new Date().toISOString().split('T')[0], 
    "The selected date has already passed") 
    .required("Date is required"),
    
    selectedTime: Yup.string()
    .required("Time is required"),
    guests: Yup.number()
        .min(1, 'At least one guest is required')
        .max(10, 'A maximum of 10 guests are allowed')
        .required('Please enter the number of guests'),
    occasion: Yup.string().required('Please select an occasion'),
});

export default FormValidation;
