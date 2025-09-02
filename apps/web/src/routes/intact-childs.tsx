import { IntactChilds } from '@/components/features'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/intact-childs')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-24 grid grid-cols-2 max-w-7xl mx-auto gap-2">
        <IntactChilds />
    </div>)
}
