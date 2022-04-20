import { useState, useCallback } from 'react'

export const usePortraitRatio = (initialRatio: any) => {
  const [aspectRatio, setAspectRatio] = useState(initialRatio)
  
  // Create variable that analyzes h/w passed from devise and reconfigure to portrait
  const calculateRatio = useCallback((height, width) => {
    if (height && width) {
      const isPortrait = width <= height
      const ratio = isPortrait ? height / width : width / height

      setAspectRatio(ratio)
    }
  }, [])

  return [aspectRatio, calculateRatio]
}
