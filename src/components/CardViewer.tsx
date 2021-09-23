import { Col, Card as BootstrapCard } from 'react-bootstrap';
import { Card } from '../interfaces/card';

export function CardViewer({card}: {card: Card}): JSX.Element {
    return <Col>
    <BootstrapCard>
        <BootstrapCard.Body>
            <BootstrapCard.Title>Card Viewer</BootstrapCard.Title>
            <BootstrapCard.Text>
                Prompt: {card.prompt}
            </BootstrapCard.Text>
            <BootstrapCard.Text>
                Suggested Answer: {card.answer}
            </BootstrapCard.Text>
            <BootstrapCard.Text>
                Hint: {card.hint}
            </BootstrapCard.Text>
        </BootstrapCard.Body>
    </BootstrapCard>
    </Col>
}