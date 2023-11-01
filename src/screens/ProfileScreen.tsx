import {useContext} from 'react';
import {View, SafeAreaView, StatusBar, StyleSheet, ImageBackground} from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { UserContext } from '../../store/user-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList } from './MainScreen';
import { RootStackParamList } from '../../App';

type Props = CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, "ProfileScreen">, 
    NativeStackScreenProps<RootStackParamList>
>;

function ProfileScreen(props : Props){

    const navigation = props.navigation;

    const {colors} = useTheme();

    const userCtx = useContext(UserContext);

    console.log(userCtx.user);

    return (
        <SafeAreaView style={{flex : 1}}>
            <ImageBackground source={require('../../assets/Background2.png')} style={{flex : 1}}>
                <StatusBar/>
                <View style={[styles.profileBanner, {backgroundColor : colors.onSecondaryContainer}]}>
                    <Text variant='headlineSmall' style={{color : 'white'}}>{userCtx.user.name}</Text>
                    <MaterialCommunityIcons name='account-circle' size={100} color={'white'}/>
                </View>
                <View style={{flex : 5}}>
                    <Button mode='contained' dark={false} buttonColor={'white'} style={styles.button} onPress={() => navigation.navigate('SplashScreen')}>Logout</Button>
                    <Button mode='contained' dark={false} buttonColor={'white'} disabled={true} style={styles.button}>Settings</Button>
                    <Button mode='contained' dark={false} buttonColor={'white'} disabled={true} style={styles.button}>Account Information</Button>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    button : {borderWidth : 1, borderColor : 'black', margin : 10},
    profileBanner : {flex : 2, margin : 10,borderRadius : 50, justifyContent : 'space-evenly', alignItems : 'center'}
})