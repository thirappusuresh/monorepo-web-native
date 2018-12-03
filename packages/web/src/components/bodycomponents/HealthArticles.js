/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/destructuring-assignment */
/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AsyncHelperHOC from '../common/AsyncHelperHOC';
import { getBlogPosts } from '../../services/HomePageServices';
import { getMonthName, getParsedGMTString } from '../../utils/DateUtils';

// eslint-disable-next-line react/prop-types
const HealthArticleItem = ({ blog }) => {
    const { _embedded = {}, link } = blog;
    const featuredmedia = _embedded['wp:featuredmedia'] || [];
    const imgSource = featuredmedia.length ? featuredmedia[0].source_url : null;
    const parsedDate = getParsedGMTString(blog.date_gmt);
    const monthIndex = parsedDate.getMonth();
    const month = getMonthName(monthIndex);
    const date = `${parsedDate.getDate()}th ${month} ${parsedDate.getFullYear()}`;

    return (
        <div
            role="link"
            tabIndex={0}
            data-href={link}
            // onClick={handleNavigation}
            // onKeyDown={handleNavigation}
            className="health-articles--items col-md-3"
        >
            {imgSource && <img className="health-articles--items-image" alt="Recent" src={imgSource} />}
            {!imgSource && <div style={{ height: '210px', backgroundColor: '#d8d8d8' }} />}

            <p className="health-articles--items-desc">
                {blog.title.rendered}
            </p>
            <h6 className="health-articles--items-heading">
                {date}
            </h6>
        </div>
    );
};

const HealthArticleItemLoading = () => (
    <div
        className="health-articles--items col-md-3"
    >
        <div style={{ height: '210px', backgroundColor: '#d8d8d8' }} />

        <p className="health-articles--items-desc loading-bar-80" />
        <div className="health-articles--items-heading loading-bar-60" />
    </div>
);

class HealthArticles extends Component {
    state = {
        blogPosts: [],
    }

    componentDidMount() {
        const { setIsLoading, setError } = this.props;
        setIsLoading(true);
        getBlogPosts()
            .then((blogPosts) => {
                this.setState(
                    prevState => ({
                        ...prevState,
                        blogPosts,
                    }),
                    () => setIsLoading(false),
                );
            })
            .catch((e) => {
                setError(e);
                setIsLoading(false);
            });
    }

    render() {
        const { isLoading, errors } = this.props;
        return (
            <div className="health-articles--container web-only">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <h2 className="col-md-12 d-flex justify-content-center health-articles--heading">
                            Health Articles
                        </h2>
                        <div className="col-md-12 row">
                            {isLoading &&
                                <React.Fragment>
                                    <HealthArticleItemLoading key={1} />
                                    <HealthArticleItemLoading key={2} />
                                    <HealthArticleItemLoading key={3} />
                                    <HealthArticleItemLoading key={4} />
                                </React.Fragment>
                            }
                            {errors &&
                                'Some error occured. Please refresh'
                            }
                            {!isLoading && !errors && !!this.state.blogPosts.length &&
                                <React.Fragment>
                                    {
                                        this.state.blogPosts.map(t => (
                                            <HealthArticleItem blog={t} key={t.id} />
                                        ))
                                    }
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HealthArticles.propTypes = {
    isLoading: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    errors: PropTypes.object,
    setIsLoading: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
};

HealthArticles.defaultProps = {
    isLoading: true,
    errors: null,
};

export default AsyncHelperHOC(HealthArticles);
