import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
  Modal,
} from 'react-native';
import { X, Heart, MessageCircle, Share, MoveHorizontal as MoreHorizontal, Send, Music } from 'lucide-react-native';

interface Comment {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  text: string;
  timestamp: string;
  liked?: boolean;
}

interface VideoPlayerProps {
  visible: boolean;
  onClose: () => void;
  video?: {
    id: string;
    title: string;
    creator: {
      name: string;
      avatar: string;
    };
    likes: string;
    comments: string;
    backgroundImage: string;
    music: string;
  };
}

export default function VideoPlayer({ visible, onClose, video }: VideoPlayerProps) {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [liked, setLiked] = useState(false);

  const comments: Comment[] = [
    {
      id: '1',
      user: { name: 'Laura', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
      text: 'So cute, I wish my cat was like that',
      timestamp: '6 mins ago',
      liked: true,
    },
    {
      id: '2',
      user: { name: 'Lauren', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
      text: 'Look at her, as if "mom, i want food"',
      timestamp: '20 mins ago',
      liked: true,
    },
    {
      id: '3',
      user: { name: 'Liz', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
      text: 'My cats also often wait for me to come home from work in front of the door hehe',
      timestamp: '24 mins ago',
      liked: true,
    },
    {
      id: '4',
      user: { name: 'Anne', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
      text: 'Awwwwww',
      timestamp: '30 mins ago',
      liked: false,
    },
    {
      id: '5',
      user: { name: 'Larry', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' },
      text: 'I want to cuddle',
      timestamp: '50 mins ago',
      liked: false,
    },
  ];

  if (!video) return null;

  const renderComment = (comment: Comment) => (
    <View key={comment.id} style={styles.commentItem}>
      <Image source={{ uri: comment.user.avatar }} style={styles.commentAvatar} />
      <View style={styles.commentContent}>
        <Text style={styles.commentUser}>{comment.user.name}</Text>
        <Text style={styles.commentText}>{comment.text}</Text>
        <Text style={styles.commentTime}>{comment.timestamp}</Text>
      </View>
      <TouchableOpacity style={styles.commentLike}>
        <Heart size={20} color={comment.liked ? '#FF6B9D' : '#E5E7EB'} fill={comment.liked ? '#FF6B9D' : 'transparent'} />
      </TouchableOpacity>
    </View>
  );

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen">
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        
        {/* Background Video/Image */}
        <Image source={{ uri: video.backgroundImage }} style={styles.backgroundMedia} />
        
        {/* Close Button */}
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <X size={28} color="white" strokeWidth={2} />
        </TouchableOpacity>

        {/* Right Side Actions */}
        <View style={styles.rightActions}>
          <View style={styles.creatorAvatar}>
            <Image source={{ uri: video.creator.avatar }} style={styles.creatorImage} />
          </View>
          
          <TouchableOpacity style={styles.actionButton} onPress={() => setLiked(!liked)}>
            <Heart size={32} color={liked ? '#FF6B9D' : 'white'} fill={liked ? '#FF6B9D' : 'transparent'} strokeWidth={2} />
            <Text style={styles.actionText}>19.6k</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton} onPress={() => setShowComments(true)}>
            <MessageCircle size={32} color="white" strokeWidth={2} />
            <Text style={styles.actionText}>700</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Share size={32} color="white" strokeWidth={2} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <MoreHorizontal size={32} color="white" strokeWidth={2} />
          </TouchableOpacity>
        </View>

        {/* Bottom Info */}
        <View style={styles.bottomInfo}>
          <Text style={styles.creatorName}>Laura</Text>
          <Text style={styles.videoDescription}>She waits for me</Text>
          <Text style={styles.hashtags}>#lovepet #cat</Text>
          
          <View style={styles.musicInfo}>
            <Music size={16} color="white" />
            <Text style={styles.musicText}>Baby shark - Kingfong</Text>
          </View>
        </View>

        {/* Comments Modal */}
        <Modal visible={showComments} animationType="slide" presentationStyle="pageSheet">
          <SafeAreaView style={styles.commentsModal}>
            <View style={styles.commentsHeader}>
              <View style={styles.videoPreview}>
                <Image source={{ uri: video.backgroundImage }} style={styles.videoPreviewImage} />
              </View>
              <View style={styles.commentsHeaderText}>
                <Text style={styles.commentsTitle}>700 comments</Text>
                <TouchableOpacity onPress={() => setShowComments(false)}>
                  <X size={24} color="#333" strokeWidth={2} />
                </TouchableOpacity>
              </View>
            </View>
            
            <ScrollView style={styles.commentsList} showsVerticalScrollIndicator={false}>
              {comments.map(renderComment)}
            </ScrollView>
            
            <View style={styles.commentInput}>
              <TextInput
                style={styles.commentInputField}
                placeholder="Leave comment..."
                value={commentText}
                onChangeText={setCommentText}
                placeholderTextColor="#999"
              />
              <TouchableOpacity style={styles.sendButton}>
                <Send size={20} color="#FF6B9D" strokeWidth={2} />
              </TouchableOpacity>
            </View>

            {/* Visily Attribution */}
            <View style={styles.attribution}>
              <Text style={styles.attributionText}>Made with</Text>
              <View style={styles.visilyBadge}>
                <Text style={styles.visilyText}>Visily</Text>
              </View>
            </View>
          </SafeAreaView>
        </Modal>

        {/* Visily Attribution */}
        <View style={styles.attribution}>
          <Text style={styles.attributionText}>Made with</Text>
          <View style={styles.visilyBadge}>
            <Text style={styles.visilyText}>Visily</Text>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4A261',
  },
  backgroundMedia: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 10,
  },
  rightActions: {
    position: 'absolute',
    right: 16,
    bottom: 140,
    alignItems: 'center',
  },
  creatorAvatar: {
    marginBottom: 24,
  },
  creatorImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  actionButton: {
    alignItems: 'center',
    marginBottom: 24,
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
  bottomInfo: {
    position: 'absolute',
    bottom: 80,
    left: 16,
    right: 80,
  },
  creatorName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  videoDescription: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  hashtags: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  musicInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 8,
    fontStyle: 'italic',
  },
  commentsModal: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  commentsHeader: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    alignItems: 'center',
  },
  videoPreview: {
    marginRight: 16,
  },
  videoPreviewImage: {
    width: 60,
    height: 80,
    borderRadius: 8,
  },
  commentsHeaderText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  commentsList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  commentItem: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F9FAFB',
  },
  commentAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  commentContent: {
    flex: 1,
  },
  commentUser: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  commentText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 4,
  },
  commentTime: {
    fontSize: 12,
    color: '#666',
  },
  commentLike: {
    padding: 4,
  },
  commentInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    backgroundColor: '#FFFFFF',
  },
  commentInputField: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    marginRight: 12,
  },
  sendButton: {
    padding: 8,
  },
  attribution: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  attributionText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
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