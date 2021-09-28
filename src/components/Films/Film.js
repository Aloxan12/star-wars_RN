import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {fetch} from "react-native/Libraries/Network/fetch";

export const Film = ({route}) => {
    const {id} = route.params
    const [film, setFilm] = useState({})
    const [loading, setLoading] = useState(true)


    const url = `https://swapi.dev/api/films/${id}`

    useEffect(() => {
        async function fetchFilm() {
            setLoading(true)
            let res = await fetch(url)
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
                    <Text>Name: {film.title}</Text>
                </View>}
        </View>
    );
};

