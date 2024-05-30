import supabase from "../supabaseClient.js"


// Function to fetch subHistory history for the logged-in customer
export async function fetchSubHistory(uid) {
    try {
        // Fetch subHistorys where cust_id matches the logged-in subscription's ID
        const { data: subHistorys, error } = await supabase
            .from('subscribe')
            .select('*, subscription(*)')
            .eq('tailorId', uid)
            .order('created_at', {ascending: false});

        if (error) {
            throw error;
        }

        const subHistory = subHistorys.map(subHistory => {
            const updateSubHistory = {
                ...subHistory,
                days: subHistory.subscription.days,
                price: subHistory.subscription.price,
                name: subHistory.subscription.name,
                // boost: subscription.boost,
            };
            delete updateSubHistory.subscription; // Delete the subscription property from each subHistory object
            return updateSubHistory;
        });
        return subHistory;
    } catch (error) {
        console.error('Error fetching subHistory history:', error.message);
        return [];
    }
}

// // Example usage
// const uid = 1;
// fetchSubHistory(uid)
//     .then(subHistoryHistory => {
//         console.log('subHistory History:', subHistoryHistory);
//     })
//     .catch(error => {
//         console.error('Error:', error.message);
//     });
