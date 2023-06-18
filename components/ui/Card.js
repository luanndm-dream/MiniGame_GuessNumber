import { View, StyleSheet } from "react-native";
import Colors from "../../contants/colors";
function Card({children}){
    return     <View style={styles.card}>{children}</View>

}
export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 24,
        padding: 16,
        marginTop: 50,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 8,
      },
})