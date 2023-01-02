const NewRow = props => {
  const {all, onClickDelete} = props
  const {id, email, role} = all

  const onClickDeleteItem = () => {
    onClickDelete(id)
  }

  return (
    <tr className="table-row">
      <td>{id}</td>
      <td>{email}</td>
      <td>Just Now</td>
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
