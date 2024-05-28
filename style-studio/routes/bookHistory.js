import supabase from "../supabaseClient.js"


// Function to fetch book history for the logged-in customer
async function fetchBookHistory() {
    try {
        // Fetch books where cust_id matches the logged-in user's ID
        const { data: books, error } = await supabase
            .from('book')
            .select('*')
            .select('*, tailor!inner(user(name))')
            .eq('custId', 1)
            .order('created_at', {ascending: false});

        if (error) {
            throw error;
        }

        // Extract book data with tailor names
        const bookHistory = books.map(book => {
          const updatedBook = {
              ...book,
              tailor_name: book.tailor.user.name
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

// Example usage
const custId = 1;
fetchBookHistory()
    .then(bookHistory => {
        console.log('Book History:', bookHistory);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
