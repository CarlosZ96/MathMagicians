import '../StyleSheets/boton.css'

function Button(props) {
  return (
    <button className={props.class} type="button">{props.children}</button>
  )
}

export default Button;
