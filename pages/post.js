import React, {Component} from 'react';
import axios from 'axios';
import Link from 'next/link';
import Layout from '../components/Layout';

export default class extends Component {

    static async getInitialProps( context ) {

        const postId = context.query.id;
        
        // const res = await axios.get( 'http://dustyn-wordpress.192.168.254.78.xip.io:8888/wp-json/wp/v2/posts/' + postId );
        const res = await axios.get( 'http://dustynwordpress.10.0.1.19.xip.io/wp-json/wp/v2/posts/' + postId );

        return {
            post: res.data
        }
    }

    render() {
        const postContent = this.props.post;
        return(
            <Layout>
                <h1>{postContent.title.rendered}</h1>
               <div dangerouslySetInnerHTML={{__html:postContent.content.rendered}} />
            </Layout>
        )
    }
}