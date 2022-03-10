import React from 'react';
import SearchPanel from './search';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import FilterController from './filter_controller';
import ViewController from './view_controller';
import BulkController from './bulk_controller';

const Controller = ({ term, handleSearch, toggleForm, handleFilter, changeView, view, clearSelected, clearCompleted, reset, active }) => {
	return (
		<div>
			<SearchPanel term={term} handleSearch={handleSearch} toggleForm={toggleForm} />

			<Row>
				<Col md={4}>
					<FilterController handleFilter={handleFilter}></FilterController>
				</Col>
				<Col md={4}>
					<ViewController view={view} changeView={changeView}></ViewController>
				</Col>
				<Col md={4} className="d-flex">
					<div className="ms-auto">
						<BulkController clearSelected={clearSelected} clearCompleted={clearCompleted} reset={reset}></BulkController>
					</div>
				</Col>
			</Row>
		</div>
	);
};

Controller.propTypes = {
	term: PropTypes.string.isRequired,
	view: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired,
	toggleForm: PropTypes.func.isRequired,
	handleFilter: PropTypes.func.isRequired,
	changeView: PropTypes.func.isRequired,
	clearSelected: PropTypes.func.isRequired,
	clearCompleted: PropTypes.func.isRequired,
	reset: PropTypes.func.isRequired,
	active: PropTypes.func.isRequired,
};

export default Controller;
