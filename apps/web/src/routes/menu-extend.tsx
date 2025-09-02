import { MenuExtend } from '@/components/features'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/menu-extend')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
      <MenuExtend />
  </div>
}
