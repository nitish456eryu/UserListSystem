import { useState, useEffect } from "react";
import '../App.css';

const UsersList = () => {
    const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1)

  useEffect(() => {
    
    fetch(`https://reqres.in/api/users?page=${page}`) 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
        console(1234);
      })
      .then(data => {
        setData(data.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [page]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  const handleNextPage = () => {
    if(page > 1){
        return <p>No more users list</p>;
    }else{
        setPage(page+1);
    }
    
    
  }

    return (
        <>
          <p><b><u>List of users of list {page}</u></b></p>
            <table>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Avatar</th>
              </tr>
        {data.map(user => (
          <tr key={user.id}>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td><img src={user.avatar} alt="" /> </td>
          </tr>
        ))}
      </table>
      <button onClick={() => setPage(prevPage => prevPage - 1)}>Previous</button>
      <button onClick={handleNextPage}>Next</button>
        </>
    )
}

export default UsersList;

  