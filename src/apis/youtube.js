import axios from 'axios';

const KEY = 'AIzaSyCvsfrzzb5RaqJ2aZ8CtOthzypXX9cpw7Y';

export const API_DEFAULT_PARAMS = {
  part: 'snippet',
  maxResults: 5,
  key: KEY,
};

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  // add your default one
  // spread the request's param
});
