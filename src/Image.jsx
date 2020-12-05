import React from 'react';

const Image = (props) => {
	const { tags, download_url } = props;
	return (
		<img
			src={download_url}
			style={{ maxWidth: '100%', marginTop: 15, marginLeft: 0, borderRadius: '5px' }}
			alt={tags}
		/>
	);
};

export default Image;
