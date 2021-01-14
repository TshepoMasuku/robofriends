import React from 'react';
import './App.css';
import 'tachyons';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// This means the current directory './', and this means the previous directory '../'.

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

  // onSearchChange = () => {
  //   const input = document.querySelector('input');
  //   this.setState( { searchfield: input.value } )
  // }
  onSearchChange = (event) => {
    this.setState( { searchfield: event.target.value } )
  }

  render() {
    const { robots,searchfield } = this.state;
    const filteredRobots = robots.filter( (robot) => {
      return(robot.name.toLowerCase().includes(searchfield))
    });

    if (robots.length === 0) {
      return <h1 className='f1 tc'> LOADING... </h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>ROBOFRIENDS</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <br></br>
          {/* <hr></hr> */}
          <Scroll>
            <br></br>
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