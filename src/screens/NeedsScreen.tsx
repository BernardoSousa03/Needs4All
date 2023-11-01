import {useEffect, useContext} from 'react';
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Text, Button, Divider } from "react-native-paper";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import ProfileShowcase from '../components/ProfileShowcase';
import { UserContext } from '../../store/user-context';

import { needsImageRequires } from '../utils/imageConstants';

type Props = NativeStackScreenProps<RootStackParamList, "NeedsScreen">;

function NeedsScreen(props : Props){
    function messageHandler(){
        let userMessages = userCtx.mensagens.find((value) => value.deliveryEmail === needsData.profile.email);
        if (!userMessages){
            userMessages = userCtx.createChat(needsData.profile.name, needsData.profile.email);
        }
        navigation.navigate('ChatScreen', {messageContainer : userMessages});
    }

    const navigation = props.navigation;
    const needsData = props.route.params.needsData;

    const userCtx = useContext(UserContext);

    const image = needsImageRequires.find((value) => value[0] === needsData.image) || needsImageRequires[0]


    useEffect(()=>{
        navigation.setOptions({title : ''})
    }, [])

    return (
        <View style={styles.root}>
            <Image style={styles.image} resizeMode="cover" source={image[1]}/>
            <ScrollView style={{width : '100%'}} contentContainerStyle={styles.informationContainer}>
                <Text variant='headlineLarge'>{needsData.name}</Text>
                <Button disabled={needsData.user} onPress={messageHandler} mode='contained'>Enviar mensagem</Button>
                <Divider bold={true}/>
                <Text variant='bodyMedium'>Descrição</Text>
                <Text>{needsData.description}</Text>
                <Divider bold={true}/>
                <Text variant='bodyMedium'>Informações sobre o prestador</Text>
                <View>
                    <ProfileShowcase profile={needsData.profile}/>
                </View>
            </ScrollView>
        </View>
    );
}

export default NeedsScreen;

const styles = StyleSheet.create({
    root : {flex : 1, alignItems : 'center'},
    informationContainer : {flexGrow : 1, padding : 10, justifyContent : 'space-around'},
    image : {height: '50%', width : '100%'}
})  