import { View, Text, Image} from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        }}>
          <Image source={require('/Users/simo/reactnative/p1/AwesomeProject/assets/logo-2.png')} />
      <Text style={{margin:30}}> La Fondation Mohammed VI pour l'avancement des travaux sociaux pour l'éducation et la 
      formation est une institution sociale marocaine dotée d'un statut public à but non lucratif, d'une personnalité morale et d'une indépendance financière, et est classée parmi les institutions et entreprises publiques stratégiques au Maroc. La création de l'institution a été annoncée le jour du Trône, dans le discours du Trône en juillet 2000,et sous réserve de la loi organisationnelle 73.00 publiée le 11 Jumada al-Awwal 1422 correspondant au 1er août 2001. L'entreprise sociale est basée dans la capitale Rabat. Le roi Mohammed VI supervise l'institution, et sa gouvernance est supervisée par l'actuel président Youssef Al-Baqali, en plus du comité de direction. 
      </Text>
    </View>
  )
}

export default Home