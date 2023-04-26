import AllUsers from './Component/AllUsers';
import AllInternships from './Component/AllInternships';
import AllPPO from './Component/AllPPO';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import EditInternship from './Component/EditInternship';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import CodeForInterview from './Component/CodeForInterview';
import AddInternship from './Component/AddInternship';
import AddPPO from './Component/AddPPO';
import AllAnnouncements from './Component/AllAnnouncements';
import AddAnnouncement from './Component/AddAnnouncements';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CodeForInterview /> } />
        <Route path="all" element={<AllUsers /> } />
        <Route path="allint" element={<AllInternships /> } />
        <Route path="allppo" element={<AllPPO /> } />
        <Route path="allann" element={<AllAnnouncements /> } />
        <Route path="/add" element={<AddUser />} />
        <Route path="/addint" element={<AddInternship />} />
        <Route path="/addppo" element={<AddPPO />} />
        <Route path="/addann" element={<AddAnnouncement />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/edit/:id" element={<EditInternship />} />
        <Route path='/*' element={<NotFound />} />

        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
