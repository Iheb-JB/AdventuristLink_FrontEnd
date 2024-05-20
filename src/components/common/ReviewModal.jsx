'use client'
import useReview from "@/hooks/useReview";
import { useState } from "react";
import StarRating from "./StarRating";




const ReviewModal = ({onClose})=>{

    const {submitReview} = useReview();
    const [review , setReview]= useState({
       rating: 0,
       content: '',
    });

    const handleSubmit = async(e)=>{
        e.preventDefault();
        // Here, add logic to include the itinerary ID and any other necessary info
        try {
            await submitReview({...review,itineraryId});
            onClose();
        } catch (error) {
            console.error('Failed to submit review:', error);
        }
    };
    const handleClose = () => {
      onClose(); // Call onClose function to handle modal closing
    };
    
    return(
       <>
      
       {/* model for review */}
       <div
       className="modal review-modal"
       id="reviewModal"
       aria-hidden="true"
       data-bs-keyboard="false"
       tabIndex={-1} >
       <div className="modal-dialog modal-dialog-centered">
         <div className="modal-content">
           <div className="modal-body">
             <button
               type="button"
               className="btn-close"
               data-bs-dismiss="modal"
               aria-label="Close"
               onClick={handleClose}
             >
             </button>
             <div className="row g-2">
               <div className="col-lg-8">
                 <div className="review-from-wrapper">
                   <h4>Write Your Review</h4>
                   <form onSubmit={handleSubmit}>
                     <div className="row">
                       <div className="col-md-10 mb-20">
                         <div className="form-inner">
                           <label>Fellow Traveller username</label>
                           <input
                             type="text"
                             placeholder="Enter fellow traveler username"
                           />
                         </div>
                       </div>
                       <div className="col-lg-12 mb-20">
                         <div className="form-inner">
                           <label>Review*</label>
                           <textarea
                             name="message"
                             placeholder="Enter Your Review..."
                             value={review.content}
                             onChange={(e)=>
                                setReview({...review, content: e.target.value})
                              }
                             />
                         </div>
                       </div>
                       <div className="col-lg-12 mb-40">
                       <StarRating rating={review.rating} setRating={setReview} />
                       </div>
                       <div className="col-lg-12">
                         <button
                           type="submit"
                           className="primary-btn1">
                           Submit Now
                         </button>
                       </div>
                     </div>
                   </form>
                 </div>
               </div>
               
             </div>
           </div>
         </div>
       </div>
     </div>
       </>
    );
};

export default ReviewModal;
