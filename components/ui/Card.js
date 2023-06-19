import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../contants/Colors.android";
function Card({children}){
    return     <View style={styles.card}>{children}</View>

}
export default Card;

const devicesWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({

    card: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 24,
        padding: 16,
        marginTop: devicesWidth < 380 ? 18 : 36,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 8,
      },
})