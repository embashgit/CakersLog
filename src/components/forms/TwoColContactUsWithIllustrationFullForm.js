import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`
const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default ({
  subheading = "Contact Us",
  heading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr/> with us.</>,
  description = "Our Customers are all that matters",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolea prop can be used to display either the text on left or right side of the image.

  return (
    <Container id="contact">
      <TwoColumn>
        <ImageColumn>    
          <ContactDetails
            cards={[
              {
                title: "Kaduna",
                description: (
                  <>
                    <Address>
                      <AddressLine>40 Gates Court</AddressLine>
                      <AddressLine>Endicott, NY 13760</AddressLine>
                    </Address>
                    <Email>contact@treact.com</Email>
                    <Phone>+1 (203) 991-6988</Phone>
                  </>
                )
              },
              {
                title: "Abuja",
                description: (
                  <>
                    <Address>
                      <AddressLine>74 Peachtree Ave.</AddressLine>
                      <AddressLine>Dyersburg, TN 38024</AddressLine>
                    </Address>
                    <Email>contact@treact.com</Email>
                    <Phone>+1 (203) 991-6988</Phone>
                  </>
                )
              },
              {
                title: "Lagos",
                description: (
                  <>
                    <Address>
                      <AddressLine>8355 Summer Street</AddressLine>
                      <AddressLine>Manchester, NJ 08759</AddressLine>
                    </Address>
                    <Email>contact@treact.com</Email>
                    <Phone>+1 (203) 991-6988</Phone>
                  </>
                )
              }
            ]}
          /> 
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading><Image  imageSrc={EmailIllustrationSrc} /></Subheading>}
            
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form action={formAction} method={formMethod}>
              <Input type="email" name="email" placeholder="Your Email Address" />
              <Input type="text" name="name" placeholder="Full Name" />
              <Input type="text" name="subject" placeholder="Subject" />
              <Textarea name="message" placeholder="Your Message Here" />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
