import type { ServiceCardStyleState } from '../hooks/useServiceCardStyle'
import { DEFAULT_SERVICE_CARD_STYLE } from '../hooks/useServiceCardStyle'

type Props = {
  style: ServiceCardStyleState
  onChange: (style: ServiceCardStyleState) => void
}

function Slider({
  label, value, min, max, step = 1, unit = '', onChange,
}: {
  label: string; value: number; min: number; max: number
  step?: number; unit?: string; onChange: (v: number) => void
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-baseline justify-between">
        <span className="text-[10px] text-white/50">{label}</span>
        <span className="tabular-nums text-[10px] text-[#C9955A]/80">{value}{unit}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
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

export default function ServiceCardControls({ style, onChange }: Props) {
  const set = (key: keyof ServiceCardStyleState) => (v: number) =>
    onChange({ ...style, [key]: v })

  const reset = () => onChange(DEFAULT_SERVICE_CARD_STYLE)

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
          Карточки услуг
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
        <SectionLabel>Размер текста</SectionLabel>
        <Slider label="Заголовок" value={style.titleSize} min={10} max={20} unit="px" onChange={set('titleSize')} />
        <Slider label="Описание"  value={style.descSize}  min={9}  max={16} unit="px" onChange={set('descSize')} />

        <SectionLabel>Отступы карточки</SectionLabel>
        <Slider label="По горизонтали" value={style.paddingX} min={4} max={24} unit="px" onChange={set('paddingX')} />
        <Slider label="По вертикали"   value={style.paddingY} min={4} max={24} unit="px" onChange={set('paddingY')} />

        <SectionLabel>Сетка</SectionLabel>
        <Slider label="Зазор между карточками" value={style.gap}  min={2} max={20} unit="px" onChange={set('gap')} />
        <Slider label="Скругление углов"        value={style.radius} min={0} max={20} unit="px" onChange={set('radius')} />

        <SectionLabel>Размеры карточки</SectionLabel>
        <Slider label="Ширина"  value={style.cardWidth}  min={40} max={100} unit="%" onChange={set('cardWidth')} />
        <Slider label="Высота (min)" value={style.cardHeight} min={0} max={300} unit="px" onChange={set('cardHeight')} />

        <SectionLabel>Колонки</SectionLabel>
        <div className="flex gap-2 pt-0.5">
          {[2, 4].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => onChange({ ...style, cols: n })}
              className="flex-1 rounded py-1 text-[10px] font-medium transition"
              style={{
                background: style.cols === n ? 'rgba(201,149,90,0.22)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${style.cols === n ? 'rgba(201,149,90,0.55)' : 'rgba(255,255,255,0.10)'}`,
                color: style.cols === n ? '#C9955A' : 'rgba(255,255,255,0.45)',
              }}
            >
              {n} кол.
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
