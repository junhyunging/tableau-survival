import { useState, useEffect } from 'react'
import { getCharacterImage } from '../../data/characters'

export default function CharacterSprite({
  characterId,
  expression = 'default',
  position = 'center',
  isActive = true,
  className = '',
}) {
  const [loaded, setLoaded] = useState(false)
  const [currentSrc, setCurrentSrc] = useState('')
  const imageSrc = getCharacterImage(characterId, expression)

  useEffect(() => {
    if (imageSrc && imageSrc !== currentSrc) {
      setLoaded(false)
      const img = new Image()
      img.onload = () => {
        setCurrentSrc(imageSrc)
        setLoaded(true)
      }
      img.onerror = () => {
        setCurrentSrc(imageSrc)
        setLoaded(true)
      }
      img.src = imageSrc
    }
  }, [imageSrc, currentSrc])

  if (!imageSrc) return null

  const positionClass = {
    left: 'character-sprite left',
    right: 'character-sprite right',
    center: 'character-sprite center',
  }[position] || 'character-sprite center'

  return (
    <div
      className={`${positionClass} ${isActive ? '' : 'inactive'} ${loaded ? 'sprite-enter' : ''} ${className}`}
    >
      <img
        src={currentSrc || imageSrc}
        alt={characterId}
        className="sprite-img"
        draggable={false}
      />
    </div>
  )
}
