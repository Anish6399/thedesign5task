import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddPostScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const savePost = async () => {
    try {
      const newPost = { title, body };
      const existingPosts = await AsyncStorage.getItem('posts');
      const posts = existingPosts ? JSON.parse(existingPosts) : [];
      posts.push(newPost);
      await AsyncStorage.setItem('posts', JSON.stringify(posts));

      navigation.goBack();
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };



  return (
    <View>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Body"
        value={body}
        onChangeText={(text) => setBody(text)}
      />
      <Button title="Save Post" onPress={savePost} />
    </View>
  );
};

export default AddPostScreen;
