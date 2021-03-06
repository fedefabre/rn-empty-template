import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen'
  }
]

export const HomeScreen = () => {

  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text>{menuItem.name} - {menuItem.icon}</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>

      <Icon name="star" size={50} color="black"/>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => { return renderMenuItem(item) }}
        keyExtractor={(item) => item.name}
      />


    </View>
  );
};
