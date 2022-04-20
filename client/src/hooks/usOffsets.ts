import { useState, useEffect } from 'react'

export const useOffsets = (vWidth: number, vHeight: number, cWidth: number, cHeight: number) => {
  const [offsets, setOffsets] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (vWidth && vHeight && cWidth && cHeight) {
      const x = vWidth > cWidth
        ? cWidth
        : 0

      const y = vHeight > cHeight
        ? cHeight
        : 0

      setOffsets({ x, y })
    }
  }, [vWidth, vHeight, cWidth, cHeight])

}