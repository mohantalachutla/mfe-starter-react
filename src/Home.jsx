import Card from './components/base/Card';
import Pure from './pages/Home/Pure';

const Home = () => (
  <div className="container">
    <Card className="mt-4 h-96">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        Welcome to mfe-starter Home Page
      </h5>
      <Pure />
    </Card>
  </div>
);
export default Home;
