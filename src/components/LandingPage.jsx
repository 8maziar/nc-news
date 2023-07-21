import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
const [topics,setTopics]=useState([])
const [selectValue,setSelectValue]=useState('')

const navigate = useNavigate();

useEffect(()=>{
  getTopics().then((res)=>{
setTopics(res)
  })
},[])

useEffect(()=>{
  if(selectValue)  navigate(`/articles/${selectValue}`);
 
},[selectValue])


  return (
    <main className="home">
      <section className="about">
        <p>
          Welcome to our Coding Articles Website, where you'll find a wide range of informative and accessible articles about coding. Whether you're a beginner or an experienced developer, our
          articles cover various programming languages, frameworks, and concepts. From tutorials and guides to the latest industry trends and best practices, we provide valuable insights and practical
          tips to help you excel in coding. Join our community of coding enthusiasts, engage in discussions, and enhance your skills with our user-friendly website. Start your coding journey with us
          and unlock your full potential!
        </p>
      </section>
      <section className="topics">
        <form action="">
          <label htmlFor="topics">Select your topic</label>
          <select defaultValue={''} name="topics" id="topics" onChange={(e)=> setSelectValue(e.target.value)}>
            <option value=""  disabled hidden>
              Choose here
            </option>
            {topics.map((topic) => (
              <option value={topic.slug} key={topic.slug}>
                {topic.slug}
              </option>
            ))}
          </select>
        </form>
      </section>
    </main>
  );
};
export default LandingPage;
