import supabase from "../supabaseClient.js"


// Function to fetch catalog history for the logged-in customer
async function fetchCatalog(inName, inSize, inCategory, inCity) {
    try {
        let query = supabase
            .from('catalog')
            .select('*, user(id, name, city)')

        if(inName !== ''){
            query.ilike('name', inName);
        }
        if (inSize !== ''){
            query.eq('size', inSize);
        }
        if(inCategory !== ''){
            query.ilike('category', inCategory);
        }
        if (inCity !== ''){
            query.eq('user(city)', inCity);
        }

        query = query.order('created_at', { ascending: false });

        const {data: catalogs, error} = await query;

        if (error) {
            throw error;
        }

        // Extract catalog data with tailor names
        const catalog = catalogs.map(catalog => {
          const updateCatalog = {
              ...catalog,
              seller_id: catalog.user.id,
              seller_name: catalog.user.name,
              seller_city: catalog.user.city,
          };
          delete updateCatalog.user; // Delete the user property from each catalog object
          return updateCatalog;
      });
        return catalog;
    } catch (error) {
        console.error('Error fetching sell history:', error.message);
        return [];
    }
}

// Example usage
const uid = 1;
fetchCatalog("", "", "", "")
    .then(catalog => {
        console.log('Sell History:', catalog);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
