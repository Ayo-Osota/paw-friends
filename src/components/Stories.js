import { useEffect, useState } from "react";
import { stories } from "../constants";
import carousel from "../assets/carousel.png";

const Stories = () => {
    const [index, setIndex] = useState(0);
    const [story, setStory] = useState(stories[index]);

    useEffect(() => {
        setStory(stories[index])
    }, [index]);

    useEffect(() => {
        let autoSlide = setInterval(() => {
            1 + index < 0 ? setIndex(stories.length - 1) :
                1 + index > stories.length - 1 ? setIndex(0) :
                    setIndex(1 + index)
        }, 5600);
        return () => {
            clearInterval(autoSlide);
        };
    }, [index]);

    const { name, age, text } = story;

    return (
        <section className="stories-section mt-5 container">
            <h2 className="heading">Stories from our fur owners</h2>
            <div className="even-columns">
                <article>
                    <h1>{name}, {age}</h1>
                    <p>{text}</p>
                </article>
                <div>
                    <div className="gallery">
                        {stories.map((story) => {
                            return (
                                <img key={story.id} src={story.image} alt="carousel" />
                            )
                        })}
                    </div>
                    <div className="carousel-btn__wrapper">
                        {stories.map((testimony, i) => {
                            return (
                                <button
                                    key={i}
                                    type="button"
                                    className={i === index ? "carousel-btn__active carousel-btn " : "carousel-btn"}
                                    onClick={() => setIndex(i)}
                                >
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stories;