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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d28da71f-dab5-4905-b73f-22ae60b22bfd"
        }}
        style={styles.ImageBackground_159_3764}
      />
      <View style={styles.View_159_3765}>
        <View style={styles.View_I159_3765_154_4781}>
          <View style={styles.View_I159_3765_154_4781_44_2883}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1dc89955-0333-44c1-928f-4cde2e8a550f"
              }}
              style={styles.ImageBackground_I159_3765_154_4781_44_2883_41_7364}
            />
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I159_3765_154_4781_102_2850}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("151_2674"))
            }
          >
            <Text style={styles.Text_I159_3765_154_4781_102_2850}>
              Empresa ACME
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75cc60c9-2a5a-4071-a93f-9b03806974d2"
            }}
            style={styles.TouchableOpacity_I159_3765_154_4781_44_2885}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("113_3533"))
            }
          />
        </View>
      </View>
      <View style={styles.View_162_2258}>
        <View style={styles.View_162_2259}>
          <View style={styles.View_159_3804}>
            <Text style={styles.Text_159_3804}>confirma tus datos</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_159_3943}>
        <Text style={styles.Text_159_3943}>
          si tu información no es correcta favor de contactarnos a través de los
          siguientes canales
        </Text>
      </View>
      <View style={styles.View_162_1934}>
        <View style={styles.View_162_1935}>
          <View style={styles.View_162_1936}>
            <Text style={styles.Text_162_1936}>empresas acme sa de cv</Text>
          </View>
          <View style={styles.View_162_1937}>
            <Text style={styles.Text_162_1937}>Juan Perez MTZ</Text>
          </View>
          <View style={styles.View_162_1938}>
            <View style={styles.View_162_1939}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc045e5f-a705-46b3-bba9-37fc4a0729d0"
                }}
                style={styles.ImageBackground_162_1940}
              />
              <View style={styles.View_162_1941}>
                <Text style={styles.Text_162_1941}>
                  5254 2836 1435 7326 Santander - Tarjeta
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83afc00f-0ccc-4db7-a113-e88c1cffd373"
                }}
                style={styles.ImageBackground_162_1942}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_162_1943}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("151_2674"))
            }
          >
            <View style={styles.View_162_1944}>
              <Text style={styles.Text_162_1944}>MIS DATOS SON CORRECTOS</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_162_1962}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc6aa388-aae0-448a-9b2b-3390e78974d6"
              }}
              style={styles.ImageBackground_162_1963}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3dc08c48-a014-4bff-8d4e-6a1c19bfd525"
              }}
              style={styles.ImageBackground_162_1967}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9fdb69c-a653-4c85-9701-9d3adc4d9e95"
              }}
              style={styles.ImageBackground_162_1968}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_162_2242}>
        <View style={styles.View_162_2244}>
          <View style={styles.View_162_2245}>
            <Text style={styles.Text_162_2245}>soporte técnico </Text>
          </View>
          <View style={styles.View_162_2246}>
            <View style={styles.View_162_2247}>
              <Text style={styles.Text_162_2247}> WHATSAPP</Text>
            </View>
            <View style={styles.View_162_2248}>
              <Text style={styles.Text_162_2248}>TELÉFONO</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d8ef956-1b6a-4751-becd-45de6cf82ce4"
              }}
              style={styles.ImageBackground_162_2249}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55c9da8b-a23f-49f3-a4db-f6db6c1c6dc4"
              }}
              style={styles.ImageBackground_162_2250}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("127%") },
  ImageBackground_159_3764: {
    width: wp("100%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_159_3765: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I159_3765_154_4781: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I159_3765_154_4781_44_2883: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I159_3765_154_4781_44_2883_41_7364: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_I159_3765_154_4781_102_2850: {
    flexGrow: 1,
    width: wp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I159_3765_154_4781_102_2850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  TouchableOpacity_I159_3765_154_4781_44_2885: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("2%")
  },
  View_162_2258: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_162_2259: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_159_3804: {
    width: wp("78%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_159_3804: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.54,
    textTransform: "uppercase"
  },
  View_159_3943: {
    width: wp("81%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "center"
  },
  Text_159_3943: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.930000305175781,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16162500381469727,
    textTransform: "uppercase"
  },
  View_162_1934: {
    width: wp("86%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("24%"),
    backgroundColor: "rgba(226, 232, 240, 1)"
  },
  View_162_1935: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_162_1936: {
    width: wp("64%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_162_1936: {
    color: "rgba(187, 147, 89, 1)",
    fontSize: 14.518518447875977,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3703703689575195,
    textTransform: "uppercase"
  },
  View_162_1937: {
    width: wp("74%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_162_1937: {
    color: "rgba(61, 112, 109, 1)",
    fontSize: 26.63520050048828,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6727040100097657,
    textTransform: "uppercase"
  },
  View_162_1938: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("42%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_162_1939: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_162_1940: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_162_1941: {
    width: wp("34%"),
    minWidth: wp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_162_1941: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 11.203577995300293,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_162_1942: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  TouchableOpacity_162_1943: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_162_1944: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_162_1944: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.719999313354492,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_162_1962: {
    width: wp("37%"),
    height: hp("22%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_162_1963: {
    width: wp("31%"),
    height: hp("18%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_162_1967: {
    width: wp("37%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_162_1968: {
    width: wp("17%"),
    height: hp("12%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_162_2242: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("113%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_162_2244: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_162_2245: {
    width: wp("79%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_162_2245: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.39,
    textTransform: "uppercase"
  },
  View_162_2246: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%")
  },
  View_162_2247: {
    width: wp("20%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_162_2247: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.39,
    textTransform: "uppercase"
  },
  View_162_2248: {
    width: wp("18%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "center"
  },
  Text_162_2248: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.39,
    textTransform: "uppercase"
  },
  ImageBackground_162_2249: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_162_2250: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
