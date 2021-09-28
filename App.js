import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {MainScreen} from "./src/components/MainScreen/MainScreen";
import {Peoples} from "./src/components/Peoples/Peoples";
import {Films} from "./src/components/Films/Films";
import {People} from "./src/components/Peoples/People";
import {Film} from "./src/components/Films/Film";


const Stack = createStackNavigator();

const App = () => {

    return (
            <NavigationContainer styles={styles.mainPage}>
                <Stack.Navigator>
                    <Stack.Screen name={'MainScreen'} component={MainScreen}/>
                    <Stack.Screen name={'Peoples'} component={Peoples}/>
                    <Stack.Screen name={'People'} component={People}/>
                    <Stack.Screen name={'Films'} component={Films}/>
                    <Stack.Screen name={'Film'} component={Film}/>
                </Stack.Navigator>
            </NavigationContainer>
    );
};

const styles = StyleSheet.create({});

export default App;
