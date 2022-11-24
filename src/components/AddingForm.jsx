import { useFormik } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  FormHelperText,
  FormErrorMessage,
  Wrap,
  WrapItem,
  Button,
} from '@chakra-ui/react';
import schema from 'utils/yupSchema';
import { GENRES, LANGUAGES } from 'utils/constans';
import { useState } from 'react';

const AddingForm = ({ addFilm, closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      title: '',
      language: 'English',
      genre: [],
      runtime: '60',
      status: 'Ended',
    },
    validationSchema: schema,
    onSubmit: (values, actions) => {
      setIsLoading(true);
      addFilm(values);
      setIsLoading(false);
      actions.resetForm();
      closeModal();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl isInvalid={Boolean(formik.errors.title)}>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        {!Boolean(formik.errors.title) ? (
          <FormHelperText>Enter the Movie Title</FormHelperText>
        ) : (
          <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={Boolean(formik.errors.language)}>
        <FormLabel>Language</FormLabel>
        <Select
          id="language"
          name="language"
          label="Language"
          value={formik.values.language}
          onChange={formik.handleChange}
        >
          {LANGUAGES.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        {!Boolean(formik.errors.language) ? (
          <FormHelperText>Select the Movie Language</FormHelperText>
        ) : (
          <FormErrorMessage>{formik.errors.language}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={Boolean(formik.errors.genre)}>
        <FormLabel>Genre(s)</FormLabel>
        <Wrap spacing={2} pl="1">
          {GENRES.map(item => (
            <WrapItem key={item}>
              <Checkbox
                value={item}
                name="genre"
                onChange={formik.handleChange}
              >
                {item}
              </Checkbox>
            </WrapItem>
          ))}
        </Wrap>
        {!Boolean(formik.errors.genre) ? (
          <FormHelperText>Select the Movie Genre(s)</FormHelperText>
        ) : (
          <FormErrorMessage>{formik.errors.genre}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={Boolean(formik.errors.runtime)}>
        <FormLabel>Runtime</FormLabel>
        <Select
          id="runtime"
          name="runtime"
          label="Runtime"
          value={formik.values.runtime}
          onChange={formik.handleChange}
        >
          <option value="30">30</option>
          <option value="60">60</option>
          <option value="120">120</option>
        </Select>
        {!Boolean(formik.errors.runtime) ? (
          <FormHelperText>Select the Movie Runtime</FormHelperText>
        ) : (
          <FormErrorMessage>{formik.errors.runtime}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={Boolean(formik.errors.status)}>
        <FormLabel>Status</FormLabel>
        <Select
          id="status"
          name="status"
          label="Status"
          value={formik.values.status}
          onChange={formik.handleChange}
        >
          <option value="ended">Ended</option>
          <option value="in-development">In Development</option>
          <option value="running">Running</option>
        </Select>
        {!Boolean(formik.errors.status) ? (
          <FormHelperText>Select the Movie Status</FormHelperText>
        ) : (
          <FormErrorMessage>{formik.errors.status}</FormErrorMessage>
        )}
      </FormControl>
      <Button mt={4} colorScheme="red" isLoading={isLoading} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default AddingForm;
