import Image from "next/image";
import classes from "./hero.module.css";
export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/sites/hadeer.jpg"
                    alt="An image showing a person reading a blog post"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Hadeer</h1>
            <p>
                I blog about web development - especially frontend frameworks like
                React.
            </p>
        </section>
    );
}
