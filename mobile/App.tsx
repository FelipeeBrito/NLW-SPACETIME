import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-gray-950 flex-1 justify-center items-center" >
      <Text className="text-zinc-50 font-bold text-5xl">Felipe Brito</Text>
      <StatusBar style="light" translucent />
    </View>
  );
}


