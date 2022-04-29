export function ColorPicker({ onChangeStyle, note }) {
  const colors = ['#B4FF9F', '#F9FFA4', '#FFD59E', '#FFA1A1', 'inherit']

  return (
    <div className="color-picker-container">
      <div className="colors-container">
        {colors.map(color => (
          <div
            style={{ backgroundColor: color }}
            className="color"
            key={color}
            onClick={() => onChangeStyle(note.id, { backgroundColor: color })}
          ></div>
        ))}
      </div>
    </div>
  )
}
