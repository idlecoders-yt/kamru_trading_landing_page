import SectionTag from '../components/SectionTag'

function SkillSection() {
  return (
    <section className="skill-section">
      <div className="section-intro">
        <SectionTag>01 / THINK DIFFERENT</SectionTag>

        <h2>
          Signal follow নয়,
          <br />
          <span>Skill build করুন.</span>
        </h2>

        <p>
          অন্যের signal-এর ওপর পুরোপুরি নির্ভর না করে market বুঝতে,
          নিজের analysis করতে এবং responsible decision নিতে শেখাই আমাদের
          মূল লক্ষ্য।
        </p>
      </div>
                <h2>নিজেকে এই দুটি প্রশ্ন করুন:</h2>
<br/>
      <div className="question-grid">

        <article className="question-card">
          <div className="question-number">01</div>
          <h3>শুধু Signal Follow করে কি সত্যিই Trading শেখা সম্ভব?</h3>
          <p>
            শুধু entry নেওয়া নয়—কেন একটি setup তৈরি হয়েছে সেটাও বোঝা জরুরি।
          </p>
        </article>
        <article className="question-card">
          <div className="question-number">02</div>
          <h3>অন্যের Signal-এর ওপর নির্ভর করে কি Long-Term Success ধরে রাখা সম্ভব?</h3>
          <p>
            নিজের skill, knowledge এবং risk management ছাড়া consistency তৈরি
            করা কঠিন।
          </p>
        </article>
      </div>
    </section>
  )
}

export default SkillSection
