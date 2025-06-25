import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 60px; /* Adjust based on navbar height */
  width: 250px;
  height: calc(100vh - 60px);
  background-color: rgb(99, 159, 228);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;


const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SidebarButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  background-color: #1b1988;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0d0d5c;
  }
`;

const ApprLv1SideBar = () => {
  const navigate = useNavigate(); 

  return (
    <SidebarContainer>
      
      <SidebarList>
      <SidebarButton onClick={() => navigate("/ApprLv1dashboard")}>
          Home
        </SidebarButton>
        <SidebarButton onClick={() => navigate("/PendingApprovals")}>
          Pending Approvals
        </SidebarButton>
        <SidebarButton onClick={() => navigate("/Lv1Approved")}>
          Approved List 
        </SidebarButton>
        <SidebarButton onClick={() => navigate("/ApprL1")}>
          Rejected List
        </SidebarButton>
        <SidebarButton> </SidebarButton>
        <SidebarButton> </SidebarButton>
        
      </SidebarList>
    </SidebarContainer>
  );
};

export default ApprLv1SideBar;
