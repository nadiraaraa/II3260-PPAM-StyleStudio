import supabase from "../supabaseClient.js"


// Function to fetch order history for the logged-in customer
export async function fetchSellHistory(uid) {
    try {
        // Fetch orders where cust_id matches the logged-in user's ID
        const { data: orders, error } = await supabase
            .from('order')
            .select('*, user(uid, name, telephone), catalog: catalog( *, user: user(uid)) ')
            .eq('catalog.user.uid', uid)
            .order('created_at', {ascending: false});

        if (error) {
            throw error;
        }

        // Extract order data with tailor names
        const sellHistory = orders
        .filter(order => order.catalog.user !== null)
        .map(order => {
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
            cat_price: order.catalog.price,
            cat_category: order.catalog.category,
            seller_id: order.catalog.user.uid,
            seller_name: order.catalog.user.name,
            seller_telephone: order.catalog.user.telephone,
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
