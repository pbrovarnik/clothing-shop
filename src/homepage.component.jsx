import React from 'react';
import './homepage.styles.scss';

const HomePage = () => {
	return (
		<div className='homepage'>
			<div className='directory-menu'>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>
							HATS
							<span className='subtitle'>SHOP NOW</span>
						</h1>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>
							JACKETS
							<span className='subtitle'>SHOP NOW</span>
						</h1>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>
							SNEAKERS
							<span className='subtitle'>SHOP NOW</span>
						</h1>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>
							WOMEN
							<span className='subtitle'>SHOP NOW</span>
						</h1>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>
							MENS
							<span className='subtitle'>SHOP NOW</span>
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
