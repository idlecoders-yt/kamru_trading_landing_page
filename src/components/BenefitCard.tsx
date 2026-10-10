interface BenefitCardProps {
  icon: string
  title: string
  description: string
}

function BenefitCard({
  icon,
  title,
  description,
}: BenefitCardProps) {
  return (
    <article className="benefit-card">
      <div className="benefit-icon">{icon}</div>

      <div className="benefit-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <span className="benefit-check">✓</span>
    </article>
  )
}

export default BenefitCard
