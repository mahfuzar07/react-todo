import React, { Component } from 'react';
import shortid from 'shortid';
import Controller from './Control';
import CreateTodoForm from './TodoForm';
import ListView from './Listview';
import TableView from './TableView';

import { Modal, ModalBody, ModalHeader } from 'reactstrap';

class Todos extends Component {
	state = {
		todos: [
			{
				id: '14566678',
				text: 'Example Todo 1',
				description: 'example todo 1',
				time: new Date(),
				isSelect: false,
				isComplete: false,
			},
		],
		isOpenTodoForm: false,
		searchTerm: '',
		view: 'list',
		filter: 'all',
	};
	toggleSelect = (todoId) => {
		const todos = [...this.state.todos];
		const todo = todos.find((t) => t.id === todoId);
		todo.isSelect = !todo.isSelect;
		this.setState({ todos });
	};
	toggleComplete = (todoId) => {
		const todos = [...this.state.todos];
		const todo = todos.find((t) => t.id === todoId);
		todo.isComplete = !todo.isComplete;
		this.setState({ todos });
	};
	toggleForm = () => {
		this.setState({
			isOpenTodoForm: !this.state.isOpenTodoForm,
		});
	};
	handleSearch = (value) => {
		this.setState({ searchTerm: value });
	};
	createTodo = (todo) => {
		todo.id = shortid.generate();
		todo.time = new Date();
		todo.isComplete = false;
		todo.isSelect = false;

		const todos = [todo, ...this.state.todos];
		this.setState({ todos });
		this.toggleForm();
	};

	handleFilter = (filter) => {
		this.setState({
			filter,
		});
	};
	changeView = (event) => {
		this.setState({
			view: event.target.value,
		});
	};
	clearSelected = () => {
		const todos = this.state.todos.filter((todo) => !todo.isSelect);
		this.setState({ todos });
	};
	clearCompleted = () => {
		const todos = this.state.todos.filter((todo) => !todo.isComplete);
		this.setState({ todos });
	};
	reset = () => {
		this.setState({
			isOpenTodoForm: false,
			searchTerm: '',
			view: 'list',
			filter: 'all',
		});
	};

	getView = () => {
		let todos = this.performSearch();
		todos = this.performfilter(todos);
		return this.state.view === 'list' ? (
			<ListView todos={todos} toggleSelect={this.toggleSelect} toggleComplete={this.toggleComplete}></ListView>
		) : (
			<TableView todos={todos} toggleSelect={this.toggleSelect} toggleComplete={this.toggleComplete}></TableView>
		);
	};
	performSearch = () => {
		return this.state.todos.filter((todo) => todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
	};
	performfilter = (todos) => {
		const { filter } = this.state;
		if (filter === 'completed') {
			return todos.filter((todo) => todo.isComplete);
		} else if (filter === 'running') {
			return todos.filter((todo) => !todo.isComplete);
		} else {
			return todos;
		}
	};

	render() {
		return (
			<div>
				<h1 className="display-4 text-center mb-5">React Todos</h1>
				<div className="mb-4">
					<Controller
						term={this.state.searchTerm}
						view={this.state.view}
						toggleForm={this.toggleForm}
						handleSearch={this.handleSearch}
						handleFilter={this.handleFilter}
						changeView={this.changeView}
						clearCompleted={this.clearCompleted}
						clearSelected={this.clearSelected}
						reset={this.reset}
					/>
				</div>
				<div className="mb-4">
					<div>{this.getView()} </div>
				</div>

				<Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
					<ModalHeader toggle={this.toggleForm}></ModalHeader>
					<ModalBody>
						<CreateTodoForm createTodo={this.createTodo}></CreateTodoForm>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}
export default Todos;
