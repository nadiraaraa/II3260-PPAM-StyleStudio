import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, AppState } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (email == '' || password == ''){
      setError('input fields can not be empty!');
    }
    else {
      setError('');

      try {
        const id = await loginUser(email, password);

        // if (id === -1){
        //   setError('wrong username or password');
        // } else {
        //   router.push(
        //     `../(tabs)/home?id=${id}` as any
        // )
        // }
      } catch (error) {
        console.error('Something went wrong');
        setError('something went wrong');
        return -1;
      }

    }
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign In</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
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
        <Text style={styles.error}>{error}</Text>
        <Pressable style={styles.signInButton} onPress={handleSubmit}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </Pressable>
        <View style={styles.signUpContainer}>
          <Text style={styles.needAccountText}>Need An Account? </Text>
          <Pressable onPress={() => router.push("/signup")}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background color
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#808080',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
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
  error: {
    textAlign: 'right',
    color: '#FF0000',
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
function loginUser(email: string, password: string) {
  throw new Error('Function not implemented.');
}
