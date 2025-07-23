// src/pages/FullArticle.jsx
import { useParams } from 'react-router-dom';
import { articles } from '@/data/press-data';
import './FullArticle.scss';
export default function FullArticle() {
    const { id } = useParams();
    const article = articles.find((article) => {
        return article.id.toString() === id;
    });

    if (!article) {
        return <p>Artículo no encontrado</p>;
    }

    return (
        <article className="article-page">
            <div className="article-header">
                <h1>{article.title}</h1>
                <p className="date">{article.date}</p>
            </div>

            <div className="article-intro">
                <img
                    src={article.image.src}
                    alt={article.image.alt}
                    className="article-image"
                />

                <div className="intro-text">
                    {/* Primeros 2 párrafos (por ejemplo) */}
                    {article.text
                        .split('\n')
                        .slice(0, 3)
                        .map((line, index) => (
                            <p key={index}>{line.trim()}</p>
                        ))}
                </div>
            </div>

            <div className="article-content">
                {/* Resto del texto */}
                {article.text
                    .split('\n')
                    .slice(2)
                    .map((line, index) => (
                        <p key={index}>{line.trim()}</p>
                    ))}
            </div>
        </article>
    );
}
