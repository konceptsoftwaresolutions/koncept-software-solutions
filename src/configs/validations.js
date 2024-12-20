import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),
  
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  
  // mobileNo: yup
  //   .string()
  //   .required('Mobile number is required'),
    // .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits'),
  mobileNo: yup.object().shape({
    // code: yup.string().required('Country code is required'),
    code: yup.string(),
    number: yup
      .string()
      .required('Mobile number is required')
      .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits'),
  }),
  
  projectDetails: yup
    .string()
    .optional()
    .max(500, 'Message must be at most 500 characters'),
});
