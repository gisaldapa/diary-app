import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Menambahkan props imageSource (pengganti moodUri) dan mood
export default function DiaryCard({ title, date, preview, imageSource, mood }) {
  
  // Fungsi untuk menentukan warna border berdasarkan props 'mood'
  const getBorderColor = () => {
    switch (mood) {
      case 'happy': return '#4ade80';   // Hijau
      case 'focus': return '#60a5fa';   // Biru
      case 'calm': return '#a78bfa';    // Ungu
      case 'excited': return '#fbbf24'; // Kuning
      case 'tired': return '#f87171';   // Merah
      default: return '#e5e7eb';        // Abu-abu default
    }
  };

  return (
    // Mengaplikasikan warna border dinamis
    <View style={[styles.card, { borderColor: getBorderColor() }]}>
      <Image source={imageSource} style={styles.mood} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
        <Text
          style={styles.preview}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderWidth: 2, // Dipertebal menjadi 2 agar warna border lebih terlihat jelas
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#ffffff',
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  date: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
  },
});