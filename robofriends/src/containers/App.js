import React , {Component} from 'react';
import './App.css';
import CardList from '../components/CardList';
// import {robots} from '../components/robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


class App extends Component {

  constructor(){
    super();
    this.state = {
      robots : [] ,
      searchField : ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
    .then(users => this.setState({robots : users}));
  }

  onSearchChange = (event) => {
    this.setState({searchField : event.target.value});
  }

  render(){
    const {robots , searchField} = this.state;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ?
      <h1>LOADING</h1> :
    (
      <div>
        <h1 className='tc f1'>YOUR ROBO CHUNKS</h1>
        <SearchBox searchChange={this.onSearchChange} />

        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </Scroll>

      </div>
        
    );
  
  }
}

export default App;
