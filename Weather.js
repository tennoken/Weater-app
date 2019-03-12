import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";


const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining",
        subtitle: "home is best",
        icon: "weather-pouring"
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Clear",
        subtitle: "Go Outside!",
        icon: "weather-sunny"
    },
    Thunderstrom:{
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstrom",
        subtitle: "Actually, outside of the house",
        icon: "weather-lightning"
    },
    Clouds:{
        colors: ["D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring",
        icon: "weather-cloudy"
    },
    Snow:{
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "Do you wanna build a snowman~?",
        icon: "weather-snowy"
    },
    Drizzle:{
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "it likes rain",
        icon: "weather-hail"
    },
    Haze:{
        colors: ["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "Fu**ing dust",
        icon: "weather-pouring"
    }
}

function Weather({ weatherName, temp }){
    console.log(weatherName);
    return(
        <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
                <View style={styles.upper}>
                    <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon}/>
                    <Text style={styles.temp}>{temp}º</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                    <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
                </View>
            </LinearGradient>
    );
}

export default Weather;

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weather : PropTypes.string.isRequired
}

const styles= StyleSheet.create({
    container: {
        flex: 1
    },
    upper:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color:"white",
        marginTop: 10
    },
    lower:{
        flex:1,
        alignItems:"flex-start",
        justifyContent: "flex-end",
        paddingLeft:25
    },
    title:{
        fontSize: 38,
        color:"white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle:{
        fontSize: 24,
        backgroundColor: "transparent",
        color:"white",
        marginBottom: 24
    }

})