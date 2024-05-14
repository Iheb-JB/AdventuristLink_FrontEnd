"use client";
import Footer from "@/components/footer/Footer";
import React, { useEffect } from "react";
import "../../../public/assets/css/dashboard.css";
import Link from "next/link";
import Header2 from "@/components/header/Header2";
import Icon from "@/uitils/Icon";
const Page = () => {
  const handleContainerClick = (event) => {
    const target = event.target;

    // Check if the clicked element has the 'dropdown-icon' class
    if (target.classList.contains("dropdown-icon")) {
      const dropdownIcon = target;
      const parentListItem = dropdownIcon.parentElement;
      // Toggle active class
      dropdownIcon.classList.toggle("active");
      // Get the next sibling element
      const nextElement = dropdownIcon.nextElementSibling;
      // Check if the next sibling exists before accessing its properties
      if (nextElement) {
        // Toggle display property of the next ul or .mega-menu
        nextElement.style.display =
          nextElement.style.display === "none" ? "block" : "none";
        // Slide up siblings' ul or .mega-menu and remove active class
        const siblings = Array.from(
          parentListItem.parentElement.children
        ).filter((child) => child !== parentListItem);
        siblings.forEach((sibling) => {
          const siblingDropdownIcon = sibling.querySelector(".dropdown-icon");
          const siblingNextElement = siblingDropdownIcon?.nextElementSibling;
          if (siblingNextElement) {
            siblingNextElement.style.display = "none";
          }
          siblingDropdownIcon?.classList.remove("active");
        });
      }
    }
  };

  useEffect(() => {
    // Attach the event listener to the container when the component mounts
    document.addEventListener("click", handleContainerClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleContainerClick);
    };
  }, []);

  return (
    <>
      <Header2 />
      <div className="dashboard-wrapper">
        <div className="dashboard-sidebar-wrapper">
          <div className="dashboard-sidebar-menu">
            <ul>
              <li className="active">
                <Link href="/dashboard">
                  <Icon name="dashboard" width={18} height={18} viewBox="0 0 18 18"></Icon>
                  <h6>Dashboard</h6>
                </Link>
              </li>
              <li>
                <a href="/guide">
                <Icon name="userList" width={18} height={18} viewBox="0 0 30 30"></Icon>
                  <h6>Users List</h6>
                </a>
              </li>
              <li>
                <a href="#">
                <Icon name="logout" width={18} height={18} viewBox="0 0 18 18"></Icon>
                  <h6>Log Out</h6>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-content">
          <div className="row">
            <div className="col-xl-12">
              <div className="counter-area">
                <div className="row g-3">
                  <div className="col">
                    <div className="counter-single">
                      <div className="counter-icon">
                      <Icon name="itinerary" width={50} height={55} viewBox="0 0 23 23"></Icon>
                      </div>
                      <div className="counter-content">
                        <p>All itineraries</p>
                        <div className="number">
                          <h3 className="counter">130</h3>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="counter-single five">
                      <div className="counter-icon">
                        <Icon name="activities" width={50} height={55} viewBox="0 0 23 23"></Icon>
                      </div>
                      <div className="counter-content">
                        <p>Total Activities</p>
                        <div className="number">
                          <h3 className="counter">70</h3>
                          <span>+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recent-listing-area">
                <h6>Recent Requests for Approval</h6>
                <div className="recent-listing-table">
                  <table className="eg-table2">
                    <thead>
                      <tr>
                        <th>From</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Name">
                          <div className="product-name">
                            <div className="img">
                              <img
                                src="/assets/img/home1/package-card-img1.png"
                                alt=""
                              />
                            </div>
                            <div className="product-content">
                              <h6>
                                <a href="#">
                                  Iheb Jabeur
                                </a>
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td data-label="Category">new registration</td>
                        <td data-label="Status">
                          <span className="confirmed">Confirmed</span>
                        </td>
                        <td data-label="Timeline">
                           July 14, 2023
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Name">
                          <div className="product-name">
                            <div className="img">
                              <img
                                src="/assets/img/home1/package-card-img1.png"
                                alt=""
                              />
                            </div>
                            <div className="product-content">
                             <h6>
                                <a href="#">
                                  Jhon Doe
                                </a>
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td data-label="Category">new registration</td>
                        <td data-label="Status">
                          <span className="pending">Pending</span>
                        </td>
                        <td data-label="Timeline">May 10, 2024</td>
                      </tr>
                      <tr>
                        <td data-label="Name">
                          <div className="product-name">
                            <div className="img">
                              <img
                                src="/assets/img/home1/package-card-img1.png"
                                alt=""
                              />
                            </div>
                            <div className="product-content">
                              <h6>
                                <a href="#">
                                  Bou Kalthoum.
                                </a>
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td data-label="Category">new registration</td>
                        <td data-label="Status">
                          <span className="rejected">Rejected</span>
                        </td>
                        <td data-label="Timeline">May 08, 2024</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="pagination-area">
                    <ul className="paginations">
                      <li className="page-item active">
                        <a href="#">1</a>
                      </li>
                      <li className="page-item">
                        <a href="#">2</a>
                      </li>
                      <li className="page-item">
                        <a href="#">3</a>
                      </li>
                    </ul>
                    <ul className="paginations-buttons">
                      <li>
                        <a href="#">Prev</a>
                      </li>
                      <li>
                        <a href="#"> Next </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-footer">
          <ul className="footer-menu-list">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <Toaster/>
    </>
  );
};

export default Page;
