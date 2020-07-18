import React from 'react';

// CSS

//COMPONENTES


export default function ReviewItem({review}) {

    const idPopup = review.id
    function showPopup(idPopup){
      document.getElementById(idPopup).style.display='block';
    };
    function closePopup(idPopup){
        document.getElementById(idPopup).style.display='none';
    };
    
    return (
{/*  <div className='item_list-container'>
        <div className='item_list_name'>
            {review.fecha}
        </div>
        <div className='item_list_description'>
            {review.state}
        </div>
        <div className='item_order_user'>
            {review.user.name}
        </div>   
        <div className="item_list_btns">
            <div onClick={e=>showPopup(idPopup)} className='btn_ver'><i title='Ver Orden' className="far fa-file"></i></div>
        </div>
        
        <div className="popup" id={review.id}>
            <div onClick={e => closePopup(idPopup)} className='close'><i className="far fa-times-circle"></i></div> 
            <Review review={review}/>
        </div>        
    </div>   */}
    );
}