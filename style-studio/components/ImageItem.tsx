import { FileObject } from '@supabase/storage-js'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { supabase } from '../supabaseClient'
import { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import * as FileSystem from 'expo-file-system'

// Image item component that displays the image from Supabase Storage and a delete button
const ImageItem = ({
  item,
  userId,
  onRemoveImage,
}: {
  item: FileObject
  userId: string
  onRemoveImage: () => void
}) => {
  const [imageUri, setImageUri] = useState<string>('')

  useEffect(() => {
    const downloadImage = async () => {
      try {
        const { data, error } = await supabase.storage
          .from('files')
          .download(`${userId}/${item.name}`)

        if (error) {
          console.error('Error downloading file:', error.message)
          return
        }

        const fileUri = FileSystem.documentDirectory + item.name
        await FileSystem.writeAsStringAsync(fileUri, await data.text(), { encoding: FileSystem.EncodingType.Base64 })
        setImageUri(fileUri)
      } catch (error) {
        console.error('Error processing file:', error.message)
      }
    }

    downloadImage()
  }, [item, userId])

  return (
    <View style={{ flexDirection: 'row', margin: 1, alignItems: 'center', gap: 5 }}>
      {imageUri ? (
        <Image style={{ width: 80, height: 80 }} source={{ uri: imageUri }} />
      ) : (
        <View style={{ width: 80, height: 80, backgroundColor: '#1A1A1A' }} />
      )}
      <Text style={{ flex: 1, color: '#fff' }}>{item.name}</Text>
      {/* Delete image button */}
      <TouchableOpacity onPress={onRemoveImage}>
        <Ionicons name="trash-outline" size={20} color={'#fff'} />
      </TouchableOpacity>
    </View>
  )
}

export default ImageItem
