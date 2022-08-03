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
      <View style={styles.View_113_3525}>
        <View style={styles.View_119_4205}>
          <View style={styles.View_113_3523}>
            <View style={styles.View_113_3183}>
              <View style={styles.View_113_3420}>
                <View style={styles.View_113_3421}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9bb0dc3-fb6e-483b-b47f-855e141ced41"
                    }}
                    style={styles.ImageBackground_113_3422}
                  />
                  <View style={styles.View_113_3423}>
                    <Text style={styles.Text_113_3423}>
                      Notificación success
                    </Text>
                  </View>
                </View>
                <View style={styles.View_113_3424}>
                  <View style={styles.View_113_3425}>
                    <Text style={styles.Text_113_3425}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ligula et hac pretium lectus. Dignissim ut diam volutpat
                      hendrerit nunc, in libero. Aliquam fermentum venenatis
                      erat viverra. Sit lectus id urna, aliquam ultrices donec.
                      Urna, amet faucibus sed egestas sit urna, nunc. Metus,
                      ultricies sit nunc, sit massa pretium.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_113_3440}>
                <View style={styles.View_113_3441}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73381512-0298-4de5-9472-1fc2e5d07e1b"
                    }}
                    style={styles.ImageBackground_113_3442}
                  />
                  <View style={styles.View_113_3443}>
                    <Text style={styles.Text_113_3443}>
                      Notificación Warning
                    </Text>
                  </View>
                </View>
                <View style={styles.View_113_3444}>
                  <View style={styles.View_113_3445}>
                    <Text style={styles.Text_113_3445}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ligula et hac pretium lectus. Dignissim ut diam volutpat
                      hendrerit nunc, in libero. Aliquam fermentum venenatis
                      erat viverra. Sit lectus id urna, aliquam ultrices donec.
                      Urna, amet faucibus sed egestas sit urna, nunc. Metus,
                      ultricies sit nunc, sit massa pretium.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_113_3461}>
                <View style={styles.View_113_3462}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ec40709-4d3b-4057-b8d1-b1c7b1ff5d02"
                    }}
                    style={styles.ImageBackground_113_3463}
                  />
                  <View style={styles.View_113_3464}>
                    <Text style={styles.Text_113_3464}>
                      Notificación Danger
                    </Text>
                  </View>
                </View>
                <View style={styles.View_113_3465}>
                  <View style={styles.View_113_3466}>
                    <Text style={styles.Text_113_3466}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ligula et hac pretium lectus. Dignissim ut diam volutpat
                      hendrerit nunc, in libero. Aliquam fermentum venenatis
                      erat viverra. Sit lectus id urna, aliquam ultrices donec.
                      Urna, amet faucibus sed egestas sit urna, nunc. Metus,
                      ultricies sit nunc, sit massa pretium.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_113_3471}>
                <View style={styles.View_113_3472}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9337b92-ebdd-42d1-a119-2adef3eefadf"
                    }}
                    style={styles.ImageBackground_113_3473}
                  />
                  <View style={styles.View_113_3474}>
                    <Text style={styles.Text_113_3474}>Notificación GRAY</Text>
                  </View>
                </View>
                <View style={styles.View_113_3475}>
                  <View style={styles.View_113_3476}>
                    <Text style={styles.Text_113_3476}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ligula et hac pretium lectus. Dignissim ut diam volutpat
                      hendrerit nunc, in libero. Aliquam fermentum venenatis
                      erat viverra. Sit lectus id urna, aliquam ultrices donec.
                      Urna, amet faucibus sed egestas sit urna, nunc. Metus,
                      ultricies sit nunc, sit massa pretium.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_113_3483}>
                <View style={styles.View_113_3484}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3686d1d-1cfa-4235-aa82-8c85367d6081"
                    }}
                    style={styles.ImageBackground_113_3485}
                  />
                  <View style={styles.View_113_3486}>
                    <Text style={styles.Text_113_3486}>
                      Notificación success
                    </Text>
                  </View>
                </View>
                <View style={styles.View_113_3487}>
                  <View style={styles.View_113_3488}>
                    <Text style={styles.Text_113_3488}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ligula et hac pretium lectus. Dignissim ut diam volutpat
                      hendrerit nunc, in libero. Aliquam fermentum venenatis
                      erat viverra. Sit lectus id urna, aliquam ultrices donec.
                      Urna, amet faucibus sed egestas sit urna, nunc. Metus,
                      ultricies sit nunc, sit massa pretium.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_113_3489}>
                <View style={styles.View_113_3490}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1affc836-4995-4f36-b51a-bec0f709282f"
                    }}
                    style={styles.ImageBackground_113_3491}
                  />
                  <View style={styles.View_113_3492}>
                    <Text style={styles.Text_113_3492}>
                      Notificación Warning
                    </Text>
                  </View>
                </View>
                <View style={styles.View_113_3493}>
                  <View style={styles.View_113_3494}>
                    <Text style={styles.Text_113_3494}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ligula et hac pretium lectus. Dignissim ut diam volutpat
                      hendrerit nunc, in libero. Aliquam fermentum venenatis
                      erat viverra. Sit lectus id urna, aliquam ultrices donec.
                      Urna, amet faucibus sed egestas sit urna, nunc. Metus,
                      ultricies sit nunc, sit massa pretium.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_113_3495}>
                <View style={styles.View_113_3496}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f76afa2f-8a76-49fc-bdf5-ee0fb613c75a"
                    }}
                    style={styles.ImageBackground_113_3497}
                  />
                  <View style={styles.View_113_3498}>
                    <Text style={styles.Text_113_3498}>
                      Notificación Danger
                    </Text>
                  </View>
                </View>
                <View style={styles.View_113_3499}>
                  <View style={styles.View_113_3500}>
                    <Text style={styles.Text_113_3500}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ligula et hac pretium lectus. Dignissim ut diam volutpat
                      hendrerit nunc, in libero. Aliquam fermentum venenatis
                      erat viverra. Sit lectus id urna, aliquam ultrices donec.
                      Urna, amet faucibus sed egestas sit urna, nunc. Metus,
                      ultricies sit nunc, sit massa pretium.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_113_3501}>
                <View style={styles.View_113_3502}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b09a40bb-076d-4258-91a3-979dc57a9c25"
                    }}
                    style={styles.ImageBackground_113_3503}
                  />
                  <View style={styles.View_113_3504}>
                    <Text style={styles.Text_113_3504}>Notificación GRAY</Text>
                  </View>
                </View>
                <View style={styles.View_113_3505}>
                  <View style={styles.View_113_3506}>
                    <Text style={styles.Text_113_3506}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ligula et hac pretium lectus. Dignissim ut diam volutpat
                      hendrerit nunc, in libero. Aliquam fermentum venenatis
                      erat viverra. Sit lectus id urna, aliquam ultrices donec.
                      Urna, amet faucibus sed egestas sit urna, nunc. Metus,
                      ultricies sit nunc, sit massa pretium.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_113_3177}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a768ddd1-9e76-4ba7-a083-c65b7cd23636"
            }}
            style={styles.ImageBackground_113_3178}
          />
          <View style={styles.View_113_3179}>
            <Text style={styles.Text_113_3179}>Notificaciónes</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e55f889c-01d7-4750-bf46-c6775015a145"
        }}
        style={styles.ImageBackground_113_3686}
      />
      <View style={styles.View_113_3687}>
        <View style={styles.View_I113_3687_46_3649}>
          <View style={styles.View_I113_3687_46_3649_44_2883}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec168922-2b30-4296-a83d-bf234f34163d"
              }}
              style={styles.ImageBackground_I113_3687_46_3649_44_2883_41_7364}
            />
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I113_3687_46_3649_102_2850}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("151_2674"))
            }
          >
            <Text style={styles.Text_I113_3687_46_3649_102_2850}>
              Empresa ACME
            </Text>
          </TouchableOpacity>
          <View style={styles.View_I113_3687_46_3649_44_2885}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85c405fd-e877-4ab3-8831-b6f4004c2866"
              }}
              style={styles.ImageBackground_I113_3687_46_3649_44_2885_41_7286}
            />
            <View style={styles.View_I113_3687_46_3649_44_2885_41_7291}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e09973f7-a92f-4b18-a4a5-db409e78cb21"
                }}
                style={styles.ImageBackground_I113_3687_46_3649_44_2885_41_7284}
              />
              <View style={styles.View_I113_3687_46_3649_44_2885_41_7285}>
                <Text style={styles.Text_I113_3687_46_3649_44_2885_41_7285}>
                  10
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_113_3688}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I113_3688_64_3284}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("151_2674"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/809e8d08-87c3-432d-9a4c-384e5df9e69e"
            }}
            style={styles.ImageBackground_I113_3688_64_3285}
          />
          <View style={styles.View_I113_3688_64_3286}>
            <Text style={styles.Text_I113_3688_64_3286}>inicio</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I113_3688_64_3287}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("104_3287"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/282984da-a43e-4139-b25c-247fd9955e25"
            }}
            style={styles.ImageBackground_I113_3688_64_3288}
          />
          <View style={styles.View_I113_3688_64_3289}>
            <Text style={styles.Text_I113_3688_64_3289}>Módulos</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I113_3688_64_3290}>
          <View style={styles.View_I113_3688_64_3291}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb08459c-7d5e-4c05-8065-065d2a616745"
              }}
              style={styles.ImageBackground_I113_3688_64_3291_2_2327}
            />
          </View>
          <View style={styles.View_I113_3688_64_3292}>
            <Text style={styles.Text_I113_3688_64_3292}>movimientos</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I113_3688_64_3293}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("20_1848"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf8e1e9f-4588-4e82-9cdc-ea8de797f8ca"
            }}
            style={styles.ImageBackground_I113_3688_64_3294}
          />
          <View style={styles.View_I113_3688_64_3295}>
            <Text style={styles.Text_I113_3688_64_3295}>mi cuenta</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("127%") },
  View_113_3525: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_4205: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_113_3523: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("142%"),
    minHeight: hp("142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_3183: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("142%"),
    minHeight: hp("142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_113_3420: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_3421: {
    width: wp("91%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(171, 217, 188, 1)"
  },
  ImageBackground_113_3422: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_113_3423: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_113_3423: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "uppercase"
  },
  View_113_3424: {
    width: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(243, 250, 246, 1)",
    overflow: "hidden"
  },
  View_113_3425: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_113_3425: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_113_3440: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_3441: {
    width: wp("91%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 220, 129, 1)"
  },
  ImageBackground_113_3442: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_113_3443: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_113_3443: {
    color: "rgba(194, 121, 11, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "uppercase"
  },
  View_113_3444: {
    width: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 250, 236, 1)",
    overflow: "hidden"
  },
  View_113_3445: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_113_3445: {
    color: "rgba(194, 121, 11, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_113_3461: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("62%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_3462: {
    width: wp("91%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 164, 160, 1)"
  },
  ImageBackground_113_3463: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_113_3464: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_113_3464: {
    color: "rgba(230, 73, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "uppercase"
  },
  View_113_3465: {
    width: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 244, 243, 1)",
    overflow: "hidden"
  },
  View_113_3466: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_113_3466: {
    color: "rgba(194, 24, 20, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_113_3471: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("91%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_3472: {
    width: wp("91%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(212, 220, 225, 1)"
  },
  ImageBackground_113_3473: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_113_3474: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_113_3474: {
    color: "rgba(98, 108, 123, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "uppercase"
  },
  View_113_3475: {
    width: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(241, 243, 244, 1)",
    overflow: "hidden"
  },
  View_113_3476: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_113_3476: {
    color: "rgba(98, 108, 123, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_113_3483: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("120%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_3484: {
    width: wp("91%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(171, 217, 188, 1)"
  },
  ImageBackground_113_3485: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_113_3486: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_113_3486: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "uppercase"
  },
  View_113_3487: {
    width: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(243, 250, 246, 1)",
    overflow: "hidden"
  },
  View_113_3488: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_113_3488: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_113_3489: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("150%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_3490: {
    width: wp("91%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 220, 129, 1)"
  },
  ImageBackground_113_3491: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_113_3492: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_113_3492: {
    color: "rgba(194, 121, 11, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "uppercase"
  },
  View_113_3493: {
    width: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 250, 236, 1)",
    overflow: "hidden"
  },
  View_113_3494: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_113_3494: {
    color: "rgba(194, 121, 11, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_113_3495: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("179%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_3496: {
    width: wp("91%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 164, 160, 1)"
  },
  ImageBackground_113_3497: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_113_3498: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_113_3498: {
    color: "rgba(230, 73, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "uppercase"
  },
  View_113_3499: {
    width: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 244, 243, 1)",
    overflow: "hidden"
  },
  View_113_3500: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_113_3500: {
    color: "rgba(194, 24, 20, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_113_3501: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("208%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_3502: {
    width: wp("91%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(212, 220, 225, 1)"
  },
  ImageBackground_113_3503: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_113_3504: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_113_3504: {
    color: "rgba(98, 108, 123, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "uppercase"
  },
  View_113_3505: {
    width: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(241, 243, 244, 1)",
    overflow: "hidden"
  },
  View_113_3506: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_113_3506: {
    color: "rgba(98, 108, 123, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_113_3177: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(74, 165, 152, 1)"
  },
  ImageBackground_113_3178: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_113_3179: {
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
  Text_113_3179: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.301204681396484,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3860240936279297,
    textTransform: "uppercase"
  },
  ImageBackground_113_3686: {
    width: wp("100%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_113_3687: {
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
  View_I113_3687_46_3649: {
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
  View_I113_3687_46_3649_44_2883: {
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
  ImageBackground_I113_3687_46_3649_44_2883_41_7364: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_I113_3687_46_3649_102_2850: {
    flexGrow: 1,
    width: wp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I113_3687_46_3649_102_2850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_I113_3687_46_3649_44_2885: {
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
  ImageBackground_I113_3687_46_3649_44_2885_41_7286: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I113_3687_46_3649_44_2885_41_7291: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  ImageBackground_I113_3687_46_3649_44_2885_41_7284: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I113_3687_46_3649_44_2885_41_7285: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I113_3687_46_3649_44_2885_41_7285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_3688: {
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
  TouchableOpacity_I113_3688_64_3284: {
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
  ImageBackground_I113_3688_64_3285: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I113_3688_64_3286: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I113_3688_64_3286: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I113_3688_64_3287: {
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
  ImageBackground_I113_3688_64_3288: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I113_3688_64_3289: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I113_3688_64_3289: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  View_I113_3688_64_3290: {
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
  View_I113_3688_64_3291: {
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
  ImageBackground_I113_3688_64_3291_2_2327: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I113_3688_64_3292: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I113_3688_64_3292: {
    color: "rgba(208, 174, 124, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I113_3688_64_3293: {
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
  ImageBackground_I113_3688_64_3294: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I113_3688_64_3295: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I113_3688_64_3295: {
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
