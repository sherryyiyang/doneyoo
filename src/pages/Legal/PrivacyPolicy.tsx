import React from "react";
import {
  Container,
  Title,
  Content,
  Section,
  SectionTitle,
  SectionContent,
  Subsection,
  SubsectionTitle,
  HighlightText,
  LastUpdated,
  Table,
  DefinitionList,
  ContactInfo,
} from "./styles";

const PrivacyPolicy: React.FC = () => {
  return (
    <Container>
      <Title>Privacy Policy</Title>
      <Content>
        <Section>
          <SectionTitle>1. Introduction</SectionTitle>
          <SectionContent>
            At <HighlightText>Doneyoo</HighlightText>, we take your privacy
            seriously. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our service.
            Please read this privacy policy carefully. If you do not agree with
            the terms of this privacy policy, please do not access the site.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>2. Information We Collect</SectionTitle>
          <SectionContent>
            We may collect information about you in a variety of ways. The
            information we may collect includes:
            <DefinitionList>
              <dt>Personal Data</dt>
              <dd>
                Personally identifiable information, such as your name, email
                address, and password that you voluntarily give to us when you
                register.
              </dd>
              <dt>Derivative Data</dt>
              <dd>
                Information our servers automatically collect when you access
                our site, such as your IP address, browser type, operating
                system, access times, and the pages you have viewed.
              </dd>
              <dt>Financial Data</dt>
              <dd>
                Financial information, such as data related to your payment
                method when you make purchases.
              </dd>
              <dt>Data From Social Networks</dt>
              <dd>
                User information from social networking sites if you connect
                your account to such sites.
              </dd>
            </DefinitionList>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>3. Use of Your Information</SectionTitle>
          <SectionContent>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you to:
            <Table>
              <thead>
                <tr>
                  <th>Purpose</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Account Management</td>
                  <td>Create and manage your account</td>
                </tr>
                <tr>
                  <td>Transactions</td>
                  <td>Process your transactions</td>
                </tr>
                <tr>
                  <td>Communication</td>
                  <td>Send you emails and updates</td>
                </tr>
                <tr>
                  <td>Analytics</td>
                  <td>Monitor and analyze usage and trends</td>
                </tr>
                <tr>
                  <td>Improvement</td>
                  <td>Increase the efficiency and operation of the site</td>
                </tr>
                <tr>
                  <td>Feedback</td>
                  <td>
                    Request feedback and contact you about your use of the site
                  </td>
                </tr>
              </tbody>
            </Table>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>4. Disclosure of Your Information</SectionTitle>
          <SectionContent>
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
            <DefinitionList>
              <dt>By Law or to Protect Rights</dt>
              <dd>
                If we believe the release of information about you is necessary
                to respond to legal process, to investigate or remedy potential
                violations of our policies, or to protect the rights, property,
                and safety of others.
              </dd>
              <dt>Third-Party Service Providers</dt>
              <dd>
                We may share your information with third parties that perform
                services for us or on our behalf.
              </dd>
              <dt>Business Transfers</dt>
              <dd>
                We may share or transfer your information in connection with, or
                during negotiations of, any merger, sale of company assets,
                financing, or acquisition of all or a portion of our business to
                another company.
              </dd>
            </DefinitionList>
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
            <Subsection>
              <SubsectionTitle>Security Measures</SubsectionTitle>
              <ul>
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage and transmission</li>
              </ul>
            </Subsection>
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
            <DefinitionList>
              <dt>Account Information</dt>
              <dd>
                You may at any time review or change the information in your
                account by logging into your account settings and updating your
                account.
              </dd>
              <dt>Emails and Communications</dt>
              <dd>
                You may opt out of receiving future email communications from us
                by clicking the unsubscribe link in our emails.
              </dd>
              <dt>Cookies</dt>
              <dd>
                You can set your browser to refuse all or some browser cookies,
                or to alert you when cookies are being sent.
              </dd>
            </DefinitionList>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>9. Contact Us</SectionTitle>
          <SectionContent>
            If you have questions or comments about this Privacy Policy, please
            contact us:
            <ContactInfo>
              Email:{" "}
              <a href="mailto:privacy@doneyoo.com">privacy@doneyoo.com</a>
              <br />
              We aim to respond to all inquiries within 48 hours.
            </ContactInfo>
          </SectionContent>
        </Section>

        <LastUpdated>Last updated: March 2024</LastUpdated>
      </Content>
    </Container>
  );
};

export default PrivacyPolicy;
