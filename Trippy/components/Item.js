import React from 'react';
import { ScrollView, View, ActivityIndicator } from 'react-native'
import { Image, Text } from 'react-native-elements';

export default class Item extends React.Component {
  constructor(props) {
    super();
  }
  
render() {
    const {main, sub, img} = this.props;

    return (
        <View style={styles.row}>
            <View style={styles.column}>
                <Text style={styles.main}>{main}</Text>
                { sub ? <Text style={styles.sub}>{sub}</Text> :null }
            </View>
            <Image source={{ uri: img }}
                style={styles.image}
                PlaceholderContent={<ActivityIndicator />}/>
        </View>   
    )
  }
}

const styles = {
    image: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginRight: 20,
        marginTop: 5
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        height: 100
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        width: 120, 
        marginTop: 20,
        marginRight: 30
    },
    main: {
        fontSize: 20
    },
    sub: {
        fontSize: 15,
        marginTop: 10
    }
}