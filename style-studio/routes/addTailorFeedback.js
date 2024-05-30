import supabase from "../supabaseClient.js";

// Function to insert data into a Supabase table
export async function addTailorFeedback(tailorFeedbackData) {
    try {
        // Insert data into the specified table
        const { tailorFeedbackData: insertedData, error } = await supabase
            .from('tailorFeedback') // Replace 'your_table_name' with your actual table name
            .insert(tailorFeedbackData);

        console.log(tailorFeedbackData);

    } catch (error) {
        console.error('Error inserting data:', error.message);
    }

    try {
        const { data: bookData, error } = await supabase
            .from('book') // Replace 'your_table_name' with your actual table name
            .update({reviewed: true })
            .eq('bookId', bookData.bookId);

        if (error) {
            throw error;
        }
    }
    catch (error) {
        throw error;
    }

    return insertedData;
}