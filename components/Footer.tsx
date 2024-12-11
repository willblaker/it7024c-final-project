import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from './useColorScheme';
import Colors from '@/constants/Colors';

export default function Footer() {
  const colorScheme = useColorScheme();
  
  return (
    <View style={styles.footer}>
      <Text style={[
        styles.footerText,
        { color: Colors[colorScheme ?? 'light'].text }
      ]}>
        © 2024 Code Crafters. All rights reserved.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerText: {
    fontSize: 12,
  },
});
