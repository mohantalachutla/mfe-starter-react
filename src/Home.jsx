import { Card } from 'flowbite-react';
import Page from './pages/Page/Pure';

const Home = () => (
  <div className="container">
    <Card className="mt-4 h-96">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        Welcome to mfe-starter Home Page
      </h5>
      <Page />
    </Card>
  </div>
);
export default Home;
