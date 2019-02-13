import React from 'react';
import {
	ScrollView,
	StyleSheet,
    View,
    Image,
    ActivityIndicator
} from 'react-native';
import { Avatar, Badge, Text, Icon, Divider } from 'react-native-elements';
import { TopNavigation } from '../components/TopNavigation/TopNavigation'
import Images from '../assets/images/images'
import {getTags} from '../services/serverRequests'

export default class PartnerScreen extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
            img: Images['Stav'],
            name: 'Stav Sheizaf',
            age: 21,
            gender: true,
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem'
		}
	}
	static navigationOptions = {
		header: null,
	};

    get Gender() {
        return this.state.gender ? 'Female' : 'Male'
    }

    fetchPartner() {
        // getPartner(this.props.trip).then((data)=> {
        //     this.setState({data})
        // })
    }

	render() {
		return (
			<View style={styles.container}>
				<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Image
                    source={{uri: this.state.img}}
                    style={{ height: 100, flex:0.75 }}
                    containerStyle={{height: 100}}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Divider style={{ backgroundColor: 'blue' }}/>
                <Text h2 style={{paddingTop: 15,paddingBottom: 15,paddingLeft: 30, paddingRight: 30}}>{this.state.name}</Text>
                <Divider style={{ backgroundColor: 'blue' }}/>
                <View style={styles.stageTwo}>
                    <Text h4 style={{paddingTop: 10,paddingBottom: 10,paddingLeft: 30, paddingRight: 30}}>{this.state.age},  {this.Gender}</Text>
                </View>
                <Divider style={{ backgroundColor: 'blue' }}/>
                <Text h5 style={{padding: 30}}>{this.state.details}</Text>
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
		flexDirection: 'column',
		flexWrap: 'wrap',
		paddingTop: 30,
	},
	tag: {
		paddingLeft: 20,
		paddingTop: 20,
		zIndex: 1
    },
    stageTwo: {
        flex: -1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 50
    }
});
