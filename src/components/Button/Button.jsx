import classes from './Button.module.css'

const Button = ({ children, isActive, ...props }) => {
  return (
    <button {...props} className={isActive ? `${classes.button} ${classes.active}` : classes.button}>
      {children}
    </button>
  )
}

export { Button }
