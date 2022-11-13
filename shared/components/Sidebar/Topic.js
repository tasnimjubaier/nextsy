import React, { useState } from 'react'
import TopicItem from './TopicItem'

const Topic = ({topic}) => {
	const [selectedTopic, setSelectedTopic] = useState(null)



	return (
		<div>
			<h3>{topic.title}</h3>
			{
				topic.items.map( (item, key) => (
					<TopicItem onSelectTopic={(id) => setSelectedTopic(id)} isSelected={selectedTopic == item.id} item={item} key={key} />
				))
			}
		</div>
	)
}

export default Topic