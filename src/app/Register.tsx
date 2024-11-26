import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { TextInput, Button, Title, Subheading } from 'react-native-paper';
import { useRouter } from 'expo-router';
import styles from '../styles/styles';

const SignupPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [togglePassword, setTogglePassword] = useState<boolean>(false);
  const router = useRouter();

  const handleRegister = () => {
    if (password === confirmPassword) {
      console.log('Registering with:', name, email, password);
      alert('Registration Successful!');
      router.push('/');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/1.png')} style={styles.backgroundImage} />
      <Title style={styles.title}>Sign Up</Title>
      <Subheading style={styles.subtitle}>Create a new account</Subheading>

      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        keyboardType="email-address"
        left={<TextInput.Icon icon="email" />}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry={!togglePassword}
        mode="outlined"
        left={<TextInput.Icon icon="lock" />}
        right={
          <TextInput.Icon
            icon={togglePassword ? "eye-off" : "eye"}
            onPress={() => setTogglePassword(!togglePassword)}
          />
        }
      />
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
        secureTextEntry={!togglePassword}
        mode="outlined"
        left={<TextInput.Icon icon="lock" />}
        right={
          <TextInput.Icon
            icon={togglePassword ? "eye-off" : "eye"}
            onPress={() => setTogglePassword(!togglePassword)}
          />
        }
      />

      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Sign Up
      </Button>

      <Button mode="contained" onPress={() => router.push('/')} style={styles.button}>
        Back to Login
      </Button>
    </View>
  );
};

export default SignupPage;
