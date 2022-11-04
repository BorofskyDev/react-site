import React, { useEffect, useRef } from 'react';
import { FaCodepen, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import gsap from 'gsap';

function Sidebar(props) {
  const { menu, setMenu } = props;
  let sidebarMenu = useRef(null);
  let sidebarMenuOverlay = useRef(null);
  let menuLayer = useRef(null);
  let menuTimeline = useRef(null);

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      [sidebarMenuOverlay, menuLayer, sidebarMenu],
      { duration: 0, x: '100%' },
      {
        duration: 0.75,
        x: '0%',
        ease: 'power3.inOut',
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, []);

  useEffect(() => {
    menu ? menuTimeline.current.play() : menuTimeline.current.reverse();
  }, [menu]);

  return (
    <div className="Menu" ref={(el) => (sidebarMenuOverlay = el)}>
      <div className="Menu__wrapper">
        <div className="Menu__layer" ref={(el) => (menuLayer = el)}></div>
        <nav className="Menu__nav" ref={(el) => (sidebarMenu = el)}>
          <div className="Menu__top">
            <ul className="Menu__links">
              <li className="Menu__link">
                <a href="#" className="Menu__link--section">
                  Stack
                </a>
              </li>
              <li className="Menu__link">
                <a href="#" className="Menu__link--section">
                  About
                </a>
              </li>
              <li className="Menu__link">
                <a href="#" className="Menu__link--section">
                  Projects
                </a>
              </li>
              <li className="Menu__link">
                <a href="#" className="Menu__link--section">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="Menu__bottom">
            <h3 className="Menu__bottom--title">Social Media</h3>
            <div className="Menu__buttons">
              <a href="#" className="Menu__social-media">
                <FaGithub className="Menu__icon" />
                <span className="Menu__icon--name">GitHub</span>
              </a>
              <a href="#" className="Menu__social-media">
                <FaLinkedinIn className="Menu__icon" />
                <span className="Menu__icon--name">LinkedIn</span>
              </a>
              <a href="#" className="Menu__social-media">
                <FaCodepen className="Menu__icon" />
                <span className="Menu__icon--name">CodePen</span>
              </a>
              <a href="#" className="Menu__social-media">
                <FaTwitter className="Menu__icon" />
                <span className="Menu__icon--name">Twitter</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
