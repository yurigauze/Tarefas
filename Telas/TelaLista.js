import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";


export default function TelaLista(){
    return(
        <View style={styles.container}>
            <Text>Lista</Text>
            <StatusBar style="ligth"/>


        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: '#ccf5ff',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })