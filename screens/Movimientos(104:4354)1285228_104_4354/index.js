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
      <View style={styles.View_151_4351}>
        <View style={styles.View_151_4352}>
          <View style={styles.View_151_4566}>
            <View style={styles.View_151_4579}>
              <View style={styles.View_151_4580}>
                <View style={styles.View_151_4581}>
                  <View style={styles.View_151_4582}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba0a00c8-f49f-48ec-a545-398c05dba0a2"
                      }}
                      style={styles.ImageBackground_151_4583}
                    />
                  </View>
                </View>
                <View style={styles.View_151_4584}>
                  <View style={styles.View_151_4585}>
                    <View style={styles.View_151_4586}>
                      <Text style={styles.Text_151_4586}>Recarga telcel</Text>
                    </View>
                    <View style={styles.View_151_4587}>
                      <Text style={styles.Text_151_4587}>
                        Fecha proveedor teléfono Folio
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_151_4588}>
                    <View style={styles.View_151_4589}>
                      <Text style={styles.Text_151_4589}>$ 100.00</Text>
                    </View>
                    <View style={styles.View_151_4590}>
                      <Text style={styles.Text_151_4590}>
                        10/02/2022 telcel 777 987 4561 328752
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_4567}>
              <View style={styles.View_151_4568}>
                <View style={styles.View_151_4569}>
                  <View style={styles.View_151_4570}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d931e6fe-0dc3-47ff-b3b3-82d8f8dbd424"
                      }}
                      style={styles.ImageBackground_151_4571}
                    />
                  </View>
                </View>
                <View style={styles.View_151_4572}>
                  <View style={styles.View_151_4573}>
                    <View style={styles.View_151_4574}>
                      <Text style={styles.Text_151_4574}>
                        Adelanto de nómina
                      </Text>
                    </View>
                    <View style={styles.View_151_4575}>
                      <Text style={styles.Text_151_4575}>
                        Fecha Beneficiario Cuenta Folio
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_151_4576}>
                    <View style={styles.View_151_4577}>
                      <Text style={styles.Text_151_4577}>$ 500.00</Text>
                    </View>
                    <View style={styles.View_151_4578}>
                      <Text style={styles.Text_151_4578}>
                        10/02/2022 Juan perez mtz 1450 8965 2475 0078 998752
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_4591}>
              <View style={styles.View_151_4592}>
                <View style={styles.View_151_4593}>
                  <View style={styles.View_151_4594}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5061b5f8-9da9-4da0-8fea-15c26e0d629c"
                      }}
                      style={styles.ImageBackground_151_4595}
                    />
                  </View>
                </View>
                <View style={styles.View_151_4596}>
                  <View style={styles.View_151_4597}>
                    <View style={styles.View_151_4598}>
                      <Text style={styles.Text_151_4598}>Pago Servicio</Text>
                    </View>
                    <View style={styles.View_151_4599}>
                      <Text style={styles.Text_151_4599}>
                        Fecha proveedor Num. Servicio Folio
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_151_4600}>
                    <View style={styles.View_151_4601}>
                      <Text style={styles.Text_151_4601}>$ 750.00</Text>
                    </View>
                    <View style={styles.View_151_4602}>
                      <Text style={styles.Text_151_4602}>
                        10/02/2022 CFE 332 458 789 23485
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_4603}>
              <View style={styles.View_151_4604}>
                <View style={styles.View_151_4605}>
                  <View style={styles.View_151_4606}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a050fcbc-d794-4b25-b655-64f2498dfa50"
                      }}
                      style={styles.ImageBackground_151_4607}
                    />
                  </View>
                </View>
                <View style={styles.View_151_4608}>
                  <View style={styles.View_151_4609}>
                    <View style={styles.View_151_4610}>
                      <Text style={styles.Text_151_4610}>Recarga TAG</Text>
                    </View>
                    <View style={styles.View_151_4611}>
                      <Text style={styles.Text_151_4611}>
                        Fecha proveedor Num. TAG Folio
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_151_4612}>
                    <View style={styles.View_151_4613}>
                      <Text style={styles.Text_151_4613}>$ 300.00</Text>
                    </View>
                    <View style={styles.View_151_4614}>
                      <Text style={styles.Text_151_4614}>
                        10/02/2022 televia 225 4567 4564 23485
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_151_4637}>
            <View style={styles.View_151_4638}>
              <View style={styles.View_151_4639}>
                <View style={styles.View_151_4640}>
                  <View style={styles.View_151_4641}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1217a1f1-9c86-45cb-833f-7f173272a7a5"
                      }}
                      style={styles.ImageBackground_151_4642}
                    />
                  </View>
                </View>
                <View style={styles.View_151_4643}>
                  <View style={styles.View_151_4644}>
                    <View style={styles.View_151_4645}>
                      <Text style={styles.Text_151_4645}>Recarga telcel</Text>
                    </View>
                    <View style={styles.View_151_4646}>
                      <Text style={styles.Text_151_4646}>
                        Fecha proveedor teléfono Folio
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_151_4647}>
                    <View style={styles.View_151_4648}>
                      <Text style={styles.Text_151_4648}>$ 100.00</Text>
                    </View>
                    <View style={styles.View_151_4649}>
                      <Text style={styles.Text_151_4649}>
                        10/02/2022 telcel 777 987 4561 328752
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_4650}>
              <View style={styles.View_151_4651}>
                <View style={styles.View_151_4652}>
                  <View style={styles.View_151_4653}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/352dfbb9-a71f-4ea2-b693-a56eeb4ed34f"
                      }}
                      style={styles.ImageBackground_151_4654}
                    />
                  </View>
                </View>
                <View style={styles.View_151_4655}>
                  <View style={styles.View_151_4656}>
                    <View style={styles.View_151_4657}>
                      <Text style={styles.Text_151_4657}>
                        Adelanto de nómina
                      </Text>
                    </View>
                    <View style={styles.View_151_4658}>
                      <Text style={styles.Text_151_4658}>
                        Fecha Beneficiario Cuenta Folio
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_151_4659}>
                    <View style={styles.View_151_4660}>
                      <Text style={styles.Text_151_4660}>$ 500.00</Text>
                    </View>
                    <View style={styles.View_151_4661}>
                      <Text style={styles.Text_151_4661}>
                        10/02/2022 Juan perez mtz 1450 8965 2475 0078 998752
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_4662}>
              <View style={styles.View_151_4663}>
                <View style={styles.View_151_4664}>
                  <View style={styles.View_151_4665}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/baaaf997-b999-4ec6-a9e8-2b6f4edbfd55"
                      }}
                      style={styles.ImageBackground_151_4666}
                    />
                  </View>
                </View>
                <View style={styles.View_151_4667}>
                  <View style={styles.View_151_4668}>
                    <View style={styles.View_151_4669}>
                      <Text style={styles.Text_151_4669}>Pago Servicio</Text>
                    </View>
                    <View style={styles.View_151_4670}>
                      <Text style={styles.Text_151_4670}>
                        Fecha proveedor Num. Servicio Folio
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_151_4671}>
                    <View style={styles.View_151_4672}>
                      <Text style={styles.Text_151_4672}>$ 750.00</Text>
                    </View>
                    <View style={styles.View_151_4673}>
                      <Text style={styles.Text_151_4673}>
                        10/02/2022 CFE 332 458 789 23485
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_4674}>
              <View style={styles.View_151_4675}>
                <View style={styles.View_151_4676}>
                  <View style={styles.View_151_4677}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cae57f16-e8b9-44a0-8498-9b5fc3d2adc9"
                      }}
                      style={styles.ImageBackground_151_4678}
                    />
                  </View>
                </View>
                <View style={styles.View_151_4679}>
                  <View style={styles.View_151_4680}>
                    <View style={styles.View_151_4681}>
                      <Text style={styles.Text_151_4681}>Recarga TAG</Text>
                    </View>
                    <View style={styles.View_151_4682}>
                      <Text style={styles.Text_151_4682}>
                        Fecha proveedor Num. TAG Folio
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_151_4683}>
                    <View style={styles.View_151_4684}>
                      <Text style={styles.Text_151_4684}>$ 300.00</Text>
                    </View>
                    <View style={styles.View_151_4685}>
                      <Text style={styles.Text_151_4685}>
                        10/02/2022 televia 225 4567 4564 23485
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_151_4708}>
            <View style={styles.View_151_4709}>
              <View style={styles.View_151_4710}>
                <View style={styles.View_151_4711}>
                  <View style={styles.View_151_4712}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55ae48a7-920d-473c-bf17-5a76141f975f"
                      }}
                      style={styles.ImageBackground_151_4713}
                    />
                  </View>
                </View>
                <View style={styles.View_151_4714}>
                  <View style={styles.View_151_4715}>
                    <View style={styles.View_151_4716}>
                      <Text style={styles.Text_151_4716}>Recarga telcel</Text>
                    </View>
                    <View style={styles.View_151_4717}>
                      <Text style={styles.Text_151_4717}>
                        Fecha proveedor teléfono Folio
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_151_4718}>
                    <View style={styles.View_151_4719}>
                      <Text style={styles.Text_151_4719}>$ 100.00</Text>
                    </View>
                    <View style={styles.View_151_4720}>
                      <Text style={styles.Text_151_4720}>
                        10/02/2022 telcel 777 987 4561 328752
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_4721}>
              <View style={styles.View_151_4722}>
                <View style={styles.View_151_4723}>
                  <View style={styles.View_151_4724}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49382941-2c54-425b-98ce-790281d16d7a"
                      }}
                      style={styles.ImageBackground_151_4725}
                    />
                  </View>
                </View>
                <View style={styles.View_151_4726}>
                  <View style={styles.View_151_4727}>
                    <View style={styles.View_151_4728}>
                      <Text style={styles.Text_151_4728}>
                        Adelanto de nómina
                      </Text>
                    </View>
                    <View style={styles.View_151_4729}>
                      <Text style={styles.Text_151_4729}>
                        Fecha Beneficiario Cuenta Folio
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_151_4730}>
                    <View style={styles.View_151_4731}>
                      <Text style={styles.Text_151_4731}>$ 500.00</Text>
                    </View>
                    <View style={styles.View_151_4732}>
                      <Text style={styles.Text_151_4732}>
                        10/02/2022 Juan perez mtz 1450 8965 2475 0078 998752
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_4733}>
              <View style={styles.View_151_4734}>
                <View style={styles.View_151_4735}>
                  <View style={styles.View_151_4736}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c582ba3a-9166-44f2-a20f-61c5cd316c14"
                      }}
                      style={styles.ImageBackground_151_4737}
                    />
                  </View>
                </View>
                <View style={styles.View_151_4738}>
                  <View style={styles.View_151_4739}>
                    <View style={styles.View_151_4740}>
                      <Text style={styles.Text_151_4740}>Pago Servicio</Text>
                    </View>
                    <View style={styles.View_151_4741}>
                      <Text style={styles.Text_151_4741}>
                        Fecha proveedor Num. Servicio Folio
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_151_4742}>
                    <View style={styles.View_151_4743}>
                      <Text style={styles.Text_151_4743}>$ 750.00</Text>
                    </View>
                    <View style={styles.View_151_4744}>
                      <Text style={styles.Text_151_4744}>
                        10/02/2022 CFE 332 458 789 23485
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_151_4745}>
              <View style={styles.View_151_4746}>
                <View style={styles.View_151_4747}>
                  <View style={styles.View_151_4748}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4699033d-fa5b-4da6-bb7e-98e2fd833498"
                      }}
                      style={styles.ImageBackground_151_4749}
                    />
                  </View>
                </View>
                <View style={styles.View_151_4750}>
                  <View style={styles.View_151_4751}>
                    <View style={styles.View_151_4752}>
                      <Text style={styles.Text_151_4752}>Recarga TAG</Text>
                    </View>
                    <View style={styles.View_151_4753}>
                      <Text style={styles.Text_151_4753}>
                        Fecha proveedor Num. TAG Folio
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_151_4754}>
                    <View style={styles.View_151_4755}>
                      <Text style={styles.Text_151_4755}>$ 300.00</Text>
                    </View>
                    <View style={styles.View_151_4756}>
                      <Text style={styles.Text_151_4756}>
                        10/02/2022 televia 225 4567 4564 23485
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_104_4581}>
        <View style={styles.View_104_4582}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c64d3964-de05-48c4-ba56-6281b31ed427"
            }}
            style={styles.ImageBackground_I104_4582_2_2327}
          />
        </View>
        <View style={styles.View_104_4583}>
          <Text style={styles.Text_104_4583}>MOVIMIENTOS DE TU CUENTA</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5451b1f-32b9-4549-80f6-1f03d46ecdb7"
        }}
        style={styles.ImageBackground_104_4423}
      />
      <View style={styles.View_104_4424}>
        <View style={styles.View_I104_4424_46_3649}>
          <View style={styles.View_I104_4424_46_3649_44_2883}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51db717a-b79a-4687-9234-dea64e069906"
              }}
              style={styles.ImageBackground_I104_4424_46_3649_44_2883_41_7364}
            />
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I104_4424_46_3649_102_2850}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("151_2674"))
            }
          >
            <Text style={styles.Text_I104_4424_46_3649_102_2850}>
              Empresa ACME
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I104_4424_46_3649_44_2885}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("113_3533"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef7428e9-4405-4d78-bc89-af44634f723e"
              }}
              style={styles.ImageBackground_I104_4424_46_3649_44_2885_41_7286}
            />
            <View style={styles.View_I104_4424_46_3649_44_2885_41_7291}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be70d18b-dac8-4a45-bfd8-10703fecaf53"
                }}
                style={styles.ImageBackground_I104_4424_46_3649_44_2885_41_7284}
              />
              <View style={styles.View_I104_4424_46_3649_44_2885_41_7285}>
                <Text style={styles.Text_I104_4424_46_3649_44_2885_41_7285}>
                  10
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_104_4878}>
        <View style={styles.View_104_4700}>
          <Text style={styles.Text_104_4700}>ENERO 2022</Text>
        </View>
        <View style={styles.View_112_2685}>
          <View style={styles.View_112_2609}>
            <View style={styles.View_112_2578}>
              <View style={styles.View_112_2579}>
                <Text style={styles.Text_112_2579}>Lun</Text>
              </View>
              <View style={styles.View_112_2580}>
                <Text style={styles.Text_112_2580}>04</Text>
              </View>
            </View>
            <View style={styles.View_112_2577}>
              <View style={styles.View_112_2575}>
                <Text style={styles.Text_112_2575}>mar</Text>
              </View>
              <View style={styles.View_112_2576}>
                <Text style={styles.Text_112_2576}>05</Text>
              </View>
            </View>
            <View style={styles.View_112_2581}>
              <View style={styles.View_112_2582}>
                <Text style={styles.Text_112_2582}>mie</Text>
              </View>
              <View style={styles.View_112_2583}>
                <Text style={styles.Text_112_2583}>06</Text>
              </View>
            </View>
            <View style={styles.View_112_2590}>
              <View style={styles.View_112_2591}>
                <Text style={styles.Text_112_2591}>jue</Text>
              </View>
              <View style={styles.View_112_2592}>
                <Text style={styles.Text_112_2592}>07</Text>
              </View>
            </View>
            <View style={styles.View_112_2593}>
              <View style={styles.View_112_2594}>
                <Text style={styles.Text_112_2594}>vie</Text>
              </View>
              <View style={styles.View_112_2595}>
                <Text style={styles.Text_112_2595}>08</Text>
              </View>
            </View>
            <View style={styles.View_112_2596}>
              <View style={styles.View_112_2597}>
                <Text style={styles.Text_112_2597}>sab</Text>
              </View>
              <View style={styles.View_112_2598}>
                <Text style={styles.Text_112_2598}>09</Text>
              </View>
            </View>
            <View style={styles.View_112_2599}>
              <View style={styles.View_112_2600}>
                <Text style={styles.Text_112_2600}>dom</Text>
              </View>
              <View style={styles.View_112_2601}>
                <Text style={styles.Text_112_2601}>10</Text>
              </View>
            </View>
            <View style={styles.View_112_2605}>
              <View style={styles.View_112_2606}>
                <Text style={styles.Text_112_2606}>Lun</Text>
              </View>
              <View style={styles.View_112_2607}>
                <Text style={styles.Text_112_2607}>11</Text>
              </View>
            </View>
            <View style={styles.View_112_2634}>
              <View style={styles.View_112_2635}>
                <Text style={styles.Text_112_2635}>mar</Text>
              </View>
              <View style={styles.View_112_2636}>
                <Text style={styles.Text_112_2636}>12</Text>
              </View>
            </View>
            <View style={styles.View_112_2655}>
              <View style={styles.View_112_2656}>
                <Text style={styles.Text_112_2656}>mie</Text>
              </View>
              <View style={styles.View_112_2657}>
                <Text style={styles.Text_112_2657}>13</Text>
              </View>
            </View>
            <View style={styles.View_112_2658}>
              <View style={styles.View_112_2659}>
                <Text style={styles.Text_112_2659}>jue</Text>
              </View>
              <View style={styles.View_112_2660}>
                <Text style={styles.Text_112_2660}>14</Text>
              </View>
            </View>
            <View style={styles.View_112_2661}>
              <View style={styles.View_112_2662}>
                <Text style={styles.Text_112_2662}>vie</Text>
              </View>
              <View style={styles.View_112_2663}>
                <Text style={styles.Text_112_2663}>15</Text>
              </View>
            </View>
            <View style={styles.View_112_2664}>
              <View style={styles.View_112_2665}>
                <Text style={styles.Text_112_2665}>sab</Text>
              </View>
              <View style={styles.View_112_2666}>
                <Text style={styles.Text_112_2666}>16</Text>
              </View>
            </View>
            <View style={styles.View_112_2667}>
              <View style={styles.View_112_2668}>
                <Text style={styles.Text_112_2668}>dom</Text>
              </View>
              <View style={styles.View_112_2669}>
                <Text style={styles.Text_112_2669}>17</Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eff22d44-c277-4312-8d5e-76ff2bc4a562"
            }}
            style={styles.ImageBackground_112_2671}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca857cb5-4121-4dc0-a1af-bb7760418805"
            }}
            style={styles.ImageBackground_112_2682}
          />
        </View>
      </View>
      <View style={styles.View_104_4425}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I104_4425_64_3284}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("151_2674"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7c99048-5161-4f75-9321-441cd7be05a5"
            }}
            style={styles.ImageBackground_I104_4425_64_3285}
          />
          <View style={styles.View_I104_4425_64_3286}>
            <Text style={styles.Text_I104_4425_64_3286}>inicio</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I104_4425_64_3287}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("104_3287"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f5327c8-5c52-4165-8727-12573438c405"
            }}
            style={styles.ImageBackground_I104_4425_64_3288}
          />
          <View style={styles.View_I104_4425_64_3289}>
            <Text style={styles.Text_I104_4425_64_3289}>Módulos</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I104_4425_64_3290}>
          <View style={styles.View_I104_4425_64_3291}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67fea7f7-f1bb-40e5-8c5b-e514a1f2f1f1"
              }}
              style={styles.ImageBackground_I104_4425_64_3291_2_2327}
            />
          </View>
          <View style={styles.View_I104_4425_64_3292}>
            <Text style={styles.Text_I104_4425_64_3292}>movimientos</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I104_4425_64_3293}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("20_1848"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15f826f2-c5e7-432e-8097-4c3ac0843202"
            }}
            style={styles.ImageBackground_I104_4425_64_3294}
          />
          <View style={styles.View_I104_4425_64_3295}>
            <Text style={styles.Text_I104_4425_64_3295}>mi cuenta</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("127%") },
  View_151_4351: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_151_4352: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("215%"),
    minHeight: hp("215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 250, 251, 1)",
    overflow: "hidden"
  },
  View_151_4566: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4579: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_151_4580: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4581: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_151_4582: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 224, 224, 1)"
  },
  ImageBackground_151_4583: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_151_4584: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("1%")
  },
  View_151_4585: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_4586: {
    width: wp("28%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4586: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4587: {
    width: wp("19%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4587: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4588: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%")
  },
  View_151_4589: {
    width: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4589: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4590: {
    width: wp("19%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4590: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4567: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_151_4568: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4569: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_151_4570: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 224, 224, 1)"
  },
  ImageBackground_151_4571: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_151_4572: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("1%")
  },
  View_151_4573: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_4574: {
    width: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4574: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4575: {
    width: wp("22%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4575: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4576: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  View_151_4577: {
    width: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4577: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4578: {
    width: wp("30%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4578: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4591: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_151_4592: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4593: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_151_4594: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 224, 224, 1)"
  },
  ImageBackground_151_4595: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_151_4596: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("1%")
  },
  View_151_4597: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_4598: {
    width: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4598: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4599: {
    width: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4599: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4600: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%")
  },
  View_151_4601: {
    width: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4601: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4602: {
    width: wp("18%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4602: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4603: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_151_4604: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4605: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_151_4606: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 224, 224, 1)"
  },
  ImageBackground_151_4607: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_151_4608: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("1%")
  },
  View_151_4609: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_4610: {
    width: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4610: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4611: {
    width: wp("19%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4611: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4612: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%")
  },
  View_151_4613: {
    width: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4613: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4614: {
    width: wp("21%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4614: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4637: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("73%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4638: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_151_4639: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4640: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_151_4641: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 224, 224, 1)"
  },
  ImageBackground_151_4642: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_151_4643: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("1%")
  },
  View_151_4644: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_4645: {
    width: wp("28%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4645: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4646: {
    width: wp("19%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4646: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4647: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%")
  },
  View_151_4648: {
    width: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4648: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4649: {
    width: wp("19%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4649: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4650: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_151_4651: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4652: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_151_4653: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 224, 224, 1)"
  },
  ImageBackground_151_4654: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_151_4655: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("1%")
  },
  View_151_4656: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_4657: {
    width: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4657: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4658: {
    width: wp("22%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4658: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4659: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  View_151_4660: {
    width: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4660: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4661: {
    width: wp("30%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4661: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4662: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_151_4663: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4664: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_151_4665: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 224, 224, 1)"
  },
  ImageBackground_151_4666: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_151_4667: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("1%")
  },
  View_151_4668: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_4669: {
    width: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4669: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4670: {
    width: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4670: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4671: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%")
  },
  View_151_4672: {
    width: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4672: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4673: {
    width: wp("18%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4673: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4674: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_151_4675: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4676: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_151_4677: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 224, 224, 1)"
  },
  ImageBackground_151_4678: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_151_4679: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("1%")
  },
  View_151_4680: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_4681: {
    width: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4681: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4682: {
    width: wp("19%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4682: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4683: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%")
  },
  View_151_4684: {
    width: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4684: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4685: {
    width: wp("21%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4685: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4708: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("144%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4709: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_151_4710: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4711: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_151_4712: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 224, 224, 1)"
  },
  ImageBackground_151_4713: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_151_4714: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("1%")
  },
  View_151_4715: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_4716: {
    width: wp("28%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4716: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4717: {
    width: wp("19%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4717: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4718: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%")
  },
  View_151_4719: {
    width: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4719: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4720: {
    width: wp("19%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4720: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4721: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_151_4722: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4723: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_151_4724: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 224, 224, 1)"
  },
  ImageBackground_151_4725: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_151_4726: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("1%")
  },
  View_151_4727: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_4728: {
    width: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4728: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4729: {
    width: wp("22%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4729: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4730: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  View_151_4731: {
    width: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4731: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4732: {
    width: wp("30%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4732: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4733: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_151_4734: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4735: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_151_4736: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 224, 224, 1)"
  },
  ImageBackground_151_4737: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_151_4738: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("1%")
  },
  View_151_4739: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_4740: {
    width: wp("26%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4740: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4741: {
    width: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4741: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4742: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%")
  },
  View_151_4743: {
    width: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4743: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4744: {
    width: wp("18%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4744: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4745: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_151_4746: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_4747: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_151_4748: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(206, 224, 224, 1)"
  },
  ImageBackground_151_4749: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_151_4750: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("1%")
  },
  View_151_4751: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_4752: {
    width: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4752: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4753: {
    width: wp("19%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4753: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_151_4754: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%")
  },
  View_151_4755: {
    width: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_4755: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "uppercase"
  },
  View_151_4756: {
    width: wp("21%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_4756: {
    color: "rgba(76, 83, 94, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.15000000000000002,
    textTransform: "uppercase"
  },
  View_104_4581: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(74, 165, 152, 1)"
  },
  View_104_4582: {
    width: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I104_4582_2_2327: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_4583: {
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
  Text_104_4583: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.301204681396484,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3860240936279297,
    textTransform: "uppercase"
  },
  ImageBackground_104_4423: {
    width: wp("100%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_4424: {
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
  View_I104_4424_46_3649: {
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
  View_I104_4424_46_3649_44_2883: {
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
  ImageBackground_I104_4424_46_3649_44_2883_41_7364: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_I104_4424_46_3649_102_2850: {
    flexGrow: 1,
    width: wp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I104_4424_46_3649_102_2850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  TouchableOpacity_I104_4424_46_3649_44_2885: {
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
  ImageBackground_I104_4424_46_3649_44_2885_41_7286: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I104_4424_46_3649_44_2885_41_7291: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  ImageBackground_I104_4424_46_3649_44_2885_41_7284: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I104_4424_46_3649_44_2885_41_7285: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I104_4424_46_3649_44_2885_41_7285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_4878: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_104_4700: {
    width: wp("28%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_104_4700: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.225,
    textTransform: "uppercase"
  },
  View_112_2685: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_112_2609: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_112_2578: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_112_2579: {
    width: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_112_2579: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1375,
    textTransform: "uppercase"
  },
  View_112_2580: {
    width: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_112_2580: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 16.69999885559082,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2587499856948853,
    textTransform: "uppercase"
  },
  View_112_2577: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(74, 165, 152, 1)"
  },
  View_112_2575: {
    width: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_112_2575: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1375,
    textTransform: "uppercase"
  },
  View_112_2576: {
    width: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_112_2576: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.69999885559082,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2587499856948853,
    textTransform: "uppercase"
  },
  View_112_2581: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_112_2582: {
    width: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_112_2582: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1375,
    textTransform: "uppercase"
  },
  View_112_2583: {
    width: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_112_2583: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 16.69999885559082,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2587499856948853,
    textTransform: "uppercase"
  },
  View_112_2590: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_112_2591: {
    width: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_112_2591: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1375,
    textTransform: "uppercase"
  },
  View_112_2592: {
    width: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_112_2592: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 16.69999885559082,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2587499856948853,
    textTransform: "uppercase"
  },
  View_112_2593: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_112_2594: {
    width: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_112_2594: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1375,
    textTransform: "uppercase"
  },
  View_112_2595: {
    width: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_112_2595: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 16.69999885559082,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2587499856948853,
    textTransform: "uppercase"
  },
  View_112_2596: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_112_2597: {
    width: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_112_2597: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1375,
    textTransform: "uppercase"
  },
  View_112_2598: {
    width: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_112_2598: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 16.69999885559082,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2587499856948853,
    textTransform: "uppercase"
  },
  View_112_2599: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_112_2600: {
    width: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_112_2600: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1375,
    textTransform: "uppercase"
  },
  View_112_2601: {
    width: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_112_2601: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 16.69999885559082,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2587499856948853,
    textTransform: "uppercase"
  },
  View_112_2605: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_112_2606: {
    width: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_112_2606: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1375,
    textTransform: "uppercase"
  },
  View_112_2607: {
    width: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_112_2607: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 16.69999885559082,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2587499856948853,
    textTransform: "uppercase"
  },
  View_112_2634: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_112_2635: {
    width: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_112_2635: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1375,
    textTransform: "uppercase"
  },
  View_112_2636: {
    width: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_112_2636: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 16.69999885559082,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2587499856948853,
    textTransform: "uppercase"
  },
  View_112_2655: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("109%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_112_2656: {
    width: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_112_2656: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1375,
    textTransform: "uppercase"
  },
  View_112_2657: {
    width: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_112_2657: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 16.69999885559082,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2587499856948853,
    textTransform: "uppercase"
  },
  View_112_2658: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("119%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_112_2659: {
    width: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_112_2659: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1375,
    textTransform: "uppercase"
  },
  View_112_2660: {
    width: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_112_2660: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 16.69999885559082,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2587499856948853,
    textTransform: "uppercase"
  },
  View_112_2661: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("130%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_112_2662: {
    width: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_112_2662: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1375,
    textTransform: "uppercase"
  },
  View_112_2663: {
    width: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_112_2663: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 16.69999885559082,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2587499856948853,
    textTransform: "uppercase"
  },
  View_112_2664: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("141%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_112_2665: {
    width: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_112_2665: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1375,
    textTransform: "uppercase"
  },
  View_112_2666: {
    width: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_112_2666: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 16.69999885559082,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2587499856948853,
    textTransform: "uppercase"
  },
  View_112_2667: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("152%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_112_2668: {
    width: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_112_2668: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1375,
    textTransform: "uppercase"
  },
  View_112_2669: {
    width: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_112_2669: {
    color: "rgba(0, 126, 129, 1)",
    fontSize: 16.69999885559082,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2587499856948853,
    textTransform: "uppercase"
  },
  ImageBackground_112_2671: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%")
  },
  ImageBackground_112_2682: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_4425: {
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
  TouchableOpacity_I104_4425_64_3284: {
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
  ImageBackground_I104_4425_64_3285: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I104_4425_64_3286: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I104_4425_64_3286: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I104_4425_64_3287: {
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
  ImageBackground_I104_4425_64_3288: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I104_4425_64_3289: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I104_4425_64_3289: {
    color: "rgba(61, 102, 112, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  View_I104_4425_64_3290: {
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
  View_I104_4425_64_3291: {
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
  ImageBackground_I104_4425_64_3291_2_2327: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I104_4425_64_3292: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I104_4425_64_3292: {
    color: "rgba(208, 174, 124, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.920265793800354,
    textTransform: "uppercase"
  },
  TouchableOpacity_I104_4425_64_3293: {
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
  ImageBackground_I104_4425_64_3294: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_I104_4425_64_3295: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I104_4425_64_3295: {
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
