import React from 'react';
import { Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const ViewController = ({ view, changeView }) => {
	return (
		<div className="d-flex">
			<Label for="list-view" className="m-2">
				<Input
					type="radio"
					name="view"
					value="list"
					id="list-view"
					onChange={changeView}
					className="d-inline-block "
					checked={view === 'list'}
				></Input>{' '}
				List View
			</Label>
			<Label for="tablet-view" className="m-2">
				<Input
					type="radio"
					name="view"
					value="table"
					id="table-view"
					onChange={changeView}
					className="d-inline-block "
					checked={view === 'table'}
				></Input>{' '}
				Table View
			</Label>
		</div>
	);
};
ViewController.propTypes = {
	view: PropTypes.string.isRequired,
	changeView: PropTypes.func.isRequired,
};

export default ViewController;
