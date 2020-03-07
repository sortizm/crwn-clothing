import React from 'react';
import CollectionsOverview from "components/collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import CollectionPage from "pages/collection/collection.component";

import withSpinner from "components/with-spinner/with-spinner.component"

import {firestore, convertCollectionsSnapshotToMap} from "components/firebase/firebase.utils";
import {updateCollections} from "redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class Shop extends React.Component {
    state = {
        isLoading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            this.props.updateCollections(collectionsMap);
            this.setState({ isLoading: false });
        })
    }

    render() {
        const { match } = this.props;
        const { isLoading } = this.state;
        return (
            <div className='shop-page'>
                <Route
                    exact path={`${match.path}`}
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props}/>}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
                />
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(Shop);