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
  getRandomChars (name) {
    MarvelAPI.get('/characters', {
      params: {
        name: "Charles Xavier"
      }
    }, () => {
      console.log(this.state.team);
    })
      .then((result) => {
        this.setState({
          team: result.data
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
        <h1>Hello From App!</h1>
      </div>
    )
  }
};

export default App;