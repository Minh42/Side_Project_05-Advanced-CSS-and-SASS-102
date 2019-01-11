import React, { Component } from 'react';
import { ReactComponent as Home} from '../assets/img/SVG/home.svg';
import { ReactComponent as Flight} from '../assets/img/SVG/aircraft-take-off.svg';
import { ReactComponent as Keys} from '../assets/img/SVG/key.svg';
import { ReactComponent as Map} from '../assets/img/SVG/map.svg';
import { ReactComponent as Stars} from '../assets/img/SVG/star.svg';
import { ReactComponent as Location} from '../assets/img/SVG/location-pin.svg';
import hotel1 from '../assets/img/hotel-1.jpg';
import hotel2 from '../assets/img/hotel-2.jpg';
import hotel3 from '../assets/img/hotel-3.jpg';
import user1 from '../assets/img/user-1.jpg';
import user2 from '../assets/img/user-2.jpg';
import user3 from '../assets/img/user-3.jpg';
import user4 from '../assets/img/user-4.jpg';

class Content extends Component {
    render() {
        return(
            <div className="content">
                <nav className="sidebar">
                    <ul className="side-nav">
                        <li className="side-nav__item side-nav__item--active">
                            <a href="#" className="side-nav__link">
                                <Home className="side-nav__icon"/>
                                <span>Hotel</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <a href="#" className="side-nav__link">
                                <Flight className="side-nav__icon"/>
                                <span>Flight</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <a href="#" className="side-nav__link">
                                <Keys className="side-nav__icon"/>
                                <span>Car rental</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <a href="#" className="side-nav__link">
                                <Map className="side-nav__icon"/>
                                <span>Tours</span>
                            </a>
                        </li>
                    </ul>
                    <div className="legal">
                        &copy; 2017 by trillo. All rights reserved
                    </div>
                </nav>

                <main className="hotel-view">
                    <div className="gallery">
                        <figure className="gallery__item">
                            <img src={hotel1} alt="hotel1" className="gallery__photo"/>
                        </figure>
                        <figure className="gallery__item">
                            <img src={hotel2} alt="hotel2" className="gallery__photo"/>
                        </figure>
                        <figure className="gallery__item">
                            <img src={hotel3} alt="hotel3" className="gallery__photo"/>
                        </figure>
                    </div>
                    <div className="overview">
                        <h1 className="overview__heading">
                            Hotel Las Palmas
                        </h1>
                        <div className="overview__stars">
                            <Stars className="overview__icon-star"/>
                            <Stars className="overview__icon-star"/>
                            <Stars className="overview__icon-star"/>
                            <Stars className="overview__icon-star"/>
                            <Stars className="overview__icon-star"/>
                        </div>
                        <div className="overview__location">
                            <Location className="overview__icon-location"/>
                            <button className="btn-inline">Albufeira, Portugal</button>
                        </div>
                        <div className="overview__rating">
                            <div className="overview__rating-average">8.6</div>
                            <div className="overview__rating-count">429 votes</div>
                        </div>
                    </div>

                    <div class="detail">
                        <div class="description">
                            <p class="paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                            </p>
                            <p class="paragraph">
                                Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                            </p>
                            <ul class="list">
                                <li class="list__item">Close to the beach</li>
                                <li class="list__item">Breakfast included</li>
                                <li class="list__item">Free airport shuttle</li>
                                <li class="list__item">Free wifi in all rooms</li>
                                <li class="list__item">Air conditioning and heating</li>
                                <li class="list__item">Pets allowed</li>
                                <li class="list__item">We speak all languages</li>
                                <li class="list__item">Perfect for families</li>
                            </ul>
                            <div class="recommend">
                                <p class="recommend__count">
                                    Lucy and 3 other friends recommend this hotel.
                                </p>
                                <div class="recommend__friends">
                                    <img src={user1} alt="Friend 1" class="recommend__photo"/>
                                    <img src={user2} alt="Friend 2" class="recommend__photo"/>
                                    <img src={user3} alt="Friend 3" class="recommend__photo"/>
                                    <img src={user4} alt="Friend 4" class="recommend__photo"/>
                                </div>
                            </div>
                        </div>

                        <div class="user-reviews">
                            <figure class="review">
                                <blockquote class="review__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                                </blockquote>
                                <figcaption class="review__user">
                                    <img src={user1} alt="User 1" class="review__photo"/>
                                    <div class="review__user-box">
                                        <p class="review__user-name">Nick Smith</p>
                                        <p class="review__user-date">Feb 23rd, 2017</p>
                                    </div>
                                    <div class="review__rating">7.8</div>
                                </figcaption>
                            </figure>

                            <figure class="review">
                                <blockquote class="review__text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                                </blockquote>
                                <figcaption class="review__user">
                                    <img src={user2} alt="User 1" class="review__photo"/>
                                    <div class="review__user-box">
                                        <p class="review__user-name">Mary Thomas</p>
                                        <p class="review__user-date">Sept 13th, 2017</p>
                                    </div>
                                    <div class="review__rating">9.3</div>
                                </figcaption>
                            </figure>

                            <button class="btn-inline">Show all <span>&rarr;</span></button>
                        </div>

             
                    </div>

                    <div class="cta">
                            <h2 class="cta__book-now">
                                Good news! We have 4 free rooms for your selected dates!
                            </h2>
                            <button class="btn">
                                <span class="btn__visible">Book now</span>
                                <span class="btn__invisible">Only 4 rooms left</span>
                            </button>
                        </div>
                </main>
            </div>
        )
    }
}

export default Content;