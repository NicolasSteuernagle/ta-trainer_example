import { Modal, Button } from "react-bootstrap";

export function AddCardModal({visible, setVisible}: 
    {visible: boolean, setVisible: (b:boolean)=>void}): JSX.Element {
    const hide = ()=>setVisible(false);
    return (
    <Modal show ={visible} onHide={hide}>
        <Modal.Header closeButton>
            <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>Modal Body Text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
            <Button variant= "secondary" onClick = {hide}>Close</Button>
            <Button variant= "primary" onClick = {hide}>Save Changes</Button>
        </Modal.Footer>
</Modal>)
}