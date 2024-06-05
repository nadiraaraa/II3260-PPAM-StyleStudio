import * as ImagePicker from 'expo-image-picker';
import { uploadImage } from '@/routes/uploadImage';
// import { supabase } from '@/supabaseClient';

const getMimeTypeFromExtension = (extension: string) => {
  switch (extension.toLowerCase()) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    // Add more cases for other file types if needed
    default:
      return 'application/octet-stream'; // Default to binary data if MIME type is unknown
  }
};

export const pickImage = async () => {
  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      const { base64, type, fileName } = result.assets[0];
      const extension = fileName.split('.').pop();
      const mimeType = getMimeTypeFromExtension(extension);

      uploadImage(result.assets[0].base64, fileName, mimeType);
      console.log(fileName);
      return(fileName);

    } else {
      console.log('User cancelled image picker');
    }
  } catch (error) {
    console.error('Error picking image:', error);
  }

};