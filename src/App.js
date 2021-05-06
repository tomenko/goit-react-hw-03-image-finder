import './App.css';
import React, { Component } from 'react';
import api from './api/ApiService';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import Loader from './components/Loader';

class App extends Component {
  state = {
    hits: [],
    page: 1,
    searchQuery: '',
    error: null,
    showModal: false,
    largeImg: '',
    largeImgTags: '',
    isLoading: false,
    fetchLength: '',
  };
  

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImgs();
    }

    if (this.state.page > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };
  

  fetchImgs = () => {
    const { searchQuery, page } = this.state;
    /* const KEY_API = '8571186-3ddb33152fc2603bb66488997';
    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => { this.setState({ hits: response.data.hits }); }); */
    const options = { searchQuery, page };
    this.setState({ isLoading: true });
    api
      .fetchImgs(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          page: prevState.page + 1,
          fetchLength: hits.length,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false })
      });
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query
    })
  };

  onHitClick = (hit, tags) => {
    this.setState({ showModal: true, largeImg: hit, largeImgTags: tags });
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const {
      hits,
      largeImg,
      largeImgTags,
      showModal,
      isLoading,
      page,
      /* error, */
      fetchLength,
    } = this.state;

    const onChangeQuery = this.onChangeQuery;
    const onHitClick = this.onHitClick;
    const fetchImgs = this.fetchImgs;
    const toggleModal = this.toggleModal;

    return (
      <div>
        <Searchbar onChangeQuery={onChangeQuery} />
        <ImageGallery hits={hits} onClick={onHitClick} />
        {hits.length !== 0 && fetchLength === 12 && !isLoading &&
          <Button onClick={fetchImgs} page={page} />}
        {isLoading && (<Loader />)}
        {showModal && (
          <Modal url={largeImg} alt={largeImgTags} onClose={toggleModal} />
        )}
      </div>
    );
  }
};

export default App;