import logo from "./logo.svg";
import "./App.css";

function App() {
  let service=[{btn:"Services",url:"##"},{btn:"Projects",url:"##"},{btn:"About",url:"##"}]
  return (
    <div>
      <div className="nav" id="nav">
        <div className="logo" >
          <img src="https://logos-world.net/wp-content/uploads/2021/08/Cisco-Symbol.png" className="spotify-logo"></img>
        </div>
        <div className="link">{service.map((e) => { 
          return <Service data={e}/>
        })}</div>
        <div className="btn">
        <button className="contact">Contact</button>
        </div>
      </div>
    </div>
  );
}
function Service( {data}) { 
  console.log(data)
  return (
    <a href={data.url} className="link-a">{data.btn}</a>
)
}
export default App;
