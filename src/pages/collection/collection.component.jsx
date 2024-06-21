import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer,
} from './collection.styles';

const CollectionPage = ({ collection }) => {
	if (!collection) {
		return;
	}

	const { title, items } = collection;

	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

const mapStateToProps = (rootState, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(rootState),
});

export default connect(mapStateToProps)(CollectionPage);
