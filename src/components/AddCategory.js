import React, { useState } from 'react'
import PropTypes  from 'prop-types'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(inputValue.trim().length > 2) {
            setCategories(categories => [inputValue, ...categories])
            setinputValue('')
        }

    }
        
    return (
        <form  onSubmit={handleSubmit}>

            <div className="row align-items-center">

                    <div className= "col-9">

                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="¿Qué quieres buscar?"
                            value={inputValue}
                            onChange={handleInputChange}
                        />

                    </div>


                    <div className="col-3">

                        <button 
                            className="btn btn-primary"
                            type="submit"
                        >
                            <FontAwesomeIcon icon={faSearch} />
                           
                        
                        </button>

                    </div>


            </div>


        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
