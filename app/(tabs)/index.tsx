import React from 'react';
import { StyleSheet, ScrollView, useWindowDimensions, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Text, View } from '@/components/Themed';
import Footer from '@/components/Footer';
import { useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

const localImages = {
  hero: require('../../assets/images/placeholder.png'),
};

type FeatureProps = {
  icon: React.ComponentProps<typeof FontAwesome>['name'];
  title: string;
  description: string;
};

const Feature = ({ icon, title, description }: FeatureProps) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.featureContainer}>
      <FontAwesome
        name={icon}
        size={32}
        color={Colors[colorScheme ?? 'light'].tint}
      />
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  );
};

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Image
            source={localImages.hero}
            style={[styles.heroImage, { width: width - 40 }]}
            contentFit="cover"
            transition={1000}
          />
          <Text style={styles.title}>Welcome to Code Crafters</Text>
          <Text style={styles.subtitle}>
            Building Tomorrow's Mobile Experiences Today
          </Text>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>What We Do</Text>
          <Feature
            icon="code"
            title="Development"
            description="Creating robust and scalable mobile applications"
          />
          <Feature
            icon="users"
            title="Team Work"
            description="Collaborative approach to problem solving"
          />
          <Feature
            icon="mobile"
            title="Mobile First"
            description="Optimized for iOS and Android platforms"
          />
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaText}>Ready to see our work?</Text>
          <Pressable
            onPress={() => router.push('/portfolio')}
            style={({ pressed }) => [
              styles.ctaButton,
              { opacity: pressed ? 0.7 : 1 }
            ]}
          >
            <Text style={[
              styles.ctaButtonText,
              { color: Colors[colorScheme ?? 'light'].tint }
            ]}>
              View Portfolio
            </Text>
          </Pressable>
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
    paddingBottom: 20,
  },
  heroSection: {
    alignItems: 'center',
    padding: 20,
  },
  heroImage: {
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    opacity: 0.8,
  },
  featuresSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  featureContainer: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.8,
  },
  ctaSection: {
    padding: 20,
    alignItems: 'center',
  },
  ctaText: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  ctaButton: {
    padding: 15,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});