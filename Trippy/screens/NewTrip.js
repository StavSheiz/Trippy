import React from 'react';
import { KeyboardAvoidingView ,ScrollView, View, ActivityIndicator, StyleSheet  } from 'react-native';
import { Input, Image, Button, ThemeProvider } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
        this.setState({[name]: event.nativeEvent.text});   
    }

    render() {
        const imgUrl = 'https://img01.siam2nite.com/7CsWSUzyexAXjJlYdfzlfpzqeEw=/smart/magazine/articles/786/cover_large_p1c53dn6k3j5g1mgg41ugjk10335.png';

        return (
        
        <ThemeProvider theme={theme}>
            <KeyboardAwareScrollView>
                <View keyboardShouldPersistTaps='handled'>   
                    <Image
                        source={{ uri: imgUrl }}
                        style={{ height: 200 }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <Input containerStyle={styles.row} value={this.state.Name} placeholder='Trip Name' onChange={this.handleTextChange.bind(this, 'Name')}/>
                    <View style={styles.row}>
                        <GooglePlacesAutocomplete
                            placeholder='Search'
                            minLength={2} 
                            autoFocus={false}
                            returnKeyType={'search'} 
                            listViewDisplayed='auto'   
                            fetchDetails={true}
                            renderDescription={row => row.description} 
                            onPress={(data, details = null) => { 
                                this.setState({
                                    Location: data.description
                                });
                            }}
                            
                            getDefaultValue={() => ''}
                            
                            query={{                 
                                key: 'AIzaSyDe2cx9NLqtDipMKZ1J2EeioMAn2W9L_20',
                                language: 'en', 
                                types: '(cities)'
                            }}
                            
                            // styles={{
                            //     textInputContainer: {
                            //         width: '100%'
                            //     },
                            //     description: {
                            //         fontWeight: 'bold'
                            //     },
                            //     predefinedPlacesDescription: {
                            //         color: '#1faadb'
                            //     },
                            //     listView: {
                            //         backgroundColor: '#ffffff',
                            //         color: 'black',
                            //         position: 'absolute',
                            //         zIndex: 99999,
                            //         top: 30
                            //     } 
                            // }}

                            styles={{
                                description: {
                                    fontWeight: "bold"
                                },
                                listView: {
                                    backgroundColor: '#ffffff',
                                    color: 'black',
                                    position: 'absolute',
                                    zIndex: 99999,
                                    top: 40
                                } 
                            }}
                            
                            enablePoweredByContainer={true}
                            
                            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                        
                            GooglePlacesSearchQuery={{
                                rankby: 'distance',
                                types: 'food'
                            }}            
            
                            debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                        />
                    </View>
                    
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
            </KeyboardAwareScrollView>
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
        zIndex: 1
        // marginTop: 3,
    },
    mainView: {
        flexGrow: 1,
        flexDirection: "column"
    }
});