import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { COLORS, SPACE, RADIUS, TYPO } from '../styles/tokens';

export default function DiaryCard({ title, date, preview, mood, moodUri, onPress, variant = 'list' }) { 
  const getBorderColor = () => {
    switch (mood) {
      case 'happy': return '#4ade80';   
      case 'focus': return '#60a5fa';   
      case 'calm': return '#a78bfa';    
      case 'excited': return '#fbbf24'; 
      case 'tired': return '#f87171';   
      default: return COLORS.border;
    }
  };

  return ( 
    <Pressable 
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        variant === 'grid' && styles.cardGrid,
        { 
          borderColor: getBorderColor(), 
          opacity: pressed ? 0.85 : 1 
        }
      ]} 
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Buka entri harian: ${title}, tanggal ${date}`} 
    > 
      <Image 
        source={{ uri: moodUri }} 
        style={styles.mood} 
        accessible={true}
        accessibilityLabel={`Ikon mood ${mood}`}
      />
      <View style={styles.content}> 
        <Text style={styles.title} numberOfLines={1}>{title}</Text> 
        <Text style={styles.date}>{date}</Text> 
        <Text style={styles.preview} numberOfLines={2} ellipsizeMode="tail">
          {preview}
        </Text> 
      </View> 
    </Pressable> 
  ); 
}

const styles = StyleSheet.create({ 
  card: { 
    flexDirection: 'row', 
    gap: SPACE.m, 
    padding: SPACE.m, 
    borderWidth: 2,
    borderRadius: RADIUS.card, 
    backgroundColor: COLORS.surface, 
  }, 
  cardGrid: {
    flexDirection: 'column', // Mengubah layout menjadi tumpuk ke bawah saat mode grid
    alignItems: 'center',
    textAlign: 'center',
  }, 
  mood: { 
    width: 64, 
    height: 64, 
    borderRadius: RADIUS.avatar,
    backgroundColor: '#eef2ff',
  }, 
  content: { 
    flex: 1, 
    width: '100%',
  }, 
  title: { fontSize: TYPO.title, fontWeight: '700', color: COLORS.text, marginBottom: 2 }, 
  date: { fontSize: TYPO.caption, color: COLORS.muted, marginBottom: SPACE.s }, 
  preview: { fontSize: TYPO.body, color: COLORS.text, lineHeight: 20 }, 
});