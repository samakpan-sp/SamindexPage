import { useState } from 'react'

function detectWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch (e) {
    return false
  }
}

export function useWebGLSupport() {
  const [supported] = useState(detectWebGL)
  return supported
}