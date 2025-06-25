import React from "react";
import styled from "styled-components";
import SMSidebar from "../components/SMSidebar";

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const ContentArea = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  z-index: 1;
`;

const CenteredContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 60px 20px;
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  border-radius: 16px;
  padding: 50px 40px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url("https://images.unsplash.com/photo-1531496660071-5ad1c2b6c4a4?auto=format&fit=crop&w=1470&q=80");
    background-size: cover;
    background-position: center;
    filter: blur(8px);
    z-index: 0;
  }
`;

const ContentInner = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
  color: #1e293b;
`;

const Header = styled.h2`
  font-size: 36px;
  color: #1e293b;
  text-align: center;
  margin-bottom: 50px;
`;

const SecurityManagerDashboard = () => {
  return (
    <PageWrapper>
      <ContentArea>
        <SMSidebar />
        <CenteredContainer>
          <ContentWrapper>
            <ContentInner>
              <Header>Security Manager Dashboard</Header>
            </ContentInner>
          </ContentWrapper>
        </CenteredContainer>
      </ContentArea>
    </PageWrapper>
  );
};

export default SecurityManagerDashboard;
