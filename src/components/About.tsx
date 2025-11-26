interface AboutProps {
  bio: string;
  imageUrl?: string;
}

export default function About({ bio, imageUrl }: AboutProps) {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          {imageUrl && (
            <div className="about-image">
              <img src={imageUrl} alt="Profile" />
            </div>
          )}
          <div className="about-text">
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
