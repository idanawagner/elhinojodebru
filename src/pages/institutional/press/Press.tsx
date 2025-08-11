import ArticleCard from '@/components/articleCard/ArticleCard';
import './Press.scss';

import { articles } from '@/data/press-data';
type Article = {
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

const Press = () => {
    return (
        <section className="press">
            <h2 className="press-title">En los medios</h2>
            <div className="press-grid ">
                {articles.map((article: Article, index: number) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Press;
