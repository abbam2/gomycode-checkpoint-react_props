import './App.css';
import Profile from './profile/Profile';
import PropTypes from "prop-types";



function App() {
  const handleName = fullname => alert(fullname);
  return (
    <div className="App"  style={{color: "red" }}>
      <Profile fullname="Abba Marc-André Isaac" bio="Etudiant diplomé" profession="Developpeur Fullstack JS" handleName={handleName}><img src="./marc.jpeg" width={200}  /></Profile>
    </div>
  );
}



export default App;
