import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { styles, ColorText } from "./styles";  

const ViewComponent = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}> 
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nhap ho ten"
        style={styles.tipStyle}
      />

      <Text style={styles.baseText}> 
        Em vao doi bang {' '}
        <Text style={[styles.boldText, ColorText('red')]}>Vang doc</Text> 
      </Text>
    </View>
  );
};

export default ViewComponent;
