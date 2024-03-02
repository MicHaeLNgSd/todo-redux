import * as yup from 'yup';

export const TODO_VALID_SCHEMA = yup.object({
  todoText: yup
    .string()
    .min(2, 'Minimum 2 symbols')
    .max(30, 'Maximum 30 symbols')
    .required(),
});
