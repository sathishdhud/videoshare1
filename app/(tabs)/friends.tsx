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
import { ArrowLeft, Search, Menu, X } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const isIOS = Platform.OS === 'ios';

interface Friend {
  id: string;
  name: string;
  avatar: string;
  isFollowing?: boolean;
}

interface UserProfile {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  followers: number;
  following: number;
  likes: number;
  videos: any[];
}

export default function FriendsScreen() {
  const [currentView, setCurrentView] = useState<'list' | 'profile' | 'userProfile'>('list');
  const [selectedUser, setSelectedUser] = useState<Friend | null>(null);
  
  const followingList: Friend[] = [
    {
      id: '1',
      name: 'Kiran Glaucus',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      isFollowing: true,
    },
    {
      id: '2',
      name: 'Sally Rooney',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      isFollowing: true,
    },
    {
      id: '3',
      name: 'Marie Franco',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      isFollowing: true,
    },
    {
      id: '4',
      name: 'Jena Nguyen',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      isFollowing: true,
    },
    {
      id: '5',
      name: 'Kristin Watson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      isFollowing: true,
    },
  ];
  
  const suggestions: Friend[] = [
    {
      id: '6',
      name: 'Bobby Sandoval',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      isFollowing: false,
    },
    {
      id: '7',
      name: 'Jennie Ponce',
      avatar: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      isFollowing: false,
    },
    {
      id: '8',
      name: 'Anja O\'Connor',
      avatar: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      isFollowing: false,
    },
  ];
  
  const userProfile: UserProfile = {
    id: '1',
    name: 'Kiran Glaucus',
    bio: 'I love a colorful life',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
    followers: 628,
    following: 203,
    likes: 2634,
    videos: [
      { id: '1', thumbnail: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&dpr=1', views: '1.5M' },
      { id: '2', thumbnail: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&dpr=1', views: '1.5M' },
      { id: '3', thumbnail: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&dpr=1', views: '1.5M' },
      { id: '4', thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&dpr=1', views: '1.5M' },
      { id: '5', thumbnail: 'https://images.pexels.com/photos/265920/pexels-photo-265920.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&dpr=1', views: '1.5M' },
      { id: '6', thumbnail: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&dpr=1', views: '1.5M' },
    ]
  };

  const renderFollowingUser = (user: Friend) => (
    <TouchableOpacity 
      key={user.id} 
      style={styles.userItem}
      onPress={() => {
        setSelectedUser(user);
        setCurrentView('userProfile');
      }}
    >
      <View style={styles.userInfo}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: user.avatar }} style={styles.userAvatar} />
          <View style={styles.userAvatarBorder} />
        </View>
        <Text style={styles.userName}>{user.name}</Text>
      </View>
      <TouchableOpacity style={styles.followingButton}>
        <Text style={styles.followingButtonText}>Following</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreIcon}>⋯</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderSuggestion = (user: Friend) => (
    <View key={user.id} style={styles.suggestionItem}>
      <TouchableOpacity style={styles.dismissButton}>
        <X size={16} color="#FFFFFF" strokeWidth={2} />
      </TouchableOpacity>
      <View style={styles.suggestionAvatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.suggestionAvatar} />
        <View style={styles.suggestionAvatarBorder} />
      </View>
      <Text style={styles.suggestionName}>{user.name}</Text>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );

  if (currentView === 'userProfile' && selectedUser) {
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
          {/* Profile Header */}
          <View style={styles.profileHeader}>
            <TouchableOpacity onPress={() => setCurrentView('list')}>
              <Ionicons name="arrow-back-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            style={styles.profileContent} 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Profile Info */}
            <View style={styles.profileInfo}>
              <View style={styles.profileAvatarContainer}>
                <Image source={{ uri: userProfile.avatar }} style={styles.profileAvatar} />
                <View style={styles.profileAvatarBorder} />
              </View>
              <Text style={styles.profileName}>{userProfile.name}</Text>
              <Text style={styles.profileBio}>{userProfile.bio}</Text>
              <View style={styles.profileHearts}>
                <Text style={styles.heartIcon}>❤️</Text>
                <Text style={styles.heartIcon}>❤️</Text>
                <Text style={styles.heartIcon}>❤️</Text>
              </View>
              
              <View style={styles.profileStats}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>{userProfile.following}</Text>
                  <Text style={styles.statLabel}>Following</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>{userProfile.followers}</Text>
                  <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>{userProfile.likes}</Text>
                  <Text style={styles.statLabel}>Likes</Text>
                </View>
              </View>
              
              <View style={styles.profileActions}>
                <TouchableOpacity style={styles.followActionButton}>
                  <Text style={styles.followActionText}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.messageButton}>
                  <Text style={styles.messageButtonText}>Message</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            {/* Suggested Accounts */}
            <View style={styles.suggestedSection}>
              <View style={styles.suggestedHeader}>
                <Text style={styles.suggestedTitle}>Suggested accounts</Text>
                <TouchableOpacity>
                  <Text style={styles.viewMoreText}>View more</Text>
                </TouchableOpacity>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.suggestedList}>
                  {suggestions.map(renderSuggestion)}
                </View>
              </ScrollView>
            </View>
            
            {/* Profile Tabs */}
            <View style={styles.profileTabs}>
              <TouchableOpacity style={styles.profileTab}>
                <Ionicons 
                  name="play-circle-outline" 
                  size={18} 
                  color="#FFFFFF" 
                  style={styles.tabIcon} 
                />
                <Text style={styles.profileTabText}>Videos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.profileTab, styles.activeProfileTab]}>
                <Ionicons 
                  name="heart-outline" 
                  size={18} 
                  color="#FFFFFF" 
                  style={styles.tabIcon} 
                />
                <Text style={[styles.profileTabText, styles.activeProfileTabText]}>Liked</Text>
              </TouchableOpacity>
            </View>
            
            {/* Videos Grid */}
            <View style={styles.videosGrid}>
              {userProfile.videos.map((video, index) => (
                <TouchableOpacity key={video.id} style={styles.videoGridItem}>
                  <Image source={{ uri: video.thumbnail }} style={styles.videoGridThumbnail} />
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.7)']}
                    style={styles.videoGridOverlay}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                  >
                    <View style={styles.videoGridInfo}>
                      <Ionicons name="play-circle" size={14} color="#FFFFFF" />
                      <Text style={styles.videoGridViews}>{video.views}</Text>
                    </View>
                    <TouchableOpacity style={styles.videoGridHeart}>
                      <Ionicons name="heart" size={16} color="#FF6B9D" />
                    </TouchableOpacity>
                  </LinearGradient>
                </TouchableOpacity>
              ))}
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
          <TouchableOpacity onPress={() => setCurrentView('userProfile')}>
            <View style={styles.headerProfile}>
              <View style={styles.headerAvatarContainer}>
                <Image 
                  source={{ uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' }} 
                  style={styles.headerAvatar} 
                />
                <View style={styles.headerAvatarBorder} />
              </View>
              <Text style={styles.headerName}>Ruth Sanders</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="search-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="menu-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Stats */}
        <View style={styles.statsContainer}>
          <Text style={styles.followersCount}>368 followers</Text>
          <TouchableOpacity>
            <Text style={styles.followingCount}>456 following</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView 
          style={styles.content} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Following List */}
          <View style={styles.followingSection}>
            {followingList.map(renderFollowingUser)}
          </View>
          
          {/* Suggestions */}
          <View style={styles.suggestionsSection}>
            <Text style={styles.suggestionsTitle}>Suggestions for you</Text>
            {suggestions.map((user) => (
              <View key={user.id} style={styles.suggestionRow}>
                <View style={styles.suggestionLeft}>
                  <View style={styles.suggestionRowAvatarContainer}>
                    <Image source={{ uri: user.avatar }} style={styles.suggestionRowAvatar} />
                    <View style={styles.suggestionRowAvatarBorder} />
                  </View>
                  <Text style={styles.suggestionRowName}>{user.name}</Text>
                </View>
                <View style={styles.suggestionActions}>
                  <TouchableOpacity style={styles.followSuggestionButton}>
                    <Text style={styles.followSuggestionText}>Follow</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.dismissSuggestionButton}>
                    <X size={20} color="#FFFFFF" strokeWidth={2} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
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
  headerProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAvatarContainer: {
    position: 'relative',
    marginRight: 8,
  },
  headerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  headerAvatarBorder: {
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#25D366',
  },
  headerName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(37, 211, 102, 0.5)',
  },
  followersCount: {
    fontSize: 16,
    color: '#E0E0E0',
    marginRight: 24,
    fontWeight: '500',
  },
  followingCount: {
    fontSize: 16,
    color: '#25D366',
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  followingSection: {
    paddingHorizontal: 16,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  userAvatarBorder: {
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: '#25D366',
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  followingButton: {
    backgroundColor: 'rgba(37, 211, 102, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  followingButtonText: {
    fontSize: 14,
    color: '#25D366',
    fontWeight: '600',
  },
  moreButton: {
    padding: 8,
  },
  moreIcon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  suggestionsSection: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  suggestionsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  suggestionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  suggestionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  suggestionRowAvatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  suggestionRowAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  suggestionRowAvatarBorder: {
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: '#25D366',
  },
  suggestionRowName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  suggestionActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followSuggestionButton: {
    backgroundColor: 'rgba(37, 211, 102, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  followSuggestionText: {
    fontSize: 14,
    color: '#25D366',
    fontWeight: '600',
  },
  dismissSuggestionButton: {
    padding: 8,
  },
  // Profile View Styles
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  profileContent: {
    flex: 1,
  },
  profileInfo: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  profileAvatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileAvatarBorder: {
    position: 'absolute',
    top: -3,
    left: -3,
    right: -3,
    bottom: -3,
    borderRadius: 53,
    borderWidth: 3,
    borderColor: '#25D366',
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  profileBio: {
    fontSize: 16,
    color: '#E0E0E0',
    marginBottom: 8,
    fontWeight: '500',
  },
  profileHearts: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  heartIcon: {
    fontSize: 20,
    marginHorizontal: 2,
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  statLabel: {
    fontSize: 14,
    color: '#E0E0E0',
    fontWeight: '500',
  },
  profileActions: {
    flexDirection: 'row',
    gap: 12,
  },
  followActionButton: {
    backgroundColor: 'rgba(37, 211, 102, 0.8)',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
  },
  followActionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  messageButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
  },
  messageButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  suggestedSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
    marginTop: 16,
  },
  suggestedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  suggestedTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  viewMoreText: {
    fontSize: 14,
    color: '#25D366',
    fontWeight: '500',
  },
  suggestedList: {
    flexDirection: 'row',
  },
  suggestionItem: {
    alignItems: 'center',
    marginRight: 20,
    position: 'relative',
  },
  dismissButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 12,
    padding: 4,
    zIndex: 1,
  },
  suggestionAvatarContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  suggestionAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  suggestionAvatarBorder: {
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    borderRadius: 42,
    borderWidth: 2,
    borderColor: '#25D366',
  },
  suggestionName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  followButton: {
    backgroundColor: 'rgba(37, 211, 102, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  followButtonText: {
    color: '#25D366',
    fontSize: 12,
    fontWeight: '600',
  },
  profileTabs: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  profileTab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  activeProfileTab: {
    backgroundColor: 'rgba(37, 211, 102, 0.2)',
  },
  tabIcon: {
    marginRight: 6,
  },
  profileTabText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  activeProfileTabText: {
    color: '#25D366',
    fontWeight: '600',
  },
  videosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  videoGridItem: {
    width: (width - 48) / 3,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  videoGridThumbnail: {
    width: '100%',
    height: '100%',
    aspectRatio: 0.7,
  },
  videoGridOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  videoGridInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  videoGridViews: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
    marginLeft: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  videoGridHeart: {
    padding: 4,
  },
  attribution: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 32,
  },
  attributionText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    marginRight: 4,
  },
  visilyBadge: {
    backgroundColor: 'rgba(37, 211, 102, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  visilyText: {
    fontSize: 12,
    color: '#25D366',
    fontWeight: '600',
  },
});