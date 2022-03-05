import React from 'react';
import { Input, Button, Table } from 'reactstrap';
import PropTypes from 'prop-types';

const RowItem = ({ todo, toggleSelect, toggleComplete }) => {
	return (
		<tr>
			<td>
				<Input type="checkbox" id="{todo.id}" checked={todo.isSelect} onChange={() => toggleSelect(todo.id)}></Input>
			</td>
			<td>{todo.time.toDateString()}</td>
			<td>{todo.text}</td>
			<td>
				<Button color={todo.isComplete ? 'danger' : 'success'} onClick={() => toggleComplete(todo.id)}>
					{todo.isComplete ? 'Completed' : 'Running'}
				</Button>
			</td>
		</tr>
	);
};
RowItem.propTypes = {
	todos: PropTypes.object.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

const TableView = ({ todos, toggleSelect, toggleComplete }) => {
	return (
		<Table borderless bordered hover responsive>
			<thead className="text-center">
				<tr>
					<th>Check</th>
					<th>Time</th>
					<th>Todo</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody className="text-center">
				{todos.map((todo) => (
					<RowItem key={todo.id} todo={todo} toggleSelect={toggleSelect} toggleComplete={toggleComplete}></RowItem>
				))}
			</tbody>
		</Table>
	);
};
TableView.propTypes = {
	todos: PropTypes.object.isRequired,
	toggleSelect: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};
export default TableView;
