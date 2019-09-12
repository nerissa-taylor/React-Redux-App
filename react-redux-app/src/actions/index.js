import axios from 'axios';
export const FETCHING_BREWERY_START = "FETCHING_BREWERY_START";
export const FETCHING_BREWERY_SUCCESS = "FETCHING_BREWERY_SUCCESS";
export const FETCHING_BREWERY_FAILURE = "FETCHING_BREWERY_FAILURE";
export const getBrewery = () => dispatch => {
    dispatch({ type: FETCHING_BREWERY_START });
    axios
        .get("https://api.openbrewerydb.org/breweries")
        .then(response => {

            dispatch({ type: FETCHING_BREWERY_SUCCESS, payload: response.data });
            console.log(response.data)
        })
        .catch(err => {
            dispatch({ type: FETCHING_BREWERY_FAILURE, payload: "" });
        });
};