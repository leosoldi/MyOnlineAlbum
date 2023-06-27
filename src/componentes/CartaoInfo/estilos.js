import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        borderRadius: 10,

        backgroundColor: "gray",
        
        shadowColor: "gray",
        shadowOffset: {
            width: 2,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 5,
    },
    imagem: {
        width: "100%",
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#5268ff",
    },
    containerTexto: {
        flexDirection: "column",
        width: "100%",
        minHeight: 80,
        backgroundColor: "#5268ff",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 20,
    },
    textoNome: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "600",
        marginVertical: 5,
    },
    textoFonte: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "400",
        marginVertical: 5,
    },
    textoDescricao: {
        color: "#FFF",
        fontSize: 14,
        fontWeight: "400",
        marginVertical: 5,
        display: "none",
        marginBottom: 10,
    },
});