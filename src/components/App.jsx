import React from 'react'
import MessageList from './MessageList.jsx'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import basicTheme from '../themes/basicTheme';
import AppBar from 'material-ui/lib/app-bar';
import LinearProgress from 'material-ui/lib/linear-progress';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
class App extends React.Component {

	constructor(){
		super()
	}

	render(){
		//debugger;
		return (
			<div>
				<LinearProgress mode="determinate" value={100} size={5} color={"black"} />
				<AppBar title="Awesome Chat App" />
		        <div style={{
		          display: 'flex',
		          flexFlow: 'row wrap',
		          maxWidth: 1200,
		          width: '100%',
		          margin: '30px auto 30px'
		        }}>
					<ChannelList/>
					<MessageList />
				</div>

				<MessageBox/>

			</div>
		)
	}

	getChildContext() {
	    return {
	      muiTheme: ThemeManager.getMuiTheme(basicTheme),
	    };
  }

}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default App;