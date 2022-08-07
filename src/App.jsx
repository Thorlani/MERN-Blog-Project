import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Home from './Home';
import Account from './Account';
import SignIn from './SignIn';
import { BlogProvider } from './contextAPI/Context'
import Contact from './Contact';
import About from './About';
import GuardRoute from './GuardRoute';
import ReadingPage from './components/readingPage';

function App() {
  return (
    <BlogProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route element={<GuardRoute />}>
            <Route path='/home' element={<Home />} />
            <Route path='/home/read/:id' element={<ReadingPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/account' element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  );
}

export default App;
