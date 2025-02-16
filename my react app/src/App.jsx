import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'; // Import Food component

function App() {
  return (
    <>
      <Header />
      <Food /> {/* Corrected the component name */}
      <Footer />
    </>
  );
}

export default App;
