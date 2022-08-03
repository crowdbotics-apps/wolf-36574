import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_7_390}>
        <Text style={styles.Text_7_390}>Ver 1.0.8</Text>
      </View>
      <View style={styles.View_162_2301}>
        <TouchableOpacity
          style={styles.TouchableOpacity_113_4402}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("8_435"))
          }
        >
          <View style={styles.View_I113_4402_41_6428}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d71f367-4b34-4d06-9d11-491b6b934362"
              }}
              style={styles.ImageBackground_I113_4402_41_6428_41_6188}
            />
            <View style={styles.View_I113_4402_41_6428_41_6189}>
              <View style={styles.View_I113_4402_41_6428_41_6189_41_5823}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8fc0eb2-1586-4dac-b0ee-5c25dcca6f12"
                  }}
                  style={
                    styles.ImageBackground_I113_4402_41_6428_41_6189_41_5799
                  }
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16ad9e62-2493-4158-9c0a-7ce0ac4ae922"
                  }}
                  style={
                    styles.ImageBackground_I113_4402_41_6428_41_6189_41_5804
                  }
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_6_2106}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("8_435"))
          }
        >
          <View style={styles.View_6_2107} />
          <View style={styles.View_6_2108} />
        </TouchableOpacity>
      </View>
      <View style={styles.View_113_4431}>
        <Text style={styles.Text_113_4431}>Ver 1.0.8</Text>
      </View>
      <View style={styles.View_113_4432}>
        <Text style={styles.Text_113_4432}>
          WOLF Financial Todos los derechos reservados 2022©
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_7_390: {
    width: wp("11%"),
    top: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    justifyContent: "flex-start"
  },
  Text_7_390: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_162_2301: {
    flexGrow: 1,
    width: wp("61%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_113_4402: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I113_4402_41_6428: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I113_4402_41_6428_41_6188: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I113_4402_41_6428_41_6189: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I113_4402_41_6428_41_6189_41_5823: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I113_4402_41_6428_41_6189_41_5799: {
    width: wp("33%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I113_4402_41_6428_41_6189_41_5804: {
    width: wp("28%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  TouchableOpacity_6_2106: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%")
  },
  View_6_2107: {
    width: wp("61%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(222, 222, 222, 1)"
  },
  View_6_2108: {
    width: wp("21%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(48, 170, 170, 1)"
  },
  View_113_4431: {
    width: wp("11%"),
    top: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    justifyContent: "flex-start"
  },
  Text_113_4431: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_113_4432: {
    width: wp("79%"),
    top: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "center"
  },
  Text_113_4432: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.39,
    textTransform: "uppercase"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
