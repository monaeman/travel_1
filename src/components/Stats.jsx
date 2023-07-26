import React from 'react'

function Stats({items}) {
  const numItems = items.length;

  const numPacked = items.filter(item=> item.packed).length;
  const percentage = Math.round((numPacked / numItems)* 100);
  
  return (
    <footer className='stats'>

      {percentage === 100 ? ("you have packed everything , you are ready to go!"): (
        <em> 🚋 You have {numItems} items on your list, and you have already packed {numPacked} ({percentage}%)</em>

      )}
       
    </footer>
  )
}

export default Stats