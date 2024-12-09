import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import { Colors, FontSize } from '../../../constants/Colors';
import Header from '../../../constants/Header';

const RepaymentProgressScreen = ({navigation}:any) => {
  const progress = 0.3; 

  return (
    <View style={styles.container}>
        <View style={styles.headerWrapper}>
       <Header navigation={navigation} />
     </View>
      <View style={[styles.card, { backgroundColor: Colors.cardBackground }]}>
        <Text style={styles.heading}>Your Repayment Progress Status</Text>
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          size={100}
          thickness={8}
          color={Colors.primary}
          unfilledColor={Colors.gray}
          borderWidth={0}
          
        />
        <Text style={styles.progressText}>{`30%`}</Text>
        <Text style={[styles.completedText, { color: Colors.primary }]}>
          {`30% Completed`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightBackground,
  },
  card: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: Colors.gray,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  heading: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  progress: {
    marginBottom: 10,
  },
  progressText: {
    fontSize: FontSize.large,
    color: Colors.primary,
    fontWeight: 'bold',
    position: 'absolute',
    top: '55%',
    textAlign: 'center',
    transform: [{ translateY: -10 }],
  },
  completedText: {
    marginTop: 10,
    fontSize: FontSize.medium,
    fontWeight: 'bold',
  },
  headerWrapper: {
        position: 'absolute',
        top: 10,
        left: 0,
        right: 0,
      },
});

export default RepaymentProgressScreen;

