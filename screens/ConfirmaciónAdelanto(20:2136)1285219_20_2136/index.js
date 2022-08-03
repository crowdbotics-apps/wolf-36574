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
      <View style={styles.View_102_2816} />
      <View style={styles.View_102_2799}>
        <View style={styles.View_I102_2799_46_3649}>
          <View style={styles.View_I102_2799_46_3649_44_2883}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb48a8b0-09d8-4075-ac78-de1801fc7831"
              }}
              style={styles.ImageBackground_I102_2799_46_3649_44_2883_41_7364}
            />
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I102_2799_46_3649_102_2850}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("151_2674"))
            }
          >
            <Text style={styles.Text_I102_2799_46_3649_102_2850}>
              Empresa ACME
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I102_2799_46_3649_44_2885}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("113_3533"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/256635fa-9e52-45ac-9b0d-b1da42fc5328"
              }}
              style={styles.ImageBackground_I102_2799_46_3649_44_2885_41_7286}
            />
            <View style={styles.View_I102_2799_46_3649_44_2885_41_7291}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/547190f3-2575-4144-a958-6bc4b3d6aad4"
                }}
                style={styles.ImageBackground_I102_2799_46_3649_44_2885_41_7284}
              />
              <View style={styles.View_I102_2799_46_3649_44_2885_41_7285}>
                <Text style={styles.Text_I102_2799_46_3649_44_2885_41_7285}>
                  10
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_53_3157}>
        <View style={styles.View_53_3158}>
          <View style={styles.View_102_3566}>
            <View style={styles.View_20_2181}>
              <Text style={styles.Text_20_2181}>$1,800.ºº</Text>
            </View>
            <View style={styles.View_27_1766}>
              <Text style={styles.Text_27_1766}>Monto Seleccionado</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_102_3626}>
          <View style={styles.View_102_3590}>
            <Text style={styles.Text_102_3590}>
              Detalle de adelanto de nómina
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22362561-156d-440e-bff7-c64ce792ed4f"
          }}
          style={styles.ImageBackground_102_3597}
        />
        <View style={styles.View_102_3614}>
          <View style={styles.View_102_3591}>
            <Text style={styles.Text_102_3591}>
              Fecha de solicitud Fecha de descuento Banco Beneficiario{" "}
            </Text>
          </View>
          <View style={styles.View_102_3593}>
            <Text style={styles.Text_102_3593}>
              08/01/2022 15/02/2022 Banamex Juan Perez MTZ.
            </Text>
          </View>
        </View>
        <View style={styles.View_159_2879}>
          <View style={styles.View_159_2880}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d801279a-2dad-45ac-a2df-af283a9414be"
              }}
              style={styles.ImageBackground_159_2881}
            />
            <View style={styles.View_159_2882}>
              <Text style={styles.Text_159_2882}>
                00 24 58 74 16 35 98 Santander - CLABE
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0b69e31-8c80-4c1f-a9f8-7bf57bc4a695"
              }}
              style={styles.ImageBackground_159_2883}
            />
          </View>
        </View>
        <View style={styles.View_102_3625}>
          <View style={styles.View_102_3615}>
            <Text style={styles.Text_102_3615}>detalle de COMISIONES</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6f8bd72-8ac7-4d9f-a307-4eb87c5c7391"
          }}
          style={styles.ImageBackground_102_3616}
        />
        <View style={styles.View_102_3620}>
          <View style={styles.View_102_3621}>
            <Text style={styles.Text_102_3621}>
              ADELANTO COMISIÓN TOTAL A DESCONTAR
            </Text>
          </View>
          <View style={styles.View_102_3622}>
            <Text style={styles.Text_102_3622}>
              $ 1,800.00 $ 1,180.00 $ 1,980.00
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/693f43b6-25cc-4c47-a5bc-5cc826d2d723"
          }}
          style={styles.ImageBackground_102_3624}
        />
        <View style={styles.View_102_3628}>
          <View style={styles.View_102_3599}>
            <View style={styles.View_I102_3599_2_4738} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/225bf1dc-2371-4f07-af68-4edb50c02710"
              }}
              style={styles.ImageBackground_I102_3599_2_4739}
            />
          </View>
          <View style={styles.View_102_3592}>
            <Text style={styles.Text_102_3592}>
               Leyenda legal - al contininuar acepto los términos y condiciones
              del adelanto de nómina. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ligula sit facilisi lacus lacus amet
            </Text>
          </View>
        </View>
        <View style={styles.View_102_3639}>
          <TouchableOpacity
            style={styles.TouchableOpacity_102_3631}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("159_3052"))
            }
          >
            <View style={styles.View_I102_3631_63_4653}>
              <Text style={styles.Text_I102_3631_63_4653}>
                RETIRAR ADELANTO AHORA
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b10e7eb6-1b23-41ca-b89a-b5a387bcd98e"
              }}
              style={styles.ImageBackground_I102_3631_63_4654}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_102_2817}>
        <View style={styles.View_I102_2817_61_4447}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0dc87897-84af-43d0-ac23-6f5c7e43fb4e"
            }}
            style={styles.ImageBackground_I102_2817_61_4451}
          />
          <View style={styles.View_I102_2817_61_4450}>
            <Text style={styles.Text_I102_2817_61_4450}>inicio</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I102_2817_61_4452}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("104_3287"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6d0faa7-ce99-4c86-9362-a584a236259c"
            }}
            style={styles.ImageBackground_I102_2817_61_4456}
          />
          <View style={styles.View_I102_2817_61_4455}>
            <Text style={styles.Text_I102_2817_61_4455}>Módulos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I102_2817_64_3209}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("104_4354"))
          }
        >
          <View style={styles.View_I102_2817_64_3211}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5de10e2e-1ceb-4074-bfd2-6b3864f24385"
              }}
              style={styles.ImageBackground_I102_2817_64_3211_2_2327}
            />
          </View>
          <View style={styles.View_I102_2817_64_3210}>
            <Text style={styles.Text_I102_2817_64_3210}>movimientos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I102_2817_64_3231}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("20_1848"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0943f3c6-9cc0-4a9e-b956-39e2f5e71b64"
            }}
            style={styles.ImageBackground_I102_2817_64_3233}
          />
          <View style={styles.View_I102_2817_64_3232}>
            <Text style={styles.Text_I102_2817_64_3232}>mi cuenta</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("127%") },
  View_102_2816: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    backgroundColor: "rgba(244, 250, 251, 1)"
  },
  View_102_2799: {
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
  View_I102_2799_46_3649: {
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
  View_I102_2799_46_3649_44_2883: {
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
  ImageBackground_I102_2799_46_3649_44_2883_41_7364: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_I102_2799_46_3649_102_2850: {
    flexGrow: 1,
    width: wp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I102_2799_46_3649_102_2850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  TouchableOpacity_I102_2799_46_3649_44_2885: {
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
  ImageBackground_I102_2799_46_3649_44_2885_41_7286: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I102_2799_46_3649_44_2885_41_7291: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  ImageBackground_I102_2799_46_3649_44_2885_41_7284: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I102_2799_46_3649_44_2885_41_7285: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I102_2799_46_3649_44_2885_41_7285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_3157: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("15%"),
    backgroundColor: "rgba(254, 240, 221, 1)"
  },
  View_53_3158: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_102_3566: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_20_2181: {
    width: wp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_20_2181: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.8,
    textTransform: "none"
  },
  View_27_1766: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_27_1766: {
    color: "rgba(187, 147, 89, 1)",
    fontSize: 9.883721351623535,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_102_3626: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_102_3590: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_102_3590: {
    color: "rgba(61, 112, 109, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_102_3597: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("22%")
  },
  View_102_3614: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_102_3591: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_102_3591: {
    color: "rgba(187, 147, 89, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_102_3593: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_102_3593: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_159_2879: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("37%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_159_2880: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_159_2881: {
    width: wp("16%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_159_2882: {
    width: wp("38%"),
    minWidth: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_159_2882: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 12.596084594726562,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_159_2883: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_102_3625: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("48%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_102_3615: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_102_3615: {
    color: "rgba(61, 112, 109, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_102_3616: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("53%")
  },
  View_102_3620: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("54%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_102_3621: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_102_3621: {
    color: "rgba(187, 147, 89, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_3622: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_102_3622: {
    color: "rgba(187, 147, 89, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_102_3624: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("65%")
  },
  View_102_3628: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("66%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_102_3599: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I102_3599_2_4738: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I102_3599_2_4739: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_102_3592: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_102_3592: {
    color: "rgba(187, 147, 89, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_102_3639: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("86%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_102_3631: {
    flexGrow: 1,
    width: wp("79%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I102_3631_63_4653: {
    flexGrow: 1,
    width: wp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_I102_3631_63_4653: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.724252700805664,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  ImageBackground_I102_3631_63_4654: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("3%")
  },
  View_102_2817: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("115%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I102_2817_61_4447: {
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
  ImageBackground_I102_2817_61_4451: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I102_2817_61_4450: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I102_2817_61_4450: {
    color: "rgba(208, 174, 124, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I102_2817_61_4452: {
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
  ImageBackground_I102_2817_61_4456: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I102_2817_61_4455: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I102_2817_61_4455: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I102_2817_64_3209: {
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
  View_I102_2817_64_3211: {
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
  ImageBackground_I102_2817_64_3211_2_2327: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I102_2817_64_3210: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I102_2817_64_3210: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I102_2817_64_3231: {
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
  ImageBackground_I102_2817_64_3233: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I102_2817_64_3232: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I102_2817_64_3232: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
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
