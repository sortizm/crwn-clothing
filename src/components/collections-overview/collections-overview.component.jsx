import React from 'react';
import {connect} from "react-redux";

import CollectionPreview from "../collection-preview/collection-preview.component";
import {createStructuredSelector} from "reselect";
import {selectShopCollections, selectShopCollectionsOverview} from "../../redux/shop/shop.selector";

import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector( {
    collections: selectShopCollectionsOverview
});

export default connect(mapStateToProps)(CollectionsOverview);
