'use strict';
// imports
const fetch = require('node-fetch');

// global variables
const fcb_code = 529;

// Json data
const fs = require('fs');
let rawData = fs.readFileSync(__dirname + '/Data.json', 'utf8');
let fixtureData = JSON.parse(rawData);

// Get prev-match-fixtures
const fetchPrevMatchFixture = async(api_URL, api_key, fcb_code) => {
    const endpoint = `${api_URL}/fixtures/team/${fcb_code}`
    console.log(endpoint);
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-key': api_key
        }
    });
    return response.json();
}

const matchFixture = (app, api_URL, api_key) => {

    app.get('/prevMatchFixture', async(req, res) => {
        //const prevMatchFixture = await fetchPrevMatchFixture(api_URL, api_key, fcb_code);
        //const fetchData = prevMatchFixture.api.fixtures;
        const fetchData = fixtureData;
        let allMatches = [];
        for (let [key, value] of Object.entries(fetchData)) {
            const month = new Date(value.event_date).getMonth() + 1;
            const year = new Date(value.event_date).getFullYear();
            const currentDate = new Date();
            const currentmonth = currentDate.getMonth() + 1;
            const currentYear = currentDate.getFullYear();
            if (year == currentYear && (currentmonth - 1) <= month && month <= currentmonth) {
                let data = {
                    "matchDate": value.event_date,
                    "league": value.league.name,
                    "status": value.status,
                    "round": value.round,
                    "venue": value.venue,
                    "homeTeamName": value.homeTeam.team_name,
                    "homeTeamLogo": value.homeTeam.logo,
                    "awayTeamName": value.awayTeam.team_name,
                    "awayTeamLogo": value.awayTeam.logo,
                    "score": value.score
                };
                allMatches.push(data);
            }
        }
        //match = { "played": playedMatches, "upcoming": upcomingMatches };
        res.send(allMatches);
    });
};

module.exports = matchFixture;