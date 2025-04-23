import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';
import homepage from '../../../styles/homepagestyle';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'react-native-paper';
import axios from 'axios';

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const API_URL = "https://fastapi-backend-f2k4.onrender.com/api/todos";

const Index: React.FC = () => {
  const { colors } = useTheme();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingInput, setEditingInput] = useState<string>('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      const formatted = response.data.map((task: any) => ({
        id: task.id.toString(),
        title: task.description,
        completed: task.status === 'completed',
      }));
      setTasks(formatted);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const createTask = async () => {
    if (!editingInput.trim()) return;
    try {
      await axios.post(API_URL, { description: editingInput });
      fetchTasks();
      setEditingInput('');
    } catch (err) {
      console.error('Failed to add task:', err);
    }
  };

  const updateTask = async (id: string) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    try {
      await axios.put(`${API_URL}/${id}`, {
        description: editingInput,
        status: task.completed ? 'completed' : 'pending',
      });
      fetchTasks();
      setEditingId(null);
      setEditingInput('');
    } catch (err) {
      console.error('Failed to update task:', err);
    }
  };

  const deleteTask = async (id: string) => {
    Alert.alert('Delete Task', 'Are you sure?', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        onPress: async () => {
          try {
            await axios.delete(`${API_URL}/${id}`);
            fetchTasks();
          } catch (err) {
            console.error('Failed to delete task:', err);
          }
        },
      },
    ]);
  };

  const toggleComplete = async (id: string) => {
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  try {
    await axios.put(`${API_URL}/${id}/`, {
      description: task.title,
      status: task.completed ? 'pending' : 'completed',
    });
    fetchTasks();
  } catch (err) {
    console.error('Failed to toggle status:', err);
  }
};

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <View style={[homepage.container, { backgroundColor: colors.background }]}>
      <View style={homepage.inputRow}>
        <TextInput
          placeholder="Enter new task"
          placeholderTextColor={colors.outline}
          value={editingInput}
          onChangeText={setEditingInput}
          style={[homepage.taskInput, { color: colors.onBackground, borderColor: colors.outline }]}
        />
        <TouchableOpacity
          onPress={editingId ? () => updateTask(editingId) : createTask}
          style={[homepage.addButton, { backgroundColor: colors.primary }]}
        >
          <Text style={[homepage.addButtonText, { color: colors.onPrimary }]}>
            {editingId ? 'Update' : 'Add'}
          </Text>
        </TouchableOpacity>
      </View>

      <LinearGradient colors={['#4facfe', '#00f2fe']} style={homepage.progressCard}>
        <Text style={[homepage.progressTitle, { color: colors.onPrimary }]}>Today's Task</Text>
      </LinearGradient>

      <View style={homepage.filterRow}>
        {['all', 'pending', 'completed'].map(f => (
          <TouchableOpacity key={f} onPress={() => setFilter(f as any)}>
            <Text
              style={[
                homepage.filterText,
                filter === f && homepage.activeFilterText,
                { color: colors.onBackground },
              ]}
            >
              {f.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[homepage.taskCard, { backgroundColor: colors.surface }]}
          >
            <View style={homepage.taskDetails}>
              {editingId === item.id ? (
                <TextInput
                  value={editingInput}
                  onChangeText={setEditingInput}
                  style={[homepage.taskInput, { color: colors.onSurface }]}
                />
              ) : (
                <TouchableOpacity onPress={() => toggleComplete(item.id)}>
                  <Text
                    style={[
                      homepage.taskName,
                      item.completed && homepage.completedTask,
                      { color: colors.onSurface },
                    ]}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={homepage.taskActions}>
              {editingId === item.id ? (
                <TouchableOpacity onPress={() => updateTask(item.id)}>
                  <MaterialCommunityIcons name="check" size={20} color={colors.primary} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setEditingId(item.id);
                    setEditingInput(item.title);
                  }}
                >
                  <MaterialCommunityIcons name="pencil" size={20} color={colors.outline} />
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={() => deleteTask(item.id)} style={homepage.deleteIcon}>
                <MaterialCommunityIcons name="trash-can" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Index;
