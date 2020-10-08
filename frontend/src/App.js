import React from 'react';
import './App.css';
import MatchFixture from './components/MatchFixture';
import axios from 'axios';

// backend ENDPOINT
const ENDPOINT = "http://localhost:5000"

// Get Match Fixtures
const getMatchFixture = async () => {
  console.log("getFixtureData");
  const endpoint = `${ENDPOINT}/prevMatchFixture`
  return await axios.get(endpoint).then(res => {return res.data});
}

class App extends React.Component {
  state = {
    FinishedMatchFixture: [],
    UpcomingMatchFixture: []
  };

  async componentDidMount() {
    const fixture = await getMatchFixture();
    this.setState({FinishedMatchFixture: fixture.FinishedMatch});
    this.setState({UpcomingMatchFixture: fixture.UpcomingMatch});
  }

  render(){
    return(
      <div className="App">
        <React.Fragment>
          <header className="App-header">
            <h2>Football Geeks</h2>
          </header>
          <div className="App-Fixture-Body">
            <h3>Finished Matches</h3>
            <MatchFixture fixture={this.state.FinishedMatchFixture} />
            <h3>Upcoming Matches</h3>
            <MatchFixture fixture={this.state.UpcomingMatchFixture} />
          </div>
        </React.Fragment>
      </div>
    )
  }
}

export default App;