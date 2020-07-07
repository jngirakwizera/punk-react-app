import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Beer from './Beer.js';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        beers: []
    }
}
 

componentDidMount() {
  this.loadBeers();
}

  loadBeers = async () => {

    this.setState({
        beers: []
    });


    
    const response = await fetch("https://api.punkapi.com/v2/beers");

    const beerData = await response.json();
  

    this.setState({
        beers: beerData
    });

}
render() {
  return (
    <div className="App">
      <header className="App-header">
        {this.state.beers.map((beer, index) => (
              <Beer key={index} index={index} beer={beer}/>
          ))}
      </header>
    </div>
  );
}
}



export default App;
