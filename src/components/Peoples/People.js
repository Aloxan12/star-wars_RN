import React, {Node, useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {fetch} from "react-native/Libraries/Network/fetch";
import {useRoute} from "@react-navigation/native";

export const People = ({route}) => {
    const {url} = route.params
    const [people, setPeople] = useState({})
    const [loading, setLoading] = useState(true)




    useEffect( ()=>{
        async function fetchPeople(){
            setLoading(true)
            let res = await fetch(url)
            console.log(res)
            let data = await res.json()
            setPeople(data)
            setLoading(false)
        }
        fetchPeople()
    }, [])


    return (
        <View style={styles.container}>
            {loading ? <Text>Loading...</Text> :
                <View style={styles.block}>
                    <Text style={styles.description}>Name: {people.name}</Text>
                    <Text style={styles.description}>Height: {people.height}</Text>
                    <Text style={styles.description}>Mass: {people.mass}</Text>
                    <Text style={styles.description}>Hair color: {people.hair_color}</Text>
                    <Text style={styles.description}>Eye color: {people.eye_color}</Text>
                    <Text style={styles.description}>Birth year: {people.birth_year}</Text>
                    <Text style={styles.description}>Gender: {people.gender}</Text>
                </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'center'
    },
    block:{
        flex: 1,
        width: '80%',
        maxHeight: '60%',
        flexDirection: 'column',
        alignItems: "center",
        paddingVertical: 15,
        borderStyle: "solid",
        marginTop: 30,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 10
    },
    description:{
        paddingVertical: 12,
    }
});
