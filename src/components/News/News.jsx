import React, { useEffect, useState } from 'react'

const News = () => {
  const [news, setNews] = useState([])
  const fetchNews = async () => {
    const response = await fetch(
     ` https://crudcrud.com/api/${process.env.REACT_APP_CRUD_KEY}/news`
    )
    const data = await response.json()
    setNews(data)
  }
  useEffect(() => {
    fetchNews()
  }, [])
  return (
    <div>
      {news.map((newInfo) => (
        <div>
          {newInfo.title}
          <img src={newInfo.image} />
        </div>
      ))}
    </div>
  )
}

export default News
