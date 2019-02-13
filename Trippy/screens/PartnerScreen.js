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
import {getTags, addPartner, nextPartner} from '../services/serverRequests'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'
import Swiper from 'react-native-swiper'

export default class PartnerScreen extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
            img: Images['Stav'],
            name: 'Stav Sheizaf',
            age: 21,
            gender: true,
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem',
            index: 0
        }
        
        this.props.navigation.addListener(
            'didFocus',
            payload => {
                this.setState({index:0})
            }
          );
	}
	static navigationOptions = {
		header: null,
	};

    get Gender() {
        return this.state.gender ? 'Female' : 'Male'
    }

    onSwipeLeft(gestureState) {
    }
     
    onSwipeRight(gestureState) {
    }

    onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {
            case SWIPE_LEFT:
                addPartner(this.props.user, this.props.trip)
                setTimeout(()=>{}, 500)
                this.props.navigation.navigate('Home');
                break;
            case SWIPE_RIGHT:
                nextPartner(this.props.user, this.props.trip)
                setTimeout(()=>{}, 500)

                this.props.navigation.navigate('Home');
                break;
        }
      }

    fetchPartner() {
        // getPartner(this.props.trip).then((data)=> {
        //     this.setState({data})
        // })
    }

    onIndexChanged(index) {
        this.setState({index})
    }

	render() {
		return (
			<View style={styles.container}>
            {(this.state.index ===0) ?
            <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false} onIndexChanged={this.onIndexChanged.bind(this)}/*index={this.state.index} onIndexChanged={this.onIndexChanged.bind(this)}*/>
                <View style={styles.slide1}>
                    <GestureRecognizer
                        onSwipe={(direction, state) => this.onSwipe(direction, state)}
                        onSwipeLeft={(state) => this.onSwipeLeft(state)}
                        onSwipeRight={(state) => this.onSwipeRight(state)}
                        style={{
                        flex: 1,
                        }}
                        >
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
                    </GestureRecognizer>
                </View>
                <View style={styles.slide2}>
                    <Icon style={styles.text} name='check' color='#fff' size={80}></Icon>
                </View>
                <View style={styles.slide3}>
                    <Icon style={styles.text} name='close' color='#fff' size={80}></Icon>
                </View>
            </Swiper>:<View/>}
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
    },
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4cd964'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ff3b30'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
});
