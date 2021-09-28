import React, {Node, useEffect, useState} from "react";
import {Text, View} from "react-native";
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
        <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            {loading ? <Text>Loading...</Text> :
                <View>
                    <Text>Name: {people.name}</Text>
                    <Text>Height: {people.height}</Text>
                    <Text>Mass: {people.mass}</Text>
                </View>}
        </View>
    );
};
