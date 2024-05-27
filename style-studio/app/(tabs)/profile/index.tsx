import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

const Profile = () => {

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton}onPress={() => router.push("/activity")}>
          <Text style={styles.headerButtonText}>Back</Text>
        </Pressable>
        <Text style={styles.headerText}>My Profile</Text>
        <Pressable style={styles.settingsButton}>
          <Text style={styles.headerButtonText}>Settings</Text>
        </Pressable>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nama</Text>
          <Text style={styles.infoValue}>Refal Hady</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>No. Handphone</Text>
          <Text style={styles.infoValue}>081312311234</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>refalhady@gmail.com</Text>
        </View>
        <Pressable style={styles.infoRow}>
          <Text style={styles.infoLabel}>Pesanan Saya</Text>
          <Text style={styles.infoValue}>Detail Order &gt;</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC', // Cream background color
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6D6D4E', // Medium green background color
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerButtonText: {
    color: '#FFFFFF', // White text color
    fontSize: 16,
  },
  headerText: {
    flex: 1,
    color: '#FFFFFF', // White text color
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  settingsButton: {
    marginLeft: 10,
  },
  infoContainer: {
    marginHorizontal: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    backgroundColor: '#F0E68C', // Light green background color for cards
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  infoLabel: {
    fontSize: 16,
    color: '#4B5320', // Dark green color for label text
  },
  infoValue: {
    fontSize: 16,
    color: '#4B5320', // Dark green color for value text
  },
  editProfileButton: {
    backgroundColor: '#6D6D4E', // Medium green background color
    padding: 15,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  editProfileButtonText: {
    color: '#FFFFFF', // White text color
    fontSize: 16,
  },
});

export default Profile;
