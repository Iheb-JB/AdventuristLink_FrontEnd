import React, { useState } from "react";
import SearchForm from "@/components/GoogleSearchForm/searchForm";
import QuantityCounter from "@/uitils/QuantityCounter";
import SelectComponent from "@/uitils/SelectComponent";
import useActivity from "@/hooks/useActivity";
import { Toaster } from "react-hot-toast";

const ActivityModal = ({ onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    activityDate: "",
    groupSize: 1, // Default group size
    description: "",
    type: "",
  });
  const {createActivity} = useActivity();

  const handleSubmit = async(e) => {
    e.preventDefault();
    //console.log("Submitting Form Data:", formData);
    await createActivity(formData);
    onClose(); // Close modal after saving data
  };
  const handleLocationSelect = (location) => {
    console.log("Location received in ActivityModal:", location);
    setFormData({...formData, location});
};

  const handleClose = () => {
    onClose(); // Call onClose function to handle modal closing
  };

  return (
    <>
      <div
        className="modal activity-modal"
        id="activity-modal"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header relative">
              <span className="modal-close-box" onClick={handleClose}>&times;</span>
            </div>
            <div className="modal-body">
              <h4>Tailor Your Activity</h4>
              <p>
                Create your wanted Activity so other travelers can share it with
                you!
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-inner mb-20">
                  <label>
                    Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the activity name or title"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-inner mb-20">
                  <SearchForm label={"Location"} value={formData.location} onSelectLocation={handleLocationSelect} />
                </div>
                <div className="tour-date-wrap mb-50">
                  <h6>Select Your activity date:</h6>
                  <div className="form-inner mb-20">
                    <div className="form-group">
                      <input
                        type="date"
                        name="startDate"
                        value={formData.activityDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            activityDate: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-inner mb-20">
                  <label>Travel preferences*</label>
                    <SelectComponent
                      options={[
                        "Cultural and city Exploration",
                        "Food and Culinary Experience",
                        "Adventure and Outdoor Activities",
                        "Relaxation and Wellness", 
                        "Party , Festivals and Events",
                        "Other"
                       ]}
                      value={formData.type}
                      onChange={(value) => setFormData({...formData, type: value})}
                      placeholder="Activity type"
                      />
                </div>
                <div className="number-input-item adults">
                  <label className="number-input-lable">
                    Group Size:<span></span>
                  </label>
                  <QuantityCounter
                    value={formData.groupSize}
                    onChange={(value) =>
                      setFormData({ ...formData, groupSize: value })
                    }
                    incIcon="bx bx-plus"
                    dcrIcon="bx bx-minus"
                  />
                </div>
                <div className="form-inner mb-30">
                  <label>
                    Description <span>*</span>
                  </label>
                  <textarea
                    placeholder="Write the activity description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-inner">
                  <button type="submit" className="primary-btn1 two">
                    Create activity
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster/>
    </>
  );
};

export default ActivityModal;
