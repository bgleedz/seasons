import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
	state = { lat: null, errorMessage: ''};

	componentDidMount () {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errorMessage: err.message })
		);
	}

	renderContent () {
		let element = <Spinner message = "Please accept location request."/>;

		if (this.state.errorMessage && !this.state.lat) {
			element = <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			element = <SeasonDisplay lat={this.state.lat} />;
		}

		return element;
	}

	render() {
		return (
			<div className="border red">
				{this.renderContent()}
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'));