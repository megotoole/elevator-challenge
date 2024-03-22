'use client'

//Style
import styles from './page.module.css';

//React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//React
import { useState, useRef, useEffect, useCallback, SetStateAction } from 'react';

//NextJS
import Image from 'next/image';

//Images 
import openDoor from './images/openDoor.png';
import closeDoor from './images/closeDoor.png';
import upArrow from './images/upArrow.png';
import downArrow from './images/downArrow.png';

export default function Home() {
  const [doorOpen, setDoorOpen] = useState<boolean>(false);
  const [currentFloor, setCurrentFloor] = useState<number>(1); 
  //const [floorQueue, setFloorQueue] = useState<number[]>([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [movingUp, setMovingUp] = useState<boolean>(false);
  const [movingDown, setMovingDown] = useState<boolean>(false);
  const [isMalfunctioning, setIsMalfunctioning] = useState(false)

  const floorRequest = (floorNum: number) => {
    setIsMalfunctioning(true);
    setButtonDisabled(true); 
    if(currentFloor > floorNum){
      //show down arrow
      setMovingDown(true);
      setMovingUp(false);
    } else if(currentFloor < floorNum){
      //show up arrow
      setMovingUp(true);
      setMovingDown(false);
    } else {
      //hide arrows
      setMovingUp(false);
      setMovingDown(false);
    }
    setCurrentFloor(floorNum);
    setTimeout(openTheDoor, 1500, floorNum);
  };

  const openTheDoor = (floorNum:number) => {
    setDoorOpen(true);
    setTimeout(closeTheDoor, 1500);
  }

  const closeTheDoor = () => {
    setDoorOpen(false);
    setButtonDisabled(false); 
    setIsMalfunctioning(false);
  }

  // useEffect(() => {
  //   console.log(floorQueue);
  // }, [floorQueue]);

  /* Floor queue */
  // const floorRequest = (floorNum: number) => {
  //   if (!floorQueue.includes(floorNum) && floorNum !== currentFloor) {
  //     setFloorQueue([...floorQueue, floorNum]);
  //   }

  //   setTimeout(moveToFloor, 5000); 
  // }

  // const moveToFloor = () => {
  //   for(let i = 0; i < floorQueue.length; i++){
  //     if(currentFloor > floorQueue[i]){
  //       //show down arrow
  //       setMovingDown(true);
  //       setMovingUp(false);
  //     } else if(currentFloor < floorQueue[i]){
  //       //show up arrow
  //       setMovingUp(true);
  //       setMovingDown(false);
  //     } else {
  //       //hide arrows
  //       setMovingUp(false);
  //       setMovingDown(false);
  //     }
  //     setCurrentFloor(floorQueue[i]);
  //     setTimeout(openTheDoor, 1500, floorQueue[i]);
  //   }
  // }

  // //tenant chooses floor every ten seconds
  // setInterval(function(){
  //   let randomFloor = Math.floor(Math.random() * 20) + 1; 
  //   setFloorQueue([...floorQueue, randomFloor]);
  //   moveToFloor();
  // }, 10000)
  
  return (
    <main className={styles.main}>
      {
        (isMalfunctioning) && <div className={styles.errorMsg}>CIRCUIT MALFUNCTIONING! PLEASE STAND BY!</div>
      }
      <Container className={styles.container}>
        <Container className={styles.panelContainer}>
          <Row className={styles.row} style={{justifyContent: 'space-around', backgroundColor: 'black'}}>
            <Col className={styles.displayFloor}>
              <Image src={upArrow} alt="open" width={35} className={movingUp ? styles.showUpArrow : styles.hideUpArrow}/>
            </Col>
            <Col className={styles.displayFloor}>
              {currentFloor?.toString()}
            </Col>
            <Col className={styles.displayFloor}>
              <Image src={downArrow} alt="open" width={35} className={movingDown ? styles.showDownArrow : styles.hideDownArrow}/>
            </Col>
          </Row>
          {/* FLOOR BUTTONS */}
          <Row className={styles.row}>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(17)} disabled={buttonDisabled}>
                17
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(18)} disabled={buttonDisabled}>
                18
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(19)} disabled={buttonDisabled}>
                19
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(20)} disabled={buttonDisabled}>
                20
              </Button>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(13)} disabled={buttonDisabled}>
                13
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(14)} disabled={buttonDisabled}>
                14
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(15)} disabled={buttonDisabled}>
                15
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(16)} disabled={buttonDisabled}>
                16
              </Button>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(9)} disabled={buttonDisabled}>
                9
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(10)} disabled={buttonDisabled}>
                10
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(11)} disabled={buttonDisabled}>
                11
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(12)} disabled={buttonDisabled}>
                12
              </Button>
            </Col>
          </Row>
          <Row className={styles.row}>
          <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(5)} disabled={buttonDisabled}>
                5
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(6)} disabled={buttonDisabled}>
                6
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(7)} disabled={buttonDisabled}>
                7
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(8)} disabled={buttonDisabled}>
                8
              </Button>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(1)} disabled={buttonDisabled}>
                1
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(2)} disabled={buttonDisabled}>
                2
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(3)} disabled={buttonDisabled}>
                3
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn} onClick={() => floorRequest(4)} disabled={buttonDisabled}>
                4
              </Button>
            </Col>
          </Row>
          <Row className={styles.row} style={{marginBottom: '0rem', justifyContent: 'space-evenly'}}>
            <Col>
              <Button className={styles.floorBtn} onClick={() => setDoorOpen(true)} disabled={buttonDisabled}>
                <Image src={openDoor} alt='open' width={40} style={{marginTop: '.3rem'}}/>
              </Button>
            </Col>
            <Col>
              <Button className={styles.floorBtn} onClick={() => setDoorOpen(false)} disabled={buttonDisabled}>
                <Image src={closeDoor} alt='open' width={35} style={{marginTop: '.3rem'}}/>
              </Button>
            </Col>
          </Row>
        </Container>
        <Container className={styles.panelContainer}>
          {/* if door open button is clicked set width to 0, if door closed button is clicked set width to 100 */}
          <Row className={doorOpen ? styles.doorOpenStyle : styles.doorClosedStyle}>
            
          </Row>
        </Container>
      </Container>
    </main>
  );
}
