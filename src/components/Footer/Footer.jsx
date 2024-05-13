import React from 'react'
import style from './Footer.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={`${style.Footer}`}>
      <div className={`flex items-start`}>
        <div className={`${style.FooterArticleelement} flex-1 `}>
          <img src="https://actabl.com/wp-content/uploads/2022/11/actabl-w.png" alt="" className={`${style.FooterbrandImage} mb-8`} />
          <article className={`leading-6`}>
            Launched in 2022, Actabl combines business and labor intelligence in a comprehensive operations platform. We give hoteliers actionable insights to know what to do, the tools to do it, and the visibility to know it worked.
          </article>
        </div>
        <div className={`${style.Footerelement} flex-1`}>
          <p className="SimpleText Bold mt-0 mb-4">
            Solutions
          </p>
          <ul className={`flex flex-col items-start gap-4`}>
            <li>
              Budgeting, Forecasting, & BI
            </li>
            <li>
              Labor Management
            </li>
            <li>
              Operations Management
            </li>
            <li>
              Integrations
            </li>
          </ul>
        </div>
        <div className={`${style.Footerelement} flex-1`}>
          <p className="SimpleText Bold mt-0 mb-4">
            Products
          </p>
          <ul className={`flex flex-col items-start gap-4`}>
            <li>
              ProfitSword
            </li>
            <li>
              Hotel Effectiveness
            </li>
            <li>
              ALICE
            </li>
            <li>
              Transcendent
            </li>
          </ul>
        </div>
        <div className={`${style.Footerelement} flex-1 `}>
          <p className="SimpleText Bold mt-0 mb-4">
            Company
          </p>
          <ul className={`flex flex-col items-start gap-4`}>
            <li>
              About Us
            </li>
            <li>
              Careers
            </li>
            <li>
              Press Kit
            </li>
            <li>
              Privacy & Security
            </li>
            <li>
              Contact Us
            </li>
          </ul>
        </div>
        <div className={`${style.Footerelement} flex-1`}>
          <p className="SimpleText Bold mt-0 mb-4">
            Resources
          </p>
          <ul className={`flex flex-col items-start gap-4`}>
            <li>
              Blog
            </li>
            <li>
              Resources
            </li>
            <li>
              News
            </li>
            <li>
              Support
            </li>
          </ul>
        </div>
      </div>
      <div className={`flex items-center justify-start gap-6 my-10 SimpleText SemiHeading ${style.SocialMediaList}`}>
        <button>
          <FaFacebookF />
        </button>
        <button>
          <FaTwitter />
        </button>
        <button>
          <FaInstagram />
        </button>
        <button>
          <FaLinkedinIn />
        </button>
      </div>
      <hr style={{background:'white',height:'2px'}}/>
      <div className={`flex items-center justify-between mt-12`}>
        <button>Privacy Policy</button>
        <div className={`flex items-center justify-between gap-2`}>
          <button>Copyright © 2024, Actabl</button>
          <button>A free will Site</button>
        </div>
      </div>
    </div>
  )
}

export default Footer