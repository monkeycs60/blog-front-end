const Article = ({ id, cover, title, content, author, date }) => {
  const dateFormatted = date.replace("T", " at ");
  return (
    <article className="rounded-lg bg-amber-500 p-2 ">
      <div className="relative">
        <img src={cover} alt={title} className="rounded-xl" />
        <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
          {id}
        </span>
        <span className="absolute right-2 bottom-0 bg-cyan-100/40 ">
          <time dateTime={date} className="text-yellow-300">
            {dateFormatted}
          </time>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <h2 className="my-2 text-center text-xl font-bold">{title}</h2>
        <p className="text-justify text-sm">{content}</p>
        <p className="w-full pt-4 text-right">{author}</p>
      </div>
    </article>
  );
};

export default Article;
