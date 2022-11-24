import axios from 'axios'; //

axios.defaults.baseURL = 'http://localhost:3030/';

export async function getFilms(page) {
  try {
    const response = await axios.get(`films?_page=${page}&_limit=14`);
    const getAllFilms = await axios.get('films');
    console.log(response);
    return { list: response.data, totalCount: getAllFilms.data.length };
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function addFilm(newFilm) {
  try {
    const response = await axios.post(`films`, newFilm);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
