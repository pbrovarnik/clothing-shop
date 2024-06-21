import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner/spinner.conponent';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionOverviewContainer = lazy(() =>
	import('../../components/collections-overview/collections-overview.container')
);
const CollectionsPageContainer = lazy(() =>
	import('../collection/collection.container')
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className='shop-page'>
			<Suspense fallback={<Spinner />}>
				<Switch>
					<Route
						exact
						path={`${match.path}`}
						component={CollectionOverviewContainer}
					/>
					<Route
						path={`${match.path}/:collectionId`}
						component={CollectionsPageContainer}
					/>
					<Redirect to='/' />
				</Switch>
			</Suspense>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
