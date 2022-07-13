import * as yup from 'yup';
import emailRegex from '../helpers/regex';

export const emailSchema = yup.object().shape({
  email: yup.string().email().matches(emailRegex, 'Email must be enyata email').required(),
});

export const nameSchema = yup.object().shape({
  name: yup.string().required(),
});

export const numberSchema = yup.object().shape({
  number: yup.number().required(),
});
