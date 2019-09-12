import {
    FETCHING_BREWERY_START,
    FETCHING_BREWERY_SUCCESS,
    FETCHING_BREWERY_FAILURE
} from '../actions/index';


const initialState = {
    id: "",
    isFetching: false,
    name: "",
    brewery_type: ""

}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_BREWERY_START:
            return {
                ...state,
                isFetching: true,
                name: "",
                brewery_type: ""
            }
        case FETCHING_BREWERY_SUCCESS:
            return {
                ...state,
                isFetching: false,

                name: action.payload,
                brewery_type: action.payload
            };
        default:
            return state;
    }
}