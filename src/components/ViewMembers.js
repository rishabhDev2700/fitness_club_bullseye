import React, { useContext } from "react";
import styled from "styled-components";
import { MembersContext } from "../App";
import { Container, Heading, NavLink } from "./RegistrationForm";

export const ViewMembers = () => {
  const context = useContext(MembersContext);
  const list = context.members.map((item, index) => {
    return (
      <Tr>
        <Td>{item.name}</Td>
        <Td>{item.email}</Td>
        <Td>{item.phone}</Td>
        <Td>{item.address}</Td>
      </Tr>
    );
  });
  return (
    <Container>
      <Heading>Member List</Heading>
      <Table>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Phone</Th>
          <Th>Address</Th>
        </Tr>
        {list}
      </Table>
      <NavLink to="/">Back to Home</NavLink>
    </Container>
  );
};

const Table = styled.table`
background-color:white;
color:black;
padding:1rem;
`;

const Th = styled.th`
padding:0.5rem;
margin:0.5rem;
`;
const Td = styled.td`
border:1px solid #555;
margin:1rem;
padding:2rem;
`;
const Tr = styled.tr``;
