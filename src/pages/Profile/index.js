import React, {Component} from 'react'

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'

class Profile extends Component {
    state = {
        name: '',
        age: '',
        professional: ''
    }
    //executando quando o botão e clicando
    handleSubmit(){
        Alert.alert('Seus dados',`nome: ${this.state.name}, idade: ${this.state.age}, professional: ${this.state.professional}`)
    }


    render() {
        console.log( this.state)
        return (
            <View style={styles.viewBackgorund}>
                <Text style={{fontSize: 50, color: '#fff', borderBottomColor: '#fff', borderBottomWidth: 1}}>BEM VINDO</Text>
                <Text style={{marginTop: 20, color: '#fff', padding: 10, fontSize: 20}}> SUAS INFORMAÇÔES</Text>
            <View style={styles.viewDate}>
                <Text style={styles.textInfo} >Nome: {this.state.name}</Text>
                <TextInput style={styles.inpuInfo} placeholder='Seu nome' onChangeText = {(text) => this.setState({ name: text }) }></TextInput>
                <Text style={styles.textInfo} >Idade: {this.state.age}</Text>
                <TextInput style={styles.inpuInfo} placeholder='Sua idade' onChangeText = {(text) => this.setState({ age: text }) }></TextInput>
                <Text style={styles.textInfo} >Profissão: {this.state.professional}</Text>
                <TextInput style={styles.inpuInfo} placeholder='Sua Profissão' onChangeText = {(text) => this.setState({ professional: text }) }></TextInput>
                <TouchableOpacity style={styles.buttonSubmit} onPress={() =>this.handleSubmit()}>
                    <Text style={{fontSize: 17, color:'#fff'}}>Enviar</Text>
                </TouchableOpacity>
            </View> 
            </View>
        )
    }
}
const styles = StyleSheet.create({
        viewBackgorund: {
        flex: 1,
        backgroundColor: '#19181f',
        alignItems: 'center',
        },
        textInfo: {
            color: '#fff',
            padding: 5,
            marginTop: 10,
            fontSize: 20
            

        },
        inpuInfo: {
            backgroundColor:'#676280',
            borderRadius: 10,
            width: '100%',
            marginBottom: 25

        },
        viewDate:{
            alignItems: 'center',
            marginTop: 15,
            width:'90%'
        },
        buttonSubmit: {
            backgroundColor: '#383357',
            borderRadius: 5,
            padding: 20,
            width: '60%',
            alignItems: 'center',
            marginTop: 7
            
        }

})

export default Profile
