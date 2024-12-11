// app/member.tsx
import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Text, View } from '@/components/Themed';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { teamData } from '@/app/data/team';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Footer from '@/components/Footer';

const SkillTag = ({ skill }: { skill: string }) => {
  const colorScheme = useColorScheme();
  
  return (
    <View style={[
      styles.skillTag,
      { backgroundColor: Colors[colorScheme ?? 'light'].tint }
    ]}>
      <Text style={styles.skillText}>{skill}</Text>
    </View>
  );
};

export default function MemberScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const colorScheme = useColorScheme();
  
  const member = teamData.find(m => m.id === id);

  if (!member) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Member not found</Text>
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <Text style={[styles.backButton, { color: Colors[colorScheme ?? 'light'].tint }]}>
            Go Back
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image
            source={member.avatar}
            style={styles.profileImage}
            contentFit="cover"
            transition={500}
          />
          <Text style={styles.name}>{member.name}</Text>
          <Text style={styles.role}>{member.role}</Text>
        </View>

        {/* Location Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location</Text>
          <View style={styles.locationContainer}>
            <FontAwesome
              name="map-marker"
              size={20}
              color={Colors[colorScheme ?? 'light'].text}
              style={styles.locationIcon}
            />
            <Text style={styles.locationText}>{member.hometown.name}</Text>
          </View>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {member.skills.map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
          </View>
        </View>

        {/* Interests Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <Text style={styles.interestsText}>{member.interests}</Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  backButtonContainer: {
    marginBottom: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  role: {
    fontSize: 18,
    opacity: 0.8,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 8,
  },
  locationText: {
    fontSize: 16,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  skillText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  interestsText: {
    fontSize: 16,
    lineHeight: 24,
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 16,
    textAlign: 'center',
  },
});