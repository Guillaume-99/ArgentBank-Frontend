function Features({ items }) {
    return (
        <div className="features">
            <h2 className="sr-only">Features</h2>
            {items.map((item, index) => (
                <div key={index} className="feature__item">
                    <img src={`../../img/icon-${item.image}.webp`} alt={item.alt} className="feature__icon" />
                    <h3 className="feature__item--title">{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Features;
