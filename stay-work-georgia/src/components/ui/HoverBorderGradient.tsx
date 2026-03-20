import React from 'react'

type Props = React.PropsWithChildren<{
  as?: React.ElementType
  containerClassName?: string
  className?: string
  style?: React.CSSProperties
  edgeShadow?: string
} & React.HTMLAttributes<HTMLElement>>

export function HoverBorderGradient({
  children,
  containerClassName = '',
  className = '',
  style,
  edgeShadow,
  as: Tag = 'div',
  ...rest
}: Props) {
  return (
    <Tag
      className={`relative ${containerClassName}`}
      {...rest}
    >
      {/* Static border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"
        style={{
          boxShadow:
            edgeShadow ?? 'inset 0 0 36px 16px rgba(4,8,26,0.40), inset 0 0 0 0.5px rgba(200,160,80,0.20)',
        }}
      />

      {/* Card content */}
      <div className={`relative z-[2] h-full rounded-[inherit] ${className}`} style={style}>
        {children}
      </div>
    </Tag>
  )
}
