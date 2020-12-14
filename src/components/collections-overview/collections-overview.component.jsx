import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview  from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss';
import {selectCollections, selectCollectionsForPreview} from '../../redux/shop/shop.selector';

const CollectionOverview = ({collections, ...otherCollectionPreviw}) => (
    <div className='collection-overview'>
        {
            collections.map(({id, ...otherCollectionPreviw}) => (
                <CollectionPreview key={id} { ...otherCollectionPreviw } />
            ))
        }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionOverview);