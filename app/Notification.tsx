import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notifications = {
  today: [
    { id: 1, title: 'Payment confirm', desc: 'Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt eleifend vitae', time: '15 min ago', highlight: true },
    { id: 2, title: 'Payment confirm', desc: 'Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt eleifend vitae', time: '25 min ago', highlight: false },
  ],
  yesterday: [
    { id: 3, title: 'Payment confirm', desc: 'Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt eleifend vitae', time: '15 min ago', highlight: true },
    { id: 4, title: 'Payment confirm', desc: 'Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt eleifend vitae', time: '25 min ago', highlight: false },
    { id: 5, title: 'Payment confirm', desc: 'Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt eleifend vitae', time: '25 min ago', highlight: false },
    { id: 6, title: 'Payment confirm', desc: 'Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt eleifend vitae', time: '15 min ago', highlight: true },
  ]
};

export default function NotificationScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn}>
            <Ionicons name="chevron-back" size={24} color="#000" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Notification</Text>
          <View style={{ width: 50 }} /> {/* spacer */}
        </View>

        {/* Today Section */}
        <Text style={styles.sectionTitle}>Today</Text>
        {notifications.today.map((item) => (
          <View
            key={item.id}
            style={[
              styles.card,
              item.highlight && styles.cardHighlight,
            ]}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
            <Text style={styles.cardTime}>{item.time}</Text>
          </View>
        ))}

        {/* Yesterday Section */}
        <Text style={styles.sectionTitle}>Yesterday</Text>
        {notifications.yesterday.map((item) => (
          <View
            key={item.id}
            style={[
              styles.card,
              item.highlight && styles.cardHighlight,
            ]}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
            <Text style={styles.cardTime}>{item.time}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
  },
  cardHighlight: {
    backgroundColor: '#E2F5ED',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
    color: '#000',
  },
  cardDesc: {
    fontSize: 14,
    color: '#6D6D6D',
    marginBottom: 4,
  },
  cardTime: {
    fontSize: 13,
    color: '#999',
  },
});
