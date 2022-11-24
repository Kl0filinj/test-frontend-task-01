import { useFormik } from 'formik';
import {
  FormControl,
  FormLabel,
  //   FormErrorMessage,
  Input,
  Select,
  FormHelperText,
  Button,
} from '@chakra-ui/react';
import * as Yup from 'yup';

// const initialValues = {
//   title: '',
//   language: 'English',
//   genre: [],
//   runtime: '60',
//   status: 'Ended',
// };

const schema = Yup.object().shape({
  title: Yup.string().min(5).max(15).required(),
  language: Yup.string().required(),
  genre: Yup.string().required(),
  runtime: Yup.string().required(),
  status: Yup.string().required(),
});

const AddingForm = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      language: 'English',
      genre: 'adventure',
      runtime: '60',
      status: 'Ended',
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      //   onSubmit(values.name, values.number);
      console.log(values);
      actions.resetForm();
    },
  });
  console.log(formik);
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          //   error={formik.touched.title && Boolean(formik.errors.title)}
          //   title={formik.touched.title && formik.errors.title}
        />
        <FormHelperText>Insert Title name</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Language</FormLabel>
        <Select
          id="language"
          name="language"
          label="Language"
          value={formik.values.language}
          onChange={formik.handleChange}
          //   error={formik.touched.language && Boolean(formik.errors.language)}
          //   title={formik.touched.language && formik.errors.language}
        >
          <option value="english">English</option>
          <option value="ukrainian">Ukrainian</option>
          <option value="chinese">Chinese</option>
          <option value="korean">Korean</option>
          <option value="spanish">Spanish</option>
          <option value="italian">Italian</option>
        </Select>
        <FormHelperText>Insert language</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Genre(s)</FormLabel>
        <Select
          id="genre"
          name="genre"
          label="Genre"
          value={formik.values.genre}
          onChange={formik.handleChange}
          //   error={formik.touched.genre && Boolean(formik.errors.genre)}
          //   title={formik.touched.genre && formik.errors.genre}
        >
          <option value="adventure">Adventure</option>
          <option value="drama">Drama</option>
          <option value="horror">Horror</option>
          <option value="comedy">Comedy</option>
          <option value="family">Family</option>
          <option value="fantasy">Fantasy</option>
          <option value="history">History</option>
          <option value="nature">Nature</option>
          <option value="science-fiction">Science-Fiction</option>
          <option value="romance">Romance</option>
        </Select>
        <FormHelperText>Insert Gener name</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Runtime</FormLabel>
        <Select
          id="runtime"
          name="runtime"
          label="Runtime"
          value={formik.values.runtime}
          onChange={formik.handleChange}
          //   error={formik.touched.runtime && Boolean(formik.errors.runtime)}
          //   title={formik.touched.runtime && formik.errors.runtime}
        >
          <option value="30">30</option>
          <option value="60">60</option>
          <option value="120">120</option>
        </Select>
        <FormHelperText>Insert Runtime name</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Status</FormLabel>
        <Select
          id="status"
          name="status"
          label="Status"
          value={formik.values.status}
          onChange={formik.handleChange}
          //   error={formik.touched.status && Boolean(formik.errors.status)}
          //   title={formik.touched.status && formik.errors.status}
        >
          <option value="ended">Ended</option>
          <option value="in-development">In Development</option>
          <option value="running">Running</option>
        </Select>
        <FormHelperText>Insert Status name</FormHelperText>
      </FormControl>
      <Button
        mt={4}
        colorScheme="teal"
        // isLoading={props.isSubmitting}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default AddingForm;
