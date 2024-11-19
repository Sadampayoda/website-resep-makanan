import React from 'react';
// import Button from './components/Element/Button';
import Button from "./components/Element/Buttons";
import { Card } from './components/Fragment/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css'
import { Nav } from './components/Fragment/Nav';




// class Header extends React.Component{
//   render() {
//     return (
//       <>
//         <section className='component' >
//           <div className="container pt-5 mt-5">
//             <div className="row border">
//               <div className="col">
//                 <h1>Welcome to resepan</h1>
//               </div>
//               <div className="col">

//               </div>
//             </div>
//           </div>
//         </section>
//       </>
//     )
//   }
// }



function App() {


  return (
    <>
      <Nav section="home" >Resep Masakan</Nav>
      {/* <Nav></Nav>
      <Header></Header> */}
      <div className="container">
        <Button color="dark" type="submit" >Test</Button>
        <Card 
        title="Saya mau makan" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illo, animi ipsum iste fuga odit distinctio, cupiditate voluptate ullam voluptatem cumque dolore tempora rem impedit asperiores officia suscipit sunt tempore." title_link="Go masak" link="https://indomaret.com"color_link="dark"></Card>
        <Card 
        title="Saya mau makan" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illo, animi ipsum iste fuga odit distinctio, cupiditate voluptate ullam voluptatem cumque dolore tempora rem impedit asperiores officia suscipit sunt tempore." title_link="Go masak" link="https://indomaret.com"color_link="dark"></Card>

      </div>

      {/* <h1>Welcome</h1> */}
      
    </>
  )
}


export default App
