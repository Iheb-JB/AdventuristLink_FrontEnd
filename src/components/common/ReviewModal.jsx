'use client'
import useReview from "@/hooks/useReview";
import { useState } from "react";


const ReviewModal = ()=>{

    const handleClose = () => {
        onClose(); // Call onClose function to handle modal closing
      };
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
    }
    return(
       <>
       {/* model for review */}
       <div
       className="modal fade"
       id="reviewModal"
       aria-hidden="true"
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
               <i className="bi bi-x-lg" />
             </button>
             <div className="row g-2">
               <div className="col-lg-8">
                 <div className="review-from-wrapper">
                   <h4>Write Your Review</h4>
                   <form onSubmit={handleSubmit}>
                     <div className="row">
                       <div className="col-md-6 mb-20">
                         <div className="form-inner">
                           <label>UserName</label>
                           <input
                             type="text"
                             placeholder="Enter Your Name:"
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
                         <div className="star-rating-wrapper">
                           <ul className="star-rating-list">
                             <li>
                               <div
                                 className="rating-container"
                                 data-rating={0}
                                 value={review.rating}
                                 onChange={(e)=>
                                setReview({...review, rating: e.target.value})
                              }
                               >
                                 <i className="bi bi-star-fill star-icon" />
                                 <i className="bi bi-star-fill star-icon" />
                                 <i className="bi bi-star-fill star-icon" />
                                 <i className="bi bi-star-fill star-icon" />
                                 <i className="bi bi-star-fill star-icon" />
                               </div>
                               <span>Overall</span>
                             </li>
                           </ul>
                         </div>
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
               <div className="col-lg-4 d-lg-flex d-none">
                 <div className="modal-form-image">
                   <img
                     src="/assets/img/innerpage/form-image.jpg"
                     alt="image"
                     className="img-fluid"
                   />
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