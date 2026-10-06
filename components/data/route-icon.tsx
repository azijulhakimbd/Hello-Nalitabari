import * as LucideIcons from "lucide-react"
import type { LucideIcon } from "lucide-react"

export function RouteIcon({
  name,
  ...props
}: React.ComponentProps<LucideIcon> & { name?: string }) {
  const Icon = name && name in LucideIcons
    ? LucideIcons[name as keyof typeof LucideIcons] as LucideIcon
    : LucideIcons.CircleHelp

  return <Icon {...props} />
}