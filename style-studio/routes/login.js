import supabase from "../supabaseClient.js"


// Function to fetch user history for the logged-in customer
export async function loginUser(email, password) {
    try {
        // Fetch users where cust_id matches the logged-in user's ID
        const { data: users, error } = await supabase
            .from('user')
            .select('*')
            .eq('email', email)
            .eq('password', password)

        if (error) {
            throw error;
        }

        console.log(users);
        //check if empty
        if (users.length ==0) return -1;
        return users[0].id;
    } catch (error) {
        console.error('Error fetching user:', error.message);
        return -1;
    }
}

// Example usage
const email = "nadira@gmail.com";
const password = "nadira";
loginUser(email, password)
    .then(userHistory => {
        console.log('user:', userHistory);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
