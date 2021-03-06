import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav id="main-menu">
        <div class="brand">
            <img id="logo" src={logo} alt="Carbage Logo"/>
        </div>
        <ul id="center-menu">
            <li class="active" id="home">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" /></svg>
                <span>Home</span>
            </li>
            <li id="cf-score">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M222.7 32.15C227.7 49.08 218.1 66.9 201.1 71.94C121.8 95.55 64 169.1 64 255.1C64 362 149.1 447.1 256 447.1C362 447.1 448 362 448 255.1C448 169.1 390.2 95.55 310.9 71.94C293.9 66.9 284.3 49.08 289.3 32.15C294.4 15.21 312.2 5.562 329.1 10.6C434.9 42.07 512 139.1 512 255.1C512 397.4 397.4 511.1 256 511.1C114.6 511.1 0 397.4 0 255.1C0 139.1 77.15 42.07 182.9 10.6C199.8 5.562 217.6 15.21 222.7 32.15V32.15z" /></svg>
                <span>Total CF</span>
            </li>
            <li id="reduce-cf">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z" /></svg>
                <span>Reduce CF</span>
            </li>
        </ul>
        <ul id="right-menu">
            <li id="help">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z" /></svg>
                <span>Help</span>
            </li>
            <li id="profile" style={{flexBasis:60}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z" /></svg>
                <span>Profile</span>
            </li>
        </ul>
    </nav>
    <main id="main" data-id="0">
        <aside id="left-sidebar">
            <h3>Good morning, John<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM164.1 325.5C158.3 318.8 148.2 318.1 141.5 323.9C134.8 329.7 134.1 339.8 139.9 346.5C162.1 372.1 200.9 400 255.1 400C311.1 400 349.8 372.1 372.1 346.5C377.9 339.8 377.2 329.7 370.5 323.9C363.8 318.1 353.7 318.8 347.9 325.5C329.9 346.2 299.4 368 255.1 368C212.6 368 182 346.2 164.1 325.5H164.1zM176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176zM336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240z" /></svg></h3>
            <div class="clearfix"></div>
            <section class="quick-tips">
                <ul>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M32 32C32 14.33 46.33 0 64 0H320C337.7 0 352 14.33 352 32C352 49.67 337.7 64 320 64H290.5L301.9 212.2C338.6 232.1 367.5 265.4 381.4 306.9L382.4 309.9C385.6 319.6 383.1 330.4 377.1 338.7C371.9 347.1 362.3 352 352 352H32C21.71 352 12.05 347.1 6.04 338.7C.0259 330.4-1.611 319.6 1.642 309.9L2.644 306.9C16.47 265.4 45.42 232.1 82.14 212.2L93.54 64H64C46.33 64 32 49.67 32 32zM224 384V480C224 497.7 209.7 512 192 512C174.3 512 160 497.7 160 480V384H224z" /></svg>
                        <h4>Carbon footprint (CF)</h4>
                        <p>What's your custom carbon footprint (CF)? Find out by entering your details about your garbage.</p>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z" /></svg>
                        <h4>Did you know?</h4>
                        <p>Americans make up roughly 5% of the world's population, but generate nearly 40% of the world's total waste.</p>
                    </li>
                </ul>
            </section>
            <section class="emissions-section" data-id="0">
                <ul class="reduce-cf-filter left-filters">
                    <li><button data-id="0" class="cb-button active">View</button></li>
                    <li><button data-id="1" class="cb-button">Reduce</button></li>
                </ul>
                <select class="cb-input emissions-sort" name="emissions-sort">
                    <option value="0">All Time</option>
                    <option value="1">Today</option>
                    <option value="2">Last Week</option>
                    <option value="3">Last Month</option>
                    <option value="4">Custom Range</option>
                </select>
                <div class="clearfix"></div>
                <div class="custom-range">
                    <input style={{marginBottom:15}} type="text" class="from-date cb-input" placeholder="From Date"/>
                    <input type="text" class="to-date cb-input" placeholder="To Date"/>
                </div>
                <div class="clearfix"></div>
            </section>
            <section class="locations-list-section">
                <select class="cb-input locations-sort" name="locations-sort">
                    <option>Sort by</option>
                    <option>Relevance</option>
                    <option>Distance</option>
                    <option>Open Hours</option>
                </select>
                <div class="clearfix"></div>
                <ul class="locations-list-left">
                    <li class="active">
                        <h4>AVA Recycling Pick Up, Asset Recovery and Shredding</h4>
                        <p>410 S Clark St, Chicago, IL 60605, United States</p>
                        <button class="cb-button cb-btn-chevron cb-btn-chevron-right cb-btn-chevron-white"></button>
                    </li>
                    <li>
                        <h4>AVA Recycling Pick Up, Asset Recovery and Shredding</h4>
                        <p>410 S Clark St, Chicago, IL 60605, United States</p>
                        <button class="cb-button cb-btn-chevron cb-btn-chevron-right cb-btn-chevron-white"></button>
                    </li>
                    <li>
                        <h4>AVA Recycling Pick Up, Asset Recovery and Shredding</h4>
                        <p>410 S Clark St, Chicago, IL 60605, United States</p>
                        <button class="cb-button cb-btn-chevron cb-btn-chevron-right cb-btn-chevron-white"></button>
                    </li>
                </ul>
            </section>
            <section class="reduce-cf-section">
                <input type="text" class="cb-input reduce-cf-search" placeholder="Search articles" name="search"/>
                <div class="clearfix"></div>
                <ul class="reduce-cf-filter left-filters">
                    <li><button class="cb-button active">Reuse</button></li>
                    <li><button class="cb-button">Recycle</button></li>
                </ul>
                <ul class="reduce-cf-left">
                    <li class="active">
                        <h4>Food articles</h4>
                    </li>
                    <li>
                        <h4>Plastic articles</h4>
                    </li>
                    <li>
                        <h4>Glass item articles</h4>
                    </li>
                    <li>
                        <h4>Box articles</h4>
                    </li>
                </ul>
            </section>
        </aside>
        <div id="main-content">
            <section class="add-garbage-section">
                <h2>Add Garbage</h2>
                <div class="garbage-row" data-id="0">
                    <input class="cb-input" type="text" name="type" placeholder="Garbage type*"/>
                    <input class="cb-input" type="text" name="amount" placeholder="Qty*"/>
                    <select class="cb-input" name="qty">
                        <option value="0">Unit*</option>
                        <option value="1">Count</option>
                        <option value="2">Oz</option>
                        <option value="3">lb</option>
                        <option value="4">Kg</option>
                    </select>
                    <button class="cb-button" id="add-garbage-btn">Add</button>
                </div>
                <div id="add-garbage-location">
                    <h2>Where are you?</h2>
                    <div id="add-garbage-location-row">
                        <input class="cb-input" type="text" name="location"/>
                        <button class="cb-button" id="home-location" title="Home location">
                            <svg id="home-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" /></svg>
                            <svg id="pin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384z" /></svg>
                        </button>
                        <button class="cb-button" id="track-location">Track Location</button>
                    </div>
                </div>
                <div class="section-controls">
                    <button class="cb-button cb-btn-chevron cb-btn-chevron-right cb-btn-chevron-white" id="home-next">Continue</button>
                </div>
            </section>
            <section class="choices-section">
                <ul>
                    <li id="dispose" class="active">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" /></svg>
                        <h2>Dispose</h2>
                        <p>Search for disposal locations</p>
                    </li>
                    <li id="reuse">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M180.2 243.1C185 263.9 162.2 280.2 144.1 268.8L119.8 253.6l-50.9 81.43c-13.33 21.32 2.004 48.98 27.15 48.98h32.02c17.64 0 31.98 14.32 31.98 31.96c0 17.64-14.34 32.05-31.98 32.05H96.15c-75.36 0-121.3-82.84-81.47-146.8L65.51 219.8L41.15 204.5C23.04 193.1 27.66 165.5 48.48 160.7l91.43-21.15C148.5 137.7 157.2 142.9 159.2 151.6L180.2 243.1zM283.1 78.96l41.25 66.14l-24.25 15.08c-18.16 11.31-13.57 38.94 7.278 43.77l91.4 21.15c8.622 1.995 17.23-3.387 19.21-12.01l21.04-91.43c4.789-20.81-17.95-37.05-36.07-25.76l-24.36 15.2L337.4 45.14c-37.58-60.14-125.2-60.18-162.8-.0617L167.2 56.9C157.9 71.75 162.5 91.58 177.3 100.9c14.92 9.359 34.77 4.886 44.11-10.04l7.442-11.89C241.6 58.58 270.9 59.33 283.1 78.96zM497.3 301.3l-16.99-27.26c-9.336-14.98-29.06-19.56-44.04-10.21c-14.94 9.318-19.52 29.15-10.18 44.08l16.99 27.15c13.35 21.32-1.984 49-27.14 49h-95.99l.0234-28.74c0-21.38-25.85-32.09-40.97-16.97l-66.41 66.43c-6.222 6.223-6.222 16.41 .0044 22.63l66.42 66.34c15.12 15.1 40.95 4.386 40.95-16.98l-.0234-28.68h95.86C491.2 448.1 537.2 365.2 497.3 301.3z" /></svg>
                        <h2>Reuse</h2>
                        <p>Explore different recycling and reusing options</p>
                    </li>
                    <li id="emissions">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M128 32C145.7 32 160 46.33 160 64V215.4L316.6 131C332.6 122.4 352 134 352 152.2V215.4L508.6 131C524.6 122.4 544 134 544 152.2V432C544 458.5 522.5 480 496 480H80C53.49 480 32 458.5 32 432V64C32 46.33 46.33 32 64 32H128z" /></svg>
                        <h2>Emissions</h2>
                        <p>Check how much emissions could be reduced by reusing</p>
                    </li>
                </ul>
                <div class="section-controls">
                    <button class="cb-button cb-btn-chevron cb-btn-chevron-left cb-btn-chevron-white" id="choices-prev">Update garbage info</button>
                </div>
            </section>
            <section class="locations-list-section">
                <div class="locations-list-right">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95010.19695703337!2d-87.86913026336047!3d41.91288281686306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cbd75b9e3b7%3A0xc0f3325c61940e15!2sAVA%20Recycling%20Pick%20Up%2C%20Asset%20Recovery%20and%20Shredding!5e0!3m2!1sen!2sbd!4v1649935376358!5m2!1sen!2sbd" style={{border:0}} allowfullscreen="" width="100%" height="350" frameborder="0"></iframe>
                    <div class="locations-list-right-details">
                        <h2>AVA Recycling Pick Up, Asset Recovery and Shredding</h2>
                        <p><b>Address: </b>410 S Clark St, Chicago, IL 60605, United States</p>
                        <p><b>Distance: </b>0.5 miles from your given location</p>
                        <p><b>Open Hours: </b>Mon - Sun: 10:00am - 5:00pm </p>
                        <a href="https://maps.google.com/maps?ll=41.876476,-87.631035&z=11&t=m&hl=en&gl=BD&mapclient=embed&cid=13903511846978326037" target="_blank" class="cb-button cb-btn-chevron cb-btn-chevron-right cb-btn-chevron-white" title="Direct google map link to the location named 'AVA Recycling Pick Up, Asset Recovery and Shredding' at '410 S Clark St, Chicago, IL 60605, United States'" rel="noreferrer">Open in Google Maps</a>
                    </div>
                </div>
            </section>
            <section class="reduce-cf-section">
                <div class="reduce-cf-right">
                    <div class="reduce-cf-right-header">
                        <h2>Food Articles</h2>
                    </div>
                    <ul class="articles-row">
                        <li>
                            <div class="articles-image">
                                <img src="assets/images/articlePic3.png" alt="Reduce, reuse, recycle: a mantra for food packaging"/>
                            </div>
                            <article>
                                <h4>Reduce, reuse, recycle: a mantra for food packaging</h4>
                                <p class="cb-link">Learn more</p>
                            </article>
                        </li>
                        <li>
                            <div class="articles-image">
                                <img src="assets/images/articlePic6.jpg" alt="Circular approach in packaging to reduce food loss and waste"/>
                            </div>
                            <article>
                                <h4>Circular approach in packaging to reduce food loss and waste</h4>
                                <p><span class="cb-link">Learn more</span></p>
                            </article>
                        </li>
                        <li>
                            <div class="articles-image">
                                <img src="assets/images/articlePic5.jpg" alt="Reduce, Reuse, Recycle. Most of All, Reduce"/>
                            </div>
                            <article>
                                <h4>Reduce, Reuse, Recycle. Most of All, Reduce</h4>
                                <p class="cb-link">Learn more</p>
                            </article>
                        </li>
                    </ul>
                    <ul class="articles-row">
                        <li>
                            <div class="articles-image">
                                <img src="assets/images/articlePic4.webp" alt="Food Waste Reduction and Recovery"/>
                            </div>
                            <article>
                                <h4>Food Waste Reduction and Recovery</h4>
                                <p class="cb-link">Learn more</p>
                            </article>
                        </li>
                        <li>
                            <div class="articles-image">
                                <img src="assets/images/articlePic1.jpg" alt="Transforming food waste: making something out of rubbish"/>
                            </div>
                            <article>
                                <h4>Transforming food waste: making something out of rubbish</h4>
                                <p class="cb-link">Learn more</p>
                            </article>
                        </li>
                        <li>
                            <div class="articles-image">
                                <img src="assets/images/articlePic2.jpg" alt="Environment-Friendly Ways to Recycle or Reuse Food Waste"/>
                            </div>
                            <article>
                                <h4>Environment-Friendly Ways to Recycle or Reuse Food Waste</h4>
                                <p class="cb-link">Learn more</p>
                            </article>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="emissions-section" data-id="0">
                <div class="emissions-view">
                    <div id="barchart"></div>
                    <h2>Garbage usage frequency</h2>
                    <div id="scattered"></div>
                    <h2>CF score journey</h2>
                </div>
                <ul class="potential-reduction">
                    <li>
                        <h4>Food: 40% | 40oz</h4>
                        <p>Reduce by: <span class="cb-link">Recycle (saves 3oz)</span> | <span class="cb-link">Reuse (saves 10oz)</span></p>
                    </li>
                    <li>
                        <h4>Plastic: 30% | 30oz</h4>
                        <p>Reduce by: <span class="cb-link">Recycle (saves 3oz)</span> | <span class="cb-link">Reuse (saves 10oz)</span></p>
                    </li>
                    <li>
                        <h4>Cardboard: 15% | 15oz</h4>
                        <p>Reduce by: <span class="cb-link">Recycle (saves 3oz)</span> | <span class="cb-link">Reuse (saves 10oz)</span></p>
                    </li>
                    <li>
                        <h4>Batteries: 15% | 15oz</h4>
                        <p>Reduce by: <span class="cb-link">Recycle (saves 3oz)</span> | <span class="cb-link">Reuse (saves 10oz)</span></p>
                    </li>
                </ul>
            </section>
            <section class="help-section">
                <h2 style={{marginBottom:15}}>Help</h2>
                <p><b>Home: </b>Start entering your garbage here.</p>
                <p><b>Reducing CF: </b>Read articles about reducing your carbon footprint and reusing materials.</p>
                <p><b>Total CF: </b>Look at detailed information about your carbon footprint, including the frequency of materials you throw away.</p>
                <p><b>Profile: </b>Edit your account information here.</p>
                <h2 style={{marginTop: 20}}>FAQ</h2>
                <h4>What is a carbon footprint?</h4>
                <p>A carbon footprint is the total amount of greenhouse gases generated by one's actions.</p>
                <h4>What does my garbage have to do with my carbon footprint?</h4>
                <p>Garbage disposal is a huge contributor to increasing to one's carbon footprint.
                    Trash that cannot be recycled can only be disposed of by dumping it into a landfill or using an incinerator
                    to burn it. Both methods create toxic greenhouse gasses.
                    For recyclable waste, emissions may be reduced, but the recycling process will also add emissions.
                    The best solution is to not make trash in the first place by reusing as much as possible.</p>
                <h4>How do I enter my garbage?</h4>
                <p>Go to the home page and enter your garbage type and amount. Add your location and press next.</p>
            </section>
            <section class="profile-section">
                <h2>Profile</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg>
                <h3>Name</h3>
                <p>John Doe</p>
                <h3>Address</h3>
                <p>410 S Morgan St, Chicago, IL 60607</p>
            </section>
            <section class="cf-score-section">
            </section>
        </div>
        <aside id="right-sidebar">
            <div class="choices-section-right-first">
                <h2 style={{color:"#d81e5b", marginBottom:30}}>Journey Summary</h2>
                <h3 style={{marginBottom:15}}>Step 1: Garbage info</h3>
                <p>5 Plastic bottles, 3 Glass cups, 2 Cardboard boxes & 2lb Food waste</p>
                <button style={{marginTop:15}} class="cb-button cb-btn-chevron cb-btn-chevron-left cb-btn-chevron-white" id="choices-prev">Update garbage info</button>
                <h3 style={{marginTop:15, marginRight: 0}}>Step 2: <span style={{color:"#d81e5b"}}>You're here now</span></h3>
                <h3 style={{marginBottom:30}}>Step 3: Results</h3>
            </div>
            <div class="choices-section-right">
                <h2 style={{color:"#d81e5b", marginBottom:30}}>Journey Summary</h2>
                <h3>Step 1: Garbage info</h3>
                <p>5 Plastic bottles, 3 Glass cups, 2 Cardboard boxes & 2lb Food waste</p>
                <button class="cb-button cb-btn-chevron cb-btn-chevron-left cb-btn-chevron-white" id="choices-prev">Update garbage info</button>
                <h3>Step 2: Browse options</h3>
                <ul>
                    <li id="dispose">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" /></svg>
                        <h5>Dispose</h5>
                        <p>Search for disposal locations</p>
                    </li>
                    <li id="reuse">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M180.2 243.1C185 263.9 162.2 280.2 144.1 268.8L119.8 253.6l-50.9 81.43c-13.33 21.32 2.004 48.98 27.15 48.98h32.02c17.64 0 31.98 14.32 31.98 31.96c0 17.64-14.34 32.05-31.98 32.05H96.15c-75.36 0-121.3-82.84-81.47-146.8L65.51 219.8L41.15 204.5C23.04 193.1 27.66 165.5 48.48 160.7l91.43-21.15C148.5 137.7 157.2 142.9 159.2 151.6L180.2 243.1zM283.1 78.96l41.25 66.14l-24.25 15.08c-18.16 11.31-13.57 38.94 7.278 43.77l91.4 21.15c8.622 1.995 17.23-3.387 19.21-12.01l21.04-91.43c4.789-20.81-17.95-37.05-36.07-25.76l-24.36 15.2L337.4 45.14c-37.58-60.14-125.2-60.18-162.8-.0617L167.2 56.9C157.9 71.75 162.5 91.58 177.3 100.9c14.92 9.359 34.77 4.886 44.11-10.04l7.442-11.89C241.6 58.58 270.9 59.33 283.1 78.96zM497.3 301.3l-16.99-27.26c-9.336-14.98-29.06-19.56-44.04-10.21c-14.94 9.318-19.52 29.15-10.18 44.08l16.99 27.15c13.35 21.32-1.984 49-27.14 49h-95.99l.0234-28.74c0-21.38-25.85-32.09-40.97-16.97l-66.41 66.43c-6.222 6.223-6.222 16.41 .0044 22.63l66.42 66.34c15.12 15.1 40.95 4.386 40.95-16.98l-.0234-28.68h95.86C491.2 448.1 537.2 365.2 497.3 301.3z" /></svg>
                        <h5>Reuse</h5>
                        <p>Explore different recycling and reusing options</p>
                    </li>
                    <li id="emissions">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M128 32C145.7 32 160 46.33 160 64V215.4L316.6 131C332.6 122.4 352 134 352 152.2V215.4L508.6 131C524.6 122.4 544 134 544 152.2V432C544 458.5 522.5 480 496 480H80C53.49 480 32 458.5 32 432V64C32 46.33 46.33 32 64 32H128z" /></svg>
                        <h5>Emissions</h5>
                        <p>Check how much emissions could be reduced by reusing</p>
                    </li>
                </ul>
                <h3 style={{marginBottom:30}}>Step 3: <span style={{color: "#d81e5b"}}>You're here now</span></h3>
            </div>
            <div class="quick-look">
                <h2 style={{color:"#d81e5b", marginBottom:30}}>Quick Look</h2>
                <div>
                    <div class="score-area">
                        <p class="score-count">45</p>
                        <p class="score-title">CF Score</p>
                        <p class="score-state">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM164.1 325.5C158.3 318.8 148.2 318.1 141.5 323.9C134.8 329.7 134.1 339.8 139.9 346.5C162.1 372.1 200.9 400 255.1 400C311.1 400 349.8 372.1 372.1 346.5C377.9 339.8 377.2 329.7 370.5 323.9C363.8 318.1 353.7 318.8 347.9 325.5C329.9 346.2 299.4 368 255.1 368C212.6 368 182 346.2 164.1 325.5H164.1zM176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176zM336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240z" /></svg>
                        </p>
                    </div>
                    <div id="pie-chart"></div>
                    <form class="pie-form"></form>
                    <ul style={{marginTop:20, marginRight:0, paddingLeft:15}} class="pie-list active">
                        <li style={{color:"#1f77b4"}}>Carbon Dioxide</li>
                        <li style={{color:"#ffbb78"}}>Methane</li>
                        <li style={{color:"#aec7e8"}}>Nitrous Oxide</li>
                        <li style={{color:"#2ca02c"}}>Flourinated Gases</li>
                        <li style={{color:"#ff7f0e"}}>Other Gases</li>
                    </ul>
                </div>
            </div>
        </aside>
    </main>
    <footer>
        <p>?? 2022 Carbage. All rights reserved.</p>
    </footer>
    <div id="modal">
        <div class="modal-body">
            <div class="modal-close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
            </div>
            <article>
                <div class="article-image">
                    <img src="assets/images/articlePic3.png" alt="Reduce, reuse, recycle."/>
                </div>
                <h2>Reduce, reuse, recycle: a mantra for food packaging</h2>
                <p>Whether it???s made from glass, plastic, metal, paper or bamboo, packaging plays an important role in keeping food fresh, ensuring it is safe as well as extending its shelf-life to reduce loss and waste.</p>
                <p>In primary packaging, or packaging which comes in direct contact with food, plastic is very common, being lightweight, flexible and comparatively low cost. While some plastics can be easily recycled and reused, others cannot, and, as we know, the impact of plastic on the environment is huge when it is not reused or recycled.</p>
                <p>At the same time, food loss and food waste also carry a huge environmental burden. Lost and wasted food means a loss of all the resources that go into making it, such as water, soil, energy and more. Using adequate packaging to avoid losses and waste of food products can benefit the environment more than not using packaging at all.</p>
                <p>A circular approach is key. Circular packaging solutions focus on a reduce-reuse-recycle approach, including minimising single-use plastic, encouraging the reuse and recycling of materials and improving the economics and quality of recycled plastic materials.</p>
                <p>Here are three better packaging solutions we can leverage to reduce food loss and waste:</p>
                <ul>
                    <li>
                        <b>Re-useable packaging:</b>
                        <p>Food loss is the decrease in the quantity or quality of food up until the retail stage. Poor bulk packaging or improper handling along the supply chain are amongst the main causes of damage and decay. In the case of fruits and vegetables, losses resulting from compression and abrasion tend to be highest during transport. This compromises the quality and economic value of fresh produce. The use of appropriate packaging can significantly reduce these losses, protecting produce in transit, and ultimately reducing the carbon footprint of food.</p>
                    </li>
                    <li>
                        <b>Sustainable and innovative packaging options:</b>
                        <p>Using sustainable materials is of course one of the biggest ways to minimise packaging???s impact on the environment.
                            In many countries, fresh produce has long-since been sold in the most natural packaging of all ??? leaves. Whilst leaves are not enough to protect fruit during transport, at the retail level, they are a good alternative to plastic as they help keep food fresh until it is sold. The bundling of fresh produce is a popular practice across the developing world in view of the high cost and limited access to other packaging options. For example, asparagus and leafy vegetables are commonly wrapped with banana leaves or newspaper before being tied together and sold as a bundle.</p>
                    </li>
                    <li>
                        <b>Refillable packaging:</b>
                        <p>Sometimes, due to the large size of retail packaging, consumers purchase more food than needed and often throw away what they cannot use. Refillable packaging, such as cleanable glass or stainless-steel containers, offers consumers the opportunity to purchase food in loose or bulk formats in retail outlets. In 2018, a Dutch grocer became the first to offer a plastic-free aisle to its customers. Soon after, a well-known UK supermarket followed suit, with many supermarkets now offering this option. However, innovative designs of containers that preclude human contact with the product during filling are important to avoid cross-contamination and food safety risks.</p>
                    </li>
                </ul>
                <p>Packaging plays an important role in not only reducing food loss and waste but by extension boosting food security, nutrition and livelihoods too. A circular approach to how we package our food can make a big difference to the food security of our communities and the health of our planet.</p>
            </article>
        </div>
      </div>
    </div>
  );
}

export default App;
