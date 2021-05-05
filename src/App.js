import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
/* import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';
import ApiService from './api'; */

class App extends Component {
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

  onChangeQuery = query => {
    console.log(query);
    this.setState({
      searchQuery: query
    });
    console.log(this.state.searchQuery);
  };

  render() {
    const { hits } = this.state;
    const onChangeQuery = this.onChangeQuery;
    return (
      <div>
        <Searchbar onChangeQuery={onChangeQuery}/>
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

export default App;

/* class App extends Component {
  state = {
    hits: [],
    page: 1,
    searchQuery: '',
  };
    
  render() {
    return (
       <>
         <Searchbar />
         <ImageGallery />
         <ImageGalleryItem />
         <Button />
        <Loader/>
        <Modal />
        <ApiService />
      </>
    );
  }
};

export default App; */