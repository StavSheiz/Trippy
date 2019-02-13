import React from 'react';
import { View, ActivityIndicator  } from 'react-native';
import { Input, Image } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import {I18nManager} from 'react-native';
import { ThemeProvider } from 'react-native-elements';
I18nManager.allowRTL(false);

const theme = {
  Input: {
    backgroundColor: '',
  }
};

export default class NewTrip extends React.Component {
    constructor(props) {
        super();

        this.state = {
            Name: 'שביל הגולן',
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
            <View>   
                <Image
                    source={{ uri: imgUrl }}
                    style={{ height: 200 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Input value={this.state.Name} placeholder='Trip Name' onChange={this.handleTextChange.bind(this, 'Name')}/>
                <Input value={this.state.Location} placeholder='Location' onChange={this.handleTextChange.bind(this, 'Location')}/>
                <DatePicker
                    style={{width: 200}}
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
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => {this.setState({StartDate: date})}}
                />
                <DatePicker
                    style={{width: 200}}
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
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => {this.setState({EndDate: date})}}
                />
                <Input value={this.state.Details} multiline placeholder='My ideal partner' onChange={this.handleTextChange.bind(this, 'Details')}/>
            </View>
        </ThemeProvider>
        )
    }
}