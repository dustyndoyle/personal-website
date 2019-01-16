import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

export default class extends Component {

    static async getInitialProps(context) {

        const postId = context.query.id;

        // const res = await axios.get( 'http://dustyn-wordpress.192.168.254.78.xip.io:8888/wp-json/wp/v2/posts/' + postId );
        const res = await axios.get('http://dustynwordpress.10.0.1.19.xip.io/wp-json/wp/v2/pages/?slug=home');

        return {
            page: res.data
        }
    }

    render() {
        const pageContent = this.props.page[0];
        return(
            <Layout>
                <h1>{pageContent.title.rendered}</h1>
                <div dangerouslySetInnerHTML={{ __html: pageContent.content.rendered }} />
            </Layout>
        )
    }
}