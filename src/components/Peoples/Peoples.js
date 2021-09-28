import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {fetch} from "react-native/Libraries/Network/fetch";

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
        return ()=>{
            return currentPage
        }
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
        <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            {loading ? <Text>Loading...</Text> :
            <View style={styles.peopleBlock}>{peoples.map((p, i)=>{
                return <Text style={styles.people} onPress={()=> navigation.navigate('People', {id:i + 1})} key={i}>{p.name}</Text>
            })}</View>}
            <View>
                <Button title={'prev'} onPress={prevButton} />
                <Button title={'next'} onPress={nextButton} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    peopleBlock: {
        flex: 1,
        flexDirection: 'column',
    },
    people: {
        paddingVertical: 7,
    }
});
