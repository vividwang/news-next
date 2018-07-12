import { withRouter } from 'next/router'
import Layout from '../components/MyLayout';
import axios from 'axios';

const Post = withRouter(class Post extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            context:''
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:8000/news/${this.props.router.query.id}`).then(res=>{
            if(res.status === 200 && res.data.code === 1){
                console.info(res.data.data);
                this.setState({
                    context:res.data.data[0].context
                })
            }
        })
    }
    render(){
        let context = this.state.context;

        return <Layout>
            <h1>{this.props.router.query.id}</h1>
            <p>{this.state.context}</p>
        </Layout>
       
    }
});

export default Post;
