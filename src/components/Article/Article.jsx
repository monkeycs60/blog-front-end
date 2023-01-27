const Article = ({ id, cover, title, content, author }) => {
  return (
    <article className="bg-amber-500">
      <img src={cover} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{author}</p>
      <p>{id}</p>
    </article>
  );
};

export default Article;
