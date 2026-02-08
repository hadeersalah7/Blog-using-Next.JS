import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";
export default function PostItem({ post }) {
    const { image, title, date, excerpt, slug } = post;
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const imagePath = `/images/posts/${slug}/${image}`;
    return (
        <li className={classes.post}>
            <Link legacyBehavior>
                <a>
                    <div className={classes.image}>
                        <Image src={imagePath} alt={title} width={300} height={200}/>
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
}
