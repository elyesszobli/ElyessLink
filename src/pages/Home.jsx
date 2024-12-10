import Header from '../components/Header';
import PostForm from '../components/PostForm';
import PostCard from "../components/PostCard";
import MyProfilHome from "../components/MyProfilHome"
import SuggestionBar from '../components/SuggestionBar';
import styles from "./Home.module.scss";

function Home() {
  return (
    
      
      <div className='bg-gray-800 h-auto w-screen box-border'>
        <Header/>
        <div className={styles.content}>
          <div className={styles.Z1}>
            <MyProfilHome/>
          </div>
          <div className={styles.Z2}>
            <PostForm/>
            <PostCard/>
            <PostCard/>
          </div>
          <div className={styles.Z3}>
            <SuggestionBar/>
          </div>

        </div>
      </div>
    
  )
}

export default Home
