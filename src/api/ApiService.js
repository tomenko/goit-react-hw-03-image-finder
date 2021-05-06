import axios from 'axios';
const KEY_API = '8571186-3ddb33152fc2603bb66488997';

const fetchImgs = ({ searchQuery = '', page = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default {fetchImgs};