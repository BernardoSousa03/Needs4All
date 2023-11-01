import {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar, KeyboardAvoidingView, ScrollView, ImageBackground, Keyboard, Dimensions} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TextInput, Text, Button, HelperText} from 'react-native-paper';
import { RootStackParamList } from '../../App';
import RadioButtonContainer from '../components/RadioButtonContainer';
import { useTheme } from 'react-native-paper';
import { UserContext } from '../../store/user-context';
import {useHeaderHeight} from '@react-navigation/elements';

type Props = NativeStackScreenProps<RootStackParamList, 'RegisterScreen'>;


function RegisterScreen(props : Props){
    function onChangeEmailInputHandler(text : string){
        onChangeEmailInput(text);
    }

    function navigateNextScreen(){
        if (shareChecked && termsChecked){
            navigation.navigate('LoadingLoginScreen', {email : emailInput});
        }  
    }

    function hasErrors(){
        return !(emailInput !== '' && shareChecked && termsChecked && emailInput.includes('@'));
    }

    function invalidEmail(){
        return (emailInput !=='' && !emailInput.includes('@'));
    }
    
    const [emailInput, onChangeEmailInput] = useState('');
    const [shareChecked, setShareChecked] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false);

    const UserCtx = useContext(UserContext);

    const theme = useTheme();
    const buttonFont = theme.fonts.headlineSmall;

    const navigation = props.navigation;
    const headerHeight = useHeaderHeight();

    useEffect(() => {
        navigation.setOptions({headerShown : true, title : ''})
    }, [])
    return (
        <SafeAreaView style={{flex : 1}}>
            <ImageBackground source={require('../../assets/Background7.png')} style={{height : Dimensions.get('window').height - headerHeight, width : Dimensions.get("window").width}}>
                <StatusBar/>
                <KeyboardAvoidingView style={{flex : 1, justifyContent : 'center'}} behavior='padding'>
                    <ScrollView contentContainerStyle={styles.root}>                        
                        <View style={styles.header}>
                            <Text style={styles.headerText} variant='headlineLarge'>Regista-te de uma forma segura e rápida</Text>
                        </View>
                        <View style={styles.registerContent}>
                                <TextInput 
                                    placeholder='Insere o teu email aqui'
                                    onSubmitEditing={navigateNextScreen} 
                                    value={emailInput} 
                                    onChangeText={onChangeEmailInputHandler}
                                    />
                                <HelperText type='error' visible={invalidEmail()}>
                                    Email adress is invalid!
                                </HelperText>
                            <RadioButtonContainer checked={shareChecked} onPress={setShareChecked} text='Eu aceito partilhar os meus dados com a Needs4All app'/>
                            <RadioButtonContainer checked={termsChecked} onPress={setTermsChecked} text='Eu aceito os termos e condições da Needs4All app'/>
                            <Button labelStyle={buttonFont} style={styles.registerButton} disabled={hasErrors()} onPress={navigateNextScreen} mode='contained'>Registar</Button>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    root : { flexGrow : 1, justifyContent : 'space-between', alignItems : 'center', margin : 20, marginBottom : 40},
    header : {height : 200, justifyContent: 'flex-start', alignItems : 'baseline', width : '100%'},
    headerText : { textAlign : 'left', width : 250},
    registerContent : {height : 300, justifyContent : 'flex-end', width : '100%'},
    registerButton : {height : 70, justifyContent : 'center'}
})