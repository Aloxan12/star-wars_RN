import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {fetch} from "react-native/Libraries/Network/fetch";
import {useHover} from "native-base/lib/typescript/components/primitives/Pressable/Pressable";

export const Peoples = ({navigation}) => {
    const [peoples, setPeoples] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState("https://swapi.dev/api/people/?page=1")
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()


    useEffect( ()=>{
        async function fetchPeople(){
            setLoading(true)
            let res = await fetch(currentPage)
            let data = await res.json()
            setNextPageUrl(data.next)
            setPrevPageUrl(data.previous)
            setPeoples(data.results)
            setLoading(false)
        }
        fetchPeople()
        return ()=>currentPage
    }, [currentPage])

    const nextButton =()=>{
        if(nextPageUrl){
            setCurrentPage(nextPageUrl)
        }
    }
    const prevButton =()=>{
        if(prevPageUrl){
            setCurrentPage(prevPageUrl)
        }
    }

    return (
        <View style={styles.container}>
            {loading ? <Text>Loading...</Text> :
            <View style={styles.peopleBlock}>{peoples.map((p, i)=>{
                return <Text style={styles.people} onPress={()=> navigation.navigate('People', {url: p.url})} key={i}>{p.name}</Text>
            })}</View>}
            <View style={styles.btn}>
                <Button title={'prev'} onPress={prevButton} />
                <Button title={'next'} onPress={nextButton} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    peopleBlock: {
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
    people: {
        color: '#52aed3',
        fontSize: 24,
        letterSpacing: 1.4
    },
    btn:{
        width: '100%',
        alignSelf: 'center',
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10
    }
});
