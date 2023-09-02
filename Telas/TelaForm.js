import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Feather as Icon } from '@expo/vector-icons';


export default function TelaForm() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastre uma Tarefa</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.texto}
                placeholder="Adicionar Tarefa">
                </TextInput>
                <TextInput style={styles.texto}
                    placeholder="Adicionar Prazo">
                </TextInput>
                <TouchableOpacity style={styles.botao}>
                    <View>
                        <Icon name='save' size={22} color='white' />
                        <Text style={styles.textoBotao}>salvar</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <StatusBar style="ligth" />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#ffcccf',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })