import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from '../store'
import FeedList from '../components/FeedList'
import Pagination from '../components/Pagination';

class Home extends Component {
  render() {
    const {match} = this.props
    const page = parseInt(match.params.page) || 1
    const pageInfo = store.getPageInfo(page, 5)
    const feeds = store.getFeedsByPage(pageInfo.current, pageInfo.pageSize)

    return (
      <div>
        Home
        <FeedList feeds={feeds}/>
        <Pagination {...pageInfo} baseUrl='/'/>
      </div>
    )
  }
}

export default Home
