import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Contact() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.title}>INFORMAÇÕES DE CONTATO</Text>

            <Text style={styles.conteudo}>Telefone: +55 (11) 4007-0707  </Text>
            <Text style={styles.legenda}>(Atenção: Você poderá ouvir um zumbido de 17kHz antes da chamada ser completada. Isso é normal e indica que sua linha foi sintonizada).</Text>

            <Text style={styles.conteudo}>WhatsApp (Sincronização Direta): +55 (11) 90707-1998.
            </Text>
            <Text style={styles.legenda}>Status: "Sempre conectado. Mesmo quando o seu aparelho está desligado."</Text>

            <Text style={styles.conteudo}>Endereço Físico (Fachada): Avenida das Nações Unidas, 12.551 - 7º Andar, Conjunto 77. Brooklin Novo, São Paulo - SP, 04578-903. </Text>
            <Text style={styles.legenda}> (Nota: O elevador não para no 7º andar para usuários sem o chip Psyche ativo).</Text>

            <Text style={styles.conteudo}>CNPJ: 07.777.777/0001-07</Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    conteudo: {
        color: '#02f53f',
        fontSize: 18,
        marginTop: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#000000',
        paddingHorizontal: 20,
    },
    title: {
        fontWeight: 'bold',
        color: '#01cb33',
        fontSize: 26,
        alignSelf: 'center'
    },
    legenda: {
        marginTop:2,
        color: '#0d8a2c'
    }
});