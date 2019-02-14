import React from 'react';
import { Header, Button } from 'react-native-elements';


class HeaderButton extends React.Component {
	render() {
		return <Button onPress={this.props.onPress} buttonStyle={{
			backgroundColor: '#E91E63',
			borderColor: 'white',
		  }} title={this.props.title}/>

	}
}

export class TopNavigation extends React.Component {
	render() {
		return <Header backgroundColor='#E91E63' placement='left' leftComponent={{ text: this.props.title, style: {color: '#fff', fontSize: 20} }} rightComponent={<HeaderButton onPress={this.props.onNext} title='Next'/>} />;
	}
}
