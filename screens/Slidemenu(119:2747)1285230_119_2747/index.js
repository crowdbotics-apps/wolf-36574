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
      <View style={styles.View_119_2746}>
        <View style={styles.View_119_2637} />
        <View style={styles.View_119_2804} />
        <View style={styles.View_119_2748}>
          <View style={styles.View_I119_2748_41_7075}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31277247-4e30-4a2a-9fea-fd364d1e0ecb"
              }}
              style={styles.ImageBackground_I119_2748_41_7075_41_7017}
            />
            <View style={styles.View_I119_2748_41_7075_41_7018}>
              <View style={styles.View_I119_2748_41_7075_41_7018_41_5823}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ce2ae1a-acd3-45dd-88ec-5c849688e402"
                  }}
                  style={
                    styles.ImageBackground_I119_2748_41_7075_41_7018_41_5799
                  }
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5718bd08-9fba-4687-9e48-a086994a09e6"
                  }}
                  style={
                    styles.ImageBackground_I119_2748_41_7075_41_7018_41_5804
                  }
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_119_3443}>
          <View style={styles.View_119_3178}>
            <View style={styles.View_119_3179}>
              <View style={styles.View_119_3180}>
                <Text style={styles.Text_119_3180}>Módulos Operativos</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10ee7b3c-d20b-4dd7-b029-ca2d3df53a30"
                }}
                style={styles.ImageBackground_119_3181}
              />
            </View>
            <View style={styles.View_119_3182}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a79759d-72ec-45cd-b4ba-a715ec0202b1"
                }}
                style={styles.ImageBackground_119_3183}
              />
              <View style={styles.View_119_3184}>
                <Text style={styles.Text_119_3184}>Retira tu adeanto</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec838600-2ba3-43ab-9c2e-cb8d893108af"
              }}
              style={styles.ImageBackground_119_3225}
            />
            <View style={styles.View_119_3185}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0431900-84ba-4614-9188-03e4f9e7a071"
                }}
                style={styles.ImageBackground_119_3186}
              />
              <View style={styles.View_119_3187}>
                <Text style={styles.Text_119_3187}>Recarga tu celular</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2537ae34-c37f-4c1d-9a7f-7bc9edc0ba21"
              }}
              style={styles.ImageBackground_119_3227}
            />
            <View style={styles.View_119_3188}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ed46817-06c4-403e-81a7-b4c9d9141eb4"
                }}
                style={styles.ImageBackground_119_3189}
              />
              <View style={styles.View_119_3190}>
                <Text style={styles.Text_119_3190}>Paga tus servicios</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e116011d-138c-4f89-93fc-eb7da6971576"
              }}
              style={styles.ImageBackground_119_3228}
            />
            <View style={styles.View_119_3191}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d9bb29c-6394-4cf2-95fa-3c8d753447b0"
                }}
                style={styles.ImageBackground_119_3192}
              />
              <View style={styles.View_119_3193}>
                <Text style={styles.Text_119_3193}>recarga tu tag</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/698586ff-c34a-4b73-bce1-357560767652"
              }}
              style={styles.ImageBackground_119_3229}
            />
          </View>
          <View style={styles.View_119_3230}>
            <View style={styles.View_119_3231}>
              <View style={styles.View_119_3232}>
                <Text style={styles.Text_119_3232}>Prestaciones Empresa</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/216f8fff-ced4-4759-85ee-b3cf1a8e006e"
                }}
                style={styles.ImageBackground_119_3233}
              />
            </View>
            <View style={styles.View_119_3234}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ef3da1c-567a-494f-9f88-61b44273ea4b"
                }}
                style={styles.ImageBackground_119_3235}
              />
              <View style={styles.View_119_3236}>
                <Text style={styles.Text_119_3236}>seguro de vida</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0033da71-71fd-4ee7-af27-6ae80a010211"
              }}
              style={styles.ImageBackground_119_3237}
            />
            <View style={styles.View_119_3238}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e994bd60-07d2-422e-9a0c-1596fe67dc33"
                }}
                style={styles.ImageBackground_119_3239}
              />
              <View style={styles.View_119_3240}>
                <Text style={styles.Text_119_3240}>Check up</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ef0977c-51c7-4808-9e97-6c6952b2b4c9"
              }}
              style={styles.ImageBackground_119_3241}
            />
            <View style={styles.View_119_3242}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d47bac88-f691-49b3-ac60-78fc10373418"
                }}
                style={styles.ImageBackground_119_3243}
              />
              <View style={styles.View_119_3244}>
                <Text style={styles.Text_119_3244}>tarjeta médica</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/495562ef-feba-4465-9f49-c7b5bfa5e502"
              }}
              style={styles.ImageBackground_119_3245}
            />
            <View style={styles.View_119_3246}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48493722-9404-443b-8a65-5121fc796297"
                }}
                style={styles.ImageBackground_119_3247}
              />
              <View style={styles.View_119_3248}>
                <Text style={styles.Text_119_3248}>Seguro Covid 19</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38e7f46b-ae06-45b8-ae90-fbafe3c39dcf"
              }}
              style={styles.ImageBackground_119_3249}
            />
          </View>
          <View style={styles.View_119_3304}>
            <View style={styles.View_119_3305}>
              <View style={styles.View_119_3306}>
                <Text style={styles.Text_119_3306}>Bienestar Corporativo</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96f16e6a-d63b-4e28-ac60-d7291abf735b"
                }}
                style={styles.ImageBackground_119_3307}
              />
            </View>
            <View style={styles.View_119_3308}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06120956-4400-4035-8b30-6b888d580af8"
                }}
                style={styles.ImageBackground_119_3309}
              />
              <View style={styles.View_119_3310}>
                <Text style={styles.Text_119_3310}>nom035</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/117f4652-4279-49fd-a4ba-aea5c467a305"
              }}
              style={styles.ImageBackground_119_3311}
            />
            <View style={styles.View_119_3312}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80bf1198-5d04-4301-8fbe-4a7a9d14128c"
                }}
                style={styles.ImageBackground_119_3313}
              />
              <View style={styles.View_119_3314}>
                <Text style={styles.Text_119_3314}>asistencia médica</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8f5e505-804f-4191-b2d0-ed9645979905"
              }}
              style={styles.ImageBackground_119_3315}
            />
            <View style={styles.View_119_3316}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7be84ac7-211e-4217-a0b3-edd41c5f844a"
                }}
                style={styles.ImageBackground_119_3317}
              />
              <View style={styles.View_119_3318}>
                <Text style={styles.Text_119_3318}>mindfullness</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac762312-880b-400f-a71c-09d7f13eabec"
              }}
              style={styles.ImageBackground_119_3319}
            />
            <View style={styles.View_119_3320}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1c467f8-0a2a-4695-b841-d0655fc05adb"
                }}
                style={styles.ImageBackground_119_3321}
              />
              <View style={styles.View_119_3322}>
                <Text style={styles.Text_119_3322}>nutrición</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c621640-17f3-4c7b-b3a1-a550bc490f50"
              }}
              style={styles.ImageBackground_119_3323}
            />
          </View>
          <View style={styles.View_119_3355}>
            <View style={styles.View_119_3356}>
              <View style={styles.View_119_3357}>
                <Text style={styles.Text_119_3357}>Mi cuenta</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7da1541d-e939-4ac0-b659-bab7b1a70516"
                }}
                style={styles.ImageBackground_119_3358}
              />
            </View>
            <View style={styles.View_119_3359}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f04ff89-a00d-430e-8c89-df034acfc6c5"
                }}
                style={styles.ImageBackground_119_3360}
              />
              <View style={styles.View_119_3361}>
                <Text style={styles.Text_119_3361}>Ajustes</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85d94433-1930-473b-b294-fe9e30b627dc"
              }}
              style={styles.ImageBackground_119_3362}
            />
            <View style={styles.View_119_3367}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d9501ed-dba3-4d90-a220-3cb35c2fbe0a"
                }}
                style={styles.ImageBackground_119_3368}
              />
              <View style={styles.View_119_3369}>
                <Text style={styles.Text_119_3369}>Mis notificaciones</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/073fa3a9-53f8-4326-a471-9789a576979e"
              }}
              style={styles.ImageBackground_119_3370}
            />
            <View style={styles.View_119_3371}>
              <View style={styles.View_119_3372}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99a38ec6-0d1f-4375-a015-81c272121b2a"
                  }}
                  style={styles.ImageBackground_I119_3372_2_2327}
                />
              </View>
              <View style={styles.View_119_3373}>
                <Text style={styles.Text_119_3373}>Mis movimientos</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6927197-c93f-444d-a18a-dc39c8fef712"
              }}
              style={styles.ImageBackground_119_3374}
            />
            <View style={styles.View_119_3363}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/888d7edd-aa6c-4b64-a8cf-5fc12599da0f"
                }}
                style={styles.ImageBackground_119_3364}
              />
              <View style={styles.View_119_3365}>
                <Text style={styles.Text_119_3365}>Compartir está App</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b609f6e-9771-410d-8bb4-e2190082870a"
              }}
              style={styles.ImageBackground_119_3366}
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
  View_119_2746: {
    width: wp("104%"),
    minWidth: wp("104%"),
    height: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_119_2637: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 126, 129, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 0
  },
  View_119_2804: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("127%"),
    minHeight: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%"),
    borderColor: "rgba(0, 126, 129, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 0
  },
  View_119_2748: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_2748_41_7075: {
    flexGrow: 1,
    width: wp("67%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I119_2748_41_7075_41_7017: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I119_2748_41_7075_41_7018: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_2748_41_7075_41_7018_41_5823: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I119_2748_41_7075_41_7018_41_5799: {
    width: wp("43%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I119_2748_41_7075_41_7018_41_5804: {
    width: wp("36%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_119_3443: {
    flexGrow: 1,
    width: wp("74%"),
    height: hp("108%"),
    minHeight: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_119_3178: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_3179: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_3180: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_119_3180: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11.30356502532959,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2860713005065918,
    textTransform: "uppercase"
  },
  ImageBackground_119_3181: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  View_119_3182: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_119_3183: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_119_3184: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_119_3184: {
    color: "rgba(93, 98, 112, 1)",
    fontSize: 10.260198593139648,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6130099296569824,
    textTransform: "uppercase"
  },
  ImageBackground_119_3225: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%")
  },
  View_119_3185: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_119_3186: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_119_3187: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_119_3187: {
    color: "rgba(93, 98, 112, 1)",
    fontSize: 10.260198593139648,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6130099296569824,
    textTransform: "uppercase"
  },
  ImageBackground_119_3227: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  View_119_3188: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_119_3189: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_119_3190: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_119_3190: {
    color: "rgba(93, 98, 112, 1)",
    fontSize: 10.260198593139648,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6130099296569824,
    textTransform: "uppercase"
  },
  ImageBackground_119_3228: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%")
  },
  View_119_3191: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_119_3192: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_119_3193: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_119_3193: {
    color: "rgba(93, 98, 112, 1)",
    fontSize: 10.260198593139648,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6130099296569824,
    textTransform: "uppercase"
  },
  ImageBackground_119_3229: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  View_119_3230: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_3231: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_3232: {
    width: wp("54%"),
    minWidth: wp("54%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_119_3232: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11.30356502532959,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2860713005065918,
    textTransform: "uppercase"
  },
  ImageBackground_119_3233: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  View_119_3234: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_119_3235: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_119_3236: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_119_3236: {
    color: "rgba(93, 98, 112, 1)",
    fontSize: 10.260198593139648,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6130099296569824,
    textTransform: "uppercase"
  },
  ImageBackground_119_3237: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%")
  },
  View_119_3238: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_119_3239: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_119_3240: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_119_3240: {
    color: "rgba(93, 98, 112, 1)",
    fontSize: 10.260198593139648,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6130099296569824,
    textTransform: "uppercase"
  },
  ImageBackground_119_3241: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  View_119_3242: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_119_3243: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_119_3244: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_119_3244: {
    color: "rgba(93, 98, 112, 1)",
    fontSize: 10.260198593139648,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6130099296569824,
    textTransform: "uppercase"
  },
  ImageBackground_119_3245: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%")
  },
  View_119_3246: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_119_3247: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_119_3248: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_119_3248: {
    color: "rgba(93, 98, 112, 1)",
    fontSize: 10.260198593139648,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6130099296569824,
    textTransform: "uppercase"
  },
  ImageBackground_119_3249: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  View_119_3304: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_3305: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_3306: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_119_3306: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11.30356502532959,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2860713005065918,
    textTransform: "uppercase"
  },
  ImageBackground_119_3307: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  View_119_3308: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_119_3309: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_119_3310: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_119_3310: {
    color: "rgba(93, 98, 112, 1)",
    fontSize: 10.260198593139648,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6130099296569824,
    textTransform: "uppercase"
  },
  ImageBackground_119_3311: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%")
  },
  View_119_3312: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_119_3313: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_119_3314: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_119_3314: {
    color: "rgba(93, 98, 112, 1)",
    fontSize: 10.260198593139648,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6130099296569824,
    textTransform: "uppercase"
  },
  ImageBackground_119_3315: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  View_119_3316: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_119_3317: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_119_3318: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_119_3318: {
    color: "rgba(93, 98, 112, 1)",
    fontSize: 10.260198593139648,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6130099296569824,
    textTransform: "uppercase"
  },
  ImageBackground_119_3319: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%")
  },
  View_119_3320: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_119_3321: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_119_3322: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_119_3322: {
    color: "rgba(93, 98, 112, 1)",
    fontSize: 10.260198593139648,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6130099296569824,
    textTransform: "uppercase"
  },
  ImageBackground_119_3323: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  View_119_3355: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_3356: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_3357: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_119_3357: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11.30356502532959,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2860713005065918,
    textTransform: "uppercase"
  },
  ImageBackground_119_3358: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  View_119_3359: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_119_3360: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_119_3361: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_119_3361: {
    color: "rgba(93, 98, 112, 1)",
    fontSize: 10.260198593139648,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6130099296569824,
    textTransform: "uppercase"
  },
  ImageBackground_119_3362: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%")
  },
  View_119_3367: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_119_3368: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_119_3369: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_119_3369: {
    color: "rgba(93, 98, 112, 1)",
    fontSize: 10.260198593139648,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6130099296569824,
    textTransform: "uppercase"
  },
  ImageBackground_119_3370: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  View_119_3371: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_3372: {
    width: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I119_3372_2_2327: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_119_3373: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_119_3373: {
    color: "rgba(93, 98, 112, 1)",
    fontSize: 10.260198593139648,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6130099296569824,
    textTransform: "uppercase"
  },
  ImageBackground_119_3374: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%")
  },
  View_119_3363: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_119_3364: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_119_3365: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_119_3365: {
    color: "rgba(93, 98, 112, 1)",
    fontSize: 10.260198593139648,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6130099296569824,
    textTransform: "uppercase"
  },
  ImageBackground_119_3366: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
