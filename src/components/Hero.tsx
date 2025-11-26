/*interface HeroProps {
  name: string;
  title: string;
  description: string;
  cvUrl?: string;
}

export default function Hero({ name, title, description, cvUrl }: HeroProps) {
  const handleDownloadCV = () => {
    if (cvUrl) {
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = `${name}_CV.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-name">{name}</h1>
        <h2 className="hero-title">{title}</h2>
        <p className="hero-description">{description}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
          
         {cvUrl && (
            <button onClick={handleDownloadCV} className="btn-primary">Download CV</button>
          )}
        </div>
      </div>
    </section>
  );
}
*/
interface HeroProps {
  name: string;
  title: string;
  description: string;
  cvUrl?: string;
}

export default function Hero({ name, title, description, cvUrl }: HeroProps) {
  const handleDownloadCV = async () => {
    if (!cvUrl) return;

    try {
      const response = await fetch(cvUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/pdf",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${name}_CV.pdf`);
      document.body.appendChild(link);
      link.click();
      
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the file:", error);
      alert("Sorry, something went wrong while downloading the file.");
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-name">{name}</h1>
        <h2 className="hero-title">{title}</h2>
        <p className="hero-description">{description}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>

          {cvUrl && (
            <button onClick={handleDownloadCV} className="btn-primary">
              Download CV
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
