import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import mockupImageSrc from "images/app-mockup.png"
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container as ContainerBase } from "components/misc/Layouts";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import appleIconImageSrc from "images/apple-icon.png";
import googlePlayIconImageSrc from "images/google-play-icon.png"
import ResponsiveVideoEmbed from "helpers/ResponsiveVideoEmbed";
import ContactUs from "pages/ContactUs";
const Container = tw(ContainerBase)`bg-gray-900 -mx-8`
const Content = tw(ContentWithPaddingXl)``
 const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const Row = tw.div`px-8 flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left justify-center`;
 const componentBlockRefs = {};
 const component ={
   url:'',
  //  url :'https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1+(Cake%20Log)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
 }
const updateComponentBlockIframeHeight = iframe => {
  iframe.style.height = "auto";
  iframe.style.height = (iframe.contentWindow.document.body.scrollHeight) + "px";
};
const Heading = tw(SectionHeading)``;
const ColumnContainer = tw.div`max-w-2xl`
const TextContainer = tw(ColumnContainer)``;
const Text = tw(SectionHeading)`text-gray-100 lg:text-left max-w-none text-3xl leading-snug`;
const Subheading = tw(SubheadingBase)`text-yellow-500 mb-4 tracking-wider`

const LinksContainer = tw.div`mt-8 lg:mt-16 flex flex-col items-center sm:block`
const Link = styled.a`
  ${tw`w-56 p-3 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full inline-flex justify-center items-center mt-6 first:mt-0 sm:mt-0 sm:ml-8 first:ml-0 bg-gray-100 hocus:bg-gray-300 text-gray-900 hocus:text-gray-900 shadow hover:shadow-lg focus:shadow-outline focus:outline-none transition duration-300`}
  img {
    ${tw`inline-block h-8 mr-3`}
  }
  span {
    ${tw`leading-none inline-block`}
  }
`;

const ContanctForm = tw(ColumnContainer)`mt-16 lg:mt-0 lg:ml-16 flex justify-end text-white font-bold`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`
const DecoratorBlob1 = tw(SvgDecoratorBlob1)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-gray-800 opacity-50`
const DecoratorBlob2 = tw(SvgDecoratorBlob1)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-gray-800 opacity-50`
export default ({
  subheading = "Download App",
  text = "Developers all over the world are happily using Treact.",
  link1Text = "App Store",
  link1Url = "http://apple.com",
  link1IconSrc = appleIconImageSrc,
  link2Text = "Google Play",
  link2Url = "http://play.google.com",
  link2IconSrc = googlePlayIconImageSrc,
  pushDownFooter = false,
  imageSrc = mockupImageSrc,
}) => {
  return (
    <Container css={pushDownFooter && tw`mb-20 lg:mb-24`}>
        <ContactUs/>  
    </Container>
  );
};


{/* <div style="width: 100%"><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1+(Cake%20Log)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.maps.ie/route-planner.htm">Google Route Planner</a></div> */}



// {/* <Row>
//   <TextContainer>
//     {/* {subheading && <Subheading>{subheading}</Subheading>}
//     <Text>{text}</Text>
//     <LinksContainer>
//       <Link href={link1Url}>
//         <img src={link1IconSrc} alt=""/>
//         <span>{link1Text}</span>
//       </Link>
//       <Link href={link2Url}>
//         <img src={link2IconSrc} alt=""/>
//         <span>{link2Text}</span>
//       </Link>
//     </LinksContainer>
//      */}
//     {/* <iframe
//       src={component.url}
//       title="Cake Log"
//       width="100%"
//       frameBorder="0"
//       // ref={refs => (componentBlockRefs[component.url] = refs)}
//       // onLoad={e => updateComponentBlockIframeHeight(e.target)}
//     /> */}
//   <ResponsiveVideoEmbed url={component.url} />
//   </TextContainer>
//   <ContanctForm>
//   <div style={{width:'100%'}}>
//     <Heading> Book us <HighlightedText>Today</HighlightedText></Heading>
//     {/* <div>
//     <form>

//     </form>
//     </div> */}
//     <ContactUsForm/>
            
//   </div>
//   </ContanctForm>
// </Row> */}
