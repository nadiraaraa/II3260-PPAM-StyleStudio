import supabase from "../supabaseClient.js"


// Function to fetch book history for the logged-in customer
export async function fetchBookedHistory(uid) {
    try {
        // Fetch books where cust_id matches the logged-in user's ID
        const { data: books, error } = await supabase
            .from('book')
            .select('*, user(name, telephone)')
            .eq('custId', uid)
            .order('created_at', {ascending: false});

        if (error) {
            throw error;
        }

        // Extract book data with tailor names
        const bookHistory = books.map(book => {
          const updatedBook = {
              ...book,
              cust_name: book.user.name,
              cust_telephone: book.user.telephone,
          };
          delete updatedBook.tailor; // Delete the tailor property from each book object
          return updatedBook;
      });
        return bookHistory;
    } catch (error) {
        console.error('Error fetching book history:', error.message);
        return [];
    }
}
