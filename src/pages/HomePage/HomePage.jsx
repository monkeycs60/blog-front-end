import articleData from "../../data/ArticleData";
import Article from "../../components/Article/Article";

const HomePage = () => {
  return (
  <>
      <h1 className="text-center text-4xl font-bold">Articles</h1>
      <div className="grid grid-cols-3 gap-4">
        {articleData.map((article) => (
          <Article
            key={article.id}
            id={article.id}
            cover={article.cover}
            title={article.title}
            content={article.content}
            author={article.author}
          />
        ))}
      </div>
      </>
  );
};


export default HomePage;
