// eslint-disable-next-line react/prop-types
const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
  
    const handleChange = () => {
      updateBoard(index)
    }
  
    return (
      <div onClick={handleChange} className={className} key={index}>
        {children}
      </div>
    )
  }

  export default Square;