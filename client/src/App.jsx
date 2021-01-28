import React from 'react';
import MarvelAPI from '../../db/MarvelAPI';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      team: []
    }
    this.getRandomChars = this.getRandomChars.bind(this);
  }
  getRandomChars () {
    MarvelAPI.get('/characters', {
      params: {
        name: "Charles Xavier"
      }
    }, () => {
      console.log(this.state.team);
    })
      .then((result) => {
        var name = result.data.data.results[0].name;
        this.setState({
          team: name
        })
      })
      .catch((err) => {
        console.log(err)
      })
  };
  componentDidMount() {
    this.getRandomChars();
  }
  render() {
    return (
      <div>
        <h1>{this.state.team}</h1>
      </div>
    )
  }
};

export default App;