import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<MuiThemeProvider>
					<div className="container-all">
					 	 {this.props.children}
					</div>
				</MuiThemeProvider>
			);
	}
}

export default App;