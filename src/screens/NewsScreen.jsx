import { FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from 'react';


export default function NewsScreen() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
          .then(response => response.json())
          .then(json => setData(json.results))
          .catch(error => console.error(error));
      }, []);
    
      return (
        <View>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        </View>
    );
}