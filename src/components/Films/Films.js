import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {fetch} from "react-native/Libraries/Network/fetch";

export const Films = ({navigation}) => {
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)


    const url = 'https://swapi.dev/api/films/?format=json'

    useEffect( ()=>{
        setLoading(true)
        async function fetchFilms(){
            let res = await fetch(url)
            let data = await res.json()
            setFilms(data.results)
            setLoading(false)
        }
        fetchFilms()
    }, [])

    return (
        <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            {loading ? <Text>Loading...</Text> :
            <View style={styles.filmsBlock}>{films.map((f, i)=>{
                return <Text onPress={()=> navigation.navigate('Film', {id: i + 1})} style={styles.film} key={i}>{f.title}</Text>
            })}</View>}
        </View>
    );
};
const styles = StyleSheet.create({
    filmsBlock: {
        flex: 1,
        flexDirection: 'column',
    },
    film: {
        paddingVertical: 20,
    }
});
