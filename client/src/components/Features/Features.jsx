import FeaturesData from "../../data/features-data.json";
import "./Features.scss";

function Features() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>

            {FeaturesData.map((feat) => (
                <div className="feature-item" key={feat.id}>
                    <img
                        src={feat.img}
                        alt={feat.alt}
                        className="feature-icon"
                    />
                    <h3 className="feature-item-title">{feat.title}</h3>
                    <p>{feat.text}</p>
                </div>
            ))}
        </section>
    );
}

export default Features;
