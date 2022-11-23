import axios from 'axios'; //

axios.defaults.baseURL = 'http://localhost:3030/';

export async function getFilms() {
  try {
    const response = await axios.get(`films`);
    console.log(response);
    return response.data;
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
