import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 60px;
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

const ApprLv3SideBar = () => {
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarButton onClick={() => navigate("/ApprLv3dashboard")}>
          Home
        </SidebarButton>
        <SidebarButton onClick={() => navigate("/PendingLv3Approvals")}>
          Pending Approvals
        </SidebarButton>
        <SidebarButton onClick={() => navigate("/Lv3Approved")}>
          Approved List
        </SidebarButton>
        <SidebarButton onClick={() => navigate("/ApprL3")}>
          Rejected List
        </SidebarButton>
      </SidebarList>
    </SidebarContainer>
  );
};

export default ApprLv3SideBar;
