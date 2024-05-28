import supabase from "../supabaseClient.js"


// Function to fetch book history for the logged-in customer
async function fetchBuyHistory(custId) {
    try {
        // Fetch buys where cust_id matches the logged-in user's ID
        const { data: buys, error } = await supabase
            .from('book')
            .select('*')
            .eq('custId', custId);

        if (error) {
            throw error;
        }
        console.log(buys);

        // Extract book data with tailor names
        const bookHistory = buys.map(book => ({
            ...book,
            tailor_name: book.tailor.name
        }));

        return bookHistory;
    } catch (error) {
        console.error('Error fetching book history:', error.message);
        return [];
    }
}

// Example usage
const custId = 1;
fetchBuyHistory(custId)
    .then(bookHistory => {
        console.log('Book History:', bookHistory);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
