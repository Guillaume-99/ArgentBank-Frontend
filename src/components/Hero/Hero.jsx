import { useEffect } from "react";

function Hero({ title, subtitles, text }) {
    return (
        <div className="hero">
            <div className="hero__content">
                <h2 className="sr-only">{title}</h2>
                {subtitles.map((subtitle, index) => (
                    <p key={index} className="hero__subtitle">
                        {subtitle}
                    </p>
                ))}
                <p className="hero__text">{text}</p>
            </div>
        </div>
    );
}

export default Hero;
