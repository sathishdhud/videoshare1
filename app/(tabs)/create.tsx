import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  Switch,
} from 'react-native';
import { ArrowLeft, X, ChevronRight, ChevronDown } from 'lucide-react-native';
import { router } from 'expo-router';

export default function CreateScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [commentsEnabled, setCommentsEnabled] = useState(true);
  const [facebookEnabled, setFacebookEnabled] = useState(true);
  const [twitterEnabled, setTwitterEnabled] = useState(false);
  const [instagramEnabled, setInstagramEnabled] = useState(true);
  const [showMusicSelector, setShowMusicSelector] = useState(false);
  const [selectedMusic, setSelectedMusic] = useState('');

  const handleBack = () => {
    router.back();
  };

  const handlePost = () => {
    // Handle post logic here
    alert('Post created successfully!');
    router.back();
  };

  const musicTracks = [
    {
      id: '1',
      title: 'Beautiful lady',
      duration: '00:30',
      thumbnail: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      id: '2',
      title: 'Nice day',
      duration: '00:30',
      thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      id: '3',
      title: 'Sunny',
      duration: '00:30',
      thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      id: '4',
      title: 'Flowers',
      duration: '00:30',
      thumbnail: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      id: '5',
      title: 'Morning coffee',
      duration: '00:30',
      thumbnail: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    }
  ];

  if (showMusicSelector) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        
        {/* Music Selector Header */}
        <View style={styles.musicHeader}>
          <TouchableOpacity onPress={() => setShowMusicSelector(false)} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ArrowLeft size={24} color="#333" strokeWidth={2} />
          </TouchableOpacity>
          <Text style={styles.musicTitle}>Add audio</Text>
          <View style={styles.musicHeaderRight}>
            <TouchableOpacity>
              <Text style={styles.searchIcon}>🔍</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowMusicSelector(false)}>
              <X size={24} color="#333" strokeWidth={2} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Music Tabs */}
        <View style={styles.musicTabs}>
          <TouchableOpacity style={[styles.musicTab, styles.activeMusicTab]}>
            <Text style={[styles.musicTabText, styles.activeMusicTabText]}>For you</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.musicTab}>
            <Text style={styles.musicTabText}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.musicTab}>
            <Text style={styles.musicTabText}>Saved</Text>
          </TouchableOpacity>
        </View>

        {/* Music List */}
        <ScrollView style={styles.musicList}>
          {musicTracks.map((track) => (
            <TouchableOpacity 
              key={track.id} 
              style={styles.musicItem}
              onPress={() => {
                setSelectedMusic(track.title);
                setShowMusicSelector(false);
              }}
            >
              <Image source={{ uri: track.thumbnail }} style={styles.musicThumbnail} />
              <View style={styles.musicInfo}>
                <Text style={styles.musicTrackTitle}>{track.title}</Text>
                <Text style={styles.musicDuration}>{track.duration}</Text>
              </View>
              <TouchableOpacity style={styles.useButton}>
                <Text style={styles.useButtonText}>Use</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.musicMoreButton}>
                <Text style={styles.musicMoreIcon}>⋯</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Visily Attribution */}
        <View style={styles.attribution}>
          <Text style={styles.attributionText}>Made with</Text>
          <View style={styles.visilyBadge}>
            <Text style={styles.visilyText}>Visily</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <ArrowLeft size={24} color="#333" strokeWidth={2} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Post on social</Text>
        <TouchableOpacity>
          <Text style={styles.reviewButton}>Review</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Video Preview */}
        <View style={styles.videoPreview}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=1' }} 
            style={styles.videoThumbnail} 
          />
          <TouchableOpacity style={styles.changeCoverButton}>
            <Text style={styles.changeCoverText}>Change cover photo</Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View style={styles.formSection}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              placeholder="Input title"
              value={title}
              onChangeText={setTitle}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Input description"
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={4}
              placeholderTextColor="#999"
            />
          </View>

          {/* Add Hashtag */}
          <View style={styles.hashtagSection}>
            <Text style={styles.label}>Add hashtag</Text>
            <View style={styles.hashtagContainer}>
              <View style={styles.hashtag}>
                <Text style={styles.hashtagText}>Happy moments</Text>
                <TouchableOpacity>
                  <X size={16} color="#4F46E5" strokeWidth={2} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Tag Someone */}
          <TouchableOpacity style={styles.optionRow}>
            <Text style={styles.optionLabel}>Tag someone</Text>
            <View style={styles.optionRight}>
              <Text style={styles.optionValue}>3 people</Text>
              <ChevronRight size={20} color="#999" strokeWidth={2} />
            </View>
          </TouchableOpacity>

          {/* Comments Toggle */}
          <View style={styles.optionRow}>
            <Text style={styles.optionLabel}>Comments</Text>
            <Switch
              value={commentsEnabled}
              onValueChange={setCommentsEnabled}
              trackColor={{ false: '#E5E7EB', true: '#FF6B9D' }}
              thumbColor="#FFFFFF"
            />
          </View>

          {/* Who Can Watch */}
          <TouchableOpacity style={styles.optionRow}>
            <Text style={styles.optionLabel}>Who can watch</Text>
            <View style={styles.optionRight}>
              <Text style={styles.optionValue}>All</Text>
              <ChevronDown size={20} color="#999" strokeWidth={2} />
            </View>
          </TouchableOpacity>

          {/* Also Post On */}
          <View style={styles.socialSection}>
            <Text style={styles.label}>Also post on</Text>
            
            <View style={styles.socialOption}>
              <View style={styles.socialLeft}>
                <View style={[styles.socialIcon, { backgroundColor: '#1877F2' }]}>
                  <Text style={styles.socialIconText}>f</Text>
                </View>
                <Text style={styles.socialName}>Facebook</Text>
              </View>
              <Switch
                value={facebookEnabled}
                onValueChange={setFacebookEnabled}
                trackColor={{ false: '#E5E7EB', true: '#FF6B9D' }}
                thumbColor="#FFFFFF"
              />
            </View>

            <View style={styles.socialOption}>
              <View style={styles.socialLeft}>
                <View style={[styles.socialIcon, { backgroundColor: '#1DA1F2' }]}>
                  <Text style={styles.socialIconText}>t</Text>
                </View>
                <Text style={styles.socialName}>Twitter</Text>
              </View>
              <Switch
                value={twitterEnabled}
                onValueChange={setTwitterEnabled}
                trackColor={{ false: '#E5E7EB', true: '#FF6B9D' }}
                thumbColor="#FFFFFF"
              />
            </View>

            <View style={styles.socialOption}>
              <View style={styles.socialLeft}>
                <View style={[styles.socialIcon, { backgroundColor: '#E4405F' }]}>
                  <Text style={styles.socialIconText}>📷</Text>
                </View>
                <Text style={styles.socialName}>Instagram</Text>
              </View>
              <Switch
                value={instagramEnabled}
                onValueChange={setInstagramEnabled}
                trackColor={{ false: '#E5E7EB', true: '#FF6B9D' }}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.saveDraftButton}>
            <Text style={styles.saveDraftText}>💾 Save draft</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postButton} onPress={handlePost}>
            <Text style={styles.postButtonText}>📤 Post on social</Text>
          </TouchableOpacity>
        </View>

        {/* Add Music Button */}
        <TouchableOpacity 
          style={styles.addMusicButton}
          onPress={() => setShowMusicSelector(true)}
        >
          <Text style={styles.addMusicText}>🎵 Add Music</Text>
        </TouchableOpacity>

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
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  reviewButton: {
    fontSize: 16,
    color: '#FF6B9D',
    fontWeight: '500',
  },
  content: {
    flex: 1,
  },
  videoPreview: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  videoThumbnail: {
    width: 200,
    height: 280,
    borderRadius: 16,
    marginBottom: 16,
  },
  changeCoverButton: {
    paddingVertical: 8,
  },
  changeCoverText: {
    fontSize: 16,
    color: '#FF6B9D',
    fontWeight: '500',
  },
  formSection: {
    paddingHorizontal: 16,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  hashtagSection: {
    marginBottom: 24,
  },
  hashtagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hashtag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  hashtagText: {
    fontSize: 14,
    color: '#4F46E5',
    marginRight: 6,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  optionLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  optionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionValue: {
    fontSize: 16,
    color: '#4F46E5',
    marginRight: 8,
  },
  socialSection: {
    marginTop: 24,
  },
  socialOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  socialLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  socialIconText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  socialName: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 12,
  },
  saveDraftButton: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  saveDraftText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  postButton: {
    flex: 1,
    backgroundColor: '#FF6B9D',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  postButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  addMusicButton: {
    marginHorizontal: 16,
    backgroundColor: '#EEF2FF',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  addMusicText: {
    fontSize: 16,
    color: '#4F46E5',
    fontWeight: '500',
  },
  // Music Selector Styles
  musicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  musicTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  musicHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  searchIcon: {
    fontSize: 20,
  },
  musicTabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  musicTab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  activeMusicTab: {
    backgroundColor: '#FF6B9D',
  },
  musicTabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeMusicTabText: {
    color: '#FFFFFF',
  },
  musicList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  musicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F9FAFB',
  },
  musicThumbnail: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 12,
  },
  musicInfo: {
    flex: 1,
  },
  musicTrackTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  musicDuration: {
    fontSize: 14,
    color: '#666',
  },
  useButton: {
    backgroundColor: '#FF6B9D',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 12,
  },
  useButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  musicMoreButton: {
    padding: 8,
  },
  musicMoreIcon: {
    fontSize: 20,
    color: '#666',
  },
  attribution: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
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