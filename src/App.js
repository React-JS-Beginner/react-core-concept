import logo from "./logo.svg";
import "./App.css";

/*-------------------------------------------------------------------------------*\
  /////////////////////////// Dynamic array.map() \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
function App() {

  const infos = 
  [
    {name: 'Lenga', contact: 171, district: 'Chunka'},
    {name: 'Tenga', contact: 172, district: 'Jhunka'},
    {name: 'Menga', contact: 173, district: 'Funka'},
    {name: 'Dhenga', contact: 174, district: 'Bunka'},
    {name: 'Zenga', contact: 174, district: 'Dunka'},
  ];

  return (
    <div className="App">
      <h3>React World</h3>
      <p>{20 + 4}/7</p>
      <img src={logo} className="App-logo" alt="logo" />

      {/* array.map for Play  */}
      {
          infos.map(info => <Play name={info.name} contact={info.contact} district={info.district} ></Play>)
      }

    </div>
  );
}
/*-------------------------------------------------------------------------------*\
  //////////////////////////////// Hardcore \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/

/* function App() {
  return (
    <div className="App">
      <h3>React World</h3>
      <p>{20 + 4}/7</p>
      <img src={logo} className="App-logo" alt="logo" />
      <Play name="Henga" job="Tunka"></Play>
      <Play name="Senga" job="Funka"></Play>
      <Play name="Menga" job="Chunka"></Play>
      <Play name="Lenga" job="Jhunka"></Play>
      <Play name="Tenga" job="Yunka"></Play>
      <Play name="Zenga" job="Gunka"></Play>
    </div>
  );
} */ 


/* function App() {
  return (
    <div className="App">
      <h3>React World</h3>
      <p>{20 + 4}/7</p>
      <img src={logo} className="App-logo" alt="logo" />
      <Friend name="Henga" contact="01782869151"></Friend>
      <Friend name="Senga" contact="01782869152"></Friend>
      <Friend name="Menga" contact="01782869153"></Friend>
      <Friend name="Lenga" contact="01782869154"></Friend>
      <Friend name="Tenga" contact="01782869155"></Friend>
      <Friend name="Zenga" contact="01782869156"></Friend>
    </div>
  );
} */

/*-------------------------------------------------------------------------------*\
  ////////////////////////////////// Play \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/

/* function Play(props) {
  // console.log(props);
  return (
    <div className="play">
      <h1>Java Script React</h1>
      <div className="aanda">
      <p>Name : <strong>{props.name}</strong></p>
      <p>Job : <strong>{props.job}</strong></p>
      </div>
      <p>Type : Libray</p>
      <p>Language : Java Script</p>
    </div>
  );
} */

function Play(props) {
  // console.log(props);
  return (
    <div className="play">
      <h1>Person</h1>
      <div className="aanda">
      <h3>Name : {props.name}</h3>
      <h3>Contact : {props.contact}</h3>
      <h3>District : {props.district}</h3>
      </div>
      
    </div>
  );
  }

/*-------------------------------------------------------------------------------*\
  ////////////////////////////////// Friend \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/

function Friend(props)
{
  console.log(props)
  return (

    <div className="play">
      <h2>Name : {props.name}</h2>
      <h2>Contact : {props.contact}</h2>
    </div>

  );
}

export default App;
