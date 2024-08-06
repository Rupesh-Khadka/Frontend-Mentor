import React from 'react';
import logo from '../../assets/image/logo.svg';

const Footer = () => {
  return (
    <div class="bg-white py-sm">
      <div >
      <div className="flex items-center justify-between m-lg">
      <div className="text-lg mx-xl flex items-center justify-center ">
              <span>
                <img className="logo mx-sm" src={logo} alt="Frontend Mentor Logo" />
              </span>
              <span class="le ">Frontend</span> <span class="px-sm">Mentor</span>
            </div>
                <div className="">
                    <a href="https://discord.com" className="last"><i className="fab fa-discord"></i></a>
                    <a href="https://twitter.com" className="last"><i className="fab fa-twitter"></i></a>
                    <a href="https://facebook.com" className="last"><i className="fab fa-facebook"></i></a>
                    <a href="https://linkedin.com" className="last"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
            </div>
            <div className="flex py-xl justify-between items-center mx-lg">
                <div className=" ">
                    <div className=" ">
                        <div className="text-xl blue py-sm">Stay up to date</div>
                        <div className="wx">with new challenges, featured solutions, selected articles and our latest news</div>
                        <div className="">
                            <input className="py-md px-xl text-md " type="text" placeholder="email@example.com"/>
                            <button className="learn px-lg m-xl">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between py-md">
                    <div>
                        <div className="mx-md py-sm"> FRONTEND MENTOR</div>
                        <div className="items-center mx-md justify-center grey">
                            <div className="">Unlock Pro</div>
                            <div className="">Contact Us</div>
                            <div className="">FAQs</div>
                        </div>
                    </div>
                    <div>
                        <div className="mx-md py-sm"> FRONTEND MENTOR</div>
                        <div className="items-center mx-md justify-center grey">
                            <div className="">Unlock Pro</div>
                            <div className="">Contact Us</div>
                            <div className="">FAQs</div>
                        </div>
                    </div>
                    <div>
                        <div className="mx-md py-sm"> EXPLORE</div>
                        <div className="items-center mx-md justify-center grey">
                            <div className="">Learning paths</div>
                            <div className="">Challenges</div>
                            <div className="">Solutions</div>
                            <div>Articles</div>
                            <div>Resources</div>
                        </div>
                    </div>
                    <div>
                        <div className="mx-md py-sm"> COMMUNITY</div>
                        <div className="items-center mx-md justify-center grey">
                            <div className="">Discord</div>
                            <div className="">Guidelines</div>
                            <div className="">Write for us</div>
                        </div>
                    </div>
                    <div>
                        <div className="mx-md py-sm"> FOR COMPANIES</div>
                        <div className="items-center mx-md justify-center grey">
                            <div className="">Hire developers</div>
                        </div>
                    </div>

                </div>
            </div>
          
            <div className="footer ">
                <div class="mx-md">© Frontend Mentor 2019 - 2024</div>
                <ul className="">
                    <li>Terms</li>
                    <li>Cooke Policy</li>
                    <li>Privacy policy</li>
                    <li>Liscense</li>
                </ul>
            </div>
    </div>
  );
};

export default Footer;
