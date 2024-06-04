import supabase from "../supabaseClient.js";

// Function to insert data into a Supabase table
export async function addThriftFeedback(thriftFeedbackData) {
    try {
        // Insert data into the specified table
        const { thriftFeedbackData: insertedData, error } = await supabase
            .from('thriftFeedback') // Replace 'your_table_name' with your actual table name
            .insert(thriftFeedbackData);

        console.log(thriftFeedbackData);


        try {
            const { error } = await supabase
                .from('order') // Replace 'your_table_name' with your actual table name
                .update({ reviewed: true })
                .eq('id', thriftFeedbackData.orderId);
                console.log(thriftFeedbackData.orderId);

            if (error) {
                throw error;
            }
        }
        catch (error) {
            throw error;
        }

    } catch (error) {
        console.error('Error inserting data:', error.message);
    }

    return insertedData;
}

// Example data to insert
// const newData = {
//     column1: 'value1',
//     column2: 'value2',
//     // Add more columns and their values here
// };

// // Call the order function with the example data
// order(newData)
//     .then(insertedData => {
//         console.log('Data inserted successfully:', insertedData);
//     })
//     .catch(error => {
//         console.error('Error:', error.message);
//     });
