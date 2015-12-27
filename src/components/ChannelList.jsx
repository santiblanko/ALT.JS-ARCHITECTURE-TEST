import React from 'react';
import Channel from './Channel.jsx'
import mui from 'material-ui'

var {Card, List} = mui;

class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [
                'Channel 1',
                'Channel 2'
            ]
        }
    }

    render() {
		var channelsNodes = this.state.channels.map((channel) => {
			return (
				<Channel channel={channel} />
			)
		})

		return (
			<Card style={{
                flexGrow:1
            }}>
				<List>{channelsNodes}</List>
			</Card>
		)
    }
}

export default ChannelList;