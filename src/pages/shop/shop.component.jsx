import React from 'react';
import CollectionsOverview from "components/collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import CollectionPage from "pages/collection/collection.component";

import withSpinner from "components/with-spinner/with-spinner.component"

import {fetchCollectionsAsync} from "redux/shop/shop.actions";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching, selectIsCollectionLoaded} from "redux/shop/shop.selector";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class Shop extends React.Component {

    componentDidMount() {
        const { fetchCollectionsAsync } = this.props;
        fetchCollectionsAsync();
    }

    render() {
        const { match, isCollectionFetching, isCollectionLoaded } = this.props;
        return (
            <div className='shop-page'>
                <Route
                    exact path={`${match.path}`}
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />}
                />
            </div>
        )
    }
};

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);