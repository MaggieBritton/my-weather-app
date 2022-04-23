import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

const DateLocation = () => {
  return (
    <View style={styles.headerContainer}>
        <View>
            <MenuIcon fontSize="large" />
        </View>
        <View style={styles.dateLocationContainer}>
            <Text style={styles.date}>Wed, April 20</Text>
            <Text style={styles.location}>Decorah, IA</Text>
        </View>
    </View>
  )
};

const CurrentTemp = () => {
    return (
        <View>
            <View style={styles.currentTempContainer}>
                <Text style={styles.currentTemp}>58</Text>
                <Text style={styles.degree}>&deg;F</Text>
            </View>
            <WbSunnyOutlinedIcon style={{fontSize: 100, alignSelf: 'center'}} />
            <View style={styles.highLowContainer}>
                <Text style={styles.highLowText}>High: 65&deg;F</Text>
                <Text style={styles.highLowText}>Low: 44&deg;F</Text>
            </View>
        </View>
    )
};

const Forecast = () => {
    return (
        <View style={styles.forecastContainer}>
            <View style={styles.dailyForecastContainer}>
                <Text>Thursday</Text>
                <WbSunnyOutlinedIcon />
                <View style={styles.forecastTempsContainer}>
                    <Text style={{marginRight: 20}}>65</Text>
                    <Text>38</Text>
                </View>
            </View>
            <View style={styles.dailyForecastContainer}>
                <Text>Friday</Text>
                <WbSunnyOutlinedIcon />
                <View style={styles.forecastTempsContainer}>
                    <Text style={{marginRight: 20}}>65</Text>
                    <Text>38</Text>
                </View>
            </View>
            <View style={styles.dailyForecastContainer}>
                <Text>Saturday</Text>
                <WbSunnyOutlinedIcon />
                <View style={styles.forecastTempsContainer}>
                    <Text style={{marginRight: 20}}>65</Text>
                    <Text>38</Text>
                </View>
            </View>
            <View style={styles.dailyForecastContainer}>
                <Text>Sunday</Text>
                <WbSunnyOutlinedIcon />
                <View style={styles.forecastTempsContainer}>
                    <Text style={{marginRight: 20}}>65</Text>
                    <Text>38</Text>
                </View>
            </View>
            <View style={styles.dailyForecastContainer}>
                <Text>Monday</Text>
                <WbSunnyOutlinedIcon />
                <View style={styles.forecastTempsContainer}>
                    <Text style={{marginRight: 20}}>65</Text>
                    <Text>38</Text>
                </View>
            </View>
            <View style={styles.dailyForecastContainer}>
                <Text>Tuesday</Text>
                <WbSunnyOutlinedIcon />
                <View style={styles.forecastTempsContainer}>
                    <Text style={{marginRight: 20}}>65</Text>
                    <Text>38</Text>
                </View>
            </View>
        </View>
    )
};

const CurrentDetails = () => {
    return (
        <View>
            <View>
                <View>
                    <Text>Sunrise</Text>
                    <Text>7:12 am</Text>
                </View>
                <View>
                    <Text>Sunset</Text>
                    <Text>8:23 pm</Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>Precipitation</Text>
                    <Text>0%</Text>
                </View>
                <View>
                    <Text>Humidity</Text>
                    <Text>75%</Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>Wind</Text>
                    <Text>10 mph</Text>
                </View>
                <View>
                    <Text>Pressure</Text>
                    <Text>1000 hPa</Text>
                </View>
            </View>
        </View>
    )
};


const Home = () => {
  return (
    <View>
        <DateLocation/>
        <CurrentTemp />
        <Forecast />
        <CurrentDetails />
    </View>
  )
};

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateLocationContainer: {
        textAlign: 'right'
    },
    date: {
        fontSize: 16,
        color: '#fff'
    },
    location: {
        fontSize: 24,
        color: '#fff',
        paddingTop: 10
    },
    currentTempContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 60,
        paddingBottom: 25
    },
    currentTemp: {
        fontSize: 72,
        color: '#fff',
        fontWeight: '500'
    },
    degree: {
        fontSize: 24,
        color: '#fff',
        paddingTop: 10
    },
    highLowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 25,
        
    },
    highLowText: {
        fontSize: 16, 
        color: '#fff'
    },
    forecastContainer: {
        marginTop: 100,
    },
    dailyForecastContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    forecastTempsContainer: {
        flexDirection: 'row',
    }
});

export default Home;