import React from 'react';

import './collection.styles.scss'
import {selectCollection} from "../../redux/shop/shop.selector";
import {connect} from "react-redux";

const CollectionPage = ({ match, collection }) => (
    <div className='collection-page'>
        <h2>Collection { match.params.collectionId }</h2>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
