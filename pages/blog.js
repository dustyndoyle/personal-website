import React, {Component} from 'react';
import axios from 'axios';
import Error from 'next/error';
import Link from 'next/link';
import Layout from '../components/Layout';

export default class extends Component {

    static async getInitialProps() {

        try {
            // const res = await axios.get( 'http://dustyn-wordpress.192.168.254.78.xip.io:8888/wp-json/wp/v2/posts' );
            const res = await axios.get( 'http://dustynwordpress.10.0.1.19.xip.io/wp-json/wp/v2/posts' );
            var blogPosts = res.data;
        } catch( err ) {
            var blogPosts = false;
            // const statusCode = res.statusCode > 200 ? res.statusCode : false;
        }

        return {
            posts: blogPosts
        }
    }

    render() {
        if( !this.props.posts ) {

            return <Error statusCode={404} />
        }
        return(
            <Layout>
                <ul>
                {
                    this.props.posts.map( post => {
                        return(
                            <li key={post.id}>
                                <Link as={`/p/${post.slug}`} href={`/post?id=${post.id}`}>
                                    <a>{post.title.rendered}</a>
                                </Link>
                            </li>
                        )
                    })
                }
                </ul>
            </Layout>
        )
    }
}