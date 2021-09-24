import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Card } from '../interfaces/card';

export function AddCardModal({visible, setVisible, addCard}: 
    {visible: boolean, setVisible: (b:boolean)=>void, addCard:(c: Card) => void}): JSX.Element {
        const[prompt, setPrompt] = useState<string>("PROMPT TEXT");
        const[answer, setAnswer] = useState<string>("ANSWER TEXT");
        const[hint, setHint] = useState<string>("HINT TEXT");

        function saveCard(){
            console.log("SAVING", prompt, answer, hint);
            addCard({
                id: Math.random(),
                kind: "Custom",
                prompt,
                answer,
                hint
            });
            setVisible(false);
        }


    const hide = ()=>setVisible(false);
    return (
    <Modal show ={visible} onHide={hide}>
        <Modal.Header closeButton>
            <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                <Form.Group className = "mb-3" controlId ="addCardForm.promptTextArea">
                    <Form.Label>Prompt</Form.Label>
                    <Form.Control as = "textarea" rows = {3} 
                    value = {prompt}
                    onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(ev.target.value)}/>
                </Form.Group>
                <Form.Group className = "mb-3" controlId ="addCardForm.answerTextArea">
                    <Form.Label>Answer</Form.Label>
                    <Form.Control as = "textarea" rows = {3}
                    value = {answer}
                    onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setAnswer(ev.target.value)}/>
                </Form.Group>
                <Form.Group className = "mb-3" controlId ="addCardForm.hintTextArea">
                    <Form.Label>Hint</Form.Label>
                    <Form.Control as = "textarea" rows = {3}
                    value = {hint}
                    onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setHint(ev.target.value)}/>
                </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant= "secondary" onClick = {hide}>Close</Button>
            <Button variant= "primary" onClick = {hide}>Save Changes</Button>
        </Modal.Footer>
</Modal>)
}