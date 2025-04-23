import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    backgroundColor: '#7CB9E8',
  },
  logocontainer:{
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  profileImage: {
    width: 220,
    height: 170,
    borderRadius: 50,

  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    zIndex: 0,
  
  },
 
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    marginTop: 20,
    color: '#fff',
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 24,
    color: '#fff',
  },
  input: {
    marginBottom: 16,
    borderRadius: 30,
  },
  button: {
    marginTop: 20,
    paddingVertical: 5,
    
  },
  footer: {
    marginTop: 15,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#45ceb6',
    marginTop: 8,
  },
  createaccnt: {
    fontSize: 20,
    color: '#fff',
    marginTop: 10,
  }

});

export default styles;
