import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types';

const FilterController = ({ handleFilter }) => {
	return (
		<div>
			<ButtonGroup>
				<Button active color="info" outline onClick={() => handleFilter('all')}>
					All
				</Button>
				<Button outline color="info" onClick={() => handleFilter('running')}>
					Running
				</Button>
				<Button outline color="info" onClick={() => handleFilter('completed')}>
					Completed
				</Button>
			</ButtonGroup>
		</div>
	);
};
FilterController.propTypes = {
	handleFilter: PropTypes.func.isRequired,
};

export default FilterController;
