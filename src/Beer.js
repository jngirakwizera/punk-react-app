import React, {Component} from 'react';

const Pairs = (pairs) => {
    let arrayPairs = [];
    let pairings = pairs.pairs;
    for(let i in pairings){
        arrayPairs.push(<li>{pairings[i]}</li>)
    }
    return <ul>{arrayPairs}</ul>;
}

class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      todos: [],
      isClicked: false
    };
}

    onChange = e => {
      this.setState({
        text: e.target.value
      })
    }

    

    render() {
      return (
        <div>
            
            
            <div>
                {this.props.beer.name}
            </div>
           
            <div>
               {this.props.beer.tagline}
            </div>
            
            <div>
                {this.props.beer.description}
            </div>
           
            <div>
            {this.props.beer.brewers_tips}
            </div>

            
            <div>
            First Brewed - {this.props.beer.first_brewed}
            </div>

            <Pairs pairs={this.props.beer.food_pairing} />

            <hr></hr>

            </div>
            
      )
    }
  }

export default Beer;