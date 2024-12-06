// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import ProgressCircle from 'react-native-progress-circle'; 
// import { Colors, FontSize } from '../../../constants/Colors';

// const RepaymentHistoryScreen = () => {


//   return (
//     <View style={styles.container}>
//       <View style={[styles.card, { backgroundColor: Colors.cardBackground }]}>
//         <ProgressCircle
//           percent={30} 
//           radius={50} 
//           borderWidth={8} 
//           color={Colors.primary} 
//           shadowColor={Colors.gray} 
//           bgColor={Colors.lightBackground} 
//         >
//           <Text style={styles.progressText}>{`${percent}%`}</Text>
//         </ProgressCircle>
//         <Text style={[styles.completedText, { color: Colors.primary }]}>
//           {`${progress}% Completed`}
//         </Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: Colors.lightBackground, // Background color from the theme
//   },
//   card: {
//     width: 300,
//     height: 300,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     padding: 20,
//     elevation: 5, // Add shadow for the card
//     shadowColor: Colors.gray, // Card shadow color
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//   },
//   progressText: {
//     fontSize: FontSize.large,
//     color: Colors.primary,
//     fontWeight: 'bold',
//   },
//   completedText: {
//     marginTop: 10,
//     fontSize: FontSize.medium,
//     fontWeight: 'bold',
//   },
// });

// export default RepaymentHistoryScreen;

import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isDarkTheme, theme } from '../../../Redux/AuthSlice';
import Header from '../../../constants/Header';
import { Colors } from '../../../constants/Colors';

const RepaymentHistoryScreen = ({navigation}:any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);
  
  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground }]}>
    <View style={styles.headerWrapper}>
       <Header navigation={navigation} />
     </View>
    
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  headerWrapper: {
    position: 'absolute', 
    top: 10,
    left: 0,
    right: 0,
  },
});
export default RepaymentHistoryScreen;








