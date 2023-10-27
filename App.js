import './App.css';
import Header from './Header'; // Import your Header component
import Image from './Image'; // Import your Image component
import Articles from './Articles'; // Import your Articles component
import CardList from './CardList'; // Import your CardList component
import See from './See'; // Import your See component
import NewArticles from './NewArticles'; // Import your NewArticles component
import SeeNew from './SeeNew'; // Import your SeeNew component
import CardListNew from './CardListNew'; // Import your CardListNew component
import HeaderNew from './HeaderNew'; // Import your HeaderNew component
import Footer from './Footer'; // Import your Footer component

function App() {
  return (
    <div>
      {/* Render the Header component with the specified text */}
      <Header text="Dev@Deakin" />
      <Image /> {/* Render the Image component */}
      <Articles /> {/* Render the Articles component */}
      <CardList /> {/* Render the CardList component */}
      <See /> {/* Render the See component */}
      <NewArticles /> {/* Render the NewArticles component */}
      <CardListNew /> {/* Render the CardListNew component */}
      <SeeNew /> {/* Render the SeeNew component */}
      {/* Render the HeaderNew component with the specified text */}
      <HeaderNew text="SIGN UP FOR OUR DAILY USER" />
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default App;
