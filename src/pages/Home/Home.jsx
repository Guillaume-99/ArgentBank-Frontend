import Header from "../../components/Header/HeaderIndex.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Features from "../../components/FeaturesIndex/Features.jsx";
import { useEffect } from "react";
import "./Home.scss";

function Home() {
    useEffect(() => {
        document.title = "Argent Bank | Home";
    }, []);
    return (
        <>
            <Header />
            <main>
                <Hero title="Promoted Content" subtitles={["No fees.", "No minimum deposit.", "High interest rates."]} text="Open a savings account with Argent Bank today!" />
                <Features
                    sr="Features"
                    items={[
                        {
                            title: "You are our #1 priority",
                            image: "chat",
                            alt: "Chat Icon",
                            description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
                        },
                        {
                            title: "More savings means higher rates",
                            image: "money",
                            alt: "Money Icon",
                            description: "The more you save with us, the higher your interest rate will be!",
                        },
                        {
                            title: "Security you can trust",
                            image: "security",
                            alt: "Security Icon",
                            description: "We use top of the line encryption to make sure your data and money is always safe.",
                        },
                    ]}
                />
            </main>
        </>
    );
}

export default Home;
