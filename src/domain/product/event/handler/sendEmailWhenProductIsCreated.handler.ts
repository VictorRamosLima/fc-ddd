import { EventHandlerInterface } from "@domain/@shared/event/eventHandler.interface";
import { ProductCreatedEvent } from "../productCreated.event";

export class SendEmailWhenProductIsCreatedHandler implements EventHandlerInterface<ProductCreatedEvent> {
	handle(event: ProductCreatedEvent): void {
		console.log(`Sending email... | ${event.payload.product.name} product have been created`);
	}
}
