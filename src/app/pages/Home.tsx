import { ClockButton } from "../components/ClockButton";
import { Counter } from "../components/Counter";

export interface HomeData {
  title: string;
  description: string;
  timestamp: string;
}

export async function loader(): Promise<HomeData> {
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return {
    title: "Home Page",
    description: "Welcome to the home page of our Hono + React application.",
    timestamp: new Date().toISOString(),
  };
}

interface HomeProps extends Partial<HomeData> {}

export const Home = ({ title = "Home Page", description = "", timestamp }: HomeProps) => {
  return (
    <div>
      <p>Home page</p>

      <h1>{title}</h1>
      <h2>{description}</h2>
      {timestamp && <p><em>Dados carregados em: {new Date(timestamp).toLocaleString()}</em></p>}
      
      <h2>Example of useState()</h2>
      <Counter />
      <h2>Example of API fetch()</h2>
      <ClockButton />
    </div>
  );
};