import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../components/utils/queries'
import { useParams } from 'react-router-dom'; // Assuming you use react-router-dom for routing

function UserProfile() {
  const { userId } = useParams(); // Assuming you get userId from the URL params
  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { user } = data;

  return (
    <div>
      <h1>User Profile</h1>
      <h2>User ID: {userId}</h2>
      <h3>Thoughts:</h3>
      <ul>
        {user.thoughts.map((thought, index) => (
          <li key={index}>{thought}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
