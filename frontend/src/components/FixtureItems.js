import React from 'react';
import './components.css';

const FixtureItems = (props) => {
    console.log("Fixture_items");
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

/*
const body_container = {
    border: "1px solid black",
    float: "left",
    display: "inline-block"
}

const left_container = {
    border: "1px solid green",
    width: "10%"
}

const middle_container = {
    border: "1px solid red",
    width: "80%"
}

const right_container = {
    border: "1px solid green",
    width: "10%"
}*/


export default FixtureItems;