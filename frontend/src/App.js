import React from 'react';
import './App.css';
import MatchFixture from './components/MatchFixture';
import axios from 'axios';

// backend ENDPOINT
const ENDPOINT = "http://localhost:5000"

// Get Match Fixtures
const getMatchFixture = async () => {
  console.log("getFixtureData");
  let finishedMatch = [];
  let upcomingMatch = [];
  let match = {};
  const endpoint = `${ENDPOINT}/prevMatchFixture`
  const fixture = await axios.get(endpoint).then(res => {return res.data});
  for (let [key, value] of Object.entries(fixture)) {
    let date = new Date(value.matchDate);
    let minutes = (date.getMinutes().toString() === "0") ? "00": date.getMinutes().toString();
    let matchDate = date.getDate().toString() + "-" + (date.getMonth()+1).toString() + "-" + date.getFullYear() + " " + date.getHours().toString() + ":" + minutes;
    value.matchDate = matchDate;
    if (value.status === "Match Finished") {
      finishedMatch.push(value);
    } else if (value.status !== "Match Postponed") {
      value.score.fulltime = "--";
      upcomingMatch.push(value);
    }
  }
  match["FinishedMatch"] = finishedMatch;
  match["UpcomingMatch"] = upcomingMatch;
  return match;
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