import React from 'react';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';
import 'tachyons';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json() )
      .then( users => this.setState({ robots: users }) )
  }

  onSearchChange = (event) => {
    this.setState( { searchfield: event.target.value } )
  }

  render() {
    const { robots,searchfield } = this.state;
    const filteredRobots = robots.filter( (robot) => {
      return(robot.name.toLowerCase().includes(searchfield))
    });

    if (robots.length === 0) {
      return <h1 className='tc'> LOADING... </h1>
    } else {
      return (
        <div className='App tc'>
          <h1>ROBOFRIENDS</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <br/>
          <Scroll>
            <br/>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
      }
  }
}

export default App;