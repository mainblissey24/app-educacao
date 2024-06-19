

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default function NewsScreen () {
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