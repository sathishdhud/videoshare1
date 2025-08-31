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
  Modal,
} from 'react-native';
import { X, ShoppingCart } from 'lucide-react-native';

interface ShoppingOverlayProps {
  visible: boolean;
  onClose: () => void;
}

export default function ShoppingOverlay({ visible, onClose }: ShoppingOverlayProps) {
  const [commentText, setCommentText] = useState('');

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen">
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        
        {/* Background */}
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1' }} 
          style={styles.backgroundImage} 
        />
        
        {/* Overlay Effects */}
        <View style={styles.overlay}>
          <Text style={styles.emoji}>💜</Text>
          <Text style={styles.emojiSmall}>😊</Text>
          <Text style={styles.emojiSmall}>😃</Text>
          <Text style={styles.emoji}>💜</Text>
          <Text style={styles.emojiHeart}>👍</Text>
        </View>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.shopInfo}>
            <View style={styles.shopIcon}>
              <ShoppingCart size={20} color="#4F46E5" strokeWidth={2} />
            </View>
            <Text style={styles.shopName}>Joy Shop</Text>
          </View>
          <View style={styles.headerRight}>
            <View style={styles.likeCount}>
              <Text style={styles.likeText}>1.2k</Text>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <X size={24} color="white" strokeWidth={2} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Chat Messages */}
        <View style={styles.chatContainer}>
          <View style={styles.messageItem}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' }} 
              style={styles.messageAvatar} 
            />
            <View style={styles.messageContent}>
              <Text style={styles.messageName}>Jane</Text>
              <Text style={styles.messageText}>Is this product available in black?</Text>
            </View>
          </View>

          <View style={styles.messageItem}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1' }} 
              style={styles.messageAvatar} 
            />
            <View style={styles.messageContent}>
              <Text style={styles.messageName}>Lauren</Text>
              <Text style={styles.messageText}>I want to buy one for my daughter's upcoming birthday, how can I order?</Text>
            </View>
          </View>
        </View>

        {/* Product Card */}
        <View style={styles.productCard}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/163696/basketball-sport-game-orange-163696.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1' }} 
            style={styles.productImage} 
          />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>Orange Ball</Text>
            <Text style={styles.productPrice}>$22</Text>
            <Text style={styles.productSold}>120 sold</Text>
          </View>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy now</Text>
          </TouchableOpacity>
        </View>

        {/* Comment Input */}
        <View style={styles.commentInput}>
          <TextInput
            style={styles.commentInputField}
            placeholder="Leave comment..."
            value={commentText}
            onChangeText={setCommentText}
            placeholderTextColor="rgba(255,255,255,0.7)"
          />
          <View style={styles.commentActions}>
            <TouchableOpacity style={styles.emojiButton}>
              <Text style={styles.emojiIcon}>👍</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.emojiButton}>
              <Text style={styles.emojiIcon}>💜</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.emojiButton}>
              <Text style={styles.emojiIcon}>😊</Text>
            </TouchableOpacity>
          </View>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A90E2',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  emoji: {
    position: 'absolute',
    fontSize: 40,
    top: '20%',
    right: '20%',
  },
  emojiSmall: {
    position: 'absolute',
    fontSize: 32,
    top: '30%',
    right: '60%',
  },
  emojiHeart: {
    position: 'absolute',
    fontSize: 36,
    top: '50%',
    right: '10%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
  },
  shopInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shopIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  shopName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    backgroundColor: '#EF4444',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 12,
  },
  likeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  closeButton: {
    padding: 4,
  },
  chatContainer: {
    position: 'absolute',
    bottom: 200,
    left: 16,
    right: 16,
  },
  messageItem: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  messageAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  messageContent: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 12,
    borderRadius: 16,
    borderTopLeftRadius: 4,
  },
  messageName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  messageText: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 18,
  },
  productCard: {
    position: 'absolute',
    bottom: 100,
    left: 16,
    right: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 2,
  },
  productSold: {
    fontSize: 12,
    color: '#666',
  },
  buyButton: {
    backgroundColor: '#FF6B9D',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buyButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  commentInput: {
    position: 'absolute',
    bottom: 40,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentInputField: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    color: '#FFFFFF',
    marginRight: 12,
  },
  commentActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emojiButton: {
    marginHorizontal: 4,
  },
  emojiIcon: {
    fontSize: 24,
  },
  attribution: {
    position: 'absolute',
    bottom: 5,
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