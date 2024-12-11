import React from 'react';
import { StyleSheet, ScrollView, Pressable, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import { Text, View } from '@/components/Themed';
import Footer from '@/components/Footer';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { Project, projectData } from '@/app/data/projects';

const ProjectCard = ({ project }: { project: Project }) => {
  const colorScheme = useColorScheme();

  return (
    <View style={[
      styles.projectCard,
      { backgroundColor: Colors[colorScheme ?? 'light'].background }
    ]}>
      <Image
        source={project.image}
        style={styles.projectImage}
        contentFit="cover"
        transition={500}
      />
      <View style={styles.projectInfo}>
        <Text style={styles.projectTitle}>{project.title}</Text>
        <Text style={styles.projectDescription}>{project.description}</Text>
        <View style={styles.technologiesContainer}>
          {project.technologies.map((tech, index) => (
            <View 
              key={index}
              style={[
                styles.techTag,
                { backgroundColor: Colors[colorScheme ?? 'light'].tint }
              ]}
            >
              <Text style={styles.techText}>{tech}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default function PortfolioScreen() {
  const { width } = useWindowDimensions();
  
  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Our Portfolio</Text>
        <Text style={styles.subtitle}>
          Explore our latest projects and innovations
        </Text>

        <View style={styles.projectsGrid}>
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
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
  projectsGrid: {
    width: '100%',
    gap: 20,
  },
  projectCard: {
    borderRadius: 15,
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    elevation: 5,
  },
  projectImage: {
    width: '100%',
    height: 200,
  },
  projectInfo: {
    padding: 15,
    backgroundColor: 'transparent',
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 16,
    marginBottom: 15,
    opacity: 0.8,
  },
  technologiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  techText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});