import React, { Component, Fragment } from 'react';
import Listing from '../components/Search/Listing';
import Filter from '../components/Search/Filter';
import { connect } from 'react-redux';
import { getHotel } from "../actions/searchActions";
import "../css/search.css";

class SearchContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getHotel();
    }

    render() {
        return (
            <Fragment>
                <Filter />
                <Listing {...{
                    ...this.props,
                }} />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const { hotelListing = {}, } = state;
    return {
        ...hotelListing
    }
};

const mapDispatchToProps = (dispatch) => ({
    getHotel: () => dispatch(getHotel())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
