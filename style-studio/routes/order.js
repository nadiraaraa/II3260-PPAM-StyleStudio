import supabase from "../supabaseClient.js";

// Function to insert data into a Supabase table
export async function order(user, orderData) {

    try {
        // Insert data into the specified table
        const { orderData: insertedData, error } = await supabase
            .from('order') // Replace 'your_table_name' with your actual table name
            .insert(orderData);

        if (error) {
            throw error;
        }

        try {
            const { data: catalogData, error } = await supabase
                .from('catalog') // Replace 'your_table_name' with your actual table name
                .update({sold: true })
                .eq('catalogId', orderData.catalogId);

            if (error) {
                throw error;
            }
        }
        catch (error) {
            throw error;
        }
        return insertedData;
    } catch (error) {
        console.error('Error inserting data:', error.message);
        return null;
    }
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
