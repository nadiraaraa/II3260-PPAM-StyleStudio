import supabase from "../supabaseClient.js";

// Function to insert data into a Supabase table
export async function addTailorFeedback(tailorFeedbackData) {
    try {
        // Insert data into the specified table
        const { tailorFeedbackData: insertedData, error1 } = await supabase
            .from('tailorFeedback') // Replace 'your_table_name' with your actual table name
            .insert(tailorFeedbackData);

        console.log(tailorFeedbackData);

        try {
            const { error } = await supabase
                .from('book')
                .update({ reviewed: true })
                .eq('id', tailorFeedbackData.bookId);  // Use the passed bookId
    
            console.log(true);
    
            if (error) {
                throw error;
            }
        } catch (error) {
            throw error;
        }

    } catch (error) {
        throw error;
    }

    return insertedData;
}