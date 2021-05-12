import { useState, useEffect } from "react";
import Articles from '../components/ArticleList';
import Meta from "../components/Meta";
import {server} from '../config/index';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${server}/api/articles`)
      .then((res) => res.json())
      .then(result => {
        setArticles(result)
      });
  }, []);

  return (
    <div>
      <Meta />
      <Articles articles={articles} />
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
//   const articles = await res.json();
//   console.log(articles)
//   return {
//     props: {
//       articles
//     }
//   }
// };
