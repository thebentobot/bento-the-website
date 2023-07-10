type IconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & React.RefAttributes<SVGSVGElement>
type IconProps = IconSVGProps & {
      title?: string
      titleId?: string
 }

export type Icon = React.FC<IconProps>