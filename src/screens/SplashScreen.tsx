import {View, ImageBackground, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import {Button, useTheme, Text} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { StatusBar } from 'expo-status-bar';

type Props = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;

function SplashScreen(props : Props){
    const navigation = props.navigation; 

    const {colors, fonts} = useTheme();

    return (
        <View style={{flex : 1}}>
        <StatusBar style='light' translucent={false}/>
        <SafeAreaView style={{flex : 1}}>
            <ImageBackground resizeMode='cover' source={require('../../assets/Background6.png')} style={{height : Dimensions.get("window").height, width : Dimensions.get("window").width}}>
                <View style={styles.root}>
                    <View style={styles.spaceContainer}>
                    </View>
                    <View style={styles.clickableContainer}>
                        <Button style={styles.button} labelStyle={fonts.labelLarge} textColor='black' mode = 'text' onPress={() => navigation.navigate("RegisterScreen")}>Registar</Button>
                        <Button style={styles.button} labelStyle={fonts.labelLarge} textColor='black' mode = 'outlined' onPress={() => navigation.navigate("LoginScreen")}>Login</Button>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
        </View>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    root: {flex: 1, justifyContent: 'center'},
    spaceContainer: {flex:8},
    clickableContainer : {flex :1, margin: '10%', justifyContent: 'space-around', flexDirection: 'row'},
    button : {justifyContent : 'center', maxHeight : 70, minWidth : 120},
})