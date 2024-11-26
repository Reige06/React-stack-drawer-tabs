import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import homepage from '../../../styles/homepagestyle';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';

const tasks = [
    { id: '1', title: 'UI Design', time: '09:00 AM - 11:00 AM', icon: 'paint-brush' },
    { id: '2', title: 'Web Development', time: '11:30 AM - 12:30 PM', icon: 'code' },
    { id: '3', title: 'Office Meeting', time: '02:00 PM - 03:00 PM', icon: 'group' },
    { id: '4', title: 'Dashboard Design', time: '03:30 PM - 05:00 PM', icon: 'dashboard' },
  ];
const index = () => {
  return (
    <View style={homepage.container}>
      <LinearGradient
        colors={['#4facfe', '#00f2fe']}
        style={homepage.progressCard}
      >
        <Text style={homepage.progressTitle}>Today's progress summary</Text>
        <View style={homepage.progressRow}>
          <View style={homepage.avatarRow}>
            <Image
              source={require('../../../assets/3.png')}
              style={homepage.avatar}
            />
          </View>
          <View style={homepage.progressBar}>
            <Text style={homepage.progressText}>Progress</Text>
            <View style={homepage.bar}>
              <View style={homepage.progress} />
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={homepage.taskHeader}>
        <Text style={homepage.taskTitle}>Today's Task</Text>
        <TouchableOpacity>
          <Text style={homepage.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={homepage.taskCard}>
            <View style={homepage.taskDetails}>
              <Text style={homepage.taskName}>{item.title}</Text>
              <Text style={homepage.taskTime}>{item.time}</Text>
            </View>
            <MaterialCommunityIcons name="arrow-right" size={24} color="gray" />
          </TouchableOpacity>
        )}
      />









    </View>
  )
}

export default index