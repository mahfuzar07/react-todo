import React, { Component } from 'react';
import ListView from './Listview';
import TableView from './TableView';

class Todos extends Component {
	state = {
		todos: [
			{
				id: 'fhfhffdfdf',
				text: 'todo1',
				description: 'test description',
				time: new Date(),
				isComplete: false,
				isSelect: false,
			},
			{
				id: 'fdfddfhhdfrt',
				text: 'todo 2',
				description: 'test description',
				time: new Date(),
				isComplete: false,
				isSelect: false,
			},
		],
	};
	toggleSelect = (todoId) => {};
	toggleComplete = (todoId) => {};
	render() {
		return (
			<div>
				<h1 className="display-4 text-center mb-5">My Todos</h1>
				<div className="mb-4">
					<ListView todos={this.state.todos} toggleSelect={this.toggleSelect} toggleComplete={this.toggleComplete}></ListView>
				</div>
				<div>
					<TableView todos={this.state.todos} toggleSelect={this.toggleSelect} toggleComplete={this.toggleComplete}></TableView>
				</div>
			</div>
		);
	}
}
export default Todos;
