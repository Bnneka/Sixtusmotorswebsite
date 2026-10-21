'use client';
import Navigation from './components/Navigation';
import FleetGallery from './components/FleetGallery';
import BusinessContact from './components/BusinessContact';
import CompanyAbout from './components/CompanyAbout';
import Director from './components/Director';
import FAQ from './components/FAQ';
import MaterialPhoto from './components/MaterialPhoto';
import HeroVideo from './components/HeroVideo';
const services=[['Sharp sand','For the foundations of your next build.','Concrete & general construction'],['Chippings','The aggregate behind the structure.','Building & civil engineering'],['Red mud','Material supply for the work ahead.','Filling & site preparation'],['Asphalt','Supporting the roads that connect us.','Road construction materials'],['Other sand types','Materials to match your specification.','Discuss your project requirements'],['Haulage','From material source to project site.','Construction materials transport']];
export default function Home(){return <><Navigation/><main>
<section className="hero"><HeroVideo/><div className="overlay"/><div className="hero-content"><p className="eyebrow"><i/> BUILT FOR THE WORK AHEAD</p><h1>Reliable Trucks.<br/>Quality Materials.<br/><em>On-Time Delivery.</em></h1><p className="intro">Construction materials and haulage for the people<br className="desktop"/> building what comes next. Based in Owerri, Imo State.</p><div className="actions"><a href="#services" className="text-link">Explore Our Services <span>↓</span></a></div></div><div className="hero-bottom"><span>HOME OF QUALITY TRUCKS & CONSTRUCTION MATERIALS</span><span>OWERRI, NIGERIA</span></div></section>
<div className="ribbon"><span>MATERIAL SUPPLY</span><b>✦</b><span>TRUCKS & EQUIPMENT</span><b>✦</b><span>HAULAGE SERVICES</span><b>✦</b><span>LET’S BUILD FORWARD ↗</span></div>
<section className="section" id="services"><div className="section-heading"><div><p className="eyebrow red">01 / WHAT WE DO</p><h2>The right materials.<br/>The muscle to move them.</h2></div><p>From the first load to the next phase,<br/>explore material supply and transport<br/>for your construction requirements.</p></div><div className="service-grid">{services.map(([t,d,s],i)=><a href="/contact" className="service" key={t}><div className="service-top"><span>0{i+1}</span><span>↗</span></div><MaterialPhoto name={t}/><h3>{t}</h3><p>{d}</p><small>{s}</small></a>)}</div><p className="caption">Material photographs are illustrative. Actual colour, texture and grading may vary; confirm specifications when requesting a quote.</p></section>
<FleetGallery/>
<CompanyAbout/>
<Director/><FAQ/><section className="section contact-section" id="contact"><div><p className="eyebrow red">LET’S GET TO WORK</p><h2>Contact us</h2><p className="contact-intro">Get in touch for construction materials, haulage and equipment enquiries.</p></div><BusinessContact/></section></main><footer><div className="footer-top"><a className="brand" href="/">SIXTUS<span>MOTORS<small>NIGERIA LIMITED</small></span><i>↗</i></a><p>HOME OF QUALITY TRUCKS<br/>& CONSTRUCTION MATERIALS</p><a href="/contact">Let’s build forward. ↗</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SIXTUS MOTORS NIGERIA LIMITED</span><span>Owerri, Imo State, Nigeria · RC-1784631</span><a href="#">Back to top ↑</a></div></footer></>}




