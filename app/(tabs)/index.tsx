import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Bell, Play } from 'lucide-react-native';

interface StoryUser {
  id: string;
  name: string;
  avatar: string;
  hasStory?: boolean;
}

interface VideoItem {
  id: string;
  title: string;
  views: string;
  thumbnail: string;
  creator: {
    name: string;
    avatar: string;
  };
  isLive?: boolean;
  duration?: string;
}

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const storyUsers: StoryUser[] = [
    { id: '1', name: 'You', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1' },
    { id: '2', name: 'Adam', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1', hasStory: true },
    { id: '3', name: 'William', avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1', hasStory: true },
    { id: '4', name: 'Peter', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1', hasStory: true },
    { id: '5', name: 'Julia', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1', hasStory: true },
    { id: '6', name: 'Rose', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1', hasStory: true },
  ];

  const trendingVideos: VideoItem[] = [
    {
      id: '1',
      title: 'Lovely',
      views: '1.5M views',
      thumbnail: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      creator: { name: 'User', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' }
    },
    {
      id: '2',
      title: 'Sweet',
      views: '1.2M views',
      thumbnail: 'https://images.pexels.com/photos/265920/pexels-photo-265920.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      creator: { name: 'User', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' }
    },
    {
      id: '3',
      title: 'Explore',
      views: '1.8M views',
      thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      creator: { name: 'User', avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' }
    }
  ];

  const streamingVideos: VideoItem[] = [
    {
      id: '1',
      title: 'Lifestyle',
      views: '1.5M views',
      thumbnail: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      creator: { name: 'Creator', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
      isLive: true,
      duration: '1 min ago'
    },
    {
      id: '2',
      title: 'Cooking',
      views: '1.3M views',
      thumbnail: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      creator: { name: 'Chef', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
      isLive: true,
      duration: '45 min ago'
    },
    {
      id: '3',
      title: 'Dancing',
      views: '2.4M views',
      thumbnail: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      creator: { name: 'Dancer', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
      isLive: true,
      duration: '46 min ago'
    }
  ];

  const audioContent = [
    {
      id: '1',
      title: 'Perfect lady',
      category: 'Bookcase',
      thumbnail: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
    },
    {
      id: '2',
      title: 'Experience',
      category: 'Lifestyle',
      thumbnail: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
    },
    {
      id: '3',
      title: 'Yourself',
      category: 'Bookcase',
      thumbnail: 'https://images.pexels.com/photos/256473/pexels-photo-256473.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
    },
    {
      id: '4',
      title: 'Experience',
      category: 'Lifestyle',
      thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
    }
  ];

  const categories = [
    { name: 'Sports', icon: '🚴', color: '#FFE4E6' },
    { name: 'Podcasts', icon: '🎙️', color: '#E0F2FE' },
    { name: 'News', icon: '📄', color: '#FEF3C7' },
    { name: 'Travel', icon: '🌍', color: '#E0F2FE' },
    { name: 'Health', icon: '💜', color: '#F3E8FF' },
    { name: 'Weather', icon: '☀️', color: '#FEF3C7' },
    { name: 'Art', icon: '🎨', color: '#E0F2FE' },
    { name: 'Topics', icon: '+20', color: '#FEF3C7' },
  ];

  const renderStoryUser = (user: StoryUser) => (
    <View key={user.id} style={styles.storyContainer}>
      <View style={[styles.storyAvatar, user.hasStory && styles.storyAvatarActive]}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        {user.name === 'You' && <View style={styles.addStoryButton}><Text style={styles.addStoryText}>+</Text></View>}
        {user.hasStory && <View style={styles.storyIndicator} />}
      </View>
      <Text style={styles.storyName}>{user.name}</Text>
    </View>
  );

  const renderVideoCard = (video: VideoItem, size: 'small' | 'medium' = 'small') => (
    <TouchableOpacity key={video.id} style={[styles.videoCard, size === 'medium' && styles.videoCardMedium]}>
      <Image source={{ uri: video.thumbnail }} style={[styles.videoThumbnail, size === 'medium' && styles.videoThumbnailMedium]} />
      {video.isLive && (
        <View style={styles.liveIndicator}>
          <Text style={styles.liveText}>● {video.duration}</Text>
        </View>
      )}
      <View style={styles.videoOverlay}>
        <Text style={styles.videoTitle}>{video.title}</Text>
        <Text style={styles.videoViews}>{video.views}</Text>
        <View style={styles.creatorInfo}>
          <Image source={{ uri: video.creator.avatar }} style={styles.creatorAvatar} />
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderAudioCard = (audio: any) => (
    <TouchableOpacity key={audio.id} style={styles.audioCard}>
      <Image source={{ uri: audio.thumbnail }} style={styles.audioThumbnail} />
      <View style={styles.audioInfo}>
        <Text style={styles.audioTitle}>{audio.title}</Text>
        <Text style={styles.audioCategory}>{audio.category}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logo} />
          <Text style={styles.appTitle}>Video Sharing App</Text>
        </View>
        <TouchableOpacity>
          <Bell size={24} color="#333" strokeWidth={2} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Stories Section */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesSection}>
          {storyUsers.map(renderStoryUser)}
        </ScrollView>

        {/* Top Trending Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top trending</Text>
            <TouchableOpacity>
              <Text style={styles.viewMore}>View more</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.trendingContainer}>
              {trendingVideos.map(video => renderVideoCard(video, 'medium'))}
            </View>
          </ScrollView>
        </View>

        {/* Browse Topics Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Browse topic</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <TouchableOpacity key={index} style={[styles.categoryCard, { backgroundColor: category.color }]}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Streaming Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Streaming</Text>
            <TouchableOpacity>
              <Text style={styles.viewMore}>View more</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.streamingContainer}>
              {streamingVideos.map(video => renderVideoCard(video, 'medium'))}
            </View>
          </ScrollView>
        </View>

        {/* Audio Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Audio</Text>
            <TouchableOpacity>
              <Text style={styles.viewMore}>View more</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.audioContainer}>
              {audioContent.map(renderAudioCard)}
            </View>
          </ScrollView>
        </View>

        {/* Visily Attribution */}
        <View style={styles.attribution}>
          <Text style={styles.attributionText}>Made with</Text>
          <View style={styles.visilyBadge}>
            <Text style={styles.visilyText}>Visily</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    backgroundColor: '#FF6B9D',
    borderRadius: 15,
    marginRight: 8,
    transform: [{ rotate: '45deg' }],
  },
  appTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  storiesSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  storyContainer: {
    alignItems: 'center',
    marginRight: 16,
  },
  storyAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    padding: 2,
    position: 'relative',
  },
  storyAvatarActive: {
    backgroundColor: '#FF6B9D',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  addStoryButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FF6B9D',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  addStoryText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  storyIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: '#4F46E5',
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  storyName: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  viewMore: {
    fontSize: 14,
    color: '#FF6B9D',
    fontWeight: '500',
  },
  trendingContainer: {
    flexDirection: 'row',
  },
  videoCard: {
    width: 160,
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  videoCardMedium: {
    width: 200,
    height: 160,
  },
  videoThumbnail: {
    width: '100%',
    height: 120,
  },
  videoThumbnailMedium: {
    height: 160,
  },
  liveIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#EF4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  liveText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  videoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  videoViews: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  creatorInfo: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  creatorAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '22%',
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
  },
  streamingContainer: {
    flexDirection: 'row',
  },
  audioContainer: {
    flexDirection: 'row',
  },
  audioCard: {
    width: 120,
    marginRight: 12,
  },
  audioThumbnail: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },
  audioInfo: {
    alignItems: 'center',
  },
  audioTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  audioCategory: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  attribution: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 32,
  },
  attributionText: {
    fontSize: 12,
    color: '#999',
    marginRight: 4,
  },
  visilyBadge: {
    backgroundColor: '#4F46E5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  visilyText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});