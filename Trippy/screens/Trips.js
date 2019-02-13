import React from 'react';
import { View, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import Item from '../components/Item'
import Images from '../assets/images/images';

export default class Trips extends React.Component {
  constructor(props) {
    super();
  }
  
render() {
    const Trips = [ { main:'Mont Blanc', sub:'France', img:Images['Stav']},
                    { main:'Mont Blanc', sub:'France', img:Images['Stav']},
                    { main:'Mont Blanc', sub:'France', img:Images['Stav']},
                    { main:'Mont Blanc', sub:'France', img:Images['Stav']},
                    { main:'Mont Blanc', sub:'France', img:Images['Stav']},
                    { main:'Mont Blanc', sub:'France', img:Images['Stav']},
                    { main:'Mont Blanc', sub:'France', img:Images['Stav']},
                    { main:'Mont Blanc', sub:'France', img:Images['Stav']}];
    const TripsItems = Trips.map((trip, i) => 
                    <View key={i}>
                        <Item main={trip.main} sub={trip.sub} img={trip.img}/>
                        <Divider/>
                    </View>);
    return (
        <ScrollView>
            {TripsItems}
        </ScrollView>
    )
  }
}