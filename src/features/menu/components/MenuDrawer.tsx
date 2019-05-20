import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView, DrawerItemsProps} from 'react-navigation';
import {Drawer} from 'react-native-paper';



const MenuDrawer: React.FC<DrawerItemsProps> = ({navigation}) => (
  <ScrollView>
    <SafeAreaView forceInset={{top: "always", horizontal: "never"}}>
      <Drawer.Item
        label="Home Page"
        active
        onPress={() => navigation.navigate("First")}
      />
      <Drawer.Item
        label="Second Page"
        onPress={() => navigation.navigate("Second")}
      />
    </SafeAreaView>
  </ScrollView>
);

export default MenuDrawer;