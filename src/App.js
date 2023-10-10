import './App.css';
import React, {useState} from "react";
import logo from "./herta.jpg";

function App() {
  const [circle, setCircle] = useState(false);
  const foto = React.createElement("img",{src:logo, alt:logo});
  const divFoto = React.createElement("div",{className:`ProfilePic ${circle? 'circle':''}`}, foto);

  const nama = React.createElement("p", null, 'Enrico Kevin Ariantho');
  const divNama = React.createElement("div", {className:"name"}, nama);
  const divPertama = React.createElement("div", {className:"Header"}, [divFoto, divNama]);

  const listKiri1= React.createElement("li",null, "Laki-laki");
  const listKiri2= React.createElement("li",null, "IT Development");

  const listkiri = React.createElement("ul", null, [listKiri1,listKiri2]);
  const divKeduakiri=React.createElement("div",{className:"Left-Text"},listkiri);

  const listKanan1= React.createElement("li",null, "2022/2023");
  const listKanan2= React.createElement("li",null, "2022/2023");
  const listKanan3= React.createElement("li",null, "StartUp");
  const listKanan4= React.createElement("li",null, "Games");

  const listKanan = React.createElement("ul", {className:"Right-Text"}, [listKanan1,listKanan2,listKanan3,listKanan4]);
  const divKeduaKanan=React.createElement("div", null, listKanan);


  const divKedua = React.createElement("div", {className:"Text"}, [divKeduakiri,divKeduaKanan]);

  const button = React.createElement("button", {className:'button', onClick:()=>setCircle(prev => !prev)}, "Change Picture");
  const divButton = React.createElement("div",{className:"buttonPict"}, button);

  const riwayatO =React.createElement("p", null, "- Riwayat Organisasi :");
  const divOrganisasi= React.createElement("div", {className:"Riwayat"},riwayatO);

  const divluar = React.createElement("div", {className:"App-header"}, [divPertama, divKedua,divButton, divOrganisasi]);

  return divluar;
}

export default App;
