import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

export default class Quote extends Component {
    state = {
        quote: '',
        author: '',
        color: ''
    }

    submitQuote = (e) => {
        let test = this.props.setQuote();
        document.body.style = `background: ${test.color}`;
        return this.setState({quote: test.quote, author: test.author, id: test.id})
    }

    newMethod() {
        const opacity = document.getElementById('opacity');
        opacity.classList.toggle('isupdating');
        setTimeout(function(){opacity.classList.remove('isupdating');},1000);
    }

    componentDidMount() {
        this.submitQuote();
    }

    componentDidUpdate() {
        this.newMethod();

    }

    render() {
        return (
        <div id="quote-box" onLoad={this.submitQuote} style={styles}>
            <div id="opacity">
                <h2 id="text">{this.state.quote}</h2>
                <h5 id="author">- {this.state.author}</h5>
            </div>
            <div id="buttons">
                <a target="_blank" rel="noopener noreferrer" id="tweet-quote" href={`https://twitter.com/intent/tweet?text=%22${this.state.quote}%22%20-%20${this.state.author}`}><button style={buttons}><FontAwesomeIcon icon={faTwitter} /></button></a>
                <button onClick={this.submitQuote} style={buttons} id="new-quote">New Quote</button>
            </div>
        </div>
        )
  }
}

const styles = {
    padding: '2em 1em',
    background: 'white',
    textAlign: 'center'
}

const buttons = {
    background: 'none',
    fontFamily: 'arial',
    fontSize: '16px',
    textDecoration: 'none',
    padding: '10px',
    margin: '.5em',
    borderRadius: '3px'
}

Quote.propTypes = {
    setQuote: PropTypes.func.isRequired
}