// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text style={styles.header}>Notícias de Hoje</Text>
<FlatList
  data={newsData}
  renderItem={({ item }) => <NewsItem item={item} />}
  keyExtractor={item => item.id}
/>
    </View>
  );
}
// Simulação de dados de notícias

const newsData = [
  { id: '1', title: 'Últimas Notícias sobre Tecnologia', description: 'Novidades e avanços no mundo da tecnologia.' },
  { id: '2', title: 'Mercado Financeiro em Alta', description: 'Análise do desempenho do mercado financeiro.' },
  { id: '3', title: 'Dicas de Viagem para o Verão', description: 'Melhores destinos e dicas para suas férias.' },
  { id: '4', title: 'Nova Atualização de Software Disponível', description: 'Detalhes sobre a mais recente versão do software.' },
  { id: '5', title: 'Receitas Deliciosas para o Fim de Semana', description: 'Ideias de pratos saborosos para você preparar.' },
];

const NewsItem = ({ item }) => (
  <View style={styles.newsItem}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 40, // Espaço para o status bar
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  newsItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});
export default HomeScreen;