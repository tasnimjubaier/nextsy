import React from 'react'
import TopicItem from './TopicItem'

const Topic = ({topic}) => {
	console.log(topic)
	return (
		<div>
			<h3>{topic.title}</h3>
			{
				topic.items.map( (item, key) => (
					<TopicItem item={item} key={key} />
				))
			}
		</div>
	)
}

export default Topic