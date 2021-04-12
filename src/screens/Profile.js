import React, { Component } from 'react';
import { ScrollView, StyleSheet , View , TextInput , Text , Dimensions, Image, TouchableOpacity, ImageBackground, BackHandler, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native'; 
import LinearGradient from 'react-native-linear-gradient';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  
        } 
    }

    static navigationOptions = ({ navigation, screenProps }) => {
        const params = navigation.state.params || {}; 
        return { 
            headerTitle: 'Profile', 
            headerTintColor: '#FFFFFF',
            headerTitleStyle: { 
                fontWeight: 'bold'
            },
            headerStyle: {  
                height: 60,
                borderBottomWidth: 0, 
                elevation: 0 
            },
            headerTransparent: true,
            headerBackground: () => (
                <LinearGradient colors={['#0183FA', '#0067DF']} style={{ flex: 1 }}/>
            ), 
        };
    }; 

    render() { 
        return (
            <ScrollView style={{backgroundColor: '#F2F2F2', height: Dimensions.get('window').height}} showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{width: Dimensions.get('window').width, height: 240, position: 'relative', marginBottom: -35}}> 
                        <View style={styles.headerSection}>
                            <Text allowFontScaling={false} style={styles.profileName}>Halo User</Text>
                            <View style={styles.images}> 
                                <Image source={ require('../assets/images/absen.png') } style={{width:60, height: 60}}/>
                            </View>
                        </View>
                    </View>
                    <View style={{bottom: 20}}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={ () => {}}>
                                <View style={{padding:10, flex: 1, flexDirection: 'row'}}>
                                    <Image source={require('../assets/images/user.png')} style={{width:40, height: 40, alignSelf: 'center'}}/>
                                    <View style={{marginLeft: 20, flex: 1, alignSelf: 'center'}}>
                                        <Text allowFontScaling={false} style={{fontFamily: 'WorkSans-Regular', color: '#394D5F', fontSize: 12, lineHeight: 14, fontWeight: '600'}}>Profile Anda</Text>
                                        <Text allowFontScaling={false} style={{fontFamily: 'WorkSans-Regular', color: '#6F7E8B', fontSize: 10}}>Lihat Profile Lengkap Anda</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                        <Image source={ require('../assets/images/arrowRight.png') } style={{width:5, height: 10, marginLeft: 'auto'}}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                             
                        </ScrollView>
                    </View>
                </View> 
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    headerSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    images: {
        backgroundColor:'#fff', 
        width:80, 
        height: 80, 
        bottom: 5, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    profileName: {
        fontFamily: "WorkSans-Regular", 
        fontSize: 14, 
        fontWeight: '600', 
        color:'#fff', 
        lineHeight: 16,
        marginBottom: 20
    },
    SectionHeaderStyle: {
        fontFamily: 'WorkSans-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 14,
        color: '#394D5F',
        marginBottom: 10,
    },
    SectionListItemStyle: {
      fontSize: 15,
      padding: 15,
      color: '#000',
      borderWidth: 1,
      borderColor: 'rgba(170, 190, 207, 0.5)',
      borderRadius: 2,
      backgroundColor: '#FFFFFF',
      marginBottom: 10,
      flexDirection: 'row',
      flex: 1
    },
    searchContainer: {
        marginBottom: 15,
        borderRadius: 50,
        shadowOpacity: 0,
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        marginTop: 20,
        zIndex: 999
    },
    button: {
        height: 70,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        padding: 5,
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.25), 2px 2px 3px rgba(176, 176, 176, 0.25)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        borderColor: 'rgba(0, 0, 0, 0.25), 2px 2px 3px rgba(176, 176, 176, 0.25)',
        shadowRadius: 3,
        borderRadius: 5, 
      },
      icon: {
        top: 12,
        right: 5,
        position: 'absolute',
    },
    container: {
        flex: 1, height: '100%', justifyContent: 'space-around', left: 0, position: 'absolute', top: 0, width: '100%'
    }, 
});
