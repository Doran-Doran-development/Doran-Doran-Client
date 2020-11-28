import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100vw;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
`;

export const IconWrapper = styled.div`
  width: 190px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const TextWrapper = styled.div`
  height:104px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-around;
`;

export const InquireWrapper = styled.div`
  width:fit-content;
  p {
    text-align: center;
  }
`;

export const PrivacyPolicy = styled.div`
  width:fit-content;
  text-align: center;
  .link {
    text-decoration: none;
    color: #000000;
  }
`;

export const Copyright = styled.div`
  width:fit-content;
`;
