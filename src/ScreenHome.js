import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto} from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons"



export default function ScreenHome() {
    return (
        <View style={styles.container}>



            <View style={styles.head}>



                <View>
                    <EvilIcons style={styles.IconSearch} name="search" size={30} color="#ffff" />

                    <Text style={styles.textSearch}>Unblast</Text>

                    <TextInput style={styles.BoxSearch}


                    />

                    <MaterialIcons style={styles.IconBack}

                        name="keyboard-arrow-left"
                        size={55}
                        color="#fff"
                    />

                    <Ionicons style={styles.IconNext}

                        name="arrow-redo-outline"
                        size={55}
                        color="white"
                    />
                </View>

            </View>

            <View style={styles.Options}>


                <Text style={styles.textOption}>Home</Text>
                <Text style={styles.textOption}>Posts</Text>
                <Text style={styles.textOption}>Videos</Text>
                <Text style={styles.textOption}>Photos</Text>
                <Text style={styles.textOption}>Community</Text>


            </View>

            <ScrollView>
        <View style={styles.Post}>

          <View style={styles.headPost}>

            <View style={styles.Photo}></View>

            <View style={styles.textPost}>

              <View style={styles.Name}>

                <Text>Unblast</Text>

              </View>

              <View style={styles.Time}>

                <Text>7 Minutos atrás</Text>

              

              </View>

            </View>

          </View>

          <View style={styles.Coments}>

            
            <Text>Amigo luffy comendo</Text>

          </View>


          <View style={styles.Image}>

            <Image

              source={{

                uri: "https://i.pinimg.com/564x/d0/ae/e7/d0aee7ca01803df843dd0554207eb380.jpg",

              }}


              style={{ width: "90%", height: 250, borderRadius: 10, }}
            />

          </View>

          <View style={styles.Likes}>

            <Text></Text>

          </View>

          <View style={styles.Interaction}>

            <View style={styles.section}>

              <AntDesign name="like2" size={24} color="#3D7BE2" />

              <Text style={{marginLeft: 5,}}>12 Likes</Text>

            </View>

            <View style={styles.section}>

              <FontAwesome5 name="comment-alt" size={24} color="black" />

              <Text style={{marginLeft: 5,}}>Comment</Text>

            </View>

            <View style={styles.section}>

              <Ionicons name="md-share-outline" size={24} color="black" />

              <Text style={{marginLeft: 5,}}>Share</Text>

            </View>

          </View>

        </View>

      </ScrollView>

            <View style={styles.Down}>


                <View style={styles.textDown}>

                    <Text style={{ color: "white", }} >Learn More</Text>

                </View>


                <View style={styles.IconMessenger}>

                    <FontAwesome5

                        name="facebook-messenger"
                        size={40} color="white"
                    />


                </View>

                <View style={styles.IconDot}>

                    <Entypo name="dots-three-horizontal" size={24} color="#3D7BE2" />

                </View>





            </View>



        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },

    textSearch: {

        color: 'white',
        paddingTop: 50,
        left: 125,
        position: "absolute",
        top: 30,
        zIndex: 100,


    },

    head: {

        width: '100%',
        backgroundColor: '#4369B0',
        height: 130,
    },

    BoxSearch: {

        width: '65%',
        backgroundColor: '#2C4877',
        height: 40,
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: -25,
    },
    IconSearch: {
        zIndex: 100,
        marginTop: 70,
        left: 80,
        top: 5,
    },

    IconBack: {

        marginTop: -50,

    },
    IconNext: {

        marginTop: -60,
        left: 330,


    },

    Options: {
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        elevation: 6,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        flexDirection: "row",
        paddingTop: 13,


    },

    textOption: {
        fontSize: 14,
        color: "#575757",
    },

    Post: {
        marginHorizontal: 20,
        marginVertical: 20,
        width: "100%",
        marginBottom: 100,
      },
    
      Photo: {
        width: 55,
        height: 55,
        borderRadius: 40,
        backgroundColor: "black",
      },
    
      headPost: {
        flexDirection: "row",
      },
    
      textPost: {
        alignSelf: "center",
        marginLeft: 10,
      },
    
      section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 50,
      },
    
      Name: {},
    
      Time: {
        flexDirection: "row",
        alignItems: "center",
      },
    
      Coments: {
        marginTop: 5,
        marginBottom: 5,
      },    
      
    
      Interaction: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
    

    Down: {

        flexDirection: 'row',
        position: 'absolute',
        bottom: 50,


    },


    textDown: {

        width: '65%',
        backgroundColor: '#3D7BE2',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },


    IconMessenger: {

        backgroundColor: "#3D7BE2",
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginRight: 5,
        left: 15,

    },

    IconDot:{

        borderWidth:1,
        borderColor:'#3D7BE2',
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginRight: 5,
        left: 25,


    },




});
