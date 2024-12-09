import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isDarkTheme, theme } from '../../Redux/AuthSlice';
import { Colors, FontSize } from '../../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../constants/Header';

const DocumentBankScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  const cardData = [
   
   
    { id: '1', name: 'Residence Proof', icon: 'home' },
    { id: '2', name: 'Income Proof', icon: 'attach-money' },
   
  ];

  const renderCard = ({ item }: any) => (
    <View
      style={[
        styles.card,
        {
          backgroundColor: isDarkMode
            ? Colors.darkInputBackground
            : Colors.cardBackground,
        },
      ]}
    >
      <Icon
        name={item.icon}
        size={40}
        color={isDarkMode ? Colors.white : Colors.black}
        style={styles.icon}
      />
      <Text
        style={[
          styles.cardText,
          { color: isDarkMode ? Colors.white : Colors.black },
        ]}
      >
        {item.name}
      </Text>
    </View>
  );

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode
            ? Colors.darkBackground
            : Colors.lightBackground,
        },
      ]}
    >
     <View style={styles.headerWrapper}>
        <Header navigation={navigation} />
      </View>
      <Text
        style={[
          styles.heading,
          { color: isDarkMode ? Colors.white : Colors.black },
        ]}
      >
        Documents Section for Upload
      </Text>
      <FlatList
        data={cardData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
      
        horizontal={false}
        contentContainerStyle={styles.flatList}
       
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={[styles.nextButton, { backgroundColor: Colors.primary }]}
        onPress={() => navigation.navigate('ESignature')}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerWrapper: {
    position: 'absolute', 
    top: 11,
    left: 0,
    right: 0,
  },
  heading: {
    marginTop:70,
    fontSize: FontSize.heading,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  flatList: {
    flexGrow: 1,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    flex: 1,
    height: 150,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginVertical:15,
  },
  icon: {
    marginBottom: 10,
  },
  cardText: {
    fontSize: FontSize.large,
    textAlign: 'center',
  },
  nextButton: {
    alignSelf: 'center',
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom:20,
    
  },
  nextButtonText: {
    color: Colors.white,
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
});

export default DocumentBankScreen;
