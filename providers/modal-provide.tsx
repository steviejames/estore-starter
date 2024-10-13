"use client"
import PreviewModal from '@/components/preview-modal'
import React, { useEffect, useState } from 'react'
import BuildingPage from '@/components/building-page'
import usePreviewModal from '@/hooks/use-preview-modal'

interface ModalProviderProps {
}

const ModalProvider = (props: ModalProviderProps) => {
  const [isMounted, setIsMounted] = useState(false)
  const {modal} = usePreviewModal()
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null
  return (
    <>
      {modal === "building" ? <BuildingPage /> : <PreviewModal />}
    </>

  )
}

export default ModalProvider