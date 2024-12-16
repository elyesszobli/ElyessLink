import  { useState, useEffect } from 'react';
import Header from '../components/Header';
import PostForm from '../components/PostForm';
import PostCard from "../components/PostCard";
import MyProfilHome from "../components/MyProfilHome";
import SuggestionBar from '../components/SuggestionBar';
import styles from "./Home.module.scss";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7264/Post');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='bg-gray-800 h-auto w-screen box-border'>
      <Header />
      <div className={styles.content}>
        <div className={styles.Z1}>
          <MyProfilHome />
        </div>
        <div className={styles.Z2}>
          <PostForm />
          {data.map((post) => (
            <PostCard key={post.id} username={post.user.username} content={post.content} image={post.imagePath} LikeCount={post.LikeCount}/>
          ))}
        </div>
        <div className={styles.Z3}>
          <SuggestionBar />
        </div>
      </div>
    </div>
  );
}

export default Home;
