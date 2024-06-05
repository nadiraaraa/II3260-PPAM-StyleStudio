import { Image, View, Text } from 'react-native'
import { supabase } from '@/supabaseClient'
import { useState, useEffect } from 'react'

// Image item component that displays the image from Supabase Storage and a delete button
const ImageItem = ({
  item, height
}: {
  item: string, height: number
}) => {
  const [imageUri, setImageUri] = useState<string>('')

  useEffect(() => {
    // Download the image from Supabase Storage
    const downloadImage = async () => {
      // try {
        supabase.storage
          .from('images')
          .download(`${item}`)
          .then(({ data }) => {
            const fr = new FileReader()
            fr.readAsDataURL(data!)
            fr.onload = () => {
              setImageUri(fr.result as string);
            }
          })
      // } catch (error) {
      //   console.error('Error downloading image:', error.message)
      // }
    }

    downloadImage()
  }, [item])

  return (
    <View style={{ flexDirection: 'row', margin: 1, alignItems: 'center', gap: 5 }}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={{ width: 80, height: height, flex: 1, padding: 0, resizeMode: 'cover', margin: 0 }} />
      ) : (
        <View style={{ backgroundColor: '#1A1A1A', width: 120, height: height, flex: 1, padding: 0, margin: 0 }} />
      )}
      {/* <Text style={{ flex: 1, color: '#fff' }}>{item}</Text> */}
      {/* Delete image button */}
      {/* <TouchableOpacity onPress={onRemoveImage}>
        <Ionicons name="trash-outline" size={20} color={'#fff'} />
      </TouchableOpacity> */}
    </View>
  )
}

export default ImageItem
