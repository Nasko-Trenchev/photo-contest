import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const navigate = useNavigate();

  const handleOption = (category) => {
    navigate(`/${category}`);
  };
  return (
    <main>
      <h1>Admin page</h1>
      <div>
        <button onClick={() => handleOption("createCategory")}>Create category</button>
      </div>
    </main>
  )
}