import { Button, Col } from 'react-bootstrap';
import { Card } from '../interfaces/card';
import CARDS from '../assets/cards.json';
import { getRandomElement, shuffle } from '../utilities/data';
import { BlockLike } from 'typescript';
import { UserList } from './UserList';
import { useState } from 'react';
import { Task as User} from 'editable-dnd-list';


export function ControlPanel({setCard, reveal, answerRevealed, reveal2, hintRevealed}: {setCard: (c: Card)=>void, reveal: (r: boolean) => void, reveal2:(h: boolean) => void, answerRevealed: boolean, hintRevealed: boolean}): JSX.Element{
    const [users, setUsers] = useState<Task[]>([
        {id: '1', text: "Nick"}
        {id: '2', text: "Peanut"}
        {id: '3', text: "Bandit"}
        {id: '4', text: "Bella"}
    ]);
    
    function setRandomCard(){
        reveal(false);
        reveal2(false);
        setCard(getRandomElement(CARDS as Card[]))
    }

    function shuffleUsers(){
        let shuffledUsers: User[] = shuffle(users)
        setUsers([...shuffledUsers]);
    }

    return <Col>
        <h1>Control Panel</h1>
        <UserList users = {users} setUsers = {setUsers}></UserList>
        <Button onClick = {setRandomCard} className="m-4">Swap Current Card</Button>
        <Button onClick = {() => reveal(!answerRevealed)}className="m-4">Reveal Answer</Button>
        <Button onClick = {() => reveal2(!hintRevealed)}className="m-4">Reveal Hint</Button>
        <Button onClick = {shuffleUsers}className="m-4">Shuffle Users</Button>
    </Col>
}