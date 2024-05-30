import supabase from "../supabaseClient.js";

// Function to insert data into a Supabase table
export async function addCatalog(catalogData) {
    try {
        // Insert data into the specified table
        const { catalogData: insertedData, error } = await supabase
            .from('catalog') // Replace 'your_table_name' with your actual table name
            .insert(catalogData);

        console.log(catalogData);

    } catch (error) {
        console.error('Error inserting data:', error.message);
    }

    return catalogData;
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
