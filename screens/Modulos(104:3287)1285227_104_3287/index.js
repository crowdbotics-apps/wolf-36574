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
      <View style={styles.View_102_5159}>
        <View style={styles.View_102_5158}>
          <View style={styles.View_102_4847}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c851f975-6095-49e4-b259-757980a9a909"
              }}
              style={styles.ImageBackground_102_4840}
            />
            <View style={styles.View_102_4841}>
              <Text style={styles.Text_102_4841}>Módulos Operativos</Text>
            </View>
          </View>
          <View style={styles.View_102_4848}>
            <View style={styles.View_102_4867}>
              <View style={styles.View_102_4868}>
                <View style={styles.View_102_4869}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/875d0830-9b1b-46cb-9086-e827f0d5e50d"
                    }}
                    style={styles.ImageBackground_102_4870}
                  />
                  <View style={styles.View_102_4871}>
                    <Text style={styles.Text_102_4871}>Adelanto de Nómina</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.TouchableOpacity_102_4944}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("27_2901"))
                }
              >
                <View style={styles.View_102_4945}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aef3f3c2-9774-430c-88fb-2f136ea9dac8"
                    }}
                    style={styles.ImageBackground_102_4946}
                  />
                  <View style={styles.View_102_4947}>
                    <Text style={styles.Text_102_4947}>
                      recargas tiempo aire
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View_102_4952}>
              <View style={styles.View_102_4953}>
                <View style={styles.View_102_4954}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/580e3dc9-3f36-4efd-9d10-09b21202a40d"
                    }}
                    style={styles.ImageBackground_102_4955}
                  />
                  <View style={styles.View_102_4956}>
                    <Text style={styles.Text_102_4956}>pago de servicios</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_102_4957}>
                <View style={styles.View_102_4958}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/549cf45a-397d-41da-b5ce-081ac2f1eee7"
                    }}
                    style={styles.ImageBackground_102_4959}
                  />
                  <View style={styles.View_102_4960}>
                    <Text style={styles.Text_102_4960}>recargas peajes</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_102_4985}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/609115ac-3448-4016-9cf6-2493d4a24013"
              }}
              style={styles.ImageBackground_102_4986}
            />
            <View style={styles.View_102_4987}>
              <Text style={styles.Text_102_4987}>
                Prestaciones Corporativas
              </Text>
            </View>
          </View>
          <View style={styles.View_102_4988}>
            <View style={styles.View_102_4989}>
              <View style={styles.View_102_4990}>
                <View style={styles.View_102_4991}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7616ba3a-f7b3-4a8c-9278-30108b9c6266"
                    }}
                    style={styles.ImageBackground_102_4992}
                  />
                  <View style={styles.View_102_4993}>
                    <Text style={styles.Text_102_4993}>Seguro de vida</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_102_4994}>
                <View style={styles.View_102_4995}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2365773-2949-4967-8d48-4a235581bc24"
                    }}
                    style={styles.ImageBackground_102_4996}
                  />
                  <View style={styles.View_102_4997}>
                    <Text style={styles.Text_102_4997}>Check up</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_102_4998}>
              <View style={styles.View_102_4999}>
                <View style={styles.View_102_5000}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9951fa3c-c6cb-413a-8542-f5fc1101be06"
                    }}
                    style={styles.ImageBackground_102_5001}
                  />
                  <View style={styles.View_102_5002}>
                    <Text style={styles.Text_102_5002}>Tarjeta médica</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_102_5003}>
                <View style={styles.View_102_5004}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e470a207-da60-4c4d-b703-f8827abb59d8"
                    }}
                    style={styles.ImageBackground_102_5005}
                  />
                  <View style={styles.View_102_5006}>
                    <Text style={styles.Text_102_5006}>seguro covid 19</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_102_5077}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f0e0a8e-6a71-494d-86c2-012fab08bb2e"
              }}
              style={styles.ImageBackground_102_5078}
            />
            <View style={styles.View_102_5079}>
              <Text style={styles.Text_102_5079}>Bienestar Corporativo </Text>
            </View>
          </View>
          <View style={styles.View_102_5080}>
            <View style={styles.View_102_5081}>
              <View style={styles.View_102_5082}>
                <View style={styles.View_102_5083}>
                  <View style={styles.View_159_3718}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db6999c1-4eca-476b-adb6-a56f206bebcd"
                      }}
                      style={styles.ImageBackground_159_3719}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ce852e1-9055-4117-96f6-a3d50c6c2ed3"
                      }}
                      style={styles.ImageBackground_159_3720}
                    />
                    <View style={styles.View_159_3721} />
                  </View>
                  <View style={styles.View_102_5085}>
                    <Text style={styles.Text_102_5085}>NOM035</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_102_5086}>
                <View style={styles.View_102_5087}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e860b925-7ebd-480b-92dd-87a26e033884"
                    }}
                    style={styles.ImageBackground_102_5088}
                  />
                  <View style={styles.View_102_5089}>
                    <Text style={styles.Text_102_5089}>Asistencia Médica</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_102_5090}>
              <View style={styles.View_162_2206}>
                <View style={styles.View_162_2207}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbae036e-4dec-4598-a7ad-8dd2bbe7925a"
                    }}
                    style={styles.ImageBackground_162_2208}
                  />
                  <View style={styles.View_162_2209}>
                    <Text style={styles.Text_162_2209}>Doctor en línea</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_162_2210}>
                <View style={styles.View_162_2211}>
                  <View style={styles.View_162_2212}>
                    <View style={styles.View_162_2213}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97452432-4f4b-4827-8e34-c66343f0cffb"
                        }}
                        style={styles.ImageBackground_162_2214}
                      />
                      <View style={styles.View_162_2215}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/979db3ca-1202-4061-978c-0b7b660d547a"
                          }}
                          style={styles.ImageBackground_162_2216}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fd09439-944f-4083-90ba-db1fed8bc334"
                          }}
                          style={styles.ImageBackground_162_2217}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/131a0def-6246-4cc6-9bcf-1b209028c62f"
                          }}
                          style={styles.ImageBackground_162_2218}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2597c840-32e8-428f-8b1e-dcbce1ed4d29"
                          }}
                          style={styles.ImageBackground_162_2219}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a90158c-43a6-4fe9-967f-5440ceee6830"
                          }}
                          style={styles.ImageBackground_162_2220}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ac95cbc-dd97-47bc-9237-738a28e779c8"
                          }}
                          style={styles.ImageBackground_162_2221}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_162_2226}>
                    <Text style={styles.Text_162_2226}>Mindfullness </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_162_1972}>
              <View style={styles.View_102_5095}>
                <View style={styles.View_102_5096}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d0befc4-f26c-4ef6-955b-efaf5fe93162"
                    }}
                    style={styles.ImageBackground_159_3751}
                  />
                  <View style={styles.View_102_5098}>
                    <Text style={styles.Text_102_5098}>Nutrición</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_162_1990}>
                <View style={styles.View_162_1991}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad212f37-bff2-4b9d-8dea-8d7e927d38d1"
                    }}
                    style={styles.ImageBackground_162_2010}
                  />
                  <View style={styles.View_162_1994}>
                    <Text style={styles.Text_162_1994}>apps</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4de4d179-fb41-40da-9842-6a8e75e29888"
        }}
        style={styles.ImageBackground_104_3288}
      />
      <View style={styles.View_104_3290}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I104_3290_44_2883}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("151_2674"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f900d576-82ff-45a6-834e-2038c3232bb5"
            }}
            style={styles.ImageBackground_I104_3290_44_2883_41_7406}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I104_3290_102_2850}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("151_2674"))
          }
        >
          <Text style={styles.Text_I104_3290_102_2850}>Empresa ACME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I104_3290_44_2885}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("113_3533"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8cd5965f-653b-4fa2-af04-b95ce6c033ef"
            }}
            style={styles.ImageBackground_I104_3290_44_2885_41_7286}
          />
          <View style={styles.View_I104_3290_44_2885_41_7291}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a21e878e-0d84-408b-87a3-67f4f2ee3c6d"
              }}
              style={styles.ImageBackground_I104_3290_44_2885_41_7284}
            />
            <View style={styles.View_I104_3290_44_2885_41_7285}>
              <Text style={styles.Text_I104_3290_44_2885_41_7285}>10</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_104_3328}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I104_3328_64_3252}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("151_2674"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/514f8fbc-7050-4cf1-9910-163b6ac2e22b"
            }}
            style={styles.ImageBackground_I104_3328_64_3253}
          />
          <View style={styles.View_I104_3328_64_3254}>
            <Text style={styles.Text_I104_3328_64_3254}>inicio</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I104_3328_64_3255}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06f9cbae-d0fa-44ea-8fa8-d57eb9091c58"
            }}
            style={styles.ImageBackground_I104_3328_64_3256}
          />
          <View style={styles.View_I104_3328_64_3257}>
            <Text style={styles.Text_I104_3328_64_3257}>Módulos</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I104_3328_64_3258}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("104_4354"))
          }
        >
          <View style={styles.View_I104_3328_64_3259}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/acd34edb-f246-466d-b6f8-bba95ab5dcd3"
              }}
              style={styles.ImageBackground_I104_3328_64_3259_2_2327}
            />
          </View>
          <View style={styles.View_I104_3328_64_3260}>
            <Text style={styles.Text_I104_3328_64_3260}>movimientos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I104_3328_64_3261}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("20_1848"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eec6c0f0-6bca-46a5-acfa-7ad39fa6647f"
            }}
            style={styles.ImageBackground_I104_3328_64_3262}
          />
          <View style={styles.View_I104_3328_64_3263}>
            <Text style={styles.Text_I104_3328_64_3263}>mi cuenta</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("127%") },
  View_102_5159: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("108%"),
    minHeight: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_102_5158: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("191%"),
    minHeight: hp("191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_102_4847: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(208, 174, 124, 1)"
  },
  ImageBackground_102_4840: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_102_4841: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_102_4841: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.301204681396484,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3860240936279297,
    textTransform: "uppercase"
  },
  View_102_4848: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(244, 250, 251, 1)",
    overflow: "hidden"
  },
  View_102_4867: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_102_4868: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_102_4869: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_102_4870: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_102_4871: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_102_4871: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  TouchableOpacity_102_4944: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_102_4945: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_102_4946: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_102_4947: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_102_4947: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_102_4952: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_102_4953: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_102_4954: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_102_4955: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_102_4956: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_102_4956: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_102_4957: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_102_4958: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_102_4959: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_102_4960: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_102_4960: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_102_4985: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51%"),
    backgroundColor: "rgba(195, 161, 111, 1)"
  },
  ImageBackground_102_4986: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_102_4987: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_102_4987: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.301204681396484,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3860240936279297,
    textTransform: "uppercase"
  },
  View_102_4988: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57%"),
    backgroundColor: "rgba(244, 250, 251, 1)",
    overflow: "hidden"
  },
  View_102_4989: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_102_4990: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_102_4991: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_102_4992: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_102_4993: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_102_4993: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_102_4994: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_102_4995: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_102_4996: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_102_4997: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_102_4997: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_102_4998: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_102_4999: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_102_5000: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_102_5001: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_102_5002: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_102_5002: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_102_5003: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_102_5004: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_102_5005: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_102_5006: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_102_5006: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_102_5077: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101%"),
    backgroundColor: "rgba(163, 126, 72, 1)"
  },
  ImageBackground_102_5078: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_102_5079: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_102_5079: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.301204681396484,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3860240936279297,
    textTransform: "uppercase"
  },
  View_102_5080: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("108%"),
    backgroundColor: "rgba(244, 250, 251, 1)",
    overflow: "hidden"
  },
  View_102_5081: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_102_5082: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_102_5083: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_159_3718: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_159_3719: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_159_3720: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_159_3721: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(208, 174, 124, 1)"
  },
  View_102_5085: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_102_5085: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_102_5086: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_102_5087: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_102_5088: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_102_5089: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_102_5089: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_102_5090: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_162_2206: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_162_2207: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_162_2208: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_162_2209: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_162_2209: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_162_2210: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_162_2211: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_162_2212: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_162_2213: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-1%")
  },
  ImageBackground_162_2214: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  View_162_2215: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_162_2216: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("5%")
  },
  ImageBackground_162_2217: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  ImageBackground_162_2218: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  ImageBackground_162_2219: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  ImageBackground_162_2220: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%")
  },
  ImageBackground_162_2221: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_162_2226: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_162_2226: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_162_1972: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_102_5095: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_102_5096: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_159_3751: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_102_5098: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_102_5098: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_162_1990: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_162_1991: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_162_2010: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_162_1994: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_162_1994: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_104_3288: {
    width: wp("100%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_3290: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_I104_3290_44_2883: {
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
  ImageBackground_I104_3290_44_2883_41_7406: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_I104_3290_102_2850: {
    flexGrow: 1,
    width: wp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I104_3290_102_2850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  TouchableOpacity_I104_3290_44_2885: {
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
  ImageBackground_I104_3290_44_2885_41_7286: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I104_3290_44_2885_41_7291: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  ImageBackground_I104_3290_44_2885_41_7284: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I104_3290_44_2885_41_7285: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I104_3290_44_2885_41_7285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_3328: {
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
  TouchableOpacity_I104_3328_64_3252: {
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
  ImageBackground_I104_3328_64_3253: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I104_3328_64_3254: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I104_3328_64_3254: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  View_I104_3328_64_3255: {
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
  ImageBackground_I104_3328_64_3256: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I104_3328_64_3257: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I104_3328_64_3257: {
    color: "rgba(208, 174, 124, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I104_3328_64_3258: {
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
  View_I104_3328_64_3259: {
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
  ImageBackground_I104_3328_64_3259_2_2327: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I104_3328_64_3260: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I104_3328_64_3260: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I104_3328_64_3261: {
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
  ImageBackground_I104_3328_64_3262: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I104_3328_64_3263: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I104_3328_64_3263: {
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
