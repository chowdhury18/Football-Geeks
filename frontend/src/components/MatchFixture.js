import React from 'react';
import FixtureItems from './FixtureItems';

const MatchFixture = (props) => {
    console.log("MatchFixture");
    return props.fixture.map(f =>
        <
        FixtureItems key = { f.matchDate }
        fixture_item = { f }
        />
    );
}

export default MatchFixture;