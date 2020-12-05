import React, { useEffect, useState } from 'react';
import Image from './Image';
import Masonry from 'react-masonry-css';
import Axios from 'axios';
import './index.css';

const App = () => {
	const [ imagesArray, setImagesArray ] = useState([]);

	const fetchImages = async () => {
		const { data } = await Axios.get('https://picsum.photos/v2/list');
		setImagesArray(data);
	};

	// function to fetch images based on the
	useEffect(() => {
		fetchImages();
	}, []);

	const breakpointColumnsObj = {
		default: 6,
		1200: 3,
		992: 3,
		768: 2,
		576: 1,
	};
	console.log(imagesArray);
	return (
		<Masonry breakpointCols={breakpointColumnsObj} className='masonry-grid' columnClassName='masonry-grid_column'>
			{imagesArray.map((image) => <Image key={image.id} {...image} />)}
		</Masonry>
	);
};

export default App;
