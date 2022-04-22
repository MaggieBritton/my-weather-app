import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuIcon from '@mui/icons-material/Menu';

export const DateLocation = () => {
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


const Home = () => {
  return (
    <View>
        <DateLocation/>
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
    },
    location: {
        fontSize: 24,
        paddingTop: 10
    }
});

export default Home;