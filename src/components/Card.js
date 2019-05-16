import React from 'react';
import Header from './Header';
import Collapsible from './Collapsible';
import Footer from './Footer';


class Card extends React.Component {
    render() {
        return (
            <div className="card__body" id="card__body">
                <Header />
                <Collapsible actionReset = {this.props.actionReset} actionToChange={this.props.actionToChange}
                newName={this.props.newName} changeColor={this.props.changeColor}/>
                <Footer />
            </div>
        )
    }
}

export default Card;