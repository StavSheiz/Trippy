import React from 'react';
import { View, ActivityIndicator, StyleSheet  } from 'react-native';
import { Input, Image, Button, ThemeProvider } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

export default class NewTrip extends React.Component {
    constructor(props) {
        super();

        this.state = {
            Name: '',
            Location: '',
            StartDate: '',
            EndDate: '',
            Details: ''
        }
    }

    handleTextChange(name, event) {
        console.log(event);
        this.setState({[name]: event.nativeEvent.text});   
    }

    render() {
        const imgUrl = 'https://img01.siam2nite.com/7CsWSUzyexAXjJlYdfzlfpzqeEw=/smart/magazine/articles/786/cover_large_p1c53dn6k3j5g1mgg41ugjk10335.png';

        return (
        
        <ThemeProvider theme={theme}>
            <View style={styles.mainView}>   
                <Image
                    source={{ uri: imgUrl }}
                    style={{ height: 200 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Input containerStyle={styles.row} value={this.state.Name} placeholder='Trip Name' onChange={this.handleTextChange.bind(this, 'Name')}/>
                <Input containerStyle={styles.row} value={this.state.Location} placeholder='Location' onChange={this.handleTextChange.bind(this, 'Location')}/>
                <View style={styles.DatePickers}>
                    <DatePicker
                        style={styles.DatePicker}
                        date={this.state.StartDate}
                        mode="date"
                        placeholder="Start Date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateInput: {
                                marginLeft: 35
                            }
                        }}
                        onDateChange={(date) => {this.setState({StartDate: date})}}
                    />
                    <DatePicker
                        style={styles.DatePicker}
                        date={this.state.EndDate}
                        mode="date"
                        placeholder="End Date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateInput: {
                                marginLeft: 35
                            }
                        }}
                        onDateChange={(date) => {this.setState({EndDate: date})}}
                    />
                </View>
                <Input containerStyle={styles.row} value={this.state.Details} placeholder='My ideal partner' onChange={this.handleTextChange.bind(this, 'Details')}/>
            </View>
        </ThemeProvider>
        )
    }
}


const theme = {
    Input: {
      backgroundColor: '',
    }
  };

const styles = StyleSheet.create({
    DatePickers: {
        height: 70,
        flexDirection: "row"
    },
    DatePicker: {
        width: 180
    },
    row: {
        height: 70,
        // marginTop: 3,
    },
    mainView: {
        flex: 1,
        flexDirection: "column"
    }
});