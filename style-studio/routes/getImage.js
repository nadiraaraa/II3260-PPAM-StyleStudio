import { supabase } from '@/supabaseClient';

export const getImageUrl = async (imageName) => {
    const ss = await supabase.storage
      .from('images')
      .getPublicUrl(imageName);

    console.log(ss.data);
    return ss.data;
  };