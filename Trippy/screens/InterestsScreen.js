import React from 'react';
import {
	ScrollView,
	StyleSheet,
	View,
} from 'react-native';
import { Avatar, Badge, Text, Icon } from 'react-native-elements';
import { TopNavigation } from '../components/TopNavigation/TopNavigation'
import Images from '../assets/images/images'

export default class InterestsScreen extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			tags: [
				{ id: 1, name: 'Food', img: 'Food' },
				{ id: 2, name: 'Art', img: 'Art' },
				{ id: 3, name: 'Theater', img: 'Theater'}
			],
			selectedTags: []
		}
	}
	static navigationOptions = {
		header: null,
	};

	componentDidMount() {
		//this.fetchTags()
	}

	fetchTags() {
		serverRequests.getTags().then((data) => {
			this.setState({ tags: data.tags })
		})
	}

	addTag(tag) {
		selected = this.state.selectedTags.filter((selectedTag) => { return selectedTag.id !== tag.id })
		if (selected.length === this.state.selectedTags.length) {
			selected.push(tag)
		}
		this.setState({ selectedTags:selected })
	}

	Tag(tag) {
		const isSelected = (this.state.selectedTags.filter((selected) => {
			 return selected.id === tag.id })).length
		return (<View key={'tag' + tag.id} style={styles.tag}>
			<Text>{tag.name}</Text>

			{(isSelected) ? <Icon name='check' onPress={this.addTag.bind(this, tag)} reverse={true} containerStyle={{ top: 80, right: 40, zIndex: 3, position:'absolute' }}/> : <View/>}
			<Avatar source={Images[tag.img]} size='xlarge' onPress={this.addTag.bind(this, tag)} avatarStyle={{opacity: isSelected ? 0.2 : 1, backgroundColor: 'white'}} />
		</View>)
	}

	render() {
		return (
			<View style={styles.container}>
				<TopNavigation title='My Interests'></TopNavigation>
				<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
					{this.state.tags.map((tag) => {
						return this.Tag(tag)
					})}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},

	contentContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingTop: 30,
	},
	tag: {
		paddingLeft: 20,
		paddingTop: 20,
		zIndex: 1
	}
});
