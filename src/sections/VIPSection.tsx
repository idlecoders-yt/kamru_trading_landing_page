import SectionTag from '../components/SectionTag'
import BenefitCard from '../components/BenefitCard'

const benefits = [
  {
    icon: '📚',
    title: 'Trading শেখার সুযোগ',
    description:
      'Proper guideline এবং structured learning-এর মাধ্যমে fundamentals বুঝুন।',
  },
  {
    icon: '📊',
    title: 'Personal Signal + Analysis',
    description:
      'Market context, setup এবং analysis একসাথে দেখুন—শুধু signal নয়।',
  },
  {
    icon: '🧠',
    title: 'Strategy Explanation',
    description:
      'Step-by-step strategy breakdown দিয়ে decision-making skill তৈরি করুন।',
  },
  {
    icon: '📞',
    title: 'Live Call Support',
    description:
      'প্রয়োজনের সময় live discussion এবং practical guidance-এর সুবিধা।',
  },
  {
    icon: '🎯',
    title: 'Practical Guidance',
    description:
      'Theory-এর পাশাপাশি বাস্তব market situation নিয়ে শেখার সুযোগ।',
  },
]

function VIPSection() {
  return (
    <section className="vip-section">
      <div className="vip-header">
        <div>
          <SectionTag>02 / VIP EXPERIENCE</SectionTag>
<h2 className="vip-title">🎯 Proper Guideline সহ Trading শিখতে চাইলে আমাদের Personal Signal + VIP Group-এ Join করতে পারেন।
<br/>
</h2>
          <h2>
            <span>💎</span> VIP Group
          </h2>
        </div>

        <div className="vip-line" />
      </div>

      <div className="benefit-grid">
        {benefits.map((benefit) => (
          <BenefitCard
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>

      <div className="callout-card">
        <div className="callout-icon">🚀</div>

        <div>
          <h3>Serious about learning?</h3>
          <p>
            Proper guidance-এর মাধ্যমে trading শেখার journey শুরু করতে
            আমাদের Telegram community-তে join করুন।
          </p>
        </div>
      </div>

      <div className="warning-card">
        <div className="warning-icon">⚠</div>

        <div>
          <h3>মনে রাখবেন</h3>
          <p>
            Signal আপনাকে সাহায্য করতে পারে, কিন্তু long-term success-এর
            ভিত্তি হলো আপনার নিজের Skill, Knowledge এবং Risk Management।
            Trading-এ লাভ নিশ্চিত নয়; সবসময় নিজের risk বুঝে decision নিন।
          </p>
        </div>
      </div>
    </section>
  )
}

export default VIPSection
