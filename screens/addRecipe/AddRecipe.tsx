import * as React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

function AddRecipe() {
    const [title, setTitle] = React.useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add a new recipe</Text>
      <TextInput
          value={title}
          style={styles.input}
          onChangeText={setTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: 200
  },
});

export default AddRecipe;
