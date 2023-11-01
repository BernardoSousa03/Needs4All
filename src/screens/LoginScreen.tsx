import {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, Platform, StatusBar, ImageBackground, Dimensions, KeyboardAvoidingView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import {Button, TextInput, Text, useTheme, HelperText} from 'react-native-paper';
import {useHeaderHeight} from '@react-navigation/elements';

type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;


function LoginScreen(props : Props){

    function onChangeEmailInputHandler(text : string){
        onChangeEmailInput(text);
    }

    function hasError(){
        return emailInput === '' || !emailInput.includes('@');
    }

    function isInvalid(){
        return (emailInput !== '' && !emailInput.includes('@'))
    }
    
    const [emailInput, onChangeEmailInput] = useState('');

    const theme = useTheme();
    const buttonFont = theme.fonts.headlineSmall

    const navigation = props.navigation;
    const headerHeight = useHeaderHeight();

    useEffect(() => {
        navigation.setOptions({headerShown : true, title : ''});
    })

    return (
        <SafeAreaView style={{flex : 1}}>
            <ImageBackground source={require('../../assets/Background8.png')} style={{height: Dimensions.get("window").height - headerHeight, width: Dimensions.get("window").width}}>
                <KeyboardAvoidingView style={styles.root} behavior='height'>
                    <StatusBar barStyle={'default'}/>
                    <View style={styles.headerContainer}>
                        <Text variant='headlineMedium' style={styles.headerText}>Olá de novo!</Text>
                        <Text variant='headlineSmall' style={styles.headerText}>Estávamos à tua espera</Text>
                    </View>
                    <View style={styles.inputContainer}>
                            <TextInput 
                                placeholder='Insert your email here'
                                style={{marginVertical : 40}}
                                onSubmitEditing={() => hasError() ? null : navigation.navigate('LoadingLoginScreen', {email : emailInput})} 
                                value={emailInput} 
                                onChangeText={onChangeEmailInputHandler}
                                />
                            <HelperText type='error' visible={isInvalid()}>
                                Email adress is invalid!
                            </HelperText>
                            <Button disabled={hasError()} labelStyle={buttonFont} contentStyle={{height : 60}} mode='contained' onPress={() => navigation.navigate('LoadingLoginScreen', {email : emailInput})} >Login</Button>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    root : {flex : 1 , justifyContent : 'center' , alignItems : 'center', margin : 20},
    headerContainer : {flex : 1, justifyContent : 'flex-start', alignItems : 'flex-start', width : '100%'},
    headerText : {textAlign : 'left'},
    inputContainer : {flex : 3, justifyContent :'center', width : '100%'}
})