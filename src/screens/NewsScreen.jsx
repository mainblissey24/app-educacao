import { FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from 'react';
import { styles } from "../config/styles";


export default function NewsScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>Preço: ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};


/*** 
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default function NewsScreen () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setDados(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return (
    <View>
      {dados.map(item => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
}; 
**/