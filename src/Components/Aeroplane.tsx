import React from 'react';

const Aeroplane = () => {
	return (
		<div className="helicopter">
			{/* <div className="light"></div> */}
			{/* <img src="https://images.vexels.com/media/users/3/145795/isolated/preview/05cd33059a006bf49006097af4ccba98-plane-in-flight-by-vexels.png" /> */}
			<div className="medium">
				<img
					src={require('../Assets/animated-helicopter-image-0037.gif')}
					alt="plane"
				/>
			</div>

			<div className="medium crashed">
				<img
					src={require('../Assets/animated-helicopter-image-0037.gif')}
					alt="plane"
				/>
			</div>
			<div className="medium">
				<img
					src={require('../Assets/animated-helicopter-image-0037.gif')}
					alt="plane"
				/>
			</div>

			<div className="medium">
				<img
					src={require('../Assets/animated-helicopter-image-0037.gif')}
					alt="plane"
				/>
			</div>
			<div className="medium">
				<img
					src={require('../Assets/animated-helicopter-image-0037.gif')}
					alt="plane"
				/>
			</div>
		</div>
	);
};

export default Aeroplane;
