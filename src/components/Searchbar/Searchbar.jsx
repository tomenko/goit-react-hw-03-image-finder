import React, { Component } from 'react';
import shortid from 'shortid';

class Searchbar extends Component {
    state = {
        search: ""
    };

    hendleInputChange = event => {
      /* const {value, name} = event.currentTarget;
      this.setState({ [name]: value }); */
        this.setState({search: event.currentTarget.value});
    }

    handleSubmit = event => {
      event.preventDefault();
      console.log(this.state);
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
            <p>Searchbar</p>
            <form onSubmit = {this.handleSubmit}>
                <label>
            
                    <input
                        type="text"
                        name="searchQuery"
                        required
                        id = {shortid.generate()}
                        value={search}
                        onChange = {hendleInputChange} 
                    />
                </label>

                <button type="submit">Search</button>
            </form>
        </>
        
        
        )
    }
};

export default Searchbar;

