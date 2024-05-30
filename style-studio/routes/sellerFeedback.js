import supabase from "../supabaseClient.js"


// Function to fetch thriftFeedback history for the logged-in customer
export async function fetchFeedback(uid) {
    try {
        // Fetch thriftFeedbacks where cust_id matches the logged-in user's ID
        const { data: thriftFeedbacks, error } = await supabase
            .from('thriftFeedback')
            .select('*, order(catalog(*, user: user(name)))')
            .eq('order.catalog.user.uid', uid)
            .order('created_at', {ascending: false});

        if (error) {
            throw error;
        }

        // Extract thriftFeedback data with tailor names
        const thriftFeedback = thriftFeedbacks.map(thriftFeedback => {
          const updateTF = {
              ...thriftFeedback,
              user_name: thriftFeedback.order.catalog.user.name,
              catalog_name: thriftFeedback.order.catalog.name,
              created_date: new Date(thriftFeedback.created_at).toISOString().split('T')[0]
          };
          delete updateTF.order; // Delete the tailor property from each thriftFeedback object
          delete updateTF.created_at; // Delete the tailor property from each thriftFeedback object
          return updateTF;
      });
        return thriftFeedback;
    } catch (error) {
        console.error('Error fetching thriftFeedback history:', error.message);
        return [];
    }
}

// // Example usage
// const uid = 1;
// sellerFeedback(uid)
//     .then(buyHistory => {
//         console.log('Buy History:', buyHistory);
//     })
//     .catch(error => {
//         console.error('Error:', error.message);
//     });
