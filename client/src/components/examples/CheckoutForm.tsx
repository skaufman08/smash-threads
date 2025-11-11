import CheckoutForm from '../CheckoutForm';

export default function CheckoutFormExample() {
  return (
    <CheckoutForm
      total={88}
      onSubmit={(data) => console.log('Order submitted:', data)}
    />
  );
}
