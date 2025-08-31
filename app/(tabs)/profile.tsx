import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const isIOS = Platform.OS === 'ios';

interface VideoItem {
  id: string;
  title: string;
  views: string;
  likes: string;
  thumbnail: string;
}

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState('videos');
  
  const userVideos: VideoItem[] = [
    {
      id: '1',
      title: 'Cat video',
      views: '1.5M',
      likes: '12.3K',
      thumbnail: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&dpr=1',
    },
    {
      id: '2',
      title: 'Pet care',
      views: '1.5M',
      likes: '8.2K',
      thumbnail: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&dpr=1',
    },
    {
      id: '3',
      title: 'Ocean view',
      views: '1.5M',
      likes: '5.1K',
      thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&dpr=1',
    },
    {
      id: '4',
      title: 'Architecture',
      views: '1.5M',
      likes: '18.7K',
      thumbnail: 'https://images.pexels.com/photos/265920/pexels-photo-265920.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&dpr=1',
    },
    {
      id: '5',
      title: 'Landscape',
      views: '1.5M',
      likes: '15.2K',
      thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&dpr=1',
    },
    {
      id: '6',
      title: 'Nature',
      views: '1.5M',
      likes: '9.8K',
      thumbnail: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&dpr=1',
    },
  ];

  const renderVideoItem = (video: VideoItem, index: number) => {
    const isLastInRow = (index + 1) % 3 === 0;
    return (
      <TouchableOpacity 
        key={video.id} 
        style={[
          styles.videoItem, 
          isLastInRow ? styles.videoItemLast : {}
        ]}
        activeOpacity={0.8}
      >
        <View style={styles.videoContainer}>
          <Image source={{ uri: video.thumbnail }} style={styles.videoThumbnail} />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.5)']}
            style={styles.videoOverlay}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View style={styles.videoInfoContainer}>
              <Ionicons name="play-circle" size={14} color="#FFFFFF" />
              <Text style={styles.videoViews}>{video.views}</Text>
            </View>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent={isIOS}
      />
      
      <LinearGradient
        colors={['#4A148C', '#6A1B9A', '#8E24AA']}
        style={styles.gradientBackground}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButton}>
            <Ionicons name="menu-outline" size={24} color="#E0E0E0" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Ionicons name="person-add-outline" size={24} color="#E0E0E0" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.editProfileButton}>
            <Ionicons name="create-outline" size={20} color="#E0E0E0" />
          </TouchableOpacity>
        </View>
        
        <ScrollView 
          style={styles.content} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Profile Section */}
          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1' }} 
                style={styles.profileAvatar} 
              />
              <View style={styles.avatarBorder} />
            </View>
            
            <Text style={styles.userName}>Ruth Sanders</Text>
            
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>203</Text>
                <Text style={styles.statLabel}>Following</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>628</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>2634</Text>
                <Text style={styles.statLabel}>Likes</Text>
              </View>
            </View>
          </View>
          
          {/* Tabs */}
          <View style={styles.tabContainer}>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'videos' && styles.activeTab]}
              onPress={() => setActiveTab('videos')}
            >
              <Ionicons 
                name="play-circle-outline" 
                size={18} 
                color={activeTab === 'videos' ? '#E0E0E0' : '#AAAAAA'} 
                style={styles.tabIcon} 
              />
              <Text style={[styles.tabText, activeTab === 'videos' && styles.activeTabText]}>
                My Videos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'images' && styles.activeTab]}
              onPress={() => setActiveTab('images')}
            >
              <Ionicons 
                name="images-outline" 
                size={18} 
                color={activeTab === 'images' ? '#E0E0E0' : '#AAAAAA'} 
                style={styles.tabIcon} 
              />
              <Text style={[styles.tabText, activeTab === 'images' && styles.activeTabText]}>
                My Images
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'liked' && styles.activeTab]}
              onPress={() => setActiveTab('liked')}
            >
              <Ionicons 
                name="heart-outline" 
                size={18} 
                color={activeTab === 'liked' ? '#E0E0E0' : '#AAAAAA'} 
                style={styles.tabIcon} 
              />
              <Text style={[styles.tabText, activeTab === 'liked' && styles.activeTabText]}>
                Liked
              </Text>
            </TouchableOpacity>
          </View>
          
          {/* Videos Grid */}
          <View style={styles.videosGrid}>
            {userVideos.map((video, index) => renderVideoItem(video, index))}
          </View>
          
          {/* Visily Attribution */}
          <View style={styles.attribution}>
            <Text style={styles.attributionText}>Made with</Text>
            <View style={styles.visilyBadge}>
              <Text style={styles.visilyText}>Visily</Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  gradientBackground: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editProfileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(10px)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  avatarBorder: {
    position: 'absolute',
    top: -4,
    left: -4,
    right: -4,
    bottom: -4,
    borderRadius: 64,
    borderWidth: 3,
    borderColor: '#BB86FC',
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#E0E0E0',
    marginBottom: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 24,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#E0E0E0',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#AAAAAA',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  tabIcon: {
    marginRight: 6,
  },
  tabText: {
    fontSize: 14,
    color: '#AAAAAA',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#E0E0E0',
    fontWeight: '600',
  },
  videosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  videoItem: {
    width: (width - 48) / 3,
    marginRight: 8,
    marginBottom: 8,
  },
  videoItemLast: {
    marginRight: 0,
  },
  videoContainer: {
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
    aspectRatio: 0.7,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
  },
  videoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
  },
  videoInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  videoViews: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
    marginLeft: 4,
  },
  attribution: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 32,
  },
  attributionText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.4)',
    marginRight: 4,
  },
  visilyBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  visilyText: {
    fontSize: 12,
    color: '#E0E0E0',
    fontWeight: '600',
  },
});