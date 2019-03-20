import React, { Component } from 'react';
import './App.css';
import Quote from './components/Quote';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  state = {
    quotes: [{
      key: 0,
      quote: 'Our greatest glory is not in never falling, but in rising every time we fall.',
      author: 'Confucius',
      color: 'darkgrey'
    },
    {
      key: 1,
      quote: 'All our dreams can come true, if we have the courage to pursue them.',
      author: 'Walt Disney',
      color: 'purple'
    },
    {
      key: 2,
      quote: 'It does not matter how slowly you go as long as you do not stop.',
      author: 'Confucius',
      color: 'darkgrey'
    },
    {
      key: 3,
      quote: 'Everything you\'ve ever wanted is on the other side of fear.',
      author: 'George Addair',
      color: 'lightblue'
    },
    {
      key: 4,
      quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
      author: 'Winston Churchill',
      color: 'brown'
    },
    {
      key: 5,
      quote: 'I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.',
      author: 'Nelson Mandela',
      color: 'green'
    },
    {
      key: 6,
      quote: 'If you believe it will work out, you\'ll see opportunities. If you believe it won\'t, you will see obstacles.',
      author: 'Wayne Dyer',
      color: 'cyan',
    },
    {
      key: 7,
      quote: 'Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.',
      author: 'Dale Carnegie',
      color: 'darkred',
    },
    {
      key: 8,
      quote: 'Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.',
      author: 'Helen Keller',
      color: 'lightorange',
    },
    {
      key: 9,
      quote: 'If you can tune into your purpose and really align with it, setting goals so that your vision is an expression of that purpose, then life flows much more easily',
      author: 'Jack Canfield',
      color: 'navy',
    },
    {
      key: 10,
      quote: 'It\'s not about perfect. It\'s about effort. And when you bring that effort every single day, that\'s where transformation happens. That\'s how change occurs.',
      author: 'Jillian Michaels',
      color: 'pink',
    },
    {
      key: 11,
      quote: 'Remember that not getting what you want is sometimes a wonderful stroke of luck.',
      author: 'Dalai Lama',
      color: 'white',
    },
    {
      key: 12,
      quote: 'It is less about becoming a better person, and more of being better, as a person.',
      author: 'J.R. Rim',
      color: 'black',
    },
    {
      key: 13,
      quote: 'The way to get started is to quit talking and begin doing.',
      author: 'Walt Disney',
      color: 'purple',
    },
    {
      key: 14,
      quote: 'The only way to do great work is to love what you do. If you haven\t found it yet, keep looking. Don\'t settle.',
      author: 'Steve Jobs',
      color: 'silver',
    },
    {
      key: 15,
      quote: 'You don\'t have to be great to start, but you have to start to be great',
      author: 'Zig Ziglar',
      color: 'yellow',
    }
    ],
    id: 0
  }

  setQuote = () => {
    let n = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({id: n})
    if (n !== this.state.id) {
      return this.state.quotes[n];
    }
    else return this.setQuote();
  }

  render() {
    return (
      <Router>
      <div style={styles} className="App">
        <Route path="/" render={props=>(
          <Quote setQuote={this.setQuote} quote={this.state.quote} author={this.state.author} />)
          } />
      </div>
      </Router>
    );
  }
}

export default App;

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh',
  width: '100vw'
}

