const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <p>

Enthusiastic and motivated Full Stack Web Developer with a strong foundation in C, C++, Java, and JavaScript. Proficient in building modern web applications using technologies such as Node.js, React.js, and Express.js. Skilled in front-end development with expertise in HTML, CSS, and responsive design principles. Experienced in version control systems like Git and collaborative development on platforms like GitHub.

Well-versed in utilizing Visual Studio Code as the primary integrated development environment and Postman for API testing. Familiarity with RDBMS and SQL, demonstrating the ability to design and manage relational databases. Adept at leveraging frameworks such as Tailwind CSS and Next.js to enhance the efficiency and aesthetics of web applications.

Possessing a strong problem-solving mindset, adaptability to new technologies, and a commitment to delivering high-quality code. Eager to contribute to dynamic and innovative projects while continuously expanding skills in full-stack development.</p>
<br></br><br></br><br></br>
 <h4>Thank you for Giving Your Time.</h4>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
