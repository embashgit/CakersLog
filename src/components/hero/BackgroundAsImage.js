import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Typed from 'react-typed';
import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://res.cloudinary.com/embash-construction/image/upload/v1599953789/shaplotnik-cPc8OFqD5jI-unsplash_qpenym.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const CenterColumn = tw.div`pt-24 pb-32 px-4 flex justify-center items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;
const LogoWrapper = tw.div``;
const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
    <NavLink href="#">
      Who we are
    </NavLink>
      <NavLink href="#">
        What we do
      </NavLink>
     <NavLink href="#">
       Our Products
      </NavLink>
      <NavLink href="#">
        About the CEO
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/#">
        Contact Us
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <CenterColumn style={{width:'100%',paddingBottom:0}} >
        <div 
        style={{ borderRadius:'50%',padding:10, border:'5px solid #fff'}} 
className="shadow-lg h-16 w-16 md:h-24 sm:w-18 md:w-24 rounded-full mx-auto"
        >
        <div style={{width: '100%',height:'80%', borderRadius:'50%', background:'#fff'}}>
            <img src="https://res.cloudinary.com/embash-construction/image/upload/v1599959171/PHOTO-2020-09-10-13-37-43-removebg-preview_owugmo.png" style={{height:200}}/>
        </div>
        </div>
        </CenterColumn>
        <TwoColumn style={{paddingTop:20}}>
          <LeftColumn>
            {/* <Notification>We have now launched operations in Abuja.</Notification> */}
            <Heading>
              <span>Cake Log</span>
              <br />
              <SlantedBackground>
              <Typed
                  strings={['Cakes and food for all locations','Contact us today!','...for Cakes and Confectionary']}
                  typeSpeed={120}
              
              backSpeed={80}
              />
              
              </SlantedBackground>
            </Heading>
            <PrimaryAction>Read Customer Stories</PrimaryAction>
          </LeftColumn>
          
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
