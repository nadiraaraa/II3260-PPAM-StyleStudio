import supabase from "../supabaseClient.js"


// Function to fetch order history for the logged-in customer
async function fetchBuyHistory(uid) {
    try {
        // Fetch orders where cust_id matches the logged-in user's ID
        const { data: orders, error } = await supabase
            .from('order')
            .select('*, catalog(*, catalog(*, (user(id, name, telephone))))')
            .eq('buyerId', uid)
            .order('created_at', {ascending: false});

        if (error) {
            throw error;
        }

        // Extract order data with tailor names
        const buyHistory = orders.map(order => {
          const updateBuy = {
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
              seller_id: order.catalog.user.id,
              seller_name: order.catalog.user.name,
              seller_telephone: order.catalog.user.telephone
          };
          delete updateBuy.catalog; // Delete the tailor property from each order object
          return updateBuy;
      });
        return buyHistory;
    } catch (error) {
        console.error('Error fetching order history:', error.message);
        return [];
    }
}

// Example usage
const uid = 1;
fetchBuyHistory(uid)
    .then(buyHistory => {
        console.log('Buy History:', buyHistory);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
