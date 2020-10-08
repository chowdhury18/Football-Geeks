import React from 'react';
import './components.css';

const FixtureItems = (props) => {
    console.log("FixtureItems");
    const item_data = props.fixture_item;
    return (
        <div className="fixture_item_container">
            <div className="fixture_item_left_container">
                <img style={logo} src={item_data.homeTeamLogo} alt="home"/>
            </div>
            <div className="fixture_item_middle_container">
                <h5>{item_data.matchDate}</h5>
                <h3>{item_data.score.fulltime}</h3>
                <h5>{item_data.venue}</h5>
            </div>
            <div className="fixture_item_right_container">
                <img style={logo} src={item_data.awayTeamLogo} alt="away"/>
            </div>
        </div>
    );
}

const logo = {
    width: "100%",
    height: "100%"
}

export default FixtureItems;