import React from 'react';
import { Header } from 'react-native-elements';

export class TopNavigation extends React.Component {
	render() {
		return <Header leftComponent={{ text: this.props.title }} rightComponent={{ text: 'next', style: { color: '#fff' } }} />;
	}
}
