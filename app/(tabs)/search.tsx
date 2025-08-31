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
  TextInput,
  Dimensions,
} from 'react-native';
import { X, Filter, Play, Heart } from 'lucide-react-native';

const { width } = Dimensions.get('window');

interface VideoItem {
  id: string;
  title: string;
  views: string;
  likes: string;
  thumbnail: string;
  creator: {
    name: string;
    avatar: string;
  };
}

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('Pet');
  const [activeTab, setActiveTab] = useState('Trending');

  const searchResults: VideoItem[] = [
    {
      id: '1',
      title: 'Eiusmod Lorem aliquip exercitation',
      views: '1.5M views',
      likes: '12.3K',
      thumbnail: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      creator: { name: 'Laura', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' }
    },
    {
      id: '2',
      title: 'Reprehenderit ad fugiat nulla mollit',
      views: '12.4K views',
      likes: '19.6K',
      thumbnail: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      creator: { name: 'Liz', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' }
    },
    {
      id: '3',
      title: 'Consectetur est aliquip adipisicing',
      views: '1.5 M views',
      likes: '24.3K',
      thumbnail: 'https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      creator: { name: 'Cris', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' }
    },
    {
      id: '4',
      title: 'Aute adipisicing ea in nostrud sunt',
      views: '1.5 M views',
      likes: '29.7K',
      thumbnail: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      creator: { name: 'Lina', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' }
    }
  ];

  const suggestions = [
    'Funny moments of pet',
    'Cats',
    'Dogs',
    'Foods for pet',
    'Vet center'
  ];

  const tabs = ['Trending', 'Accounts', 'Streaming', 'Audio'];

  const renderVideoItem = (video: VideoItem) => (
    <TouchableOpacity key={video.id} style={styles.videoItem}>
      <View style={styles.videoContainer}>
        <Image source={{ uri: video.thumbnail }} style={styles.videoThumbnail} />
        <TouchableOpacity style={styles.playButton}>
          <Play size={24} color="white" fill="white" />
        </TouchableOpacity>
        <View style={styles.videoStats}>
          <View style={styles.statItem}>
            <Play size={12} color="white" />
            <Text style={styles.statText}>{video.views}</Text>
          </View>
          <View style={styles.statItem}>
            <Heart size={12} color="white" />
            <Text style={styles.statText}>{video.likes}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.videoTitle} numberOfLines={2}>{video.title}</Text>
      <View style={styles.creatorInfo}>
        <Image source={{ uri: video.creator.avatar }} style={styles.creatorAvatar} />
        <Text style={styles.creatorName}>{video.creator.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Search Header */}
      <View style={styles.searchHeader}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search..."
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.clearButton}>
            <X size={20} color="#666" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Results */}
        <View style={styles.videoGrid}>
          {searchResults.map(renderVideoItem)}
        </View>

        {/* Show More Button */}
        <TouchableOpacity style={styles.showMoreButton}>
          <Text style={styles.showMoreText}>Show more</Text>
          <Text style={styles.showMoreIcon}>⌄</Text>
        </TouchableOpacity>

        {/* Maybe you're interested */}
        <View style={styles.suggestionsSection}>
          <Text style={styles.suggestionsTitle}>Maybe you're interested</Text>
          <View style={styles.suggestionTags}>
            {suggestions.map((suggestion, index) => (
              <TouchableOpacity key={index} style={styles.suggestionTag}>
                <Text style={styles.suggestionText}>{suggestion}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  clearButton: {
    padding: 4,
  },
  filterButton: {
    padding: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  activeTab: {
    backgroundColor: '#FF6B9D',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
  videoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  videoItem: {
    width: (width - 48) / 2,
    marginBottom: 24,
  },
  videoContainer: {
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 8,
  },
  videoThumbnail: {
    width: '100%',
    height: 120,
  },
  playButton: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoStats: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    alignItems: 'flex-end',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  statText: {
    fontSize: 12,
    color: '#FFFFFF',
    marginLeft: 4,
    fontWeight: '500',
  },
  videoTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
    lineHeight: 18,
  },
  creatorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  creatorAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 6,
  },
  creatorName: {
    fontSize: 12,
    color: '#666',
  },
  showMoreButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
  },
  showMoreText: {
    fontSize: 16,
    color: '#FF6B9D',
    marginRight: 8,
  },
  showMoreIcon: {
    fontSize: 16,
    color: '#FF6B9D',
  },
  suggestionsSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  suggestionsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  suggestionTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  suggestionTag: {
    backgroundColor: '#E0F2FE',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  suggestionText: {
    fontSize: 14,
    color: '#0891B2',
  },
  attribution: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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