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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2d71a4f-d4a3-4406-b923-5dc1d11ebdca"
        }}
        style={styles.ImageBackground_104_3165}
      />
      <View style={styles.View_104_2509}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07c7deed-2a1b-4013-9b02-b68ba896b0d7"
          }}
          style={styles.ImageBackground_104_2510}
        />
        <View style={styles.View_104_2511}>
          <Text style={styles.Text_104_2511}>Seleccióna tu proveedor</Text>
        </View>
      </View>
      <View style={styles.View_104_2623}>
        <View style={styles.View_104_2512}>
          <View style={styles.View_104_2566}>
            <TouchableOpacity
              style={styles.TouchableOpacity_104_2567}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("104_3504"))
              }
            >
              <View style={styles.View_104_2568}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cfefad5-1db6-4682-a4a2-0510a96768fa"
                  }}
                  style={styles.ImageBackground_113_4271}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.View_104_2570}>
              <View style={styles.View_104_2571}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f1d04b4-dbd2-4944-a53b-859fd1d8e05f"
                  }}
                  style={styles.ImageBackground_113_4270}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_113_4261}>
            <View style={styles.View_113_4262}>
              <View style={styles.View_113_4263}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9feb2a4e-fa34-4e71-9168-7c839a1c62ce"
                  }}
                  style={styles.ImageBackground_113_4264}
                />
              </View>
            </View>
            <View style={styles.View_113_4265}>
              <View style={styles.View_113_4266}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/803ce23d-fd35-44d0-bd5e-d5b2cde5879d"
                  }}
                  style={styles.ImageBackground_113_4267}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_104_2573}>
            <View style={styles.View_104_2574}>
              <View style={styles.View_104_2575}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5e4bfe4-0db6-435a-8fdd-806d00927d47"
                  }}
                  style={styles.ImageBackground_102_4321}
                />
              </View>
            </View>
            <View style={styles.View_104_2577}>
              <View style={styles.View_104_2578}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce6b8055-ffac-42d5-8775-f488a15a1e9c"
                  }}
                  style={styles.ImageBackground_104_2309}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_104_2580}>
            <View style={styles.View_104_2581}>
              <View style={styles.View_104_2582}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08057906-c7c7-4630-94f1-b787519672be"
                  }}
                  style={styles.ImageBackground_102_4318}
                />
              </View>
            </View>
            <View style={styles.View_104_2584}>
              <View style={styles.View_104_2585}>
                <View style={styles.View_104_2565}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84aff025-4a60-4766-9f07-4d40e8837852"
                    }}
                    style={styles.ImageBackground_102_4351}
                  />
                  <View style={styles.View_102_4352}>
                    <Text style={styles.Text_102_4352}>DATOS</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_104_2587}>
            <View style={styles.View_104_2588}>
              <View style={styles.View_104_2589}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d737c7ae-3120-4965-bcac-d487a6bcd461"
                  }}
                  style={styles.ImageBackground_102_4333}
                />
              </View>
            </View>
            <View style={styles.View_104_2591}>
              <View style={styles.View_104_2592}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec313d35-9196-4763-88f3-de3c099bc8b3"
                  }}
                  style={styles.ImageBackground_104_2507}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_104_2596}>
            <View style={styles.View_104_2597}>
              <View style={styles.View_104_2598}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd1caeb7-95df-4594-aad5-c4cd13adc527"
                  }}
                  style={styles.ImageBackground_102_4327}
                />
              </View>
            </View>
            <View style={styles.View_104_2600}>
              <View style={styles.View_104_2601}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6464d06d-f8cb-4e23-99a6-e8ba02697b1e"
                  }}
                  style={styles.ImageBackground_102_4358}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_104_2605}>
            <View style={styles.View_104_2606}>
              <View style={styles.View_104_2607}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a042c7a-5dfc-41e2-9f6a-528fa817d4d5"
                  }}
                  style={styles.ImageBackground_104_2508}
                />
              </View>
            </View>
            <View style={styles.View_104_2609}>
              <View style={styles.View_104_2610}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e90401e7-b711-47f6-a146-d73410908f13"
                  }}
                  style={styles.ImageBackground_102_4324}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_104_2612}>
            <View style={styles.View_104_2613}>
              <View style={styles.View_104_2614}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1014d945-47eb-4f00-9d45-b1bc39253d78"
                  }}
                  style={styles.ImageBackground_102_4339}
                />
              </View>
            </View>
            <View style={styles.View_104_2616}>
              <View style={styles.View_104_2617}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/789d494b-bb0c-4eef-bd24-9b15f5d4b268"
                  }}
                  style={styles.ImageBackground_102_4361}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_102_2406}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I102_2406_64_3252}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("151_2674"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b4154dc-cc66-4626-a5de-5fce4cd83453"
            }}
            style={styles.ImageBackground_I102_2406_64_3253}
          />
          <View style={styles.View_I102_2406_64_3254}>
            <Text style={styles.Text_I102_2406_64_3254}>inicio</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I102_2406_64_3255}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("104_3287"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1344b49c-4fa7-4049-ad6c-a20bc3753994"
            }}
            style={styles.ImageBackground_I102_2406_64_3256}
          />
          <View style={styles.View_I102_2406_64_3257}>
            <Text style={styles.Text_I102_2406_64_3257}>Módulos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I102_2406_64_3258}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("104_4354"))
          }
        >
          <View style={styles.View_I102_2406_64_3259}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d2b2c5b-29ec-4f6b-a6c4-3a29fba00d43"
              }}
              style={styles.ImageBackground_I102_2406_64_3259_2_2327}
            />
          </View>
          <View style={styles.View_I102_2406_64_3260}>
            <Text style={styles.Text_I102_2406_64_3260}>movimientos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I102_2406_64_3261}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("20_1848"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c73cb644-99e4-459b-b039-8f174fa4ac9e"
            }}
            style={styles.ImageBackground_I102_2406_64_3262}
          />
          <View style={styles.View_I102_2406_64_3263}>
            <Text style={styles.Text_I102_2406_64_3263}>mi cuenta</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_104_3166}>
        <View style={styles.View_I104_3166_46_3649}>
          <View style={styles.View_I104_3166_46_3649_44_2883}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c53fc79-d514-4e76-97ee-23f43174b268"
              }}
              style={styles.ImageBackground_I104_3166_46_3649_44_2883_41_7364}
            />
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I104_3166_46_3649_102_2850}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("151_2674"))
            }
          >
            <Text style={styles.Text_I104_3166_46_3649_102_2850}>
              Empresa ACME
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I104_3166_46_3649_44_2885}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("113_3533"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/352a3659-371a-4e30-b896-ce80702d4219"
              }}
              style={styles.ImageBackground_I104_3166_46_3649_44_2885_41_7286}
            />
            <View style={styles.View_I104_3166_46_3649_44_2885_41_7291}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/073149db-e50a-4cee-8bad-dd7263c1b157"
                }}
                style={styles.ImageBackground_I104_3166_46_3649_44_2885_41_7284}
              />
              <View style={styles.View_I104_3166_46_3649_44_2885_41_7285}>
                <Text style={styles.Text_I104_3166_46_3649_44_2885_41_7285}>
                  10
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("127%") },
  ImageBackground_104_3165: {
    width: wp("100%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_2509: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(74, 165, 152, 1)"
  },
  ImageBackground_104_2510: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_104_2511: {
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
  Text_104_2511: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.301204681396484,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3860240936279297,
    textTransform: "uppercase"
  },
  View_104_2623: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("106%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_104_2512: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("190%"),
    minHeight: hp("190%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 250, 251, 1)",
    overflow: "hidden"
  },
  View_104_2566: {
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
  TouchableOpacity_104_2567: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_2568: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_113_4271: {
    width: wp("35%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  View_104_2570: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_2571: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_113_4270: {
    width: wp("35%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  View_113_4261: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_4262: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_113_4263: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_113_4264: {
    width: wp("35%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  View_113_4265: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_113_4266: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_113_4267: {
    width: wp("35%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  View_104_2573: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_2574: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_2575: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_102_4321: {
    width: wp("35%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  View_104_2577: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_2578: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_104_2309: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  View_104_2580: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_2581: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_2582: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_102_4318: {
    width: wp("35%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  View_104_2584: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_2585: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_2565: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  ImageBackground_102_4351: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_102_4352: {
    width: wp("20%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_102_4352: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_104_2587: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("84%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_2588: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_2589: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_102_4333: {
    width: wp("35%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  View_104_2591: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_2592: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_104_2507: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_104_2596: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_2597: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_2598: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_102_4327: {
    width: wp("35%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  View_104_2600: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_2601: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_102_4358: {
    width: wp("35%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  View_104_2605: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_2606: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_2607: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_104_2508: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_104_2609: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_2610: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_102_4324: {
    width: wp("35%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  View_104_2612: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("146%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_104_2613: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_2614: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_102_4339: {
    width: wp("35%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  View_104_2616: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_104_2617: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_102_4361: {
    width: wp("35%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  View_102_2406: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_I102_2406_64_3252: {
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
  ImageBackground_I102_2406_64_3253: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I102_2406_64_3254: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I102_2406_64_3254: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I102_2406_64_3255: {
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
  ImageBackground_I102_2406_64_3256: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I102_2406_64_3257: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I102_2406_64_3257: {
    color: "rgba(208, 174, 124, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I102_2406_64_3258: {
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
  View_I102_2406_64_3259: {
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
  ImageBackground_I102_2406_64_3259_2_2327: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I102_2406_64_3260: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I102_2406_64_3260: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I102_2406_64_3261: {
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
  ImageBackground_I102_2406_64_3262: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I102_2406_64_3263: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I102_2406_64_3263: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  View_104_3166: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I104_3166_46_3649: {
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
  View_I104_3166_46_3649_44_2883: {
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
  ImageBackground_I104_3166_46_3649_44_2883_41_7364: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_I104_3166_46_3649_102_2850: {
    flexGrow: 1,
    width: wp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I104_3166_46_3649_102_2850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  TouchableOpacity_I104_3166_46_3649_44_2885: {
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
  ImageBackground_I104_3166_46_3649_44_2885_41_7286: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I104_3166_46_3649_44_2885_41_7291: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  ImageBackground_I104_3166_46_3649_44_2885_41_7284: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I104_3166_46_3649_44_2885_41_7285: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I104_3166_46_3649_44_2885_41_7285: {
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
