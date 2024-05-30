import supabase from "../supabaseClient.js"


// Function to fetch order history for the logged-in customer
async function fetchsellHistory(uid) {
    try {
        // Fetch orders where cust_id matches the logged-in user's ID
        const { data: orders, error } = await supabase
            .from('order')
            .select('*, user(name, telephone), catalog(*)')
            .eq('catalog!inner(user(id))', uid)
            .order('created_at', {ascending: false});

        if (error) {
            throw error;
        }

        // Extract order data with tailor names
        const sellHistory = orders.map(order => {
          const updateSell = {
              ...order,
              cat_id: order.catalog.catalogId,
              cat_name: order.catalog.name,
              cat_brand: order.catalog.brand,
              cat_size: order.catalog.size,
              cat_condition: order.catalog.condition,
              cat_material: order.catalog.material,
              cat_description: order.catalog.description,
              cat_photo: order.catalog.photo,
              cat_price: order.catalogprice,
              buyer_name: order.user.name,
              buyer_telephone: order.user.telephone
          };
          delete updateSell.user; // Delete the user property from each order object
          delete updateSell.catalog; // Delete the catalog property from each order object
          return updateSell;
      });
        return sellHistory;
    } catch (error) {
        console.error('Error fetching sell history:', error.message);
        return [];
    }
}

// // Example usage
// const uid = 1;
// fetchsellHistory(uid)
//     .then(sellHistory => {
//         console.log('Sell History:', sellHistory);
//     })
//     .catch(error => {
//         console.error('Error:', error.message);
//     });
