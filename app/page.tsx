// ./app/page.tsx

'use client'; // Ensure this is a Client Component in Next.js (required for tRPC hooks)

import { useState } from 'react'; // React hook to manage form inputs
import { trpc } from '@/lib/trpc'; // Import tRPC client to communicate with the backend

// The main function for the Home page, which will have a form to create a new user
function Home() {
  const [email, setEmail] = useState(''); // State to store the email input
  const [name, setName] = useState(''); // State to store the name input
  const [subscriptionPlan, setSubscriptionPlan] = useState<'Free' | 'Basic' | 'Pro'>('Free'); // State for the subscription plan, default is 'Free'

  // Create a tRPC mutation to call the backend 'createUser' API
  const createUser = trpc.createUser.useMutation();

  // Function that runs when the form is submitted
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    try {
      // Call the tRPC API to create a user
      await createUser.mutateAsync({ email, name, subscriptionPlan });
      alert('User created successfully!'); // Show a success message

      // Reset form inputs after successful submission
      setEmail('');
      setName('');
      setSubscriptionPlan('Free');
    } catch (error) {
      console.error('Error creating user:', error); // Log any errors
    }
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}> {/* Form to collect user data */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            required // Field is required
          />
        </div>

        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name state
            required // Field is required
          />
        </div>

        <div>
          <label>Subscription Plan:</label>
          <select
            value={subscriptionPlan}
            onChange={(e) => setSubscriptionPlan(e.target.value as 'Free' | 'Basic' | 'Pro')} // Update subscription plan state
            required // Field is required
          >
            <option value="Free">Free</option>
            <option value="Basic">Basic</option>
            <option value="Pro">Pro</option>
          </select>
        </div>

        <button type="submit">Submit</button> {/* Submit the form */}
      </form>
    </div>
  );
}

// Wrap the Home component with tRPC functionality for API support
export default trpc.withTRPC(Home);