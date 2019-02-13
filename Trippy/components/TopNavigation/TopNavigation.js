import React from 'react';
import { Header, Button } from 'react-native-elements';


class HeaderButton extends React.Component {
	render() {
		return <Button onPress={this.props.onPress} title={this.props.title}/>

	}
}

export class TopNavigation extends React.Component {
	render() {
		return <Header placement='left' leftComponent={{ text: this.props.title, style: {color: '#fff'} }} rightComponent={<HeaderButton onClick={this.props.onNext} title='Next'/>} />;
	}
}
