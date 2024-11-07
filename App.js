import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Dimensions, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Accelerometer, Gyroscope } from 'expo-sensors';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  const [accelerometerData, setAccelerometerData] = useState({});
  const [gyroscopeData, setGyroscopeData] = useState({});
  const [stepCount, setStepCount] = useState(0);
  const [orientation, setOrientation] = useState('Vertical');

  useEffect(() => {
    Accelerometer.setUpdateInterval(100);
    Gyroscope.setUpdateInterval(100);
    const accelerometerSubscription = Accelerometer.addListener((data) => {
      setAccelerometerData(data);
      detectStep(data);
    });
    const gyroscopeSubscription = Gyroscope.addListener((data) => {
      setGyroscopeData(data);
      detectOrientation(data);
    });
    return () => {
      accelerometerSubscription.remove();
      gyroscopeSubscription.remove();
    };
  }, []);

  const detectStep = (data) => {
    const acceleration = Math.sqrt(data.x * data.x + data.y * data.y + data.z * data.z);
    const threshold = 1.2;
    if (acceleration > threshold) {
      setStepCount((prevCount) => prevCount + 1);
    }
  };

  const detectOrientation = (data) => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    if (Math.abs(data.x) > Math.abs(data.y)) {
      if (screenWidth < screenHeight) {
        setOrientation('Horizontal');
        ScreenOrientation.unlockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      } else {
        setOrientation('Vertical');
        ScreenOrientation.unlockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
      }
    }
  };

  const makeCall = () => {
    const phoneNumber = 'tel:3512820632';
    Linking.openURL(phoneNumber).catch((err) => console.error('Error trying to make the call:', err));
  };

  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <Text style={styles.navTitle}>Salud y Bienestar</Text>
        <TouchableOpacity onPress={makeCall}>
          <Image style={styles.navIcon} source={{ uri: 'https://example.com/icon.png' }} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Monitor de Pasos y Orientación</Text>
      <View style={styles.sensorDataContainer}>
        <Text style={styles.sensorDataText}>Contador de pasos: <Text style={styles.stepCount}>{stepCount}</Text></Text>
        <Text style={styles.sensorDataText}>Orientación: <Text style={styles.orientationText}>{orientation}</Text></Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={makeCall}>
        <Text style={styles.buttonText}>Hacer Llamada</Text>
      </TouchableOpacity>

      <StatusBar style="auto" translucent={true} backgroundColor="transparent" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
    alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#4C6EF5',
    paddingVertical: 15,
    paddingHorizontal: 15,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  navTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  navIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 1.5,
  },
  sensorDataContainer: {
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
    width: '90%',
    marginBottom: 30,
  },
  sensorDataText: {
    fontSize: 20,
    color: '#7F8C8D',
    marginBottom: 12,
  },
  stepCount: {
    fontSize: 24,
    fontWeight: '600',
    color: '#27AE60',
  },
  orientationText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#F39C12',
  },
  button: {
    backgroundColor: '#4C6EF5',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
    width: 250,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});
