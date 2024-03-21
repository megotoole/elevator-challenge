'use client'

//Style
import styles from './page.module.css';

//React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//React
import { useState } from 'react';

//NextJS
import Image from 'next/image';

//Images 
import openDoor from './images/openDoor.png';
import closeDoor from './images/closeDoor.png';
import upArrow from './images/upArrow.png';
import downArrow from './images/downArrow.png';
import person from './images/person.png';

export default function Home() {
  const [doorOpen, setDoorOpen] = useState<boolean>(false);

  return (
    <main className={styles.main}>
      <Container className={styles.container}>
        <Container className={styles.panelContainer}>
          <Row className={styles.row} style={{justifyContent: 'space-around', backgroundColor: 'black'}}>
            <Col className={styles.displayFloor}>
              <Image src={upArrow} alt="open" width={35} style={{marginTop: '.3rem'}}/>
            </Col>
            <Col className={styles.displayFloor}>
              00
            </Col>
            <Col className={styles.displayFloor}>
              <Image src={downArrow} alt="open" width={35} style={{marginTop: '.3rem'}}/>
            </Col>
          </Row>
          {/* FLOOR BUTTONS */}
          <Row className={styles.row}>
            <Col>
              <Button className={styles.floorBtn}>
                17
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn}>
                18
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn}>
                19
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn}>
                20
              </Button>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col>
              <Button className={styles.floorBtn}>
                13
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn}>
                14
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn}>
                15
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn}>
                16
              </Button>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col>
              <Button className={styles.floorBtn}>
                9
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn}>
                10
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn}>
                11
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn}>
                12
              </Button>
            </Col>
          </Row>
          <Row className={styles.row}>
          <Col>
              <Button className={styles.floorBtn}>
                5
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn}>
                6
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn}>
                7
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn}>
                8
              </Button>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col>
              <Button className={styles.floorBtn}>
                1
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn}>
                2
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn}>
                3
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn}>
                4
              </Button>
            </Col>
          </Row>
          <Row className={styles.row} style={{justifyContent: 'start', marginBottom: '0rem'}}>
            <Col>
              {/* <Button className={styles.floorBtn} style={{marginRight: '.4rem'}} onClick={() => openTheDoor()}> */}
              <Button className={styles.floorBtn} style={{marginRight: '.4rem'}} onClick={() => setDoorOpen(true)}>
                <Image src={openDoor} alt='open' width={40} style={{marginTop: '.3rem'}}/>
              </Button>
            </Col>
            <Col>
              {/* <Button className={styles.floorBtn} onClick={() => closeTheDoor()}> */}
              <Button className={styles.floorBtn} onClick={() => setDoorOpen(false)}>
                <Image src={closeDoor} alt='open' width={35} style={{marginTop: '.3rem'}}/>
              </Button>
            </Col>
          </Row>
        </Container>
        <Container className={styles.panelContainer}>
          <Row className={doorOpen ? styles.doorOpenStyle : styles.doorClosedStyle}>
            
          </Row>
        </Container>
      </Container>
    </main>
  );
}
