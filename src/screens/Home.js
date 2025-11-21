import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Button, Image } from 'react-native';
import img from '../../assets/img.png';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.card}>
          <Image
            source={img}
            style={styles.image}
            accessible={true}
          />
          <Text style={styles.title}>Welcome to LinterDemo</Text>
          <Text style={styles.subtitle}>This is a static home screen that fills the entire screen.</Text>
          <Text style={styles.description}>
            Explore the app and enjoy the features we have prepared for you.
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Check Accessibility pressed')}>
          <Text style={styles.buttonText}>Check Accessibility</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    alignItems: 'center',
    width: '90%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    color: '#888',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
