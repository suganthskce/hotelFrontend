
import ExternalApiRequest from './../services/externalApi';
import Constants from './../constants/actions';

const getHotel = () => {
    return async (dispatch) => {
        dispatch({ type: Constants.SEARCH.FETCHING });
        const response = await ExternalApiRequest({
            url: 'https://mocki.io/v1/fe40313a-221a-4614-9aab-1aadcbd566cc'
        });
        const { hotels = [] } = response;
        dispatch({
            type: Constants.SEARCH.GET_LISTING,
            payload: hotels
        });
    };
};


export {
    getHotel
};
