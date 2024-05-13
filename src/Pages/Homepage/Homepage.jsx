import React, { useState } from 'react'
import style from "./Homepage.module.css"
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { IoIosArrowDown } from "react-icons/io";
import integration from "../../asset/puzzle.png"
import { Integrations } from './Integrations';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Homepage = () => {
    const [index, setindex] = useState(0)
    const [expanded, setexpand] = useState('panel0')
    const ChangeIndexes = (index) => {
        setindex(index)
    }

    const HandleAccordianExpand = (panel) => {
        if (expanded === panel + index) {
            setexpand('')
            return
        }
        setexpand(panel + index)
    }

    useGSAP(() => {
        gsap.from('.HeroSectionPannel', {
            opacity: 0,
            y: 250,
            scale: 0.5,
            duration: 1
        })
    })



    return (
        <div className={`${style.Homepage}`}>
            <section className={`${style.HeroSection} flex items-start justify-center`}>
                <div className={`flex items-center justify-center flex-col gap-3 w-6/12 ${style.HeroSectionPannel} HeroSectionPannel`}>
                    <p className={`Heading Bold leading-12`}>
                        Drive Business <span className={` Literata `}></span> up and to the right
                    </p>
                    <div className={`SemiHeading`}>
                        a GPS for the hotel industry
                    </div>
                    <p className={`SimpleText`}>
                        Minimize labor costs. Optimize operations. Increase long-term asset value. Steer clear of obstacles impacting results. At every turn, Actabl's software suite maximizes profits.
                    </p>
                    <button className={`${style.RequestDemo} Buttons`}>
                        Request a Demo
                    </button>
                </div>
            </section>
            <section className={`${style.UptoRight} flex items-bottom justify-center flex-1 gap-4`}>
                <div className={`flex flex-1 flex-col items-start justify-center gap-3 ${style.UpRightext}`}>
                    <p className={`SemiHeading Bold ${style.UptoRightHeading}`}>
                        Actionable Insights Drive Results
                    </p>
                    <p className='SimpleText'>
                        Actabl gives unmatched forward looking full-portfolio visibility to above-property leaders while guiding on-property managers with insights and clear directions that allow them to exceed their goals.
                    </p>
                </div>
                <img src="https://actabl.com/wp-content/uploads/home-page-sub-hero-diagram.png" alt="" className={`${style.UpwardArrow} flex-1`} />
            </section>
            <section className={`${style.OurSolutions} flex flex-col items-center justify-center`}>
                <p className="Heading Bold">Our Solutions</p>
                <p className="SimpleText">
                    The combined impact of Actabl
                </p>
            </section>
            <section className={style.Products}>
                <div className={`${style.ProductList}`}>
                    <ul className={`flex `}>
                        <li onClick={() => { ChangeIndexes(0) }} data-item-active={index === 0}>ProfitSword</li>
                        <li onClick={() => { ChangeIndexes(1) }} data-item-active={index === 1}>Hotel Effectiveness</li>
                        <li onClick={() => { ChangeIndexes(2) }} data-item-active={index === 2}>ALICE</li>
                        <li onClick={() => { ChangeIndexes(3) }} data-item-active={index === 3}>Transcendent</li>
                    </ul>
                </div>
                <div>
                    {index === 0 && <div className={`${style.Service} flex gap-6`}>
                        <div className={`flex-1 w-1/2 ${style.ImageHolder}`}>
                            <img src="https://actabl.com/wp-content/uploads/homepage-profitsword-solutions-e1682520539525.png" alt="" />
                        </div>
                        <div className={`flex-1 w-1/2 ${style.ServiceAccordian}`}>
                            <MuiAccordion disableGutters elevation={0} square expanded={expanded === 'panel10'} onChange={() => { HandleAccordianExpand('panel1') }} style={{ background: 'none' }}>
                                <MuiAccordionSummary expandIcon={<IoIosArrowDown />}
                                    aria-controls="panel2-content"
                                    id="panel2-header">
                                    <p className='Bold SemiHeading'>Business Intellegence</p>
                                </MuiAccordionSummary>
                                <MuiAccordionDetails style={{ padding: "12px" }}>
                                    <p>
                                        ProfitSword's suite of business intelligence tools provides real-time data and forecasting crucial to adapting quickly and running a more efficient and profitable business.
                                    </p>
                                </MuiAccordionDetails>
                            </MuiAccordion>
                            <MuiAccordion disableGutters elevation={0} square expanded={expanded === 'panel20'} onChange={() => { HandleAccordianExpand('panel2') }} style={{ background: 'none' }}>
                                <MuiAccordionSummary expandIcon={<IoIosArrowDown />}
                                    aria-controls="panel2-content"
                                    id="panel2-header">
                                    <p className='Bold SemiHeading'>Automated, Real-Time Insights</p>
                                </MuiAccordionSummary>
                                <MuiAccordionDetails style={{ padding: '12px' }}>
                                    <p>
                                        Gain insight and make proactive operational and budgetary decisions to increase employee and guest satisfaction and maximize the profitability of your portfolio.
                                    </p>
                                </MuiAccordionDetails>
                            </MuiAccordion>
                            <MuiAccordion disableGutters elevation={0} square expanded={expanded === 'panel30'} onChange={() => { HandleAccordianExpand('panel3') }} style={{ background: 'none' }}>
                                <MuiAccordionSummary expandIcon={<IoIosArrowDown />}
                                    aria-controls="panel2-content"
                                    id="panel2-header">
                                    <p className='Bold SemiHeading'>Increase Accountability & Efficiency</p>
                                </MuiAccordionSummary>
                                <MuiAccordionDetails>
                                    <p>
                                        Increase insights into your teams and decrease manual work and data entry by connecting the systems from across your property in one platform.
                                    </p>
                                </MuiAccordionDetails>
                            </MuiAccordion>
                            <div className={`${style.ButtonWrapper} flex gap-8 px-4 py-6`}>
                                <button className={`${style.LearnMore} Buttons`}>Learn More</button>
                                <button className={`${style.RequestaDemo} Buttons`}>Request a Demo</button>
                            </div>
                        </div>
                    </div>}
                    {index === 1 && <div className={`${style.Service} flex gap-6`}>
                        <div className={`flex-1 w-1/2 ${style.ImageHolder}`}>
                            <img src="https://actabl.com/wp-content/uploads/homepage-hotel-effectiveness-solutions-e1682520579227.png" alt="" />
                        </div>
                        <div className={`flex-1 w-1/2 ${style.ServiceAccordian}`}>
                            <MuiAccordion disableGutters elevation={0} square expanded={expanded === 'panel11'} onChange={() => { HandleAccordianExpand('panel1') }} style={{ background: 'none' }}>
                                <MuiAccordionSummary expandIcon={<IoIosArrowDown />}
                                    aria-controls="panel2-content"
                                    id="panel2-header">
                                    <p className='Bold SemiHeading'>Predictive Labor Management</p>
                                </MuiAccordionSummary>
                                <MuiAccordionDetails style={{ padding: "12px" }}>
                                    <p>Hotel Effectiveness delivers smart, labor cost reduction solutions that increase productivity and maximize GOP with limited staffing.</p>
                                </MuiAccordionDetails>
                            </MuiAccordion>
                            <MuiAccordion disableGutters elevation={0} square expanded={expanded === 'panel21'} onChange={() => { HandleAccordianExpand('panel2') }} style={{ background: 'none' }}>
                                <MuiAccordionSummary expandIcon={<IoIosArrowDown />}
                                    aria-controls="panel2-content"
                                    id="panel2-header">
                                    <p className='Bold SemiHeading'>Comprehensive Wage Strategies</p>
                                </MuiAccordionSummary>
                                <MuiAccordionDetails style={{ padding: '12px' }}>
                                    <p>
                                        Benchmark wages across your portfolio and regionally to recruit top talent, reduce turnover, and maximize profits.
                                    </p>
                                </MuiAccordionDetails>
                            </MuiAccordion>
                            <MuiAccordion disableGutters elevation={0} square expanded={expanded === 'panel31'} onChange={() => { HandleAccordianExpand('panel3') }} style={{ background: 'none' }}>
                                <MuiAccordionSummary expandIcon={<IoIosArrowDown />}
                                    aria-controls="panel2-content"
                                    id="panel2-header">
                                    <p className='Bold SemiHeading'>Optimize Labor Costs</p>
                                </MuiAccordionSummary>
                                <MuiAccordionDetails>
                                    <p>
                                        Pool labor, forecast needs, and gain visibility to make real-time changes to ensure clean rooms are available to sell.
                                    </p>
                                </MuiAccordionDetails>
                            </MuiAccordion>
                            <div className={`${style.ButtonWrapper} flex gap-8 px-4 py-6`}>
                                <button className={`${style.LearnMore} Buttons`}>Learn More</button>
                                <button className={`${style.RequestaDemo} Buttons`}>Request a Demo</button>
                            </div>
                        </div>
                    </div>}
                    {index === 2 && <div className={`${style.Service} flex gap-6`}>
                        <div className={`flex-1 w-1/2 ${style.ImageHolder}`}>
                            <img src="https://actabl.com/wp-content/uploads/homepage-alice-solutions-e1682520605527.png" alt="" />
                        </div>
                        <div className={`flex-1 w-1/2 ${style.ServiceAccordian}`}>
                            <MuiAccordion disableGutters elevation={0} square expanded={expanded === 'panel12'} onChange={() => { HandleAccordianExpand('panel1') }} style={{ background: 'none' }}>
                                <MuiAccordionSummary expandIcon={<IoIosArrowDown />}
                                    aria-controls="panel2-content"
                                    id="panel2-header">
                                    <p className='Bold SemiHeading'>Hotel Operations</p>
                                </MuiAccordionSummary>
                                <MuiAccordionDetails style={{ padding: "12px" }}>
                                    <p>
                                        ALICE is an all-in-one operations platform that streamlines operations and communication, boosts productivity, and increases guest satisfaction.
                                    </p>
                                </MuiAccordionDetails>
                            </MuiAccordion>
                            <MuiAccordion disableGutters elevation={0} square expanded={expanded === 'panel22'} onChange={() => { HandleAccordianExpand('panel2') }} style={{ background: 'none' }}>
                                <MuiAccordionSummary expandIcon={<IoIosArrowDown />}
                                    aria-controls="panel2-content"
                                    id="panel2-header">
                                    <p className='Bold SemiHeading'>Insight & Accountability</p>
                                </MuiAccordionSummary>
                                <MuiAccordionDetails style={{ padding: '12px' }}>
                                    <p>
                                        Gain visibility and transparency into hotel operations through task-level data, allowing you to hold individuals and departments accountable.
                                    </p>
                                </MuiAccordionDetails>
                            </MuiAccordion>
                            <MuiAccordion disableGutters elevation={0} square expanded={expanded === 'panel32'} onChange={() => { HandleAccordianExpand('panel3') }} style={{ background: 'none' }}>
                                <MuiAccordionSummary expandIcon={<IoIosArrowDown />}
                                    aria-controls="panel2-content"
                                    id="panel2-header">
                                    <p className='Bold SemiHeading'>Maximize Productivity</p>
                                </MuiAccordionSummary>
                                <MuiAccordionDetails>
                                    <p>
                                        Real-time communication, coordination, and task distribution across departments, empowers your lean team to do more with less.
                                    </p>
                                </MuiAccordionDetails>
                            </MuiAccordion>
                            <div className={`${style.ButtonWrapper} flex gap-8 px-4 py-6`}>
                                <button className={`${style.LearnMore} Buttons`}>Learn More</button>
                                <button className={`${style.RequestaDemo} Buttons`}>Request a Demo</button>
                            </div>
                        </div>
                    </div>}
                    {index === 3 && <div className={`${style.Service} flex gap-6`}>
                        <div className={`flex-1 w-1/2 ${style.ImageHolder}`}>
                            <img src="https://actabl.com/wp-content/uploads/homepage-transcendent-solutions-e1682520511446.png" alt="" />
                        </div>
                        <div className={`flex-1 w-1/2 ${style.ServiceAccordian}`}>
                            <MuiAccordion disableGutters elevation={0} square expanded={expanded === 'panel13'} onChange={() => { HandleAccordianExpand('panel1') }} style={{ background: 'none' }}>
                                <MuiAccordionSummary expandIcon={<IoIosArrowDown />}
                                    aria-controls="panel2-content"
                                    id="panel2-header">
                                    <p className='Bold SemiHeading'>Asset Management & CapEx</p>
                                </MuiAccordionSummary>
                                <MuiAccordionDetails style={{ padding: "12px" }}>
                                    <p>
                                        Track and preserve your assets, avoid costly repairs, and plan for the future with Transcendent’s world-class asset management and capital planning software.
                                    </p>
                                </MuiAccordionDetails>
                            </MuiAccordion>
                            <MuiAccordion disableGutters elevation={0} square expanded={expanded === 'panel23'} onChange={() => { HandleAccordianExpand('panel2') }} style={{ background: 'none' }}>
                                <MuiAccordionSummary expandIcon={<IoIosArrowDown />}
                                    aria-controls="panel2-content"
                                    id="panel2-header">
                                    <p className='Bold SemiHeading'>Better Visibility & Planning</p>
                                </MuiAccordionSummary>
                                <MuiAccordionDetails style={{ padding: '12px' }}>
                                    <p>
                                        Gain visibility across your portfolio through powerful reports and dashboards. Improve your engineering operations, forecast needs, and automate CapEx planning.
                                    </p>
                                </MuiAccordionDetails>
                            </MuiAccordion>
                            <MuiAccordion disableGutters elevation={0} square expanded={expanded === 'panel33'} onChange={() => { HandleAccordianExpand('panel3') }} style={{ background: 'none' }}>
                                <MuiAccordionSummary expandIcon={<IoIosArrowDown />}
                                    aria-controls="panel2-content"
                                    id="panel2-header">
                                    <p className='Bold SemiHeading'>Improve Operational Efficiency</p>
                                </MuiAccordionSummary>
                                <MuiAccordionDetails>
                                    <p>
                                        Streamline task management and work orders, uncover maintenance gaps, and improve productivity while minimizing wasted time and labor.
                                    </p>
                                </MuiAccordionDetails>
                            </MuiAccordion>
                            <div className={`${style.ButtonWrapper} flex gap-8 px-4 py-6`}>
                                <button className={`${style.LearnMore} Buttons`}>Learn More</button>
                                <button className={`${style.RequestaDemo} Buttons`}>Request a Demo</button>
                            </div>
                        </div>
                    </div>}
                </div>
            </section>
            <section className={`${style.Integrations} flex flex-col items-center justify-center gap-14`}>
                <div className="InegrationPannel">
                    <img src={integration} alt="" className={style.IntegrationHand} />
                </div>
                <div className={`IntegrationList`}>
                    <div className="Heading my-4">
                        Integrations
                    </div>
                    <div className="SimpleText">
                        Integrations matter. Actabl has the most. Over 420, in fact.
                        We make the integration work so you can see results quickly.
                    </div>
                </div>
                <div className={style.IntegrationsLists}>
                    {
                        Integrations.map((items, index) => {
                            return (
                                <div className={`${style.IntegrationElement} flex items-center justify-between SimpleText`}>
                                    <img src={items.image} alt="" />
                                    <p>
                                        {items.title}
                                    </p>
                                    <div>
                                        +
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button className={`Buttons ${style.RequestDemo}`}>
                    Explore Integrations
                </button>
            </section>
            <section className={`flex items-start justify-between gap-4 p-12`}>
                <img src="https://actabl.com/wp-content/uploads/footer-homepage.png" alt="" className={`flex-1 w-1/2 ${style.UpRightImage}`} />
                <div className={`flex-1 w-1/2 flex flex-col items-start justify-center gap-4`}>
                    <p className="Heading Bold">
                        Ready to move up and to the right?
                    </p>
                    <div className="SemiHeading">
                        Grab the wheel and drive profits with Actabl.
                    </div>
                    <button className={`Buttons ${style.RequestDemo}`}>
                        Request a Demo
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Homepage