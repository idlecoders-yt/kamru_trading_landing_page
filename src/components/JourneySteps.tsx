const steps = [
  ['01', 'Learn'],
  ['02', 'Practice'],
  ['03', 'Improve'],
  ['04', 'Trade'],
]

function JourneySteps() {
  return (
    <div className="journey-steps">
      {steps.map(([number, label], index) => (
        <span key={number}>
          <b>{number}</b>
          {label}
          {index < steps.length - 1 && <i>→</i>}
        </span>
      ))}
    </div>
  )
}

export default JourneySteps
