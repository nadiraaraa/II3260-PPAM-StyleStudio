import supabase from "../supabaseClient.js"


// Function to fetch profile history for the logged-in customer
async function fetchProfile(uid) {
    try {
        // Fetch profiles where cust_id matches the logged-in user's ID
        const { data: profiles, error } = await supabase
            .from('user')
            .select('*')
            .eq('id', uid)
            .order('created_at', {ascending: false});

        if (error) {
            throw error;
        }

        // Extract profile data with tailor names
        return profiles[0];
    } catch (error) {
        console.error('Error fetching profile:', error.message);
        return [];
    }
}

// Example usage
const uid = 1;
fetchProfile(uid)
    .then(profile => {
        console.log('Profile:', profile);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
