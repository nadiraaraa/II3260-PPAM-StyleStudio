import supabase from "../supabaseClient.js"


// Function to fetch book history for the logged-in customer
export async function fetchBookHistory(uid) {
    try {
        // Fetch books where cust_id matches the logged-in user's ID
        const { data: books, error } = await supabase
            .from('book')
            .select('*, tailor!inner(user(name, telephone))')
            .eq('custId', uid)
            .order('created_at', {ascending: false});

        if (error) {
            throw error;
        }

        // Extract book data with tailor names
        const bookHistory = books.map(book => {
          const updatedBook = {
              ...book,
              tailor_name: book.tailor.user.name,
              tailor_telephone: book.tailor.user.telephone
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

// // Example usage
// const uid = 1;
// fetchBookHistory(uid)
//     .then(bookHistory => {
//         console.log('Book History:', bookHistory);
//     })
//     .catch(error => {
//         console.error('Error:', error.message);
//     });
