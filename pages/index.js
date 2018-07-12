import Link from 'next/link';
import Layout from '../components/MyLayout';
import axios from 'axios';

const Index = (props) => (
    <Layout>
        <h1>My Blog</h1>

        <ul>
        {props.news.map(v=>{
            console.info(v.title);
            return (
                <li key={v._id}>
                    <Link as={`/p/${v._id}`} href={`/post?id=${v.title}`}>
                        <a>{v.title}</a>
                    </Link>
                </li>
            )
        })}
        </ul>
    </Layout>
);

Index.getInitialProps = async ()=>{
    const res = await axios.get('http://localhost:8000/news');
    
    return {
        news:res.data.data
    }
}

export default Index;