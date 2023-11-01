import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ChatHomeScreen from "./ChatHomeScreen";
import { useTheme } from "react-native-paper";
import AddServiceScreen from "./AddServiceScreen";

export type BottomTabParamList = {
    HomeScreen : undefined;
    ChatHomeScreen : undefined;
    SearchScreen : undefined;
    ProfileScreen : undefined;
    AddServiceScreen : undefined;
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();


function MainScreen(){
    const {colors} = useTheme();
    return (
        < BottomTab.Navigator screenOptions={{headerShown : false, tabBarShowLabel : false}}>
            <BottomTab.Screen name={"HomeScreen"} component={HomeScreen} options={{tabBarIcon : ({color, size}) => <MaterialCommunityIcons name = 'home' color = {color} size = {size}/>}}/>
            <BottomTab.Screen name={'AddServiceScreen'} component={AddServiceScreen} options={{tabBarIcon : ({color, size}) => <MaterialCommunityIcons name='plus-circle-outline' color = {color} size = {size}/>}}/>
            <BottomTab.Screen name={"ChatHomeScreen"} component={ChatHomeScreen} options={{tabBarIcon : ({color, size}) => <MaterialCommunityIcons name = 'chat' color = {color} size = {size}/>}}/>
            <BottomTab.Screen name={"ProfileScreen"} component={ProfileScreen} options={{tabBarIcon : ({color, size}) => <MaterialCommunityIcons name = 'account-circle-outline' color = {color} size = {size}/>}}/>
        </BottomTab.Navigator>
    );
}

export default MainScreen;