import articleData from "../../data/ArticleData";
import Article from "../../components/Article/Article";

const HomePage = () => {
  return (
    <>
      <h1 className="mt-4 text-center text-4xl font-bold">Articles</h1>
      <div className="grid gap-4 2xl:grid-cols-3">
        {articleData.map((article) => (
          <Article
            key={article.id}
            id={article.id}
            cover={article.cover}
            title={article.title}
            content={article.content}
            author={article.author}
            date={article.date}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
