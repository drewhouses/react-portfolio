import drewpic from "../assets/images/drew.jpg";

export default function AboutPage() {
  return (
    <div className="container pt-4 about-me">
      <img className="aboutme-img" src={drewpic}></img>
      <p className="aboutme-text">
        Hey there! My name is Drew Casas and I am based out of Texas. I
        currently work in software support and am looking to make the transition
        from networking, operations, and administration to become a full-stack
        developer. My expertise in software support has definitely given me an
        edge as I have a great amount of knowledge and expertise dealing with
        different enterprise platforms. This has helped me gain an important
        foundational knowledge in how things work before taking on the challenge
        of becoming a web developer.
      </p>
      <h3>Education</h3>
      <p className="aboutme-text">
        I graduated from Rochester Institute of Technology with a degree in
        Networking and Systems Administration. During my time here I also gained
        experience building in languages like C++, Java, HTML/CSS, Python, and
        Perl.
      </p>
      <p className="aboutme-text">
        I recently completed a Full-Stack Development Coding Bootcamp to help
        jumpstart my career in web development. Throughout this course, I worked
        with the foundational technologies like React, MongoDB, GraphQL, MySQL,
        ExpressJS, and many others. This allowed me to build various
        applications, some of which you can check out on my portfolio page.
      </p>
      <h3>Getting in touch</h3>
      <p className="aboutme-text">
        If you would like to see my official resume, you can download from the
        "Resume" page OR If you just want to reach out and get some more
        information from me, you can send me a message from the "Contact" page.
      </p>
      <p className="aboutme-text">
        Lastly, you can also check out my X, GitHub, or LinkedIn accounts with
        the links found in the footer.
      </p>
    </div>
  );
}
