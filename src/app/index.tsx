import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { TextInput, Button, Title, Subheading, Avatar } from 'react-native-paper';
import { Image } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../styles/styles';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [togglePassword, setTogglePassword] = useState<boolean>(false);
  const router = useRouter();

  return (
    
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image source={require('../assets/2.png')} style={styles.profileImage}/>
      </View>
      <Image source={require('../assets/1.png')} style={styles.backgroundImage} />
      <Title style={styles.title}>Login</Title>
      <Subheading style={styles.subtitle}>Sign in to continue.</Subheading>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        left={<TextInput.Icon icon="email" />}
        mode="outlined"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry={!togglePassword}
        mode='outlined'
        left={<TextInput.Icon icon="lock" />}
        right={
          <TextInput.Icon
            icon={togglePassword ? "eye-off" : "eye"}
            onPress={() => setTogglePassword(!togglePassword)}
          />
        }
      />

      
      <Button onPress={() => router.replace('/dashboard')} mode='contained' style={styles.button}>
          Log in
      </Button>
      
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.push('/Forgotpass')}>
          <Text style={styles.footerText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/Register')}>
          <Text style={styles.createaccnt}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
