import supabase from "../supabaseClient.js"


// Function to fetch tailor history for the logged-in customer
async function fetchTailors(inName, inCity) {
    try {
        let query = supabase
            .from('tailor')
            .select('*, user(id, name, city)')

        if(inName !== ''){
            query.ilike('name', inName);
        }
        if (inCity !== ''){
            query.eq('user(city)', inCity);
        }

        query = query.order('created_at', { ascending: false });

        const {data: tailors, error} = await query;

        if (error) {
            throw error;
        }

        // Extract tailor data with tailor names
        const tailor = tailors.map(tailor => {
          const updatetailor = {
              ...tailor,
              tailor_id: user.id,
              tailor_name: user.name,
              tailor_city: user.city,
          };
          delete updatetailor.user; // Delete the user property from each tailor object
          return updatetailor;
      });
        return tailor;
    } catch (error) {
        console.error('Error fetching sell history:', error.message);
        return [];
    }
}

// Example usage
const uid = 1;
fetchTailors("", "")
    .then(tailor => {
        console.log('Sell History:', tailor);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
