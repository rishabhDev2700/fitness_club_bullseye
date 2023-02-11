import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RegistrationForm } from "./components/RegistrationForm";
import { createContext, useState } from "react";
import { ViewMembers } from "./components/ViewMembers";
export const MembersContext = createContext({
  members: [],
  setMembers: () => {},
});
function App() {
  const [members, setMembers] = useState([]);
  const value = { members, setMembers };
  return (
    <MembersContext.Provider value={value}>
      <Container>
        <Router>
          <Routes>
          <Route path="fitness_club_bullseye/" element={<RegistrationForm />} />
          <Route path="fitness_club_bullseye/members" element={<ViewMembers />} />            
          </Routes>
        </Router>
      </Container>
    </MembersContext.Provider>
  );
}

export default App;

const Container = styled.div`
  background-image: url("https://static.vecteezy.com/system/resources/previews/001/227/763/original/abstract-minimal-flat-geometric-background-vector.jpg");
  background-size: cover;
  height: 100vh;
`;
