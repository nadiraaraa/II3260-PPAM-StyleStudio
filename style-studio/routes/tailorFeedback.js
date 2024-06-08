import supabase from "../supabaseClient.js"


// Function to fetch tailorFeedback history for the logged-in customer
export async function fetchTailorFeedback(uid) {
    try {
        // Fetch tailorFeedbacks where cust_id matches the logged-in user's ID
        const { data: tailorFeedbacks, error } = await supabase
            .from('tailorFeedback')
            .select(`
                *,
                book (
                *,
                user (name),
                tailor (
                    *,
                    user (name)
                )
                )
            `)
            .eq('book.tailor.user.uid', uid)  // This assumes 'book.tailor.user.uid' can be directly referenced
            .order('created_at', { ascending: false });

        if (error) {
            throw error;
        }

        // Extract tailorFeedback data with tailor names
        const buyHistory = tailorFeedbacks.map(tailorFeedback => {
            const updateHistory = {
                ...tailorFeedback,
                user_name: tailorFeedback.book.tailor.user.name,
                created_date: new Date(thriftFeedback.created_at).toISOString().split('T')[0]
            };
            delete updateHistory.book; // Delete the tailor property from each tailorFeedback object
            delete updateHistory.created_at; // Delete the tailor property from each tailorFeedback object
            return updateHistory;
        });
        return buyHistory;
    } catch (error) {
        console.error('Error fetching tailorFeedback history:', error.message);
        return [];
    }
}

