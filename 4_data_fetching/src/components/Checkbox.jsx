"use client"

const Checkbox = ({ checked }) => {
  return (
      <input 
         type="checkbox"
         className="form-checkbox h5 w-5"
         checked={checked}
         onChange={(e) => e.target.form.requestSubmit()}
      >
      
    </input>
  )
}

export default Checkbox
