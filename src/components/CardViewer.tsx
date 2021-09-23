import { Col, Card as BootstrapCard } from 'react-bootstrap';
import { Card } from '../interfaces/card';

export function CardViewer({card}: {card: Card}): JSX.Element {
    return <Col>
    <BootstrapCard>
        <BootstrapCard.Body>
            <BootstrapCard.Title>Card Viewer</BootstrapCard.Title>
            <BootstrapCard.Text>
                <strong>Prompt</strong>: {card.prompt}
            </BootstrapCard.Text>
            <BootstrapCard.Text>
                <strong>Suggested Answer</strong>: {card.answer}
            </BootstrapCard.Text>
            <BootstrapCard.Text>
                <strong>Hint</strong>: {card.hint}
            </BootstrapCard.Text>
        </BootstrapCard.Body>
    </BootstrapCard>
    </Col>
}