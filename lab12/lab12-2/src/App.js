// import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Animals from "./Animals"
import ChangePasswordForm from './ChangePasswordForm';
import Person from './Person';
import { useState } from "react"

function App() {
  const animals = ["Pies", "Kot", "Koń"];
  const [personInput, setPersonInput] = useState({});
  const [haslo, setHaslo] = useState("");
  return (
    <div className="App">
      {
        // Poniżej zaprezentowano przykład użycia props 
      }
        <Welcome name="Tomasz"/>

        {// Umieść komponent, który będzie przyjmował jako element props tablicę animals i ją wyświetlał wewnątrz tagów li.
        }
        <Animals list={animals} />

        {// Poniżej są przygotowane inputy pod profil użytkownika. Stwórz komponent, który będzie otrzymywał te dane jako propsy, a następnie wyświetlał je.
        } 
        <div>
          <label>Imię</label>
          <input type="text" onChange={(element) => {setPersonInput({...personInput, imie: element.target.value})}}/>
        </div>
        <div>
          <label>Nazwisko</label>
          <input type="text" onChange={(element) => {setPersonInput({...personInput, nazwisko: element.target.value})}}/>
        </div>
        <div>
          <label>Wiek</label>
          <input type="text" onChange={(element) => {setPersonInput({...personInput, wiek: element.target.value})}}/>
        </div>
        {// Zmień powyższe rozwiązanie tak, aby użyć dekonstrukcji obiektów zamiast odwoływać się do zmiennych za pomocą props.[nazwa]
        }
        <Person input = {personInput}/>
        {// Powszechną praktyką w React jest tworzenie osobnych komponentów dla wnętrza formularza. Uzupełnij komponenty App.js oraz ChangePasswordForm.js tak, 
         // aby wpisane hasło wyświetlało się po zatwierdzeniu w tagu <p> istniejącym w App.js 
        }

        <ChangePasswordForm handleSubmit={data => {
          setHaslo(data)
        }}/>
        {/* <ChangePasswordForm /> */}
        <p>{haslo}</p>

    </div>
  );
}

export default App;