import drewpic from "../assets/images/drew.jpg";

export default function AboutPage() {
  return (
    <div className="container pt-4">
      <img className="aboutme-img" src={drewpic}></img>
      <p className="aboutme-text">
        Hey there! My name is Drew Casas and I am based out of Texas. I
        currently work in software support and am looking to make the transition
        from networking, operations, and administration to become a full-stack
        developer. My expertise in software support has definitely given me an
        edge as I have a great amount of knowledge and expertise dealing with
        different enterprise platforms. This has helped me gain an important
        foundational knowledge in computing before taking on the challenge of
        becoming a web developer.
      </p>
      <h3>Education</h3>
      <p className="aboutme-text">
        I graduated from Rochester Institute of Technology with a degree in
        Networking and Systems Administration.
      </p>
    </div>
  );
}
