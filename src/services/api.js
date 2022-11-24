import { toast } from 'react-toastify';
import axios from 'axios'; //

axios.defaults.baseURL = 'http://localhost:3030/';

export async function getFilms(page) {
  try {
    const response = await axios.get(`films?_page=${page}&_limit=14`);
    const getAllFilms = await axios.get('films');
    const totalLength = getAllFilms.data.length;
    if (page === 1) {
      toast.info(`We have received ${totalLength} messages`);
    }
    return { list: response.data, totalCount: totalLength };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function addFilm(newFilm) {
  try {
    const response = await axios.post(`films`, newFilm);
    toast.success('You have successfully added an entry');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
