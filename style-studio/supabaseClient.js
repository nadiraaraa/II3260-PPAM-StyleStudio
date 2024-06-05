import AsyncStorage from '@react-native-async-storage/async-storage'
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mxjwxwclagnqjwaptyjr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14and4d2NsYWducWp3YXB0eWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY3OTc4NzIsImV4cCI6MjAzMjM3Mzg3Mn0.Uc7mi2TEUj1WFQYvZjoDOWzWGla7OSsxEo-T6ELuBvU';
export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        storage: AsyncStorage,
        detectSessionInUrl: false,
    },
});

export default supabase;