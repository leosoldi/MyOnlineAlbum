import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5268ff",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingTop: StatusBar.currentHeight,
        padding: 20,
    },
    containerTitulo: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    titulo: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "500",
        marginBottom: 10,
        textAlign: "center",
    },
    texto: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 10,
    },
    entrada: {
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        color: "#000",
        fontSize: 16,
        padding: 10,
        width: "100%",
    },
    entradaDescricao: {
        height: 100,
        textAlignVertical: "top",
        textAlign: "left"
    },
    botao: {
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        padding: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        
    },
    textoBotao: {
        color: "#000",
        fontSize: 16,
        fontWeight: "500",
        fontWeight: "bold",
    },
    imagem: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        marginVertical: 10,

    },
    opcao: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: '#000',
        paddingHorizontal: 20,
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    ico: {
        marginLeft: 12,
        fontSize: 18,
        alignItems: 'center',
    }
});