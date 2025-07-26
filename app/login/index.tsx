// TODO: Hook up identity derivation using secret words + password,
// verify using biometric auth, and handle error feedback.
// This is currently a dummy screen that navigates directly to /home.

import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [word3, setWord3] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    const fullPhrase = `${word1.trim()} ${word2.trim()} ${word3.trim()}`;
    // TODO: Replace with actual key derivation and biometric verification
    router.replace('/home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Text Hopping</Text>

      <TextInput
        style={styles.input}
        placeholder="Secret Word 1"
        placeholderTextColor="#888"
        value={word1}
        onChangeText={setWord1}
      />

      <TextInput
        style={styles.input}
        placeholder="Secret Word 2"
        placeholderTextColor="#888"
        value={word2}
        onChangeText={setWord2}
      />

      <TextInput
        style={styles.input}
        placeholder="Secret Word 3"
        placeholderTextColor="#888"
        value={word3}
        onChangeText={setWord3}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Hop In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#00BCD4',
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#111',
    color: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00BCD4',
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
