import React, {Component} from 'react';
import data from './data';
import Feed from './components/Feed'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    this.setState({
      posts: data
    })
  }

  render(){
    console.log(this.state.posts)
    return (
      <div className="App">
        <Feed posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
