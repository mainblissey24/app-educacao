

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const PhotoScreen = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Busque as fotos da API
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar fotos:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.photoContainer}>
            <Image source={{ uri: item.thumbnailUrl }} style={styles.photo} />
            <Text style={styles.photoTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  photoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  photo: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
  photoTitle: {
    flex: 1,
  },
});

export default PhotoScreen;


/**
import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
const [data,setData] = useState([]);
const [loading,setLoading] = useState(true)

 const url = "https://jsonplaceholder.typicode.com/todos"

 useEffect(()=>{
   fetch(url)
   .then(response => response.json())
   .then((json)=>setData(json))
   .catch((error)=>console.log(error))
   .finally(()=> setLoading(false))
 },[])
  return (
    <View style={styles.container}>
      {
        loading ? <Text>Loading ...</Text>:
        data.map((post)=>(
          <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{fontSize:30, fontWeight: 'bold'}}>{post.title}</Text>
            <Text style={{fontSize:15, color:'blue'}} >{post.body}</Text>
          </View>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
**/