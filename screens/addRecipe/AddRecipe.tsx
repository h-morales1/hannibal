import * as React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import {useTailwind} from 'tailwind-rn';

function AddRecipe() {
    const [title, setTitle] = React.useState('');
    const tailwind = useTailwind();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
            <Text style={tailwind('text-blue-800 font-semibold')}>Add a new recipe</Text>
        </View>
      <TextInput
          value={title}
          style={tailwind('rounded-lg border-2 border-blue-200')}
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
