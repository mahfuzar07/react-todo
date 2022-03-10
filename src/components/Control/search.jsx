import React from 'react';

import { Input, Button, Col } from 'reactstrap';
import PropTypes from 'prop-types';

const SearchPanel = ({ term, handleSearch, toggleForm }) => {
	return (
		<div className="d-flex mb-2">
			<Col md={10}>
				<Input placeholder="Enter Search Text" value={term} onChange={(e) => handleSearch(e.target.value)}></Input>
			</Col>

			<Button className="ms-auto" color="secondary" onClick={toggleForm}>
				Cretae A New Todo
			</Button>
		</div>
	);
};

SearchPanel.propTypes = {
	term: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired,
	toggleForm: PropTypes.func.isRequired,
};

export default SearchPanel;
