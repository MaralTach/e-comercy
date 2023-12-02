import Header from './components/Header';
import Footer from './components/Footer';

import { Container } from 'react-bootstrap';
import Revievs from './components/Revievs';

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h2>Welcome to proshop</h2>
          <Revievs />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
