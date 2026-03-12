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


      {/* What We Bring Section */}

      <h2 className="vision-title mt-5 ">What We Bring to the Table</h2>

      <div className="vision-line"></div>

      <div className="accordion mt-4" id="featuresAccordion">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#feature1"
            >
              National Platform for Student Voice
            </button>
          </h2>

          <div
            id="feature1"
            className="accordion-collapse collapse show"
            data-bs-parent="#featuresAccordion"
          >
            <div className="accordion-body">
              A national platform for student voice, agency, and leadership across IB schools.
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#feature2"
            >
              Keynote Sessions
            </button>
          </h2>

          <div
            id="feature2"
            className="accordion-collapse collapse"
            data-bs-parent="#featuresAccordion"
          >
            <div className="accordion-body">
              High-impact keynote sessions delivered by leaders shaping today's world.
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#feature3"
            >
              Leadership & Entrepreneurship Bootcamp
            </button>
          </h2>

          <div
            id="feature3"
            className="accordion-collapse collapse"
            data-bs-parent="#featuresAccordion"
          >
            <div className="accordion-body">
              Leadership bootcamp led by India’s top startup ecosystem mentors and leaders
              from law, politics, sports, finance, technology and social impact.
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#feature4"
            >
              Industry Insights & Global Networks
            </button>
          </h2>

          <div
            id="feature4"
            className="accordion-collapse collapse"
            data-bs-parent="#featuresAccordion"
          >
            <div className="accordion-body">
              Access to industry insights, global networks and institutional partners.
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#feature5"
            >
              Changemakers Marketplace
            </button>
          </h2>

          <div
            id="feature5"
            className="accordion-collapse collapse"
            data-bs-parent="#featuresAccordion"
          >
            <div className="accordion-body">
              Competitive student-led spaces like Changemakers Marketplace and Innovation Pitches.
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#feature6"
            >
              Sustainability Projects
            </button>
          </h2>

          <div
            id="feature6"
            className="accordion-collapse collapse"
            data-bs-parent="#featuresAccordion"
          >
            <div className="accordion-body">
              Cross-school sustainability and service projects aligned with SDGs.
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default AboutTCF;