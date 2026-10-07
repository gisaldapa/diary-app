import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import DiaryCard from '../components/DiaryCard';

// Mengimpor gambar lokal dari folder assets
const happyLocalImage = require('../../assets/moods/happy.png');

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    imageSource: { uri: 'https://picsum.photos/seed/happy/80' },
    mood: 'happy'
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    imageSource: { uri: 'https://picsum.photos/seed/focus/80' },
    mood: 'focus'
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    imageSource: { uri: 'https://picsum.photos/seed/calm/80' },
    mood: 'calm'
  },
  // --- ENTRI BARU 1 (Menggunakan Gambar Lokal) ---
  {
    id: 4,
    title: 'Berhasil Menyelesaikan Tugas',
    date: '2025-10-07',
    preview: 'Akhirnya fitur tambahan Diary App berhasil dikembangkan dan berjalan lancar.',
    imageSource: happyLocalImage, // Memanggil variabel lokal yang di-import di atas
    mood: 'excited'
  },
  // --- ENTRI BARU 2 ---
  {
    id: 5,
    title: 'Malam yang Lelah',
    date: '2025-10-08',
    preview: 'Hari ini jadwal sangat padat. Saatnya istirahat total untuk memulihkan energi besok.',
    imageSource: { uri: 'https://picsum.photos/seed/tired/80' },
    mood: 'tired'
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {/* HEADER DENGAN AVATAR PENGGUNA */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Buku Harian</Text>
        <Image
          source={{ uri: 'https://avatar.iran.liara.run/public/35' }} // URL avatar dummy
          style={styles.avatar}
        />
      </View>

      {/* RENDER DAFTAR KARTU */}
      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          imageSource={entry.imageSource}
          mood={entry.mood}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
  // Layout baru untuk menyejajarkan teks header dan avatar pengguna
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
});