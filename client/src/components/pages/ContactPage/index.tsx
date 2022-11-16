import { useState } from "react";

interface ContactPageProps {
  cta?: string;
}

// basic useState pattern:
// const [stateItem, setStateItem] = useState(intialValueOfStateItem)
// exmaple:
// const [password, setPassword] = useState("")

const ContactPage = ({ cta = "Subscribe Now" }: ContactPageProps) => {
  const [showSubscribeForm, setShowSubscribeForm] = useState(true);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    setShowSubscribeForm(false);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <h3>{cta}</h3>
      {showSubscribeForm ? (
        <div>
          <input
            value={email}
            onChange={handleEmailChange}
            type="text"
            placeholder="Email"
            style={{ width: "300px", marginRight: "20px" }}
          />
          <button onClick={handleSubscribe}>Subscribe Now</button>
        </div>
      ) : (
        <p>Thanks for subscribing {email}</p>
      )}
    </div>
  );
};

export default ContactPage;
