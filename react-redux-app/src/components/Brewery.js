import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getBrewery } from '.actions';
const Brewery = ({ getBrewery, brewery, id, isFetching, name, brewery_type }) => {
    useEffect(() => {
        getBrewery();
    }, [getBrewery]);

    if (isFetching) {
        return <h3>See Brewery for </h3>;
    }
    return (
        <div>
            <h2>Brewery: {brewery}</h2>
            <button onClick={getBrewery}>Get New Brewery</button>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        id: state.id,
        isFetching: state.isFetching,
        name: state.name,
        brewery_type: state.brewery_type
    };
};
export default connect(mapStateToProps, { getBrewery })(Brewery);