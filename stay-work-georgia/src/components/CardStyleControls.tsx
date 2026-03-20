import type { CardStyleState } from '../hooks/useCardStyle'
import { DEFAULT_CARD_STYLE } from '../hooks/useCardStyle'

type Props = {
  style: CardStyleState
  onChange: (style: CardStyleState) => void
}

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step?: number
  unit?: string
  onChange: (v: number) => void
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-baseline justify-between">
        <span className="text-[10px] text-white/50">{label}</span>
        <span className="tabular-nums text-[10px] text-[#C9955A]/80">
          {value}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-[3px] w-full cursor-pointer accent-[#C9955A]"
      />
    </div>
  )
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="pt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/28">
      {children}
    </div>
  )
}

export default function CardStyleControls({ style, onChange }: Props) {
  const set = (key: keyof CardStyleState) => (v: number) =>
    onChange({ ...style, [key]: v })

  const reset = () => onChange(DEFAULT_CARD_STYLE)

  return (
    <div
      className="w-56 rounded-xl px-4 py-3"
      style={{
        background: 'rgba(5, 4, 12, 0.94)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(200, 160, 80, 0.18)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
      }}
    >
      <div className="mb-2.5 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9955A]">
          Карточки
        </span>
        <button
          type="button"
          onClick={reset}
          className="text-[9px] text-white/30 transition hover:text-white/60"
        >
          сброс
        </button>
      </div>

      <div className="space-y-2">
        <SectionLabel>Края</SectionLabel>
        <Slider
          label="Интенсивность"
          value={style.edgeOpacity}
          min={0}
          max={100}
          unit="%"
          onChange={set('edgeOpacity')}
        />
        <Slider
          label="Размер"
          value={style.edgeSpread}
          min={0}
          max={80}
          unit="px"
          onChange={set('edgeSpread')}
        />

        <SectionLabel>Центр</SectionLabel>
        <Slider
          label="Непрозрачность фона"
          value={style.bgOpacity}
          min={0}
          max={50}
          unit="%"
          onChange={set('bgOpacity')}
        />

        <SectionLabel>Верх</SectionLabel>
        <Slider
          label="Подсветка"
          value={style.topOpacity}
          min={0}
          max={20}
          step={0.5}
          unit="%"
          onChange={set('topOpacity')}
        />

        <SectionLabel>Низ</SectionLabel>
        <Slider
          label="Виньетка (радиальная)"
          value={style.bottomOpacity}
          min={0}
          max={80}
          unit="%"
          onChange={set('bottomOpacity')}
        />
        <Slider
          label="Градиент снизу вверх"
          value={style.bottomEdge}
          min={0}
          max={100}
          unit="%"
          onChange={set('bottomEdge')}
        />

        <SectionLabel>Верх (линейный)</SectionLabel>
        <Slider
          label="Градиент сверху вниз"
          value={style.topEdge}
          min={0}
          max={100}
          unit="%"
          onChange={set('topEdge')}
        />

        <SectionLabel>Цвет виньетки</SectionLabel>
        <Slider
          label="Тон (hue)"
          value={style.hue}
          min={0}
          max={360}
          unit="°"
          onChange={set('hue')}
        />
        <Slider
          label="Насыщенность"
          value={style.saturation}
          min={0}
          max={100}
          unit="%"
          onChange={set('saturation')}
        />
      </div>
    </div>
  )
}
