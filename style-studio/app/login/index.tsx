import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>
        <Text style={styles.title}>Sign In</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#8C8C8C" // Light gray color for placeholder text
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#8C8C8C" // Light gray color for placeholder text
      />
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <Pressable style={styles.signInButton} onPress={() => router.push("/(tabs)/home")}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </Pressable>
      <View style={styles.signUpContainer}>
        <Text style={styles.needAccountText}>Need An Account? </Text>
        <Pressable onPress={() => router.push("/signup")}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC', // Cream background color
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#808080',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  input: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#808080',
    marginVertical: 10,
  },
  signInButton: {
    backgroundColor: '#6D6D4E', // Medium green background color
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  signInButtonText: {
    color: '#FFFFFF', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  needAccountText: {
    color: '#808080',
  },
  signUpText: {
    color: '#6D6D4E',
    fontWeight: 'bold',
  },
});

export default Login;
