import { useParams } from "wouter-hono";

export interface AboutData {
  title: string;
  content: string;
  author: string;
}

export async function loader(c:any): Promise<AboutData> {  
  return {
    title: "About Us",
    content: "This is the about page of our Hono + React application built with Hono, Vite, and SSR.",
    author: "Development Team",
  };
}

interface AboutProps extends Partial<AboutData> {}

export const About = ({ title = "About", content = "", author = "" }: AboutProps) => {
    const params = useParams();
    console.log("params: ", params);

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      {author && <p><strong>Author:</strong> {author}</p>}
    </div>
  );
};
