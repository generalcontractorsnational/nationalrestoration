import { cn } from "@/lib/utils"
import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ReadableCardProps extends React.ComponentProps<typeof Card> {
  title?: string
  description?: string
  headerClassName?: string
  contentClassName?: string
  footerClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  withShadow?: boolean
  elevated?: boolean
  children?: React.ReactNode
  footer?: React.ReactNode
}

export default function ReadableCard({
  title,
  description,
  headerClassName,
  contentClassName,
  footerClassName,
  titleClassName,
  descriptionClassName,
  withShadow = false,
  elevated = false,
  children,
  footer,
  className,
  ...props
}: ReadableCardProps) {
  return (
    <Card className={cn(elevated && "shadow-md hover:shadow-lg transition-shadow", className)} {...props}>
      {(title || description) && (
        <CardHeader className={headerClassName}>
          {title && <CardTitle className={cn(withShadow && "text-shadow-sm", titleClassName)}>{title}</CardTitle>}
          {description && (
            <CardDescription className={cn("text-muted-foreground/90 text-base", descriptionClassName)}>
              {description}
            </CardDescription>
          )}
        </CardHeader>
      )}
      <CardContent className={cn("text-foreground/90", contentClassName)}>{children}</CardContent>
      {footer && <CardFooter className={footerClassName}>{footer}</CardFooter>}
    </Card>
  )
}
