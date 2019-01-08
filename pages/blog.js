import React, {Component} from 'react';
import axios from 'axios';
import Link from 'next/link';
import Layout from '../components/Layout';

export default class extends Component {

    static async getInitialProps() {

        const res = await axios.get( 'http://dustyn-wordpress.192.168.254.78.xip.io:8888/wp-json/wp/v2/posts' );

        return {
            posts: res.data
        }
    }

    render() {
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