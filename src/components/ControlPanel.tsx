import { Button, Col } from 'react-bootstrap';
import { Card } from '../interfaces/card';
import CARDS from '../assets/cards.json';
import { getRandomElement } from '../utilities/data';
import { BlockLike } from 'typescript';
import { UserList } from './UserList';



export function ControlPanel({setCard, reveal, answerRevealed, reveal2, hintRevealed}: {setCard: (c: Card)=>void, reveal: (r: boolean) => void, reveal2:(h: boolean) => void, answerRevealed: boolean, hintRevealed: boolean}): JSX.Element{
    function setRandomCard(){
        reveal(false);
        reveal2(false);
        setCard(getRandomElement(CARDS as Card[]))
    }

    return <Col>
        <h1>Control Panel</h1>
        <UserList></UserList>
        <Button onClick = {setRandomCard} className="m-4">Swap Current Card</Button>
        <Button onClick = {() => reveal(!answerRevealed)}className="m-4">Reveal Answer</Button>
        <Button onClick = {() => reveal2(!hintRevealed)}className="m-4">Reveal Hint</Button>
    </Col>
}