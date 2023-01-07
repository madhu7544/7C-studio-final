const NewRow = props => {
  const {all, onClickDelete} = props
  const {id, email, role, minutes, hour} = all

  const onClickDeleteItem = () => {
    onClickDelete(id)
  }

  const newTime = new Date().getHours() * 60 + new Date().getMinutes()

  const oldTime = newTime - (hour * 60 + minutes)
  let showTime
  if (oldTime === 0) {
    showTime = 'Just now'
  } else if (oldTime === 1) {
    showTime = `${oldTime} Minute ago`
  } else {
    showTime = `${oldTime} Minutes ago`
  }

  return (
    <tr className="table-row">
      <td>{id + 1}</td>
      <td>{email}</td>
      <td>{showTime}</td>
      <td>{role}</td>
      <td>
        <img
          src="https://res.cloudinary.com/dsiyffj0o/image/upload/v1672553435/delete_abm3lj.png"
          alt="delete"
          className="delete-icon"
          onClick={onClickDeleteItem}
        />
      </td>
    </tr>
  )
}
export default NewRow
