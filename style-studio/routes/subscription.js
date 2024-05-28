import supabase from "../supabaseClient.js"


// Function to fetch subscription history for the logged-in customer
async function fetchSubscription() {
    try {
        // Fetch subscriptions where cust_id matches the logged-in user's ID
        const { data: subscriptions, error } = await supabase
            .from('subscription')
            .select('*')
            .order('created_at', {ascending: false});

        if (error) {
            throw error;
        }

        // Extract subscription data with tailor names
        return subscriptions;
    } catch (error) {
        console.error('Error fetching subscription history:', error.message);
        return [];
    }
}

// Example usage
const uid = 1;
fetchSubscription()
    .then(subscriptionHistory => {
        console.log('subscription History:', subscriptionHistory);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
