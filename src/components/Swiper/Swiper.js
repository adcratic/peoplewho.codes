import React from "react";

const Swiper=() => {
    return (

        <div class="clients-slider swiper ">
          <div class="swiper-wrapper align-items-center">
            <div class="swiper-slide"><img src="assets/img/clients/1.jpg" class="img-fluid" alt=""></div>
            <div class="swiper-slide"><img src="assets/img/clients/images.jpg" class="img-fluid" alt=""></div>
            <div class="swiper-slide"><img src="assets/img/clients/iocl.png" class="img-fluid" alt=""></div>
            <div class="swiper-slide"><img src="assets/img/clients/lt-600x400.jpg" class="img-fluid" alt=""></div>
            <div class="swiper-slide"><img src="assets/img/clients/mecon.jpg" class="img-fluid" alt=""></div>
           
          </div>
          <div class="swiper-pagination"></div>
        </div>

    )
}

export default Swiper;