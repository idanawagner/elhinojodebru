import { Link } from 'react-router-dom';
import './ArticleCard.scss';
type ArticleCardProps = {
    article: {
        id: number;
        title: string;
        text: string;
        date: string;
        image: {
            src: string;
            alt: string;
            imageCaption: string;
        };
        link: string;
    };
    index: number;
};

const ArticleCard = ({
    article,
    index,
}: ArticleCardProps & {
    index: number;
}) => {
    return (
        <Link
            to={`/institutional/press/article/${article.id}`}
            className="articleCardLink"
        >
            <article className="articleCard" key={index}>
                <img
                    src={article.image.src}
                    className={'img' + index}
                    alt={article.image.alt}
                />
                <div className="articleCard-content">
                    <h3 className="articleCard-title">{article.title}</h3>
                    <p className="articleCard-text">
                        {article.text
                            .split('\n')[0]
                            .slice(0, 150)
                            .split(' ')
                            .slice(0, -1)
                            .join(' ')}
                        ...
                    </p>
                    <div className="articleCard-footer">
                        <p className="date">{article.date}</p>
                        <p className="full">Leer artículo completo</p>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default ArticleCard;
