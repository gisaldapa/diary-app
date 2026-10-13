import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';
import { COLORS, SPACE, TYPO, BREAKPOINTS } from '../styles/tokens';

const DATA = [
  { 
    id: '1', title: 'Pagi yang Tenang', date: '2025-10-06', 
    preview: 'Bangun lebih pagi dan menikmati udara sejuk hari ini.', 
    body: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk, memberikan energi yang sangat positif sebelum memulai rutinitas.', 
    moodUri: 'https://picsum.photos/seed/happy/200', heroUri: 'https://picsum.photos/seed/happyhero/800/450', mood: 'happy'
  },
  { 
    id: '2', title: 'Produktif di Kampus', date: '2025-10-05', 
    preview: 'Menyelesaikan modul dan praktikum.', 
    body: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru yang didapatkan mengenai integrasi sistem.', 
    moodUri: 'https://picsum.photos/seed/focus/200', heroUri: 'https://picsum.photos/seed/focushero/800/450', mood: 'focus'
  },
  { 
    id: '3', title: 'Senja di Taman', date: '2025-10-04', 
    preview: 'Membaca buku di taman kota yang tenang.', 
    body: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah dan suasana begitu mendamaikan pikiran.', 
    moodUri: 'https://picsum.photos/seed/calm/200', heroUri: 'https://picsum.photos/seed/calmhero/800/450', mood: 'calm'
  },
  // Tambahan dua entri baru
  { 
    id: '4', title: 'Belajar React Native', date: '2025-10-07', 
    preview: 'Implementasi FlatList dan layout responsif selesai!', 
    body: 'Sangat antusias karena akhirnya memahami cara kerja useWindowDimensions dan memadukannya dengan komponen FlatList agar UI dapat menyesuaikan diri baik di ponsel maupun tablet.', 
    moodUri: 'https://picsum.photos/seed/excited/200', heroUri: 'https://picsum.photos/seed/excitedhero/800/450', mood: 'excited'
  },
  { 
    id: '5', title: 'Malam yang Lelah', date: '2025-10-08', 
    preview: 'Jadwal hari ini sangat padat, saatnya istirahat.', 
    body: 'Rapat berkelanjutan dari pagi hingga sore hari. Saat ini badan rasanya perlu diistirahatkan sepenuhnya agar siap menghadapi esok hari.', 
    moodUri: 'https://picsum.photos/seed/tired/200', heroUri: 'https://picsum.photos/seed/tiredhero/800/450', mood: 'tired'
  },
];

export default function DiaryListScreen() {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const twoCols = width >= BREAKPOINTS.tablet;
  const [selected, setSelected] = useState(null);

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle} accessibilityRole="header">Buku Harian</Text>
      <Image source={{ uri: 'https://avatar.iran.liara.run/public/35' }} style={styles.avatar} accessible={true} accessibilityLabel="Avatar Profil" />
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={twoCols ? styles.gridItem : styles.listItem}>
      <DiaryCard 
        {...item} 
        variant={twoCols ? 'grid' : 'list'} 
        onPress={() => setSelected(item)} 
      />
    </View>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <FlatList
        key={twoCols ? 'grid-mode' : 'list-mode'} // Memaksa re-render ketika layout berubah
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        numColumns={twoCols ? 2 : 1}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={twoCols ? styles.columnWrapper : undefined}
        showsVerticalScrollIndicator={false}
      />
      <DiaryDetailModal 
        visible={selected !== null} 
        onClose={() => setSelected(null)} 
        entry={selected} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.surface },
  listContent: { paddingHorizontal: SPACE.l, paddingBottom: SPACE.xl },
  headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACE.xl, marginTop: SPACE.m },
  headerTitle: { fontSize: TYPO.h1, fontWeight: '700', color: COLORS.text },
  avatar: { width: 44, height: 44, borderRadius: 22, borderWidth: 1, borderColor: COLORS.border },
  listItem: { marginBottom: SPACE.m },
  columnWrapper: { justifyContent: 'space-between', marginBottom: SPACE.m },
  gridItem: { flex: 1, maxWidth: '48%' }, // Memberikan ruang agar tiap kolom di tablet terbagi seimbang
});