import React from 'react';

import { ListGroupItem, ListGroup, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
	return (
		<ListGroupItem className="d-flex align-items-center">
			<Input type="checkbox" id="{todo.id}" checked={todo.isSelect} onChange={() => toggleSelect(todo.id)} />
			<div className="px-5">
				<h4 className="mt-1">{todo.text}</h4>
				<p>{todo.time.toDateString()}</p>
			</div>

			<Button className="ms-auto" color={todo.isComplete ? 'danger' : 'success'} onClick={() => toggleComplete(todo.id)}>
				{todo.isComplete ? 'Completed' : 'Running'}
			</Button>
		</ListGroupItem>
	);
};

ListItem.propTypes = {
	todos: PropTypes.object.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
	return (
		<ListGroup>
			{todos.map((todo) => (
				<ListItem key={todo.id} todo={todo} toggleSelect={toggleSelect} toggleComplete={toggleComplete}></ListItem>
			))}
		</ListGroup>
	);
};
ListView.propTypes = {
	todos: PropTypes.object.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

export default ListView;
