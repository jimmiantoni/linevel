import React from 'react';
import {
  Image, 
  ScrollView,
  StyleSheet,
  Text, Alert,
  TouchableOpacity,
  View, RefreshControl,
  Dimensions, BackHandler, 
} from 'react-native';   
import { NavigationEvents } from 'react-navigation'; 
import Icon from 'react-native-vector-icons/MaterialIcons';  
import menu1 from '../assets/icon/008-bakery.png';
import menu2 from '../assets/icon/009-shop.png';
import menu3 from '../assets/icon/022-vegetable.png';
import menu4 from '../assets/icon/024-fruit.png';
import menu5 from '../assets/icon/031-meat.png';
import menu6 from '../assets/icon/042-sale.png';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false
  };

  constructor(props) {
    super(props);
    this.state = {  
      refreshing: false,
      menu: [
        {
          id: 1,
          image: menu1,
          name: 'Roti'
        },
        {
          id: 2,
          image: menu2,
          name: 'Warung'
        },
        {
          id: 3,
          image: menu3,
          name: 'Sayuran'
        },
        {
          id: 4,
          image: menu4,
          name: 'Buah'
        },
        {
          id: 5,
          image: menu5,
          name: 'Daging'
        },
        {
          id: 6,
          image: menu6,
          name: 'Diskon'
        },
      ],
      content: [
        {
          id: 1,
          image: 'https://pbs.twimg.com/media/EQKbk_lU0AEkWmB.jpg',
          name: 'Diskon 50% hari ini'
        },
        {
          id: 2,
          image: 'https://pbs.twimg.com/media/EV20PUIVcAAHoj1.jpg',
          name: 'Team diskon mana suaranya??'
        },
        {
          id: 3,
          image: 'https://pbs.twimg.com/media/EyxxsOpVoAE6_Kl?format=jpg&name=large',
          name: 'Selamat berpuasa'
        },
        {
          id: 4,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbM3wyYMtZXinCLYHRGfxHG2ttkrO20LZB6A&usqp=CAU',
          name: 'Promo weekend groceries'
        },
        {
          id: 5,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaEKbZLXs_jv_hu7dlVXgCW5D25Utc_YZFg&usqp=CAU',
          name: 'Promo tempat makan cantik'
        },
        {
          id: 6,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRza4R2t02QszLG0UZmFSbFvd0dKenQNQkR-g&usqp=CAU',
          name: 'Tebus murah aja disini'
        },
      ]
    }
  } 

  componentDidMount = async () => { 
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  } 

  componentWillUnmount = async () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }  

  onRefresh = () => {
    this.setState({ refreshing: true });  
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 2000);
  };

  handleBackButton = () => {
    Alert.alert(
        'Linevel',
        'Anda yakin ingin keluar?', [{
            text: 'Batal',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
        }, {
            text: 'OK',
            onPress: () => BackHandler.exitApp()
        }, ], {
            cancelable: false
        }
      )
      return true;
  }  

  openMenu = (data) => {
    Alert.alert(
      'Menu', data.name
    )
  }

  openPromo = (data) => {
    Alert.alert(
      'Promo', data.name
    )
  }
  
  render() {  
    return ( 
      <View style={{ flex: 1 }}>
        <NavigationEvents onDidFocus={ () => this.componentDidMount()} />  
        <View style={styles.header}> 
          <TouchableOpacity onPress={()=>{}} activeOpacity={.7} style={styles.search}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="search" size={25} color="#dedede" />
              <Text allowFontScaling={false} style={{ fontSize: 12, alignSelf: 'center', marginLeft: 5 }}>Cari apa yang kamu cari disini....</Text>
            </View>
          </TouchableOpacity> 
        </View>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} refreshControl={
          <RefreshControl 
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
            title="Pull to refresh"
          />
        }> 
          <View style={{ paddingVertical: 15, paddingHorizontal: 20, flexDirection: 'row', flexWrap: "wrap", justifyContent: 'center', alignItems: 'center' }}>
            { this.state.menu.map((data, key) => (
                <TouchableOpacity activeOpacity={.8} key={key} onPress={() => this.openMenu(data)} style={{ backgroundColor: '#ffffff', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 50, marginBottom: 20, marginLeft: 15, marginRight: 15 }}>
                  <Image source={ data.image } style={{ width: 45, height: 45, marginBottom: 3, alignSelf: 'center'}}/> 
                  <Text allowFontScaling={false} style={{ fontSize: 13, textAlign: 'center' }}>{data.name}</Text>
                </TouchableOpacity>
              )) 
            }
           
          </View>
          <View style={{ marginHorizontal: 20, borderTopColor: '#dedede', borderTopWidth: 1, flex: 1 }}></View>
          <View style={{ paddingVertical: 15, paddingHorizontal: 20, flexDirection: 'row', flexWrap: "wrap", justifyContent: 'center', alignItems: 'center' }}>
            { this.state.content.map((data, key) => (
                <TouchableOpacity activeOpacity={.8} key={key} onPress={() => this.openPromo(data)} style={{ backgroundColor: '#ffffff', marginBottom: 15, marginLeft: 8, marginRight: 8 }}>
                  <Image source={{ uri: data.image }} resizeMode='cover' style={{ width: 156, height: 156, marginBottom: 3, alignSelf: 'center', borderRadius: 5}}/> 
                  <Text allowFontScaling={false} style={{ fontSize: 11, textAlign: 'left', marginBottom: 10, marginLeft: 3 }}>{data.name}</Text>
                </TouchableOpacity>
              )) 
            }
          </View> 
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    height: Dimensions.get('window').height,
    backgroundColor: '#F5F5F5'
  }, 
  header: { 
    backgroundColor: '#0183FA',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  search: {
    backgroundColor: '#ffffff', 
    paddingHorizontal: 10, 
    paddingVertical: 3
  }
});
