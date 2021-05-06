const Button = ({ onClick }) => {
    
    return (
    <div className="Container">
        <button type = 'button' onClick = {onClick} className="Button">Load more</button>  
    </div>
    );
    
};
/* import React, { Component } from 'react';
class Button extends Component {
    componentDidUpdate(prevProps, prevState) {

        if (prevProps.page > 2) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
    }

    render() {
        return (
            <div className="Container">
                <button type = 'button' onClick = {this.props.onClick} className="Button">Load more</button>  
            </div>
        );
    }
}
 */
export default Button;