import PagesLayout from '@components/PagesLayout';
import React from 'react'

const items = () => {
    const title: string = 'Items';
  return (
    <PagesLayout title={title}>
      <div>Items</div>
    </PagesLayout>
  )
}

export default items