import { object, string, number, date, InferType } from 'yup';


let validations = object({
    userName: string().min(5).required(),
    password: string().min(5).required(),

  });

  export default validations;