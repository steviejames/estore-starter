"use client"
import React from 'react'
import Modal from './ui/modal'
import usePreviewModal from '@/hooks/use-preview-modal'
import BuildingPage from './building-page'
type Props = {
  open: boolean
  onClose: () => void
}

export default function WatingListModal({open, onClose}: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className='w-full h-full'>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSfqIoIOSs1PLKJBX3vKNj1fv_djzyCxZCY_UkzPYOdjyx5xEA/viewform?embedded=true" 
          className='w-full h-full'
          style={{ minHeight: '100vh' }}
          frameBorder="0"
        >
          A carregar…
        </iframe>
      </div>
    </Modal>
  )
}
