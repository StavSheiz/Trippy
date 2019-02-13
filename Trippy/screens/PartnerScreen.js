import React from 'react';
import {
	ScrollView,
	StyleSheet,
    View,
    Image,
    ActivityIndicator
} from 'react-native';
import { Avatar, Badge, Text, Icon } from 'react-native-elements';
import { TopNavigation } from '../components/TopNavigation/TopNavigation'
import Images from '../assets/images/images'
import {getTags} from '../services/serverRequests'

export default class PartnerScreen extends React.Component {
	constructor(props) {
		super(props)
        console.log(Images['Stav'])
		this.state = {
            img: Images['Stav'],
            name: 'Stav Sheizaf',
            age: 21,
            gender: true
		}
	}
	static navigationOptions = {
		header: null,
	};

    get Gender() {
        return this.state.gender ? 'Female' : 'Male'
    }

    fetchPartner() {

    }

	render() {
		return (
			<View style={styles.container}>
				<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Image
                    source={{uri: this.state.img}}
                    style={{ height: 200, flex:1 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
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
