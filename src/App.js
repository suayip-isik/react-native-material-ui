import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Button, ActivityIndicator, Stack } from "@react-native-material/core";

const App = () => {
  return (
    <SafeAreaView>
      <Text>App</Text>
      <Button title="Click Me" />

      <Stack center spacing={4}>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="error" />
        <ActivityIndicator size="large" color="#00ff00" />
      </Stack>
    </SafeAreaView>
  )
}

export default App;