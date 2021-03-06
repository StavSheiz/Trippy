import React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { Divider, Text, Image, Icon } from 'react-native-elements';
import Item from '../components/Item'
import Images from '../assets/images/images';

export default class TripScreen extends React.Component {
  constructor(props) {
    super(props);
    
    const {navigation} = this.props;
    const trip = navigation.getParam('trip');

    console.log(trip);

    this.state = {
        img: trip.img,
        name: trip.name,
        location: trip.location,
        start_date: trip.start_date,
        end_date: trip.end_date,
        partners: trip.partners
    }
  }
  
render() {
    const {img, name, location, start_date, end_date, partners} = this.state;
    const PartnerItems = partners.map((partner, i) => 
                            <View key={i}>
                                <Item main={partner.main} img={partner.img}/>
                                <Divider/>
                            </View>);
    return (
        <ScrollView>
            <Text style={styles.title} h3>{name}</Text>
            <Image
                source={{ uri: img }}
                style={ styles.img }
                PlaceholderContent={<ActivityIndicator />}
            />
            <View style={styles.row}>
            <Icon iconStyle={styles.location}
                name='globe'
                type='font-awesome'/>
                <Text style={styles.location}>{location}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.date}>{start_date}  to  {end_date}</Text>
            </View>
            <Divider/>
            <ScrollView>
                {PartnerItems}
            </ScrollView>
        </ScrollView>
    )
  }
}

const styles = {
    title: {
        flex: 1,
        flexDirection: 'row',
        height: 60,
        marginTop: 20,
        marginLeft: 10
    },
    img: {
        height: 150
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        height: 70
    },
    date: {
        width: 220,
        marginLeft: 40,
        fontSize: 15,
        marginTop: 15
    },
    location: {
        marginTop: 30,
        fontSize: 23,
        marginLeft: 15
    }
}