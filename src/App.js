import React, {Component} from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Events from './components/Events';
import Details from './components/Details';
import Map from './components/Map';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Search/>
      <Events/>
      <Details/>
      <Map/>
      </div>
    );
  }
}
export default App;
