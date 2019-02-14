import React from 'react';
import {
	ScrollView,
	StyleSheet,
	View,
	FlatList
} from 'react-native';
import { Avatar, Badge, Text, Icon } from 'react-native-elements';
import { TopNavigation } from '../components/TopNavigation/TopNavigation'
import Images from '../assets/images/images'
import {getTags, addTrip} from '../services/serverRequests'

export default class InterestsScreen extends React.Component {
    static navigationOptions = {
		header: null,
    };

	constructor(props) {
		super(props)

		this.state = {
			tags: [
				// { id: 1, name: 'Food', img: 'Food' },
				// { id: 2, name: 'Art', img: 'Art' },
				// { id: 3, name: 'Theater', img: 'Theater'}
			],
			selectedTags: []
		}
	}
	static navigationOptions = {
		header: null,
	};

	componentDidMount() {
		this.fetchTags()
	}

	fetchTags() {
		getTags().then((data) => {
			this.setState({ tags: data.data.map((row)=> {return {id: row.ID, name: row.NAME, img: row.IMG, key: row.ID}}) })
		}, (err) => {console.log(err)})
	}

	addTag(tag) {
		console.log(tag)
		selected = this.state.selectedTags.filter((selectedTag) => { return selectedTag.id !== tag.id })
		if (selected.length === this.state.selectedTags.length) {
			selected.push(tag)
		}
		console.log(selected)
		this.setState({ selectedTags:selected })
	}

	Tag({item}) {
			const isSelected = (this.state.selectedTags.filter((selected) => {
				return selected.id === item.id })).length
				console.log(isSelected)
		   return (<View key={'tag' + item.id} style={styles.tag}>
			   <Text>{item.name}</Text>
   
			   {(isSelected) ? <Icon name='check' onPress={this.addTag.bind(this,item)} reverse={true} containerStyle={{ top: 80, right: 40, zIndex: 3, position:'absolute' }}/> : <View/>}
			   <Avatar source={Images[item.img]} size='xlarge' onPress={this.addTag.bind(this,item)} avatarStyle={{opacity: isSelected ? 0.2 : 1, backgroundColor: 'white'}} />
		   </View>)
		

	}

	saveTrip() {
		const {navigation} = this.props;
		const tripDetails = navigation.getParam('tripDetails');
		Object.assign(tripDetails, {tags: this.state.selectedTags});
		console.log(tripDetails)
		addTrip(tripDetails).then((tripId) => {
			this.props.navigation.navigate('Partner', {tripId: 1});
		}, (err) => {
			console.log(err);
		});

	}

	render() {
		return (
			<View style={styles.container}>
				<TopNavigation title='My Interests' onNext={this.saveTrip.bind(this)}></TopNavigation>
				<FlatList extraData={this.state} numColumns={2} style={styles.container} contentContainerStyle={styles.contentContainer} data={this.state.tags} renderItem={this.Tag.bind(this)}>
				</FlatList>
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
		// flex: 1,
		// flexDirection: 'row',
		// flexWrap: 'wrap',
		paddingTop: 30,
	},
	tag: {
		paddingLeft: 20,
		paddingTop: 20,
		zIndex: 1
	}
});
