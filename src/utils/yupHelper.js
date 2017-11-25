import yup from 'yup';
import { setLocale } from 'yup/lib/customLocale';

// define custom error messages and do configuration here
setLocale({
  mixed: {
    required: 'This field is required.',
    default: 'This field has an unknown error.'
  },
  string: {
    email: 'This field must be a valid email address.'
  }
});

export default yup;