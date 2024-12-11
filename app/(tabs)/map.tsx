import React from 'react';
import { StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { Text, View } from '@/components/Themed';
import Footer from '@/components/Footer';
import { teamData } from '@/app/data/team';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import "leaflet/dist/leaflet.css";
import dynamic from 'next/dynamic';

// Conditionally import MapComponent only on web platform
const MapComponent = Platform.select({
  web: dynamic(
    () => import('@/components/WebMapComponent'),
    { 
      ssr: false,
      loading: () => (
        <View style={styles.loadingContainer}>
          <Text>Loading map...</Text>
        </View>
      )
    }
  ),
  default: null,
});

// Mobile fallback component showing a list of locations
const LocationsList = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.locationsList}>
      <Text style={styles.listTitle}>Team Locations</Text>
      {teamData.map((member) => (
        <View 
          key={member.id} 
          style={[
            styles.locationItem,
            { backgroundColor: Colors[colorScheme ?? 'light'].background }
          ]}
        >
          <Text style={styles.memberName}>{member.name}</Text>
          <Text style={styles.locationText}>{member.hometown.name}</Text>
          <Text style={styles.coordinatesText}>
            {member.hometown.lat.toFixed(4)}°, {member.hometown.lng.toFixed(4)}°
          </Text>
        </View>
      ))}
    </View>
  );
};

export default function MapScreen() {
  const { width } = useWindowDimensions();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Hometowns</Text>
      
      {Platform.OS === 'web' && MapComponent ? (
        <View style={[styles.mapContainer, { width: width - 40 }]}>
          <MapComponent teamData={teamData} />
        </View>
      ) : (
        <LocationsList />
      )}
      
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mapContainer: {
    flex: 1,
    height: 400,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationsList: {
    width: '100%',
    flex: 1,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  locationItem: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    elevation: 5,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  locationText: {
    fontSize: 16,
    marginBottom: 3,
  },
  coordinatesText: {
    fontSize: 14,
    opacity: 0.7,
  },
});
