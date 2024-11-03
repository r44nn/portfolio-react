import '../styles/About.css'

function About() {
  return (
    <section className='tentang' id='about'>
      <div className='teks-tengah'>
        <h1>About me</h1>
      </div>
      <div className='row'>
        <div className='kolom'>
          <div className='tentang-info'>
            <h3>Hello World</h3>
            <p>My name is Muhammad Sulthan Zahran, but you can call me Zahran. I am currently studying at UPN Veteran Jawa Timur. I have a strong interest in website development and UI/UX design. I believe that every challenge is an opportunity to grow and become better. Therefore, I always strive to contribute my best in every task I undertake.</p>
          </div>
        </div>

        <div className='kolom'>
          <div className='skills-top'>
            <div className='judul'>
              <h3>Skills</h3>
            </div>
            <div className='list'>
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>React</span>
              <span>C#</span>
              <span>MySql</span>
              <span>Figma</span>
              <span>Canva</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
