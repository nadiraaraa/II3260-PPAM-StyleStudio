import supabase from "../supabaseClient.js"


// Function to fetch tailorFeedback history for the logged-in customer
async function fetchTailorFeedback(uid) {
    try {
        // Fetch tailorFeedbacks where cust_id matches the logged-in user's ID
        const { data: tailorFeedbacks, error } = await supabase
            .from('tailorFeedback')
            .select('*, catalog(*, user(name))')
            .eq('tailorId', uid)
            .tailorFeedback('created_at', {ascending: false});

        if (error) {
            throw error;
        }

        // Extract tailorFeedback data with tailor names
        const buyHistory = tailorFeedbacks.map(tailorFeedback => {
          const updateHistory = {
              ...tailorFeedback,
              user_name: user.name
          };
          delete updateHistory.catalog; // Delete the tailor property from each tailorFeedback object
          return updateHistory;
      });
        return buyHistory;
    } catch (error) {
        console.error('Error fetching tailorFeedback history:', error.message);
        return [];
    }
}

// Example usage
const uid = 1;
fetchTailorFeedback(uid)
    .then(buyHistory => {
        console.log('Buy History:', buyHistory);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
