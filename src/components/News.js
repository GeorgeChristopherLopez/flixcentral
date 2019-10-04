import React, { Component } from 'react';



class News extends Component {
    state = {
        posts: [],

    }


    componentDidMount() {
      
        const newsKey = '0f5aaaf46c6943a196e19b750f199b32';
        var url = 'https://newsapi.org/v2/everything?' +
            'q=+Marvel+Comics&' +
            'language=en&' +
            'from=2019-09-27&' +
            'sortBy=popularity&' +
            `apiKey=${newsKey}`;




        fetch(url)
            .then(response => response.json())
            .then(data => {
                const posts = data.articles.slice(0, 5);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                    }
                })
              
                this.setState({ posts: updatedPosts })
                console.log(this.state.posts);
            })

            .catch(function () {
                alert('error');
            })


    }

    render() {
        {/*
            let posts = this.state.posts.map(post => {
                return <Post
                    source={post.source}
                    description={post.description}
                    title={post.title}
                    url={post.url}
                    image={post.urlToImage} />;
            });
        };
    */}

        return (


            <section className="news-section">
                <div className="container">
                    <h1>The News</h1>
                    <div className="news">

                        <div className="news-card">
                            <div className="thumbnail"><img src="https://i.kinja-img.com/gawker-media/image/upload/s--X1PNBRXV--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/pw5dos9s8u58qtpvkg8z.png" alt="img" /></div>
                            <div className="title"><p>Powers of X Just Galaxy Brained This Shit</p></div>
                        </div>


                        <div className="news-card">
                            <div className="thumbnail"><img src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/spiderman-farfromhome-charity.jpg" alt="img" /></div>
                            <div className="title"><p>Spider-Man Will Stay in the Marvel Cinematic Universe As Disney and Sony Announce New Deal</p></div>
                        </div>


                        <div className="news-card" >
                            <div className="thumbnail"><img src="https://nerdist.com/wp-content/uploads/2019/09/HOUSE_POWER_OF_X_HC.jpg" alt="img" /></div>
                            <div className="title"><p>Which 7 X-Men Characters are the Mystery Mutants of POWERS OF X?</p></div>
                        </div>

                    </div>
                </div>
            </section>



        );


    }

}

export default News;





