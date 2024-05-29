import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const Welcome = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/icon.png')} style={styles.logo} />
      </View>
      <Text style={styles.getStartedText}>Let's get started!</Text>
      <Pressable style={styles.signInButton} onPress={() => router.push("/login")}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </Pressable>
      <Text style={styles.orText}>OR</Text>
      <Pressable style={styles.signUpButton} onPress={() => router.push("/signup")}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background color
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 200, // Increased width
    height: 200, // Increased height
    resizeMode: 'contain',
    marginBottom: 10,
  },
  getStartedText: {
    fontSize: 18,
    color: '#808080', // Gray text color
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#6D6D4E', // Medium green background color
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 5,
    marginVertical: 10,
  },
  signInButtonText: {
    color: '#FFFFFF', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    color: '#808080', // Gray text color
    marginVertical: 10,
  },
  signUpButton: {
    backgroundColor: '#D0D0A5', // Light green background color
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 5,
  },
  signUpButtonText: {
    color: '#FFFFFF', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Welcome;
