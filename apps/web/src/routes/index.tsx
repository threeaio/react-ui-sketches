import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import {HelloBubble} from '@/components/features';

export const Route = createFileRoute("/")({
	component: HomeComponent,
});


function HomeComponent() {

	return (
		<div className=" mx-auto">
			<ClientOnly>
				<HelloBubble />
			</ClientOnly>
		</div>
	);
}
