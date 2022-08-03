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
      <View style={styles.View_102_2343}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I102_2343_64_3316}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("151_2674"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da0f25f4-cfc3-4613-80be-dce7064ef9d1"
            }}
            style={styles.ImageBackground_I102_2343_64_3317}
          />
          <View style={styles.View_I102_2343_64_3318}>
            <Text style={styles.Text_I102_2343_64_3318}>inicio</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I102_2343_64_3319}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("104_3287"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f15505be-7281-4a64-9dd2-c83758b723df"
            }}
            style={styles.ImageBackground_I102_2343_64_3320}
          />
          <View style={styles.View_I102_2343_64_3321}>
            <Text style={styles.Text_I102_2343_64_3321}>Módulos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I102_2343_64_3322}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("104_4354"))
          }
        >
          <View style={styles.View_I102_2343_64_3323}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57d2064e-2340-48a8-8099-3c5456f8406b"
              }}
              style={styles.ImageBackground_I102_2343_64_3323_2_2327}
            />
          </View>
          <View style={styles.View_I102_2343_64_3324}>
            <Text style={styles.Text_I102_2343_64_3324}>movimientos</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I102_2343_64_3325}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ffc90491-ac34-4ae7-a6b5-8c37fac8e5b2"
            }}
            style={styles.ImageBackground_I102_2343_64_3326}
          />
          <View style={styles.View_I102_2343_64_3327}>
            <Text style={styles.Text_I102_2343_64_3327}>mi cuenta</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e57771d0-b274-429e-b9a5-61b8a743d2cd"
        }}
        style={styles.ImageBackground_113_4272}
      />
      <View style={styles.View_113_4273}>
        <View style={styles.View_I113_4273_46_3721}>
          <View style={styles.View_I113_4273_46_3721_44_2883}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8bbaf2f-16c2-488b-9be9-b5959991d178"
              }}
              style={styles.ImageBackground_I113_4273_46_3721_44_2883_41_7362}
            />
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I113_4273_46_3721_102_2850}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("151_2674"))
            }
          >
            <Text style={styles.Text_I113_4273_46_3721_102_2850}>
              Empresa ACME
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I113_4273_46_3721_44_2885}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("113_3533"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66f6b0a3-370d-4eec-8944-c62140d77bcc"
              }}
              style={styles.ImageBackground_I113_4273_46_3721_44_2885_41_7286}
            />
            <View style={styles.View_I113_4273_46_3721_44_2885_41_7291}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dde28980-b315-4657-9227-c8b1c6846e8e"
                }}
                style={styles.ImageBackground_I113_4273_46_3721_44_2885_41_7284}
              />
              <View style={styles.View_I113_4273_46_3721_44_2885_41_7285}>
                <Text style={styles.Text_I113_4273_46_3721_44_2885_41_7285}>
                  10
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_183_1897}>
        <View style={styles.View_183_1838}>
          <Text style={styles.Text_183_1838}>Mi Cuenta</Text>
        </View>
      </View>
      <View style={styles.View_183_1964}>
        <View style={styles.View_183_1965}>
          <View style={styles.View_183_1966}>
            <Text style={styles.Text_183_1966}>empresas acme sa de cv</Text>
          </View>
          <View style={styles.View_183_1967}>
            <Text style={styles.Text_183_1967}>Juan Perez MTZ</Text>
          </View>
        </View>
        <View style={styles.View_183_1968}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cd31571-ba76-44a3-9f4f-290f6e52c3c7"
            }}
            style={styles.ImageBackground_183_1969}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee02a060-2f3f-4122-b881-22d92899c266"
            }}
            style={styles.ImageBackground_183_1973}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96fcf6e5-a46f-4f10-a0b6-34e4b340b2d4"
            }}
            style={styles.ImageBackground_183_1974}
          />
        </View>
        <View style={styles.View_183_1978}>
          <View style={styles.View_183_1979}>
            <Text style={styles.Text_183_1979}>EMAIL</Text>
          </View>
          <View style={styles.View_183_1980}>
            <Text style={styles.Text_183_1980}>juanperez@email.com</Text>
          </View>
        </View>
        <View style={styles.View_183_2033}>
          <View style={styles.View_183_2034}>
            <Text style={styles.Text_183_2034}>teléfono</Text>
          </View>
          <View style={styles.View_183_2035}>
            <Text style={styles.Text_183_2035}>777 123 4567</Text>
          </View>
        </View>
        <View style={styles.View_183_1981}>
          <View style={styles.View_183_1982}>
            <Text style={styles.Text_183_1982}>datos bancarios</Text>
          </View>
        </View>
        <View style={styles.View_183_1983}>
          <View style={styles.View_183_1984}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2af74e5f-3704-4e17-9cba-eac41b281723"
              }}
              style={styles.ImageBackground_183_1985}
            />
            <View style={styles.View_183_1986}>
              <Text style={styles.Text_183_1986}>
                00 24 58 74 16 35 98 Santander - CLABE
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a773e381-44bb-4ec9-8472-7fb61523547b"
              }}
              style={styles.ImageBackground_183_1987}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef8ece3e-cbd3-44d5-bfad-63b11cb37dac"
          }}
          style={styles.ImageBackground_183_2037}
        />
        <View style={styles.View_183_1861}>
          <View style={styles.View_183_1862}>
            <View style={styles.View_183_1863}>
              <Text style={styles.Text_183_1863}>soporte técnico </Text>
            </View>
            <View style={styles.View_183_1864}>
              <View style={styles.View_183_1865}>
                <Text style={styles.Text_183_1865}> WHATSAPP</Text>
              </View>
              <View style={styles.View_183_1866}>
                <Text style={styles.Text_183_1866}>TELÉFONO</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8075321e-a048-49f5-873f-7abbc05340c8"
                }}
                style={styles.ImageBackground_183_1867}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3a68ce6-803d-4d5a-b5c3-18086bac01b9"
                }}
                style={styles.ImageBackground_183_1868}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("127%") },
  View_102_2343: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_I102_2343_64_3316: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I102_2343_64_3317: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I102_2343_64_3318: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I102_2343_64_3318: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I102_2343_64_3319: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I102_2343_64_3320: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I102_2343_64_3321: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I102_2343_64_3321: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I102_2343_64_3322: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I102_2343_64_3323: {
    width: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I102_2343_64_3323_2_2327: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I102_2343_64_3324: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I102_2343_64_3324: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  View_I102_2343_64_3325: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I102_2343_64_3326: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I102_2343_64_3327: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I102_2343_64_3327: {
    color: "rgba(208, 174, 124, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  ImageBackground_113_4272: {
    width: wp("100%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_113_4273: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I113_4273_46_3721: {
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
  View_I113_4273_46_3721_44_2883: {
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
  ImageBackground_I113_4273_46_3721_44_2883_41_7362: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  TouchableOpacity_I113_4273_46_3721_102_2850: {
    flexGrow: 1,
    width: wp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I113_4273_46_3721_102_2850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  TouchableOpacity_I113_4273_46_3721_44_2885: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I113_4273_46_3721_44_2885_41_7286: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I113_4273_46_3721_44_2885_41_7291: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  ImageBackground_I113_4273_46_3721_44_2885_41_7284: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I113_4273_46_3721_44_2885_41_7285: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I113_4273_46_3721_44_2885_41_7285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_1897: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_183_1838: {
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_183_1838: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.54,
    textTransform: "uppercase"
  },
  View_183_1964: {
    width: wp("86%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("19%"),
    backgroundColor: "rgba(226, 232, 240, 1)"
  },
  View_183_1965: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_183_1966: {
    width: wp("64%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "center"
  },
  Text_183_1966: {
    color: "rgba(187, 147, 89, 1)",
    fontSize: 14.518518447875977,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3703703689575195,
    textTransform: "uppercase"
  },
  View_183_1967: {
    width: wp("74%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_183_1967: {
    color: "rgba(61, 112, 109, 1)",
    fontSize: 26.63520050048828,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.6727040100097657,
    textTransform: "uppercase"
  },
  View_183_1968: {
    width: wp("37%"),
    height: hp("22%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_183_1969: {
    width: wp("31%"),
    height: hp("18%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_183_1973: {
    width: wp("37%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_183_1974: {
    width: wp("17%"),
    height: hp("12%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_183_1978: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_183_1979: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_183_1979: {
    color: "rgba(187, 147, 89, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_183_1980: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-end"
  },
  Text_183_1980: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_2033: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("47%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_183_2034: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_183_2034: {
    color: "rgba(187, 147, 89, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_183_2035: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-end"
  },
  Text_183_2035: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_1981: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_183_1982: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_183_1982: {
    color: "rgba(187, 147, 89, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_183_1983: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("62%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_183_1984: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_183_1985: {
    width: wp("16%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_1986: {
    width: wp("38%"),
    minWidth: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_183_1986: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 12.596084594726562,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_183_1987: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_183_2037: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("75%")
  },
  View_183_1861: {
    width: wp("77%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("79%"),
    backgroundColor: "rgba(99, 220, 144, 1)"
  },
  View_183_1862: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_183_1863: {
    width: wp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    justifyContent: "center"
  },
  Text_183_1863: {
    color: "rgba(61, 112, 109, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.54,
    textTransform: "uppercase"
  },
  View_183_1864: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_183_1865: {
    width: wp("25%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_183_1865: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.48,
    textTransform: "uppercase"
  },
  View_183_1866: {
    width: wp("22%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "center"
  },
  Text_183_1866: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.48,
    textTransform: "uppercase"
  },
  ImageBackground_183_1867: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_183_1868: {
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
