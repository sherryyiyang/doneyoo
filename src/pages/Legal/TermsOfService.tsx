import React from "react";
import styled from "styled-components";
import {
  Container,
  Title,
  Content,
  Section,
  SectionTitle,
  SectionContent,
} from "./styles";

const TermsOfService: React.FC = () => {
  return (
    <Container>
      <Title>Terms of Service</Title>
      <Content>
        <Section>
          <SectionTitle>1. Acceptance of Terms</SectionTitle>
          <SectionContent>
            By accessing and using Doneyoo, you agree to be bound by these Terms
            of Service and all applicable laws and regulations. If you do not
            agree with any of these terms, you are prohibited from using or
            accessing this site.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>2. Use License</SectionTitle>
          <SectionContent>
            Permission is granted to temporarily use Doneyoo for personal,
            non-commercial purposes. This is the grant of a license, not a
            transfer of title, and under this license you may not:
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>
                Attempt to decompile or reverse engineer any software contained
                on Doneyoo
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transfer the materials to another person or "mirror" the
                materials on any other server
              </li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>3. User Account</SectionTitle>
          <SectionContent>
            To access certain features of Doneyoo, you must register for an
            account. You agree to:
            <ul>
              <li>
                Provide accurate and complete information when creating your
                account
              </li>
              <li>Maintain the security of your account credentials</li>
              <li>
                Notify us immediately of any unauthorized use of your account
              </li>
              <li>
                Accept responsibility for all activities that occur under your
                account
              </li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>4. User Content</SectionTitle>
          <SectionContent>
            You retain all rights to any content you submit, post, or display on
            Doneyoo. By submitting content, you grant us a worldwide,
            non-exclusive, royalty-free license to use, reproduce, modify, and
            distribute your content in connection with providing and improving
            our services.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>5. Disclaimer</SectionTitle>
          <SectionContent>
            The materials on Doneyoo are provided on an 'as is' basis. We make
            no warranties, expressed or implied, and hereby disclaim and negate
            all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>6. Limitations</SectionTitle>
          <SectionContent>
            In no event shall Doneyoo or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit,
            or due to business interruption) arising out of the use or inability
            to use Doneyoo, even if we have been notified of the possibility of
            such damage.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>7. Revisions and Errata</SectionTitle>
          <SectionContent>
            The materials appearing on Doneyoo could include technical,
            typographical, or photographic errors. We do not warrant that any of
            the materials on our website are accurate, complete, or current. We
            may make changes to the materials contained on our website at any
            time without notice.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>8. Links</SectionTitle>
          <SectionContent>
            We have not reviewed all of the sites linked to our website and are
            not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by Doneyoo of the
            site. Use of any such linked website is at the user's own risk.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>9. Modifications</SectionTitle>
          <SectionContent>
            We may revise these terms of service at any time without notice. By
            using Doneyoo, you agree to be bound by the current version of these
            terms of service.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>10. Governing Law</SectionTitle>
          <SectionContent>
            These terms and conditions are governed by and construed in
            accordance with the laws and you irrevocably submit to the exclusive
            jurisdiction of the courts in that location.
          </SectionContent>
        </Section>
      </Content>
    </Container>
  );
};

export default TermsOfService;
