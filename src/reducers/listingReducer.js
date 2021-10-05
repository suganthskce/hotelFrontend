import Constants from '../constants/actions';

const _defaultState = {
    fetching: false,
    hotelList: [],
};

const hotelListing = (state = _defaultState, action) => {
    try {
        const { type, payload } = action;
        switch (type) {
            case Constants.SEARCH.GET_LISTING: {
                return {
                    ...state,
                    hotelList: payload,
                    fetching: false,
                }
            }
            case Constants.SEARCH.FETCHING: {
                return {
                    ...state,
                    fetching: true,
                    hotelList: []
                }
            }
            default:
                return state;
        }
    } catch (error) {
        return _defaultState;
    }
};

export default hotelListing;
