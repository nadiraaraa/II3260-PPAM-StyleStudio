import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const Welcome = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoPlaceholder} />
        <Text style={styles.logoText}>StyleStudio</Text>
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
    backgroundColor: '#F5F5DC', // Cream background color
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoPlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: '#E0E0E0', // Placeholder background color
    borderRadius: 60,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6D6D4E', // Medium green text color
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
    color: '#6D6D4E', // Medium green text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Welcome;
