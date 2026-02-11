import { Text, ScrollView, Image } from "react-native";

export default function Index() {
  return (
    <ScrollView
    contentContainerStyle={{
      alignItems : "center",
      paddingVertical : 20,
    }}
    >
      <Image
       source={require('../assets/images/3d-render-gift-box-with-ribbon-present-package.jpg')} 
       style={{width:200, height:150, marginBottom:20}}/>
      <Text style={{flex: 1, justifyContent: "center", alignItems: "center", marginTop : 7,}} >BAGAS SYADDAD CHOIRURIZAL - 00000102770</Text>

      <Image
       source={require('../assets/images/3d-render-gift-box-with-ribbon-present-package.jpg')} 
       style={{width:200, height:150, marginBottom:20, marginTop : 10, }}/>
      <Text style={{flex: 1, justifyContent: "center", alignItems: "center", marginTop : 7,}} >BAGAS SYADDAD CHOIRURIZAL - 00000102770</Text>

      <Image
       source={require('../assets/images/3d-render-gift-box-with-ribbon-present-package.jpg')} 
       style={{width:200, height:150, marginBottom:20, marginTop : 10, }}/>
      <Text style={{flex: 1, justifyContent: "center", alignItems: "center", marginTop : 7, }} >BAGAS SYADDAD CHOIRURIZAL - 00000102770</Text>

      <Image
       source={require('../assets/images/3d-render-gift-box-with-ribbon-present-package.jpg')} 
       style={{width:200, height:150, marginBottom:20, marginTop : 10, }}/>
      <Text style={{flex: 1, justifyContent: "center", alignItems: "center", marginTop : 7, }} >BAGAS SYADDAD CHOIRURIZAL - 00000102770</Text>

      <Image
       source={require('../assets/images/3d-render-gift-box-with-ribbon-present-package.jpg')} 
       style={{width:200, height:150, marginBottom:20, marginTop : 10, }}/>
      <Text style={{flex: 1, justifyContent: "center", alignItems: "center", marginTop : 7, }} >BAGAS SYADDAD CHOIRURIZAL - 00000102770</Text>
    </ScrollView>
  );
}
