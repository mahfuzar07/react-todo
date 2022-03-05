import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Todos from './components/Todos';

function App() {
	return (
		<Container className="my-3">
			<Row>
				<Col>
					<Todos></Todos>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
