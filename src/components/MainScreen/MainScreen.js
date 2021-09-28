import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Button, StyleSheet, View} from "react-native";


export const MainScreen = ({navigation}) => {
    return (
        <View style={styles.mainBlock}>
            <Button title={'Films'} style={styles.button} onPress={()=>navigation.navigate('Films')} />
            <Button title={'Peoples'} style={styles.button} onPress={()=>navigation.navigate('Peoples')} />
        </View>
    );
};


const styles = StyleSheet.create({
    mainBlock: {
        flex: 1,
        flexDirection:'row',
        justifyContent: "space-around",
        alignItems:"flex-start"
    },
});
