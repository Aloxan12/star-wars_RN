import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {fetch} from "react-native/Libraries/Network/fetch";
import {People} from "../Peoples/People";
import {useRoute} from "@react-navigation/native";

export const Film = ({route, navigation}) => {
    const {id} = route.params
    const [film, setFilm] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function fetchFilm() {
            setLoading(true)
            let res = await fetch(`https://swapi.dev/api/films/${id}`)
            let data = await res.json()
            setFilm(data)
            setLoading(false)
        }
        fetchFilm()
    }, [])


    return (
        <View style={styles.container}>
            {loading ? <Text>Loading...</Text> :
                <View style={styles.block}>
                    <Text style={styles.title}>{film.title}</Text>
                    <Text>Description: {film.opening_crawl}</Text>
                    <Text>Director: {film.director}</Text>
                    <Text>Release date: {film.release_date}</Text>
                </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: "center",
        alignItems: 'center'
    },
    block:{
        flex: 1,
        width: '80%',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "space-around",
        borderStyle: "solid",
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 10
    },
    title:{
        fontSize: 24,
    },
});

