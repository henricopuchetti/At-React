import Alert from 'react-bootstrap/Alert';

function Rodape() {
  return (
    <>
      {[
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          @Copyright Viva Bem 2023
        </Alert>
      ))}
    </>
  );
}

export default Rodape;