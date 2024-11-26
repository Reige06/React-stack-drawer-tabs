import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { TextInput, Button, Title, Subheading } from 'react-native-paper';
import { useRouter } from 'expo-router';
import styles from '../styles/styles';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const router = useRouter();

  const handlePasswordReset = () => {
    if (email.trim() === '') {
      alert('Please enter your email address');
      return;
    }
    console.log('Resetting password for:', email);
    alert('Password reset link sent to your email!');
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/1.png')} style={styles.backgroundImage} />
      <Title style={styles.title}>Forgot Password</Title>
      <Subheading style={styles.subtitle}>
        Enter your email to reset your password
      </Subheading>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        keyboardType="email-address"
        left={<TextInput.Icon icon="email" />}
      />

      <Button mode="contained" onPress={handlePasswordReset} style={styles.button}>
        Reset Password
      </Button>

      <Button mode="contained" onPress={() => router.push('/')} style={styles.button}>
        Back to Login
      </Button>
    </View>
  );
};

export default ForgotPasswordPage;
