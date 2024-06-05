import { decode } from 'base64-arraybuffer';
import { supabase } from '@/supabaseClient';

export const uploadImage = async (base64, fileName, mimeType) => {
  try {
    // Fetch the image from the local uri
    // const response = await fetch(uri);
    // const blob = await response.blob();

    // if (!blob.size) {
    //   throw new Error('Fetched Blob is empty.');
    // }

    // console.log("blob: ", blob);

    // // Convert blob to array buffer using FileReader
    // const arrayBuffer = await new Promise((resolve, reject) => {
    //   const reader = new FileReader();
    //   reader.onloadend = () => resolve(reader.result);
    //   reader.onerror = reject;
    //   reader.readAsArrayBuffer(blob);
    // });

    // if (!arrayBuffer || arrayBuffer.length === 0) {
    //   throw new Error('ArrayBuffer conversion failed or resulted in an empty buffer.');
    // }

    // // Decode array buffer to base64
    // const base64ArrayBuffer = decode(arrayBuffer);
    // console.log("64b", arrayBuffer);

    // if (!base64ArrayBuffer || base64ArrayBuffer.length === 0) {
    //   throw new Error('Base64 conversion failed or resulted in an empty buffer.');
    // }

    // Upload to Supabase storage
    const { data, error } = await supabase.storage
      .from('images')
      .upload(fileName, decode(base64), {
        contentType: mimeType,
      });

    if (error) {
      throw error;
    }

    console.log('File uploaded successfully:', data);
  } catch (error) {
    console.error('Error uploading file:', error.message);
  }
};
