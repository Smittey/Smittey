import React from 'react';
import Mailchimp from 'react-mailchimp-form'

const Footer = () => {
  const url = 'https://smittey.us13.list-manage.com/subscribe/post?u=9aae1cacdc35a4c57db2d27ca&amp;id=e199dadb52';
  return (
    <footer className="">
       <Mailchimp
        action={url}
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Enter your email address',
            type: 'email',
            required: true
          }
        ]}
        messages={{
          sending: 'Sending...',
          success: 'Thanks so much for subscribing!',
          error: 'An unexpected internal error has occurred.',
          empty: 'Please enter your email to subscribe',
          duplicate: 'Don\'t worry, you\'re already subscribed ❤️',
          button: 'Subscribe.'
        }}
        />
    </footer>
  );
};

export default Footer;
