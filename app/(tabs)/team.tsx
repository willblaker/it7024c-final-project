import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Text, View } from '@/components/Themed';
import Footer from '@/components/Footer';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { TeamMember } from '@/app/types/team';
import { teamData } from '@/app/data/team';

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.memberCard,
        { 
          opacity: pressed ? 0.7 : 1,
          backgroundColor: Colors[colorScheme ?? 'light'].background
        }
      ]}
      onPress={() => router.push({
        pathname: '/member',
        params: { id: member.id }
      })}
    >
      <Image
        source={member.avatar}
        style={styles.avatar}
        contentFit="cover"
        transition={500}
      />
      <View style={styles.memberInfo}>
        <Text style={styles.memberName}>{member.name}</Text>
        <Text style={styles.memberRole}>{member.role}</Text>
        <Text style={styles.memberLocation}>{member.hometown.name}</Text>
      </View>
    </Pressable>
  );
};

export default function TeamScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Our Team</Text>
        <Text style={styles.subtitle}>Meet the talented individuals behind our success</Text>
        
        <View style={styles.teamGrid}>
          {teamData.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.8,
    marginBottom: 30,
  },
  teamGrid: {
    width: '100%',
  },
  memberCard: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    elevation: 5,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  memberInfo: {
    marginLeft: 15,
    flex: 1,
    backgroundColor: 'transparent',
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  memberRole: {
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 4,
  },
  memberLocation: {
    fontSize: 14,
    opacity: 0.6,
  },
});