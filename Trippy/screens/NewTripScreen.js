import React from 'react';
import { KeyboardAvoidingView ,ScrollView, View, ActivityIndicator, StyleSheet  } from 'react-native';
import { Input, Image, Button, ThemeProvider, Divider } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TopNavigation } from '../components/TopNavigation/TopNavigation'

export default class NewTripScreen extends React.Component {
    static navigationOptions = {
		header: null,
    };
    
    constructor(props) {
        super(props);

        this.state = {
            Name: '',
            Location: '',
            StartDate: '',
            EndDate: '',
            Details: '',
            listViewDisplayed: false,
            img: 'https://img01.siam2nite.com/7CsWSUzyexAXjJlYdfzlfpzqeEw=/smart/magazine/articles/786/cover_large_p1c53dn6k3j5g1mgg41ugjk10335.png'
        }
    }

    handleTextChange(name, event) {
        this.setState({[name]: event.nativeEvent.text});   
    }

    handleNextScreen() {
        const tripDetails = { tripDetails: {
            name: this.state.Name,
            location: this.state.Location,
            start_date: this.state.StartDate,
            end_date: this.state.EndDate,
            details: this.state.Details,
            img: this.state.img
        }};

        this.props.navigation.navigate('Interests', tripDetails);
    }

    render() {
        return (
        <View style={styles.mainView}>
        	<TopNavigation title="Let's Travel" onNext={this.handleNextScreen.bind(this)}></TopNavigation>
            <KeyboardAwareScrollView>
                <View keyboardShouldPersistTaps='handled' >   
                    <Image
                        source={{ uri: this.state.img }}
                        style={{ height: 200 }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <Input containerStyle={styles.row} value={this.state.Name} placeholder='Trip Name' onChange={this.handleTextChange.bind(this, 'Name')}/>
                    <Divider  style={{ backgroundColor: '#f8bbd0' }}/>
                    <View style={styles.row}>
                        <GooglePlacesAutocomplete
                            placeholder='Location'
                            minLength={2} 
                            autoFocus={false}
                            returnKeyType={'search'} 
                            listViewDisplayed={this.state.listViewDisplayed}   
                            fetchDetails={true}
                            renderDescription={row => row.description} 
                            onPress={(data, details = null) => { 
                                this.setState({
                                    Location: data.description
                                });
                            }}
                            styles={{    
                                textInputContainer: {
                                backgroundColor: '#f6f5f3',
                                borderTopWidth: 0,
                                borderBottomWidth:0
                              },
                              textInput: {
                                backgroundColor: '#f6f5f3',
                                marginLeft: 0,
                                marginRight: 0,
                                // height: 38,
                                color: '#5d5d5d',
                                fontSize: 16,
                                borderBottomColor: 'black',
                                borderBottomWidth: 1
                              },
                            //   separator: {
                            //       backgroundColor: 'white'
                            //   },
                              container: {
                                  zIndex: 99
                              },
                              listView: {
                                  zIndex: 99999
                              }
                            }}
                            getDefaultValue={() => ''}
                            
                            query={{                 
                                key: 'AIzaSyDe2cx9NLqtDipMKZ1J2EeioMAn2W9L_20',
                                language: 'en', 
                                types: '(cities)'
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
                    <Divider  style={{ backgroundColor: '#f8bbd0' }}/>
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
                                    border: 0
                                }
                            }}
                            onDateChange={(date) => {this.setState({EndDate: date})}}
                        />
                    </View>
                    <Divider  style={{ backgroundColor: '#f8bbd0' }}/>

                    <Input containerStyle={styles.row} value={this.state.Details} placeholder='My ideal partner' onChange={this.handleTextChange.bind(this, 'Details')}/>
                </View>
            </KeyboardAwareScrollView>
        </View>
        )
    }
}


const theme = {

  };

const styles = StyleSheet.create({
    DatePickers: {
        paddingTop:20,
        paddingBottom:20,
        flexDirection: "row"
    },
    DatePicker: {
        width: 180,
        paddingLeft: 10
    },
    row: {
        padding: 10
    },
    mainView: {
        flexGrow: 1,
        flexDirection: "column",
        backgroundColor: '#f6f5f3'
    }
});