import { Button, Col } from 'react-bootstrap';
import { Card } from '../interfaces/card';
import CARDS from '../assets/cards.json';
import { getRandomElement } from '../utilities/data';
import { BlockLike } from 'typescript';



export function ControlPanel({setCard, reveal, answerRevealed, reveal2, hintRevealed}: {setCard: (c: Card)=>void, reveal: (r: boolean) => void, reveal2:(h: boolean) => void, answerRevealed: boolean, hintRevealed: boolean}): JSX.Element{
    function setRandomCard(){
        reveal(false);
        reveal2(false);
        setCard(getRandomElement(CARDS as Card[]))
    }

    return <Col>
        <h1>Control Panel</h1>
        <Button onClick = {setRandomCard}>Swap Current Card</Button>
        <Button onClick = {() => reveal(!answerRevealed)}>Reveal Answer</Button>
        <Button onClick = {() => reveal2(!hintRevealed)}>Reveal Hint</Button>
    </Col>
}