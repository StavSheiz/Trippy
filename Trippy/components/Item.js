import React from 'react';
import { ScrollView, View, ActivityIndicator } from 'react-native'
import { Image, Text } from 'react-native-elements';

export default class Item extends React.Component {
  constructor(props) {
    super();
  }
  
render() {
    const {main, sub, img} = this.props;
    console.log(sub);
    return (
        <View style={styles.row}>
            <Image source={{ uri: img }}
                style={styles.image}
                PlaceholderContent={<ActivityIndicator />}/>
            <View style={styles.column}>
                <Text style={sub ? styles.main : styles.justMain}>{main}</Text>
                { sub ? <Text style={styles.sub}>{sub}</Text> : null }
            </View>
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
        marginTop: 10
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
    justMain: {
        fontSize: 20,
        marginTop: 15
    },
    main: {
        fontSize: 20,
    },
    sub: {
        fontSize: 15,
        marginTop: 10
    }
}