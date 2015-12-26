import React from 'react'

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			messages:[
			'hi there hows arssde you?',
			'I am fines, and you?'
			]
		}
	}

	render(){
		//debugger;
		var messagesNodes = this.state.messages.map((message) => {
			return (
				<div>{message}</div>
			)
		})

		return (
			<div>{messagesNodes}</div>
		)
	}

}

export default App;