import * as Yup from 'yup';

const schema = Yup.object().shape({
  title: Yup.string().min(5).max(15).required(),
  language: Yup.string().required(),
  genre: Yup.array().min(1).required(),
  runtime: Yup.string().required(),
  status: Yup.string().required(),
});

export default schema;
