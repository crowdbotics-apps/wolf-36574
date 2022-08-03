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
      <View style={styles.View_151_4193} />
      <View style={styles.View_151_4344}>
        <View style={styles.View_151_4343}>
          <View style={styles.View_162_2302} />
          <View style={styles.View_151_4342}>
            <View style={styles.View_151_4198}>
              <View style={styles.View_151_4199}>
                <Text style={styles.Text_151_4199}>Hola</Text>
              </View>
              <View style={styles.View_151_4200}>
                <Text style={styles.Text_151_4200}>Juan Perez R.</Text>
              </View>
            </View>
            <View style={styles.View_151_4334}>
              <View style={styles.View_151_4204}>
                <View style={styles.View_151_4205}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8220a295-9f09-42ae-b709-0bcdd9bf5570"
                    }}
                    style={styles.ImageBackground_151_4206}
                  />
                  <View style={styles.View_151_4207}>
                    <View style={styles.View_151_4208}>
                      <Text style={styles.Text_151_4208}>
                        monto de ADELANTO SELECCIONADO
                      </Text>
                    </View>
                    <View style={styles.View_151_4209}>
                      <Text style={styles.Text_151_4209}>$ 1,200</Text>
                    </View>
                  </View>
                  <View style={styles.View_151_4210}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76980d3b-7a4a-42de-8457-51cd410dedf9"
                      }}
                      style={styles.ImageBackground_151_4211}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23d2cdb5-06b5-4cd4-bb2d-12befbb32055"
                      }}
                      style={styles.ImageBackground_151_4214}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a173b2f-07d4-451f-ba66-df59eacc1b22"
                      }}
                      style={styles.ImageBackground_151_4215}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5fa4794e-b43e-4c59-940d-9fc7224c9d67"
                    }}
                    style={styles.ImageBackground_151_4216}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33a8d006-20be-40f3-a4ae-49ac94045b3c"
                    }}
                    style={styles.ImageBackground_151_4217}
                  />
                  <View style={styles.View_151_4218}>
                    <View style={styles.View_151_4219}>
                      <Text style={styles.Text_151_4219}>Max</Text>
                    </View>
                    <View style={styles.View_151_4220}>
                      <Text style={styles.Text_151_4220}>$0</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3933175-4a24-4679-8f48-5a6844ea9a93"
                      }}
                      style={styles.ImageBackground_151_4221}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28feaffe-abf9-48f6-841f-bdee4ada6ca9"
                    }}
                    style={styles.ImageBackground_151_4222}
                  />
                  <TouchableOpacity
                    style={styles.TouchableOpacity_151_4223}
                    onPress={() =>
                      this.props.navigation.navigate(
                        getNavigationScreen("20_2136")
                      )
                    }
                  >
                    <View style={styles.View_151_4224}>
                      <View style={styles.View_151_4225} />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c071c989-a2fe-484f-ba42-f6e462ebe943"
                        }}
                        style={styles.ImageBackground_151_4226}
                      />
                    </View>
                    <View style={styles.View_151_4227}>
                      <Text style={styles.Text_151_4227}>
                        RETIRAR ADELANTO AHORA
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7058bbbf-db4d-4893-b6c3-86cd87b6c211"
                      }}
                      style={styles.ImageBackground_151_4228}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.View_151_4201}>
                <View style={styles.View_151_4202}>
                  <Text style={styles.Text_151_4202}> total Disponible</Text>
                </View>
                <View style={styles.View_151_4203}>
                  <Text style={styles.Text_151_4203}>$2,535.50</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_151_4229} />
      <View style={styles.View_151_4346}>
        <View style={styles.View_151_4345}>
          <View style={styles.View_162_2388}>
            <View style={styles.View_151_4230}>
              <View style={styles.View_151_4231}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2734cbf-ad6c-4bff-bb18-4dbdf2e36ee3"
                  }}
                  style={styles.ImageBackground_151_4232}
                />
                <View style={styles.View_151_4233}>
                  <Text style={styles.Text_151_4233}>
                    Recarga y paga servicios
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_151_4234}>
              <TouchableOpacity
                style={styles.TouchableOpacity_151_4235}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("27_2901"))
                }
              >
                <View style={styles.View_151_4236}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7300b487-202c-4aa5-97c6-d75484d77ffc"
                    }}
                    style={styles.ImageBackground_151_4237}
                  />
                  <View style={styles.View_151_4238}>
                    <Text style={styles.Text_151_4238}>pago de servicios</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_151_4239}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("27_2901"))
                }
              >
                <View style={styles.View_151_4240}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55cd7fae-dbf5-4512-87a3-3d3335dca50e"
                    }}
                    style={styles.ImageBackground_151_4241}
                  />
                  <View style={styles.View_151_4242}>
                    <Text style={styles.Text_151_4242}>Recargas celulrar</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_151_4243}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("27_2901"))
                }
              >
                <View style={styles.View_151_4244}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccacf949-4ab2-40ea-8c52-16c5ea23f486"
                    }}
                    style={styles.ImageBackground_151_4245}
                  />
                  <View style={styles.View_151_4246}>
                    <Text style={styles.Text_151_4246}>recarga peajes</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.View_151_4324}>
            <View style={styles.View_I151_4324_63_4691}>
              <Text style={styles.Text_I151_4324_63_4691}>
                COMPARTE ESTa APP
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d851a739-1876-49da-9e08-37a311de7605"
              }}
              style={styles.ImageBackground_I151_4324_63_4692}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f00a8a9f-8241-49e0-ab53-5b09dc53160f"
        }}
        style={styles.ImageBackground_151_2675}
      />
      <View style={styles.View_151_2677}>
        <View style={styles.View_I151_2677_46_3721}>
          <View style={styles.View_I151_2677_46_3721_44_2883}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23d10c33-fdfa-447c-bf70-9e2665deb3fd"
              }}
              style={styles.ImageBackground_I151_2677_46_3721_44_2883_41_7362}
            />
          </View>
          <View style={styles.View_I151_2677_46_3721_102_2850}>
            <Text style={styles.Text_I151_2677_46_3721_102_2850}>
              Empresa ACME
            </Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I151_2677_46_3721_44_2885}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("113_3533"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/984c035a-a628-47de-b6c9-10690ca4c833"
              }}
              style={styles.ImageBackground_I151_2677_46_3721_44_2885_41_7286}
            />
            <View style={styles.View_I151_2677_46_3721_44_2885_41_7291}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc1c094b-da08-4e86-9404-75b0c2647612"
                }}
                style={styles.ImageBackground_I151_2677_46_3721_44_2885_41_7284}
              />
              <View style={styles.View_I151_2677_46_3721_44_2885_41_7285}>
                <Text style={styles.Text_I151_2677_46_3721_44_2885_41_7285}>
                  10
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_151_2715}>
        <View style={styles.View_I151_2715_61_4447}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79977341-88d0-43f7-a4d1-9c734d889100"
            }}
            style={styles.ImageBackground_I151_2715_61_4451}
          />
          <View style={styles.View_I151_2715_61_4450}>
            <Text style={styles.Text_I151_2715_61_4450}>inicio</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I151_2715_61_4452}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("104_3287"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4ff179a-8ef2-40af-80e7-07f48b69df34"
            }}
            style={styles.ImageBackground_I151_2715_61_4456}
          />
          <View style={styles.View_I151_2715_61_4455}>
            <Text style={styles.Text_I151_2715_61_4455}>Módulos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I151_2715_64_3209}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("104_4354"))
          }
        >
          <View style={styles.View_I151_2715_64_3211}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f613e5dc-f6aa-45b0-9abb-e395c28ea442"
              }}
              style={styles.ImageBackground_I151_2715_64_3211_2_2327}
            />
          </View>
          <View style={styles.View_I151_2715_64_3210}>
            <Text style={styles.Text_I151_2715_64_3210}>movimientos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I151_2715_64_3231}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("20_1848"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6a7d96c-849c-4a9c-962f-272c6dad6fe2"
            }}
            style={styles.ImageBackground_I151_2715_64_3233}
          />
          <View style={styles.View_I151_2715_64_3232}>
            <Text style={styles.Text_I151_2715_64_3232}>mi cuenta</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("127%") },
  View_151_4193: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("75%"),
    minHeight: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52%"),
    backgroundColor: "rgba(244, 250, 251, 1)"
  },
  View_151_4344: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4343: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_162_2302: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_151_4342: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4198: {
    width: wp("77%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 246, 241, 1)",
    overflow: "hidden"
  },
  View_151_4199: {
    width: wp("11%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    justifyContent: "center"
  },
  Text_151_4199: {
    color: "rgba(208, 174, 124, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.8999999999999999,
    textTransform: "uppercase"
  },
  View_151_4200: {
    width: wp("52%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "center"
  },
  Text_151_4200: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 22.26443862915039,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.5452887725830078,
    textTransform: "uppercase"
  },
  View_151_4334: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4204: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4205: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_151_4206: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  View_151_4207: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("14%")
  },
  View_151_4208: {
    width: wp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_151_4208: {
    color: "rgba(208, 174, 124, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_151_4209: {
    width: wp("39%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_151_4209: {
    color: "rgba(11, 179, 138, 1)",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9,
    textTransform: "none"
  },
  View_151_4210: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_151_4211: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_151_4214: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%")
  },
  ImageBackground_151_4215: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("25%")
  },
  ImageBackground_151_4216: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_151_4217: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("26%")
  },
  View_151_4218: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("25%")
  },
  View_151_4219: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_151_4219: {
    color: "rgba(1, 87, 89, 1)",
    fontSize: 9.883721351623535,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_151_4220: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_151_4220: {
    color: "rgba(1, 87, 89, 1)",
    fontSize: 9.883721351623535,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_151_4221: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_151_4222: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("2%")
  },
  TouchableOpacity_151_4223: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("29%")
  },
  View_151_4224: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_4225: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_151_4226: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("7%")
  },
  View_151_4227: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_151_4227: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.38136100769043,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.384203553199768,
    textTransform: "uppercase"
  },
  ImageBackground_151_4228: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_151_4201: {
    width: wp("58%"),
    minWidth: wp("58%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("44%")
  },
  View_151_4202: {
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_151_4202: {
    color: "rgba(69, 79, 77, 1)",
    fontSize: 9.5,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_151_4203: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    justifyContent: "center"
  },
  Text_151_4203: {
    color: "rgba(69, 79, 77, 1)",
    fontSize: 16.81620979309082,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4163241958618164,
    textTransform: "none"
  },
  View_151_4229: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4346: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4345: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_162_2388: {
    flexGrow: 1,
    width: wp("93%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4230: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_151_4231: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_151_4232: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_151_4233: {
    flexGrow: 1,
    width: wp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_151_4233: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  View_151_4234: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_151_4235: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_151_4236: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_151_4237: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_151_4238: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("9%"),
    justifyContent: "center"
  },
  Text_151_4238: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  TouchableOpacity_151_4239: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_151_4240: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_151_4241: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_151_4242: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    justifyContent: "center"
  },
  Text_151_4242: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  TouchableOpacity_151_4243: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_151_4244: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_151_4245: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_151_4246: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    justifyContent: "center"
  },
  Text_151_4246: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_151_4324: {
    flexGrow: 1,
    width: wp("86%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("25%"),
    backgroundColor: "rgba(178, 203, 204, 1)"
  },
  View_I151_4324_63_4691: {
    flexGrow: 1,
    width: wp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I151_4324_63_4691: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11.724252700805664,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  ImageBackground_I151_4324_63_4692: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("2%")
  },
  ImageBackground_151_2675: {
    width: wp("100%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_151_2677: {
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
  View_I151_2677_46_3721: {
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
  View_I151_2677_46_3721_44_2883: {
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
  ImageBackground_I151_2677_46_3721_44_2883_41_7362: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I151_2677_46_3721_102_2850: {
    flexGrow: 1,
    width: wp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I151_2677_46_3721_102_2850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  TouchableOpacity_I151_2677_46_3721_44_2885: {
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
  ImageBackground_I151_2677_46_3721_44_2885_41_7286: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I151_2677_46_3721_44_2885_41_7291: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  ImageBackground_I151_2677_46_3721_44_2885_41_7284: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I151_2677_46_3721_44_2885_41_7285: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I151_2677_46_3721_44_2885_41_7285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_2715: {
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
  View_I151_2715_61_4447: {
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
  ImageBackground_I151_2715_61_4451: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I151_2715_61_4450: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I151_2715_61_4450: {
    color: "rgba(208, 174, 124, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I151_2715_61_4452: {
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
  ImageBackground_I151_2715_61_4456: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I151_2715_61_4455: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I151_2715_61_4455: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I151_2715_64_3209: {
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
  View_I151_2715_64_3211: {
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
  ImageBackground_I151_2715_64_3211_2_2327: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I151_2715_64_3210: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I151_2715_64_3210: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I151_2715_64_3231: {
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
  ImageBackground_I151_2715_64_3233: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I151_2715_64_3232: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I151_2715_64_3232: {
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
