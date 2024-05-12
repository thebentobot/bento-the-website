import { PropsWithoutRef, SVGProps, RefAttributes, FC } from "react";

type IconSVGProps = PropsWithoutRef<SVGProps<SVGSVGElement>> & RefAttributes<SVGSVGElement>;
type IconProps = IconSVGProps & {
	title?: string;
	titleId?: string;
};

export type Icon = FC<IconProps>;
