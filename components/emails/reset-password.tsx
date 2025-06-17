import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

interface ForgotPasswordEmailProps {
  userEmail: string;
  resetUrl: string;
}

const ForgotPasswordEmail = (props: ForgotPasswordEmailProps) => {
  const { userEmail, resetUrl } = props;

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Reset your password - Action required</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[8px]">
                Reset Your Password
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                We received a request to reset your password
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] m-0 mb-[16px]">
                Hello,
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] m-0 mb-[16px]">
                Someone requested a password reset for your account associated with <strong>{userEmail}</strong>. 
                If this was you, click the button below to reset your password.
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] m-0 mb-[24px]">
                If you didn&apos;t request this password reset, you can safely ignore this email. 
                Your password will remain unchanged.
              </Text>
            </Section>

            {/* Reset Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={resetUrl}
                className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border hover:bg-blue-700"
              >
                Reset Password
              </Button>
            </Section>

            {/* Security Notice */}
            <Section className="bg-gray-50 rounded-[8px] p-[24px] mb-[32px]">
              <Text className="text-[14px] text-gray-600 m-0 mb-[12px]">
                <strong>Security Notice:</strong>
              </Text>
              <Text className="text-[14px] text-gray-600 leading-[20px] m-0 mb-[8px]">
                • This link will expire in 24 hours for your security
              </Text>
              <Text className="text-[14px] text-gray-600 leading-[20px] m-0 mb-[8px]">
                • Only use this link if you requested the password reset
              </Text>
              <Text className="text-[14px] text-gray-600 leading-[20px] m-0">
                • If you&apos;re having trouble, contact our support team
              </Text>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px] m-0 mb-[8px]">
                Having trouble with the button? Copy and paste this link into your browser:
              </Text>
              <Link
                href={resetUrl}
                className="text-blue-600 text-[14px] break-all underline"
              >
                {resetUrl}
              </Link>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px]">
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0 mb-[8px]">
                This email was sent to {userEmail}. If you have any questions, please contact our support team.
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0 mb-[8px]">
                © 2024 Better Auth Starter. All rights reserved.
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0">
                123 Business Street, Suite 100, City, State 12345
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ForgotPasswordEmail;