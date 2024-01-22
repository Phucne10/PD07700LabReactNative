import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { styles, ColorText } from "./styles";  // import styles và ColorText từ file styles.js

const ViewComponent = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>  {/* sửa style thành styles */}
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nhap ho ten"
        style={styles.tiStyle}
      />

      <Text style={styles.baseText}>  {/* sửa style thành styles */}
        Em vao doi bang {' '}
        <Text style={[styles.boldText, ColorText('red')]}>Vang doc</Text>  {/* sửa style thành styles */}
      </Text>
    </View>
  );
};

export default ViewComponent;
