import React from "react"

interface Props {
    children: React.ReactNode;
}

export default function SectionWrapper({ children }: Props) {
    return (
        <div className="mt-10 mb-10 space-y-5 mx-auto">
			{children}
        </div>
    )
}