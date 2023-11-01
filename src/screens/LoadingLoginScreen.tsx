import { useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import AnimatedTyping from "../components/AnimatedTyping";
import stringToHash from "../utils/hashFunction";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { UserContext } from "../../store/user-context";

type Props = NativeStackScreenProps<RootStackParamList, 'LoadingLoginScreen'>;

function LoadingLoginScreen(props : Props){

    const navigation = props.navigation;
    const userCtx = useContext(UserContext);

    const email = props.route.params.email;
    const socialSecNum = stringToHash(email);

    const [userName,] = email.split('@');

    useEffect(() => {
        userCtx.setUser({email : email, name : userName, ssn : socialSecNum});
    }, [])

    return (
        <View style={styles.root}>
            <AnimatedTyping 
                onComplete={() => navigation.navigate('MainScreen')}
                text={
                    [
                        "A procurar os teus dados nos ficheiros públicos ...",
                        "Aguardando ...",
                        `Encontrado o número de segurança social ${socialSecNum}`,
                        'A entrar na tua conta ...'
                    ]}
                />
        </View>
    );
}

export default LoadingLoginScreen;

const styles = StyleSheet.create({
    root : {flex : 1, justifyContent : 'center', alignItems : 'center', margin : 40}
})