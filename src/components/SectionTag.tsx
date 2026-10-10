interface SectionTagProps {
  children: string
}

function SectionTag({ children }: SectionTagProps) {
  return <div className="section-tag">{children}</div>
}

export default SectionTag
