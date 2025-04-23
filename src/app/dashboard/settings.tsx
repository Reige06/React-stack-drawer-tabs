import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from 'react-native-paper';

const Settings = () => {
  const router = useRouter();
  const { colors } = useTheme();

  const handleLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Log Out",
          onPress: () => router.replace('/'),
        },
      ]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.onBackground }]}>Settings</Text>
      <Button title="Log Out" onPress={handleLogout} color="#ff3b30" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Settings;
