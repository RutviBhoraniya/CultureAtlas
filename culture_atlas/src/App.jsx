import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Student from './pages/Student';
import SignUp from './pages/SignUp';
import ImageUpload from './components/ImageUpload';
import UploadPost from './pages/UploadPost';
import Posts from './pages/Posts';
import ContryCulture from './pages/ContryCulture';
import PageNotFound from './pages/PageNotFound';
import AprovePost from './pages/AprovePost';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/ContactUs/*' element={<ContactUs/>} />
        <Route path='/Student'>
          <Route path='/Student' element={<Student/>}/>
          <Route path='/Student/culture' element={<ContryCulture/>}/>
        </Route>
        <Route path='/Login' element={<Login/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/upload' element={<UploadPost/>} />
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/aprovePost' element={<AprovePost/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
