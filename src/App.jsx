import Category from "./components/Category";
import Header from "./components/Header";
import Restaurent from "./components/Restaurent";



function App() {
  return (
    <>

    <Header />    
      {/* call the header in this section   */}
      <div className="w-full p-20">
      <Category />
      <Restaurent/>
       
      </div>
    </>
  );
}

export default App;
