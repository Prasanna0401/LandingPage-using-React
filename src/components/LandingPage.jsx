// import React from 'react';
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div>
            {/* <!-- header section --> */}
            <header>
                <div className="imp-img"></div>
                <div className="wrapper">
                    <div className="menu">
                        <div className="logo">
                            {/* <!-- logo section --> */}
                            <div>Trabook
                                <img src="assets/company-logo.png" alt="logo" />
                            </div>
                        </div>
                        {/* <!-- nav section --> */}
                        <nav>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Destination</a></li>
                                <li><a href="#">Tour</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#" className="login">Login</a></li>
                                <li><a href="#" className="btn">Sign up</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="intro">
                        {/* <!-- left side section --> */}
                        <div className="left">
                            <div className="content">
                                <h1>Get started your exciting <span>journey</span> with us.</h1>
                                <p>A Team of experienced tourism professionals will provide you with the best advice and tips for your
                                    desire place.</p>
                                <a href="#" className="d-btn">Discover Now</a>
                            </div>
                        </div>
                        {/* <!-- right side section --> */}
                        <div className="intro_card">
                            <div className="travel-container">
                                <div className="semicircle"></div>
                                <img src="assets/man-image.svg" alt="man photo" />
                            </div>
                            <div className="badge best-tour">
                                <img src="assets/trophy 1.png" alt="trophy" />
                                <span>Best Tour<br></br>Awards</span>
                            </div>
                            <div className="badge explore">
                                <img src="assets/google-maps 1.png" alt="location" />
                                <span>Explore<br></br></span><span>Every corner of<br></br>the world with us</span>
                            </div>
                            <div className="badge review">
                                <img src="assets/star 1.png" alt="star logo" />
                                <span>27K<br></br></span><span>Customer Reviewd</span>
                            </div>
                        </div>
                        {/* <!-- buttom section --> */}
                        <div className="search-section">
                            <div className="search-item">
                                <label>Location <img src="assets/down-arrow.png" alt="key" /></label><br></br>
                                <span>Where are you going</span>
                            </div>
                            <div className="search-item">
                                <label>Date <img src="assets/down-arrow.png" alt="key" /></label><br></br>
                                <span>When you will go</span>
                            </div>
                            <div className="search-item">
                                <label>Guest <img src="assets/down-arrow.png" alt="key" /></label><br></br>
                                <span>Number of guest</span>
                            </div>
                            <button className="explore-button">Explore Now</button>
                        </div>
                    </div>
                </div>
            </header>

            {/* <!-- things you need to do section --> */}
            <section className="need">
                <div className="wrapper">
                    {/* <!-- top section --> */}
                    <div className="top">
                        <div className="content">
                            <h1>Things you need <span>to do</span></h1>
                            <p>We ensure that you'll embark on a perfectly planned, safe vacation at a price you can afford.</p>
                        </div>
                        <div className="bg">
                            <img src="assets/plane-element 1.png" alt="plane" />
                        </div>
                    </div>
                    {/* <!-- buttom section --> */}
                    <div className="card-1">
                        <div className="cards">
                            <div className="icon">
                                <img src="assets/signup-1.png" alt="signup" />
                            </div>
                            <div className="text-container">
                                <h3>Sign Up</h3>
                                <p>Completes all the work associated with planning and processing</p>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="icon">
                                <img src="assets/money-1.png" alt="money" />
                            </div>
                            <div className="text-container">
                                <h3>Worth of Money</h3>
                                <p>After successful access then book from exclusive deals & pricing</p>
                                <div className="backimg-1"></div>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="icon">
                                <img src="assets/travel-1.png" alt="travel" />
                            </div>
                            <div className="text-container">
                                <h3>Exciting Travel</h3>
                                <p>Start and explore a wide range of exciting travel experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- deals & discounts section --> */}
            <section className="deals">
                <div className="wrapper">
                    {/* <!-- header section --> */}
                    <div className="content">
                        <h2>Exclusive <span>deals & discounts</span></h2>
                        <p>Discover our fantastic early booking discounts & start planning your journey.</p>
                    </div>
                    {/* <!-- places section --> */}
                    <div className="place">
                        <div className="card-1">
                            <div className="card">
                                <div className="image-container">
                                    <img src="assets/madrit-deals.png" alt="Madrit" />
                                </div>
                                <div className="card-content">
                                    <div className="details">
                                        <h3>Madrid</h3>
                                        <span className="rating"><img src="assets/deals-star.png" alt="star" />4.8</span>
                                    </div>
                                    <div className="price">
                                        <span className="location"><img src="assets/deals-location.png" alt="location" />Spain</span>
                                        <span className="original"><s>$950</s></span>
                                        <span className="discounted">$850</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-container">
                                    <img src="assets/firenze-deals.png" alt="Firenze" />
                                    <button className="btn">Book Now</button>
                                </div>
                                <div className="card-content">
                                    <div className="details">
                                        <h3>Firenze</h3>
                                        <span className="rating"><img src="assets/deals-star.png" alt="star" />4.5</span>
                                    </div>
                                    <div className="price">
                                        <span className="location"><img src="assets/deals-location.png" alt="location" />Italy</span>
                                        <span className="original"><s>$850</s></span>
                                        <span className="discounted">$750</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-container">
                                    <img src="assets/paris-deals.png" alt="Paris" />
                                </div>
                                <div className="card-content">
                                    <div className="details">
                                        <h3>Paris</h3>
                                        <span className="rating"><img src="assets/deals-star.png" alt="star" />4.4</span>
                                    </div>
                                    <div className="price">
                                        <span className="location"><img src="assets/deals-location.png" alt="loaction" />France</span>
                                        <span className="original"><s>$699</s></span>
                                        <span className="discounted">$599</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="image-container">
                                    <img src="assets/london-deals.png" alt="London" />
                                </div>
                                <div className="card-content">
                                    <div className="details">
                                        <h3>London</h3>
                                        <span className="rating"><img src="assets/deals-star.png" alt="star" />4.8</span>
                                    </div>
                                    <div className="price">
                                        <span className="location"><img src="assets/deals-location.png" alt="loaction" />UK</span>
                                        <span className="original"><s>$850</s></span>
                                        <span className="discounted">$850</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- buttom section --> */}
                        <div className="slider-btn">
                            <div className="btn1">
                                {/* <img src="assets/slider-btn.png" alt="button"> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- vacation plan section --> */}
            <section className="vacation_plan">
                <div className="wrapper">
                    {/* <!-- top section --> */}
                    <div className="content">
                        <h2>Best <span>Vacation plan</span></h2>
                        <p>Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers!</p>
                    </div>
                    <div className="bg">
                        <img src="assets/vacation-tree.png" alt="tree" />
                    </div>
                    <div className="slider-btn">
                        <div className="bg">
                            <img src="assets/slider-btn.png" alt="buttom" />
                        </div>
                    </div>
                    {/* <!-- buttom section --> */}
                    <div className="card-1">
                        <div className="card">
                            <div className="image-container">
                                <img src="assets/vacation-italy.png" alt="Rome" />
                            </div>
                            <div className="card-content">
                                <div className="details">
                                    <h3>Rome,Italy</h3>
                                    <span className="price">$5,42K</span>
                                </div>
                                <div className="trip">
                                    <span><img src="assets/vacation-navigation.png" alt="nav" /> 10 Days Trip</span>
                                    <span className="rating"><img src="assets/vacation-star.png" alt="star" />4.8</span>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image-container">
                                <img src="assets/vacation-uk.png" alt="London" />
                            </div>
                            <div className="card-content">
                                <div className="details">
                                    <h3>London,UK</h3>
                                    <span className="price">$2,42K</span>
                                </div>
                                <div className="trip">
                                    <span><img src="assets/vacation-navigation.png" alt="nav" /> 07 Days Trip</span>
                                    <span className="rating"><img src="assets/vacation-star.png" alt="star" />4.7</span>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image-container">
                                <img src="assets/vacation-japan.png" alt="Osaka" />
                            </div>
                            <div className="card-content">
                                <div className="details">
                                    <h3>Osaka,Japan</h3>
                                    <span className="price">$5,42K</span>
                                </div>
                                <div className="trip">
                                    <span><img src="assets/vacation-navigation.png" alt="nav" /> 10 Days Trip</span>
                                    <span className="rating"><img src="assets/vacation-star.png" alt="star" />4.8</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- about us section --> */}
            <section className="client_feedback">
                <div className="wrapper">
                    {/* <!-- left side section --> */}
                    <div className="left">
                        <div className="content">
                            <h1>What people say<br></br><span>about Us.</span></h1>
                            <p>Our Clients send us bunch of smilies with our services and we love them.</p>
                            <div className="slider-btn">
                                <div className="btn2">
                                    <img src="assets/slider-btn.png" alt="buttom" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- right side section --> */}
                        <div className="card-container">
                            {/* <!-- front card section --> */}
                            <img src="assets/aboutus-man-image.png" alt="man image" className="profile-img" />
                            <div className="card front">
                                <img src="assets/aboutus-man-image.png" alt="man image" className="profile-img" />
                                <p className="quote">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same
                                    as knew next. Of believed or diverted no.”</p>
                                <p className="author">Mike taylor</p>
                                <p className="location">Lahore, Pakistan</p>
                            </div>
                            {/* <!-- back card section --> */}
                            <div className="card behind">
                                <p className="quote">“Empty”</p>
                                <p className="author">Chris Thomas</p>
                                <p className="location">CEO of Red Button</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg">
                        <img src="assets/aboutus-plane.png" alt="plane" />
                    </div>
                </div>
            </section>

            {/* <!-- latest blog section --> */}
            <section className="latest_blog">
                <div className="wrapper">
                    <div className="content">
                        <h2>Get update with <span>latest blog</span></h2>
                    </div>
                    <div className="cards">
                        <div className="card1">
                            <img src="assets/blog-1.png" alt="image" />
                            <div>
                                <h4>The Amazing Difference a Year of Travelling .</h4>
                                <h5>July 27, 2021</h5>
                            </div>
                        </div>
                        <div className="card1">
                            <img src="assets/blog-2.png" alt="image" />
                            <div>
                                <h4>Travel far enough, you meet yourself.</h4>
                                <h5>July 27, 2021</h5>
                            </div>
                        </div>
                        <div className="card1">
                            <img src="assets/blog-3.png" alt="image" />
                            <div>
                                <h4>How to Save Money While Visiting Africa .</h4>
                                <h5>July 27, 2021</h5>
                            </div>
                        </div>
                        <div className="card1">
                            <img src="assets/blog-4.png" alt="image" />
                            <div>
                                <h4>Reflections on 5 Months of Travel: Time to Hang</h4>
                                <h5>July 27, 2021</h5>
                            </div>
                        </div>
                    </div>
                    <div className="slider">
                        <img src="assets/blog-slider.png" alt="slider" />
                    </div>
                </div>
            </section>

            {/* <!-- footer section --> */}
            <footer>
                <div className="wrapper">
                    <div className="footer-container">
                        {/* <!-- top section --> */}
                        <div className="subscribe-section">
                            <div className="bg"><img src="assets/footer-tree.png" alt="tree" /></div>
                            <div className="circle-image"><img src="assets/footer-semicircle.png" alt="semicircle" /></div>
                            <h2>Subscribe and get exclusive <br></br>deals & offer</h2>
                            <form action="#" method="post">
                                <div className="email-input-container">
                                    <input type="email" name="email" placeholder="Enter your mail" required />
                                </div>
                                <button className="submit-btn">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    {/* <!-- buttom left section --> */}
                    <div className="links-container">
                        <div>
                            <div className="Trabook">Trabook
                                <img src="assets/company-logo.png" alt="logo" />
                            </div>
                            <p>Book your trip in minute, get full <br></br>Control for much longer.</p>
                            <a href="#"><img src="assets/footer-fb.png" alt="Social-links" /></a>
                            <a href="#"><img src="assets/footer-insta.png" alt="Social-links" /></a>
                            <a href="#"><img src="assets/footer-X.png" alt="Social-links" /></a>
                        </div>
                        <div>
                            <h3>Company</h3>
                            <a href="#">About</a>
                            <a href="#">Careers</a>
                            <a href="#">Logistic</a>
                            <a href="#">Privacy & Policy</a>
                        </div>
                        <div>
                            <h3>Contact</h3>
                            <a href="#">Help/FAQ</a>
                            <a href="#">Press</a>
                            <a href="#">Affiliates</a>
                        </div>
                        <div>
                            <h3>More</h3>
                            <a href="#">Press Centre</a>
                            <a href="#">Our Blog</a>
                            <a href="#">Low fare tips</a>
                        </div>
                    </div>
                    
                        <div className="copyright">
                            <p>Copyright, Trabook 2022. All rights reserved.</p>
                            <p><a href="#">Terms & Conditions</a></p>
                        </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;