import {useState, useContext} from 'react';
import {ImageBackground, StyleSheet, View, Dimensions, KeyboardAvoidingView, ScrollView} from 'react-native';
import { Button, SegmentedButtons, TextInput, Text } from 'react-native-paper';

import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList } from './MainScreen';
import { RootStackParamList } from '../../App';

import { SelectList } from 'react-native-dropdown-select-list';

import { UserContext } from '../../store/user-context';

type Props = CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, "AddServiceScreen">, 
    NativeStackScreenProps<RootStackParamList>
>;


function AddServiceScreen(props : Props){
    function hasErrors(){
        return serviceName === '' || serviceDescription === '' || (categorySelected === '' || categorySelected === "-------");
    }

    function createServiceHandler(){
        const newNeed = {user : true, category : categorySelected, name : serviceName, description : serviceDescription, profile : {name : userCtx.user.name, email : userCtx.user.email}, image : 'Default'};
        switch (modeSelected){
            case ('troca'):
                console.log("troca val",userCtx.addTroca(newNeed));
                break;
            case ('oferta'):
                console.log("oferta val",userCtx.addOferta(newNeed))
                break;
            case ('empréstimo'):
                console.log("emprestimo val",userCtx.addEmpréstimo(newNeed));
                break;
            default:
                break;
        }
        setServiceName('');
        setServiceDescription('');
        setCategorySelected('');
        navigation.navigate("HomeScreen");
    }

    const [modeSelected, setModeSelected] = useState('troca');
    const [serviceName, setServiceName] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [categorySelected, setCategorySelected] = useState('');
    const tabHeight = useBottomTabBarHeight();

    const userCtx = useContext(UserContext);

    const navigation = props.navigation;

    return (
        <ImageBackground source={require('../../assets/Background3.png')} style={{padding : 20, height : Dimensions.get("window").height - tabHeight, width : Dimensions.get("window").width}}>
                <KeyboardAvoidingView style = {{flex : 1}} contentContainerStyle={{flex : 1}} behavior='position'>
                    <View style={styles.spaceContainer}>
                        <Text style={{maxWidth : '50%'}} variant='displaySmall'>Cria o Need de alguém</Text>
                    </View>
                    <View style={styles.container}>
                        <SegmentedButtons 
                            value={modeSelected} 
                            onValueChange={setModeSelected} 
                            buttons={[
                                {value : 'oferta', label : 'Oferta', style : {backgroundColor : modeSelected === 'oferta' ? '#7EB361' : 'white'}}, 
                                {value : 'troca' , label : 'Troca', style : {backgroundColor : modeSelected === 'troca' ? '#0897FF' : 'white'}},
                                {value : 'empréstimo', label : 'Empréstimo', style : {backgroundColor : modeSelected === 'empréstimo' ? '#ED4A20' : 'white'}}]}
                                />
                        <TextInput placeholder={`Insere o nome do Need`} value={serviceName} onChangeText={setServiceName}/>
                        <TextInput placeholder={`Insere a descrição do Need`} value={serviceDescription} onChangeText={setServiceDescription}/>
                        <SelectList placeholder="Escolhe uma categoria" boxStyles={styles.searchBodyItem} dropdownStyles={styles.searchBodyItem} setSelected={(val) => val !== "-------" ? setCategorySelected(val) : setCategorySelected("")} data={userCtx.categorys} save="value"/>
                        <Button mode='contained' onPress={createServiceHandler} disabled={hasErrors()}>Create Need!</Button>
                    </View>
                </KeyboardAvoidingView>
        </ImageBackground>
    );
}

export default AddServiceScreen;

const styles = StyleSheet.create({
    spaceContainer : {flex : 1, justifyContent : 'flex-start', alignItems : 'flex-end', width : '100%', },
    container : {flex : 2, justifyContent : 'space-around'},
    searchBodyItem : {margin : 10, backgroundColor : 'white'}
})