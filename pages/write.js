import React from 'react';
import Layout from '../components/MyLayout';
import axios from 'axios';

class WritePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title:'',
            context:'',
            time:'',
            tag:'',
        }
       
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:8000/news').then(res=>{
            console.info(res.data);
        })
    }

    handleInput(key,e){
        this.setState({
            [key]:e.target.value
        })
    }

    handleSubmit(){
        this.setState({
            time:new Date(),
        },()=>{
            axios.put("http://localhost:8000/news/add",this.state).then(res=>{
                if(res.status === 200 && res.data.code === 1){
                    console.info(res.data.data);
                }
            });
        });
    }

    render(){
        return (
            <Layout>
            <div>
            <div className="write">
                <h1>This is Write Page.</h1>
                <div>
                    <input type="text" placeholder="title" required onChange={this.handleInput.bind(this,'title')}/><br/>
                    <textarea placeholder="title" required onChange={this.handleInput.bind(this,'context')}/><br/>
                    <input type="text" placeholder="tag" required onChange={this.handleInput.bind(this,'tag')}/><br/>
                    <button onClick={this.handleSubmit}>提交</button>
                </div>
            </div>
            <style>{`
            .write h1{
                text-align:center;
            }
            `}</style>
        </div> 
            </Layout>
        )
    }
}

export default WritePage;