import { Row, Col, Card } from 'react-bootstrap';
import Button from '../../../components/CustomButton';
import CardHeader from '../../../components/CardHeader';
import { Link } from 'react-router-dom';
export default function PresentGift({ gift, removeGiftHandler }) {
  const { email, amount, secret } = gift;
  const mailSubject = 'Sending you some DOTs';
  const mailBody = `
  Hey! \n 
  I'm sending you ${amount} dots as a gift! you can go to \n
  https://hamidra.github.io/dotdrop/#/claim \n
  and type in the following secret message to claim your DOTs. 
  \n \n 
  ${secret} 
  \n \n 
  The website will walk you through to create your own secure
  Polkadot account. \n 
  Enjoy!`;
  const mailToLink = `${email}?subject=${mailSubject}&body=${encodeURIComponent(
    mailBody
  )}`;

  const mailToHandler = () => {
    window.location.href = `mailto:${mailToLink}`;
  };

  const printHandler = () => {
    window.print();
  };

  return (
    <>
      <Card.Body>
        <CardHeader title={'Add Message'} />
        <Row className="justify-content-center align-items-center">
          <Col>
            <p className="text-center">
              Send DOTs to your friends and familiy, and have them join the
              Polkadot Network today.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center my-4 mx-2">
          <Col>
            <Card className="printable">
              <Card.Body>
                <p>
                  Hey! <br />
                  I'm sending you {amount} dots as a gift! you can follow this
                  link and type in the following secret message to claim your
                  DOTs.
                  <strong
                    style={{
                      backgroundColor: '#EDF1F5',
                      display: 'block',
                      textAlign: 'center',
                      padding: '5px',
                      marginTop: '20px',
                      marginBottom: '20px',
                      borderRadius: '5px',
                    }}>
                    {secret}
                  </strong>
                  The website will walk you through to create your own secure
                  Polkadot account. <br />
                  Enjoy!
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="px-5 d-flex justify-content-around">
            <Button onClick={() => printHandler()}>Print</Button>
            <Button onClick={() => mailToHandler()}>Email</Button>
            <Button onClick={() => removeGiftHandler(secret)}>Remove</Button>
          </Col>
        </Row>
      </Card.Body>
    </>
  );
}
