import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
export class CreateTodoForm extends Component {
	state = {
		text: '',
		description: '',
	};
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createTodo(this.state);
		e.target.reset();
		this.setState({ text: '', description: '' });
	};
	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormGroup>
					<Label>Enter Task</Label>
					<Input placeholder="write Your Task" name="text" value={this.state.text} onChange={this.handleChange} />
				</FormGroup>
				<FormGroup>
					<Label>Enter Description</Label>
					<Input
						type="textarea"
						placeholder="write some description"
						name="description"
						value={this.state.description}
						onChange={this.handleChange}
					/>
				</FormGroup>

				<Button type="submit">Create Task</Button>
			</Form>
		);
	}
}

CreateTodoForm.propTypes = {
	createTodo: PropTypes.func.isRequired,
};

export default CreateTodoForm;
