interface ButtonProps {
  type?: 'submit' | 'button'
  color?: 'primary' | 'secondary'
  children: React.ReactNode
  size?: 'md' | 'lg'
  onClick?: () => void
}

export const Button = ({
  type = 'button',
  color = 'primary',
  children,
  onClick,
  size = 'md',
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button button--${size} button--${color}`}
      style={{
        backgroundColor: color,
        border: 'none',
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: '1rem',
      }}
    >
      {children}
    </button>
  )
}
