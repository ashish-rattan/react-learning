import React from 'react';
import NewsListItem from './news_list_item';

const newsList = (prop) => {
    const items = prop.news.map((item) => {
        return (
            <NewsListItem key={item.id} item={item}/>
        )
    })
    return (
        <div>
            {items}
        </div>
    )
}

export default newsList;