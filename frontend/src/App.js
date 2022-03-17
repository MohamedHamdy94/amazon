import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from 'react-router-bootstrap'
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <BrowserRouter >
      <div className="d-flex flex-column sit-container">
        <header className="App-header">
          <Navbar bg='dark' variant='dark'>
            <Container>
              <LinkContainer
                className="App-link"
                to="/">
                <Navbar.Brand>amazon</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path="/api/products/slug/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
      </div>
      <footer>
        <div className='text-center'>All right reserved</div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
