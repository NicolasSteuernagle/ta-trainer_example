import { Button, Col } from 'react-bootstrap';
import { Card } from '../interfaces/card';
import CARDS from '../assets/cards.json';
import { getRandomElement, shuffle } from '../utilities/data';
import { BlockLike } from 'typescript';
import { UserList } from './UserList';
import { useState } from 'react';
import { Task, Task as User} from 'editable-dnd-list';

export const LOCAL_STORAGE_USERS = 'ta-trainer-users';

export const INITIAL_USERS: User[] = [
    {id: '1', text: "Nick"},
    {id: '2', text: "Peanut"},
    {id: '3', text: "Bandit"},
    {id: '4', text: "Bella"}
];

export function getLocalStorageUsers(): User[] {
    let rawUsers: string|null = localStorage.getItem(LOCAL_STORAGE_USERS);
    if(rawUsers === null){
        return [...INITIAL_USERS];
    }else{
        return JSON.parse(rawUsers);
    }
}

export function ControlPanel({setCard, reveal, answerRevealed, reveal2, hintRevealed, showAddCardModal}: {setCard: (c: Card)=>void, reveal: (r: boolean) => void, reveal2:(h: boolean) => void, answerRevealed: boolean, hintRevealed: boolean, showAddCardModal: (b: boolean)=>void}): JSX.Element{
    const [users, setUsers] = useState<User[]>(getLocalStorageUsers);
    const [deck, setDeck] = useState<Card[]>(CARDS);
    
    function setRandomCard(){
        reveal(false);
        reveal2(false);
        setCard(getRandomElement(deck))
    }

    function shuffleUsers(){
        let shuffledUsers: User[] = shuffle(users)
        setUsers([...shuffledUsers]);
    }

    function save(){
        localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(users));

    }

    function addNewCard(){
        showAddCardModal(true);
    }

    return <Col>
        <h1>Control Panel</h1>
        <UserList users = {users} setUsers = {setUsers}></UserList>
        <Button onClick = {setRandomCard} className="m-4">Swap Current Card</Button>
        <Button onClick = {() => reveal(!answerRevealed)}className="m-4">Reveal Answer</Button>
        <Button onClick = {() => reveal2(!hintRevealed)}className="m-4">Reveal Hint</Button>
        <Button onClick = {shuffleUsers}className="m-4">Shuffle Users</Button>
        <Button onClick = {save}className="m-4" variant = "success">Save</Button>
        <Button onClick = {addNewCard}className="m-4" variant = "danger">Add New Card</Button>
    </Col>
}