import React from "react"
import { useLink } from "./link-context"
import { cx } from "../utils/cx"

type TagLinkProps = {
  name: string
  className?: string
}

export function TagLink({ name, className }: TagLinkProps) {
  const Link = useLink()
  return (
    <span className={cx("text-text-secondary", className)}>
      #
      {name.split("/").map((part, i) => {
        return (
          <React.Fragment key={i}>
            {i > 0 && <span>/</span>}
            <Link
              target="_blank"
              className="link"
              to={`/tags/${name
                .split("/")
                .slice(0, i + 1)
                .join("/")}`}
            >
              {part}
            </Link>
          </React.Fragment>
        )
      })}
    </span>
  )
}
