import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface SubscriptionEmailProps {
  hotel_name: string;
  subscription_name: string;
  start_date: string;
  end_date: string;
  price: string;
}

export default function SubscriptionEmail({ hotel_name, subscription_name, start_date, end_date, price }: SubscriptionEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Eatofy | Subscription</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Section>
        <Row>
          <Heading as="h2">Greetings {hotel_name},</Heading>
        </Row>
        <Row>
          <Text>
            Thank you for subscribing Eatofy. We are pleased to have business with you.
          </Text>
        </Row>
        <Row>
          <Text>
              You have subscribed {subscription_name} for ₹ {price},
              It's valid from {start_date} to {end_date}.
          </Text>
        </Row>
        <Row>
          <Text>
            If you haven't subscribed please ignore this message.
          </Text>
        </Row>
      </Section>
    </Html>
  );
}
