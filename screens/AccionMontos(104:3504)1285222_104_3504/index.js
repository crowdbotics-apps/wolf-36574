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
      <View style={styles.View_104_4187}>
        <View style={styles.View_104_3512}>
          <View style={styles.View_104_3513}>
            <View style={styles.View_104_3514}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be935596-b4b6-4f8e-a8b9-6247be6a45c3"
                }}
                style={styles.ImageBackground_104_3515}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_104_4246}>
          <View style={styles.View_I104_4246_2_4761} />
          <View style={styles.View_I104_4246_2_4762}>
            <Text style={styles.Text_I104_4246_2_4762}>*** *** 6543</Text>
          </View>
        </View>
        <View style={styles.View_104_4258}>
          <View style={styles.View_I104_4258_2_4761} />
          <View style={styles.View_I104_4258_2_4762}>
            <Text style={styles.Text_I104_4258_2_4762}>*** *** 6543</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_104_4118}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("104_3693"))
          }
        >
          <View style={styles.View_I104_4118_104_3743}>
            <View style={styles.View_I104_4118_104_3744} />
            <View style={styles.View_I104_4118_104_3745}>
              <Text style={styles.Text_I104_4118_104_3745}>
                SELECCIÓNE MONTO DE RECARGA
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d295ca20-8f1a-425b-bb4b-d4f0faff5efc"
            }}
            style={styles.ImageBackground_I104_4118_104_3746}
          />
        </TouchableOpacity>
        <View style={styles.View_104_4326}>
          <View style={styles.View_104_4319}>
            <View style={styles.View_I104_4319_2_4738} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0f65944-cdcb-4a74-a4db-1d36864b63f8"
              }}
              style={styles.ImageBackground_I104_4319_2_4739}
            />
          </View>
          <View style={styles.View_104_4320}>
            <Text style={styles.Text_104_4320}>
               Leyenda legal - al contininuar acepto los términos y condiciones
              del adelanto de nómina. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ligula sit facilisi lacus lacus amet
            </Text>
          </View>
        </View>
        <View style={styles.View_104_4262}>
          <View style={styles.View_I104_4262_63_4755}>
            <Text style={styles.Text_I104_4262_63_4755}>
              CONFIRMA está OPERACIÓN
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d26a7ce2-308d-4413-9f02-ff06ceeece3c"
            }}
            style={styles.ImageBackground_I104_4262_63_4756}
          />
        </View>
      </View>
      <View style={styles.View_104_3507}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7fa0d2b-48ce-48f1-a416-5da9b828f597"
          }}
          style={styles.ImageBackground_104_3508}
        />
        <View style={styles.View_104_3509}>
          <Text style={styles.Text_104_3509}>CONFIRMA TU RECARGA</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cbb068f-81f1-4e8b-b849-1cad2e448f8f"
        }}
        style={styles.ImageBackground_104_3506}
      />
      <View style={styles.View_104_3570}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I104_3570_64_3252}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("151_2674"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b0c5426-2e19-48c2-8aea-64b4da81cbe1"
            }}
            style={styles.ImageBackground_I104_3570_64_3253}
          />
          <View style={styles.View_I104_3570_64_3254}>
            <Text style={styles.Text_I104_3570_64_3254}>inicio</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I104_3570_64_3255}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("104_3287"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f311ea8b-a473-43c8-a007-cc524957619a"
            }}
            style={styles.ImageBackground_I104_3570_64_3256}
          />
          <View style={styles.View_I104_3570_64_3257}>
            <Text style={styles.Text_I104_3570_64_3257}>Módulos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I104_3570_64_3258}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("104_4354"))
          }
        >
          <View style={styles.View_I104_3570_64_3259}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2db41195-807f-4279-85d9-26c5b23dba66"
              }}
              style={styles.ImageBackground_I104_3570_64_3259_2_2327}
            />
          </View>
          <View style={styles.View_I104_3570_64_3260}>
            <Text style={styles.Text_I104_3570_64_3260}>movimientos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I104_3570_64_3261}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("20_1848"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07fabe18-b7f2-4fec-b95f-734af71e1089"
            }}
            style={styles.ImageBackground_I104_3570_64_3262}
          />
          <View style={styles.View_I104_3570_64_3263}>
            <Text style={styles.Text_I104_3570_64_3263}>mi cuenta</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_104_3571}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I104_3571_44_2883}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("151_2674"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6fa3f277-b494-4ffa-9201-0589f6b96126"
            }}
            style={styles.ImageBackground_I104_3571_44_2883_41_7406}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I104_3571_102_2850}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("151_2674"))
          }
        >
          <Text style={styles.Text_I104_3571_102_2850}>Empresa ACME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I104_3571_44_2885}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("113_3533"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2dd9bbe3-d956-458c-9ee7-4572806fd9fd"
            }}
            style={styles.ImageBackground_I104_3571_44_2885_41_7286}
          />
          <View style={styles.View_I104_3571_44_2885_41_7291}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5335bf06-ec9d-4e31-b5da-6700c118b2ad"
              }}
              style={styles.ImageBackground_I104_3571_44_2885_41_7284}
            />
            <View style={styles.View_I104_3571_44_2885_41_7285}>
              <Text style={styles.Text_I104_3571_44_2885_41_7285}>10</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("127%") },
  View_104_4187: {
    width: wp("100%"),
    height: hp("101%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(244, 250, 251, 1)",
    overflow: "hidden"
  },
  View_104_3512: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_3513: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_3514: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_104_3515: {
    width: wp("67%"),
    height: hp("10%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    resizeMode: "cover"
  },
  View_104_4246: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_4246_2_4761: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(222, 222, 222, 1)",
    borderWidth: 1.5
  },
  View_I104_4246_2_4762: {
    flexGrow: 1,
    width: wp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I104_4246_2_4762: {
    color: "rgba(247, 148, 16, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_104_4258: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_4258_2_4761: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(74, 165, 152, 1)",
    borderWidth: 1.5
  },
  View_I104_4258_2_4762: {
    flexGrow: 1,
    width: wp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I104_4258_2_4762: {
    color: "rgba(66, 184, 140, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  TouchableOpacity_104_4118: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_4118_104_3743: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_4118_104_3744: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(222, 222, 222, 1)",
    borderWidth: 1.5
  },
  View_I104_4118_104_3745: {
    width: wp("76%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_I104_4118_104_3745: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_I104_4118_104_3746: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("2%")
  },
  View_104_4326: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("58%")
  },
  View_104_4319: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_4319_2_4738: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I104_4319_2_4739: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_104_4320: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_104_4320: {
    color: "rgba(187, 147, 89, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_4262: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("76%"),
    backgroundColor: "rgba(255, 220, 129, 1)"
  },
  View_I104_4262_63_4755: {
    flexGrow: 1,
    width: wp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I104_4262_63_4755: {
    color: "rgba(176, 115, 0, 1)",
    fontSize: 11.724252700805664,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  ImageBackground_I104_4262_63_4756: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("3%")
  },
  View_104_3507: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(74, 165, 152, 1)"
  },
  ImageBackground_104_3508: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_104_3509: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_104_3509: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.301204681396484,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3860240936279297,
    textTransform: "uppercase"
  },
  ImageBackground_104_3506: {
    width: wp("100%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_3570: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_I104_3570_64_3252: {
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
  ImageBackground_I104_3570_64_3253: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I104_3570_64_3254: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I104_3570_64_3254: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I104_3570_64_3255: {
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
  ImageBackground_I104_3570_64_3256: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I104_3570_64_3257: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I104_3570_64_3257: {
    color: "rgba(208, 174, 124, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I104_3570_64_3258: {
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
  View_I104_3570_64_3259: {
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
  ImageBackground_I104_3570_64_3259_2_2327: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I104_3570_64_3260: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I104_3570_64_3260: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I104_3570_64_3261: {
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
  ImageBackground_I104_3570_64_3262: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I104_3570_64_3263: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I104_3570_64_3263: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  View_104_3571: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_I104_3571_44_2883: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I104_3571_44_2883_41_7406: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_I104_3571_102_2850: {
    flexGrow: 1,
    width: wp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I104_3571_102_2850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  TouchableOpacity_I104_3571_44_2885: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I104_3571_44_2885_41_7286: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I104_3571_44_2885_41_7291: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  ImageBackground_I104_3571_44_2885_41_7284: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I104_3571_44_2885_41_7285: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I104_3571_44_2885_41_7285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
