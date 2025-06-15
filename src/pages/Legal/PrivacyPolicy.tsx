import React from "react";
import {
  Container,
  Title,
  Content,
  Section,
  SectionTitle,
  SectionContent,
} from "./styles";

const PrivacyPolicy: React.FC = () => {
  return (
    <Container>
      <Title>Privacy Policy</Title>
      <Content>
        <Section>
          <SectionTitle>1. Introduction</SectionTitle>
          <SectionContent>
            At Doneyoo, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you use our service. Please read this privacy
            policy carefully. If you do not agree with the terms of this privacy
            policy, please do not access the site.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>2. Information We Collect</SectionTitle>
          <SectionContent>
            We may collect information about you in a variety of ways. The
            information we may collect includes:
            <ul>
              <li>
                Personal Data: Personally identifiable information, such as your
                name, email address, and password that you voluntarily give to
                us when you register.
              </li>
              <li>
                Derivative Data: Information our servers automatically collect
                when you access our site, such as your IP address, browser type,
                operating system, access times, and the pages you have viewed.
              </li>
              <li>
                Financial Data: Financial information, such as data related to
                your payment method when you make purchases.
              </li>
              <li>
                Data From Social Networks: User information from social
                networking sites if you connect your account to such sites.
              </li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>3. Use of Your Information</SectionTitle>
          <SectionContent>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you to:
            <ul>
              <li>Create and manage your account</li>
              <li>Process your transactions</li>
              <li>Send you emails and updates</li>
              <li>Monitor and analyze usage and trends</li>
              <li>Increase the efficiency and operation of the site</li>
              <li>
                Request feedback and contact you about your use of the site
              </li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>4. Disclosure of Your Information</SectionTitle>
          <SectionContent>
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
            <ul>
              <li>
                By Law or to Protect Rights: If we believe the release of
                information about you is necessary to respond to legal process,
                to investigate or remedy potential violations of our policies,
                or to protect the rights, property, and safety of others.
              </li>
              <li>
                Third-Party Service Providers: We may share your information
                with third parties that perform services for us or on our
                behalf.
              </li>
              <li>
                Business Transfers: We may share or transfer your information in
                connection with, or during negotiations of, any merger, sale of
                company assets, financing, or acquisition of all or a portion of
                our business to another company.
              </li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>5. Security of Your Information</SectionTitle>
          <SectionContent>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>6. Cookies and Web Beacons</SectionTitle>
          <SectionContent>
            We may use cookies, web beacons, tracking pixels, and other tracking
            technologies to help customize the site and improve your experience.
            When you access the site, your personal information is not collected
            through the use of tracking technology.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>7. Third-Party Websites</SectionTitle>
          <SectionContent>
            The site may contain links to third-party websites and applications
            of interest, including advertisements and external services, that
            are not affiliated with us. Once you have used these links to leave
            the site, any information you provide to these third parties is not
            covered by this Privacy Policy.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>8. Options Regarding Your Information</SectionTitle>
          <SectionContent>
            You have several options regarding the use of information on our
            site:
            <ul>
              <li>
                Account Information: You may at any time review or change the
                information in your account by logging into your account
                settings and updating your account.
              </li>
              <li>
                Emails and Communications: You may opt out of receiving future
                email communications from us by clicking the unsubscribe link in
                our emails.
              </li>
              <li>
                Cookies: You can set your browser to refuse all or some browser
                cookies, or to alert you when cookies are being sent.
              </li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>9. Contact Us</SectionTitle>
          <SectionContent>
            If you have questions or comments about this Privacy Policy, please
            contact us at:
            <br />
            Email: privacy@doneyoo.com
          </SectionContent>
        </Section>
      </Content>
    </Container>
  );
};

export default PrivacyPolicy;
