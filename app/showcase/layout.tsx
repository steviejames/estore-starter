"use client"
import React, { useState } from 'react'
import FeedbackButtonProvider from './components/feedback-button-provider'
import Button from '@/components/ui/custom-button'

type Props = {
    children: React.ReactNode
}

const layout = (props: Props) => {
    const [feedbackOpen, setFeedbackOpen] = useState(false)
  return (
  <>
    <Button className='fixed bottom-4 right-4' onClick={() => setFeedbackOpen(true)}>Feedback</Button>
    <FeedbackButtonProvider open={feedbackOpen} onClose={() => setFeedbackOpen(false)}/>
    {props.children}
  </>
  )
}

export default layout