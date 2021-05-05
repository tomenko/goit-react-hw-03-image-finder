import React, {Component} from 'react';
import axios from 'axios';
/* const KEY_API = '8571186-3ddb33152fc2603bb66488997'; */
/* const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal'; 
   https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
*/
/* axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; */

class ApiService extends Component {
    state = {
        hits: [],
        page: 1,
        searchQuery: '',
    };
    componentDidMount() {
        axios
            .get(
                `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}&key=8571186-3ddb33152fc2603bb66488997&image_type=photo&orientation=horizontal&per_page=12`
            )
            .then(response => {this.setState({hits: response.data.hits});});
    }

    render() {
        const { hits } = this.state;
        return (
            <div>
                <h3>Api</h3>
                <ul>
                    {hits.map(({id, webformatURL, tags}) => (<li key={id} >
                        <img
                            src={webformatURL}
                            alt={tags}
                            width="400"
                        />
                    </li>))}
                </ul>
            </div>
        );
    }
    
};

export default ApiService;