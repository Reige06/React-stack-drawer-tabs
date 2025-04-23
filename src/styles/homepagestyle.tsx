import { StyleSheet } from "react-native";

const homepage = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#f8f9fa' 
    },
    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
    },
    title: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'black' 
    },
    progressCard: {
      margin: 16,
      padding: 16,
      borderRadius: 12,
    },
    progressTitle: { 
        color: 'white', 
        fontSize: 16 
    },
    progressRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 16 
    },
    avatarRow: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    avatar: { 
        width: 40, 
        height: 40, 
        borderRadius: 20, 
        marginRight: 8 
    },
    addAvatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    addText: { 
        fontSize: 20, 
        color: '#4facfe', 
        fontWeight: 'bold' 
    },
    progressBar: { 
        flex: 1, 
        marginLeft: 16 
    },
    progressText: { 
        color: 'white', 
        fontSize: 12 },
    bar: {
      width: '100%',
      height: 10,
      backgroundColor: 'white',
      borderRadius: 5,
      marginTop: 4,
    },
    progress: {
      width: '40%',
      height: '100%',
      backgroundColor: '#00f2fe',
      borderRadius: 5,
    },
    taskHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
    },
    taskTitle: { 
        fontSize: 18, 
        fontWeight: 'bold' 
    },
    seeAll: { 
        color: '#4facfe' 
    },
    taskCard: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      marginHorizontal: 16,
      backgroundColor: 'white',
      borderRadius: 12,
      marginBottom: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      marginTop: 10,
      paddingLeft: 1,
      paddingRight: 14
    },
    taskDetails: { 
        flex: 1, 
        marginLeft: 16 
    },
    taskName: { 
        fontWeight: 'bold', 
        fontSize: 16 
    },
    taskTime: { 
        color: 'gray', 
        fontSize: 12 
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 16,
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderTopColor: '#eee',
    },
    inputRow: {
      flexDirection: 'row',
      margin: 10,
    },
    taskInput: {
      flex: 1,
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
    },
    addButton: {
      marginLeft: 10,
      backgroundColor: '#4facfe',
      padding: 10,
      borderRadius: 5,
    },
    addButtonText: {
      color: '#fff',
    },
    filterRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    filterText: {
      fontWeight: 'normal',
    },
    activeFilterText: {
      fontWeight: 'bold',
    },
    completedTask: {
      textDecorationLine: 'line-through',
    },
    taskActions: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    deleteIcon: {
      marginLeft: 10,
    },
    

  });
  export default homepage;