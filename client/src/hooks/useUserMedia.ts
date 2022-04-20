import { useState, useEffect } from 'react'

export const useUserMedia: any = (requestedMedia: any) => {
  const [mediaStream, setMediaStream] = useState<any>(null)

  useEffect(() => {
    const enableStream: any = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
        setMediaStream(stream);
      }
      catch (err) { console.log(err) }
    }

    if (!mediaStream) {
      enableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach((track: { stop: () => void }) => {
          track.stop()
        })
      }
    }
  }, [mediaStream, requestedMedia])

  return mediaStream
}
