import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { MembersContext } from "../App";
export function RegistrationForm() {
  const context = useContext(MembersContext);
  const handleForm = (e) => {
      e.preventDefault();
      const target = e.target;
      const data = {
          name: target.name.value,
          email: target.email.value,
          phone: target.phone.value,
          address: target.address.value,
        };
        const temp = [...context.members, data];
        context.setMembers(temp);
        alert("Member Added Successfully")
  };
  return (
    <Container>
      <Heading>Fitness Club Registration</Heading>
      <Form onSubmit={handleForm}>
        <Input type="text" name="name" placeholder="Name" />
        <Input type="email" name="email" placeholder="Email" />
        <Input type="number" name="phone" placeholder="Phone no." />
        <TextArea rows="20" cols="65" name="address" placeholder="Address" />
        <Submit type="submit" value="Add Member" />
      </Form>
      <NavLink to="fitness_club_bullseye/members">View Member List</NavLink>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index:5;
`;

export const Heading = styled.h1`
  color: white;
  font-weight: 900;
  font-size: 2rem;
  text-align: center;
  text-shadow: 2px 2px 2px black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  padding: 3rem;
  background-color: white;
  z-index:10;
`;

const Input = styled.input`
  width: 28rem;
  padding: 1rem;
  margin: 0.2rem;
`;

const TextArea = styled.textarea`
  // width:28rem;
`;

const Submit = styled.input`
  width: 22rem;
  padding: 1rem 2rem;
  border: 1px solid black;
  background-color: blue;
  color: white;
  margin: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: darkblue;
    color: white;
  }
`;
export const NavLink = styled(Link)`
  width: 22rem;
  padding: 1rem 2rem;
  border: 1px solid black;
  background-color: blue;
  margin: 1rem;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: darkblue;
    color: white;
  }
`;
