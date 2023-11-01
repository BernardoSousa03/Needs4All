import { BottomTabParamList } from "./MainScreen";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {CompositeScreenProps } from '@react-navigation/native';
import { RootStackParamList } from "../../App";

import {useState, useEffect, useContext} from 'react';
import { View, StyleSheet, StatusBar, FlatList, SafeAreaView } from "react-native";
import { Searchbar, SegmentedButtons, Text, useTheme} from 'react-native-paper';
import { SelectList } from "react-native-dropdown-select-list";

import { UserContext } from "../../store/user-context";

import search from "../utils/searchAlgorithm";

import NeedsShowcase from "../components/NeedsShowcase";
import { Needs } from "../utils/types";


type Props = CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, "HomeScreen">, 
    NativeStackScreenProps<RootStackParamList>
>;

function HomeScreen(props : Props){

    const userCtx = useContext(UserContext);
    const navigation = props.navigation;
    const theme = useTheme();

    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [NeedsShowing, setNeedsShowing] = useState<Needs[]>([]);
    const [NeedsUsed, setNeedsUsed] = useState<Needs[]>([]);
    const [modeSelected, setModeSelected] = useState("troca");

    useEffect(()=>{
    const newDataNeeds = NeedsUsed.filter((value, index)=> (productCategory !== value.category && productCategory !== '') || (productName !== '' && !search(productName, value.name)) ? false : true)
        setNeedsShowing(newDataNeeds);
    }, [productName, productCategory])

    useEffect(() => {
        console.log("mode seleceted");
        switch (modeSelected){
            case ("troca") :
                setNeedsShowing(userCtx.trocaData);
                setNeedsUsed(userCtx.trocaData);
                console.log("troca set");
                break;
            case ("oferta") :
                setNeedsShowing(userCtx.ofertaData);
                setNeedsUsed(userCtx.ofertaData);
                break;
            case ("empréstimo") :
                setNeedsShowing(userCtx.empréstimoData);
                setNeedsUsed(userCtx.empréstimoData);
                break;
            default:
                break;
        }
    }, [modeSelected, userCtx])

    return (
        <SafeAreaView style={styles.root}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
            <View style={styles.header}>
                <View>
                    <Text variant="displaySmall">Encontra as tuas necessidades</Text>
                </View>
                <View style={styles.body}>
                    <View>
                        <SegmentedButtons 
                            value={modeSelected} 
                            onValueChange={setModeSelected} 
                            buttons={[
                                {value : 'oferta', label : 'Oferta', style : {backgroundColor : modeSelected === 'oferta' ? '#7EB361' : undefined}}, 
                                {value : 'troca' , label : 'Troca', style : {backgroundColor : modeSelected === 'troca' ? '#0897FF' : undefined}},
                                {value : 'empréstimo', label : 'Empréstimo', style : {backgroundColor : modeSelected === 'empréstimo' ? '#ED4A20' : undefined}}]}
                        />
                        <Searchbar style = {[styles.searchBodyItem]} placeholder={"Procura por nome do produto"} value={productName} onChangeText={setProductName}/>
                        <SelectList placeholder="Escolhe uma categoria" boxStyles={styles.searchBodyItem} dropdownStyles={styles.searchBodyItem} setSelected={(val) => val !== "-------" ? setProductCategory(val) : setProductCategory("")} data={userCtx.categorys} save="value"/>
                    </View>
                </View>
            </View>
            <FlatList
                numColumns={2}
                data = {NeedsShowing}
                extraData={NeedsShowing}
                contentContainerStyle={{flexGrow : 1, paddingBottom : 200}}
                renderItem={({item}) => <NeedsShowcase onPress={() => navigation.navigate("NeedsScreen", {needsData : item})} needsData={item}/>}
                columnWrapperStyle={{flex : 1, justifyContent : 'space-around'}}
                ItemSeparatorComponent={() => <View style={{height : 20}}/>}
                keyExtractor={(item) => item.name}
                />
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    root : { justifyContent : 'center', margin: 25},
    header : {marginBottom : 20},
    headerIcons : {flexDirection : 'column'},
    body : { marginTop: 40},
    searchBodyItem : {margin : 10}
})