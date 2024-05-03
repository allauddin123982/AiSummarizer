import { useState, useEffect } from "react";
import { linkIcon } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";
const Demo = () => {

  const [article, setArticle] = useState({ url: '', summary:''});
  
  const [getSummary, {error,isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data} = await getSummary({articleUrl:article.url});
    if(data.summary){
      const newArticle = {...article, summary:data.summary}
      
      setArticle(newArticle)
      console.log(article)
    }
  }
  useEffect(() => {}, []);
  return (
    <section className="mt-16 w-full max-w-xl">
      {/* search */}
      <div className="w-full flex flex-col gap-2">
        <form
          className="relative flex justify-center items-center"
          onsubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="linkIcon"
            className="absolute left-0 my-2 ml-3 w-5 "
          />
          <input
            type="url"
            placeholder="Enter a Link "
            value={article.url}
            onChange={(e) => setArticle({...article, url:e.target.value})} 
            required
            className="url_input peer"
          />
          <button type="submit" className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 ">^</button>
        </form>
        {/*Browse URL History */}

      </div>
      {/*Display Results*/}

    </section>
  );
};

export default Demo;
