import { MorphExtendFromList } from '@/components/features'
import { ClientOnly, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/squircle-expand')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="h-[calc(100svh-var(--height-header))] flex flex-col overflow-hidden">

    <div className=" flex-1"></div>
        <MorphExtendFromList />
  </div>
}
