import { useEffect, useId, useRef, useState } from 'react'
import { Check, Mountain, Palmtree, Pause, Play, SlidersHorizontal, Sparkles } from 'lucide-react'
import { useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'

const options = [
  { id: 'original', Icon: Sparkles },
  { id: 'adventure', Icon: Mountain },
  { id: 'after', Icon: Palmtree },
]

export default function ExperienceSelector({ selected, onSelect, availableVideos, paused, onTogglePlayback }) {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const wrapper = useRef(null)
  const trigger = useRef(null)
  const panelId = useId()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    function dismissOutside(event) {
      if (!wrapper.current?.contains(event.target)) setOpen(false)
    }

    function dismissOnEscape(event) {
      if (event.key !== 'Escape') return
      event.preventDefault()
      event.stopPropagation()
      setOpen(false)
      trigger.current?.focus()
    }

    document.addEventListener('pointerdown', dismissOutside)
    document.addEventListener('focusin', dismissOutside)
    document.addEventListener('keydown', dismissOnEscape, true)

    return () => {
      document.removeEventListener('pointerdown', dismissOutside)
      document.removeEventListener('focusin', dismissOutside)
      document.removeEventListener('keydown', dismissOnEscape, true)
    }
  }, [open])

  return (
    <div ref={wrapper} className="relative shrink-0">
      <button
        ref={trigger}
        type="button"
        className="grid size-11 place-items-center rounded-lg border border-gio-line text-gio-ink hover:bg-gio-raised aria-expanded:bg-gio-raised"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={t('experiencePicker.title')}
        title={t('experiencePicker.title')}
        onClick={() => setOpen(!open)}
      >
        <SlidersHorizontal size={19} aria-hidden="true" />
      </button>
      <div
        id={panelId}
        hidden={!open}
        role="group"
        aria-label={t('experiencePicker.title')}
        className="gio-experience-panel absolute right-0 top-full z-10 mt-2 w-56 max-w-[calc(100vw-2rem)] overflow-y-auto overscroll-contain rounded-xl border border-gio-line bg-gio-surface p-2 text-gio-ink shadow-xl"
      >
        <div className="grid gap-1">
          {options.filter(({ id }) => id === 'original' || availableVideos.includes(id)).map(({ id, Icon }) => (
            <button
              key={id}
              type="button"
              aria-pressed={selected === id}
              className="flex min-h-11 items-center gap-2 rounded-lg border border-transparent px-2 text-start text-sm font-semibold hover:bg-gio-raised aria-pressed:border-gio-line aria-pressed:bg-gio-raised"
              onClick={() => {
                onSelect(id)
                setOpen(false)
                trigger.current?.focus()
              }}
            >
              <Icon size={17} className="shrink-0 text-gio-violet" aria-hidden="true" />
              <span>{t(`experiencePicker.options.${id}.name`)}</span>
              {selected === id && <Check size={16} className="ml-auto shrink-0 text-gio-turquoise" aria-hidden="true" />}
            </button>
          ))}
          {!reduceMotion && (
            <button
              type="button"
              onClick={onTogglePlayback}
              className="mt-1 flex min-h-11 items-center gap-2 rounded-lg border border-gio-line px-2 text-start text-sm font-semibold hover:bg-gio-raised"
            >
              {paused ? <Play size={17} aria-hidden="true" /> : <Pause size={17} aria-hidden="true" />}
              {t(paused ? 'ambient.play' : 'ambient.pause')}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
