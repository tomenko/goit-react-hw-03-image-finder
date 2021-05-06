import React, { Component } from 'react';
import shortid from 'shortid';

class Searchbar extends Component {
    state = {
        search: ''
    };

    hendleInputChange = event => {
        this.setState({ search: event.currentTarget.value });
    };

    handleSubmit = event => {
      event.preventDefault();
      this.props.onChangeQuery(this.state.search)
      this.reset()
    };
    
    reset = () => {
      this.setState({ search: ''})
    };

    render() {
        const { search } = this.state;
        const hendleInputChange = this.hendleInputChange;

        return (
            <>
                <header className="Searchbar">
                    <form className="SearchForm" onSubmit = {this.handleSubmit}>
                        <button type="submit" className="SearchForm-button">
                            <span className="SearchForm-button-label">Search</span>
                        </button>

                        <input
                            className="SearchForm-input"
                            type="text"
                            name="searchQuery"
                            id = {shortid.generate()}
                            value={search}
                            /* autocomplete="off" */
                            /* autofocus */
                            placeholder="Search images and photos"
                            onChange = {hendleInputChange}
                        />
                    </form>
                </header>  
            </>
        )
    }
};


export default Searchbar;

