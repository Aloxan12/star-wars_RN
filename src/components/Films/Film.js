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
        <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            {loading ? <Text>Loading...</Text> :
                <View>
                    <Text>Title: {film.title}</Text>
                    <Text>Description: {film.opening_crawl}</Text>
                </View>}
        </View>
    );
};

