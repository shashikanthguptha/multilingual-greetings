import './index.css'

const TabItem = props => {
  const {details, clickTabItem, isActive} = props
  const {id, buttonText} = details
  const classEl = isActive ? 'activeEl' : 'notActive'

  const ok = () => {
    clickTabItem(id)
  }
  return (
    <>
      <li className="button-list">
        <button className={classEl} type="button" onClick={ok}>
          {buttonText}
        </button>
      </li>
    </>
  )
}
export default TabItem
