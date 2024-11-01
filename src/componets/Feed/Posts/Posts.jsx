import React from 'react'
import CustomButton from '../../CustomButton/CustomButton'
import './Posts.scss';

const Posts = () => {
  return (
    <div className='div-post'>
        <h2 className='div-post__titulo'>Titulo da publicação</h2>
        <div className='div-post__div-texto'>
            <p className='div-post__div-texto__texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div className='div-post__comentario'>
            
        </div>
        
        <CustomButton
            backColor="#57EA57"
            padding='5px 1rem'
            label="COMENTAR"
            fontSize="1rem"
            className="btn-comentar-post"
        />     


    </div>
  )
}

export default Posts