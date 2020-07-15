import React from 'react';

import Spinner from '../spinner/spinner.conponent';

const WithSpinner = (WrappedComponenet) => ({ isLoading, ...otherProps }) => {
	return isLoading ? <Spinner /> : <WrappedComponenet {...otherProps} />;
};

export default WithSpinner;
