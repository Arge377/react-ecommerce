import React from 'react'

const Loader = () => {
  return (
    <>
        <div id="overlay" className="d-flex justify-content-center">
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Cargando...</span>
            </div>
        </div>
    </>
  )
}

export default Loader