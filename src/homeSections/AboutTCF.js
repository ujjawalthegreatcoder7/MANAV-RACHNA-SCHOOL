import ContactUs from "../components/ContactUs";
import "../styles/vision.css";

function AboutTCF() {
  return (
    <div className="vision-container whytcf">

      <h2 className="vision-title">About TCF</h2>

      <div className="vision-line"></div>

      <p className="vision-text">
        <i>The Council Forum</i> is a first-of-its-kind national leadership conclave designed
        to empower IB student councils across India by bringing their voices, ideas, and
        aspirations onto one dynamic platform. Rooted in the belief that the future is
        co-created, TCF unleashes the collective potential of youth leaders through
        collaboration, innovation, and meaningful engagement.
      </p>

      <p className="vision-text">
        This forum offers student councils unparalleled exposure to diverse industries,
        global institutions, leadership experts, and entrepreneurial ecosystems—
        transforming ideas into actionable impact.
      </p>

      <p className="vision-text">
        Through leadership bootcamps, competitive student-led showcases, industry
        interactions, and cross-school collaboration spaces, the conclave aims to shape
        the next generation of conscious leaders, creators, and changemakers.
      </p>

      <p className="vision-text">
        The Council Forum is not just an event—it's an experience. A gateway to
        opportunities. A movement where youth voice becomes youth impact.
      </p>

<div className="vision-title mt-1 whatwebring">
      <h2 className="vision-title mt-1 whatwebring">What We Bring to the Table</h2>
      <div className="vision-line"></div>

      <div className="flip-container mt-4">

        {[
          {
            title: "National Platform for Student Voice",
            desc: "A national platform for student voice, agency, and leadership across IB schools."
          },
          {
            title: "Keynote Sessions",
            desc: "High-impact keynote sessions delivered by leaders shaping today's world."
          },
          {
            title: "Leadership & Entrepreneurship Bootcamp",
            desc: "Leadership bootcamp led by India’s top startup ecosystem mentors and leaders."
          },
          {
            title: "Industry Insights & Global Networks",
            desc: "Access to industry insights, global networks and institutional partners."
          },
          {
            title: "Changemakers Marketplace",
            desc: "Competitive student-led spaces like Changemakers Marketplace and Innovation Pitches."
          },
          {
            title: "Sustainability Projects",
            desc: "Cross-school sustainability and service projects aligned with SDGs."
          }
        ].map((item, index) => (

          <div className="flip-card" key={index}>
            <div className="flip-card-inner">

              {/* FRONT */}
              <div className="flip-card-front">
                <h5>{item.title}</h5>
              </div>

              {/* BACK */}
              <div className="flip-card-back">
                <p>{item.desc}</p>
              </div>

            </div>
          </div>

        ))}
</div>
      </div>
    </div>

  );
}

export default AboutTCF;