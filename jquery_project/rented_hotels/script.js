$(document).ready(function () {
    const herocontent = `
<div class="hero" id="home">
<div>
<h2>Welcome To Our Website</h2>
</div>
</div>
    `;

    $('.menu-toggle').click(function () {
        $('.nav-links').toggleClass('active');
    });



    const aboutSection = `
<section  id="about" class="about-section py-3">
<div class="about-containrt container-fluid row px-lg-3">
    <h2 class="ABOUT pb-3">About Us</h2>
    <div class="content d-md-flex">
        <div class="image-box col-md-7 col-lg-6 text-center">
            <img src="./images/about.avif">
        </div>
        <div class="text-box col-md-5 col-lg-6 text-center">
            <h1>Welcome To Our website</h1>
            <p class="about_para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatibus voluptate commodi! Voluptate quidem ad soluta odio vero. Esse mollitia nemo harum dignissimos! Quaerat dignissimos laborum, tenetur corrupti neque voluptatum?
            </p>
            <button class="btn_gallery">Explore Now</button>
        </div>
    </div>
</div>
</section>
`;
    $('body').prepend(herocontent);
    $('nav').after(aboutSection);

    const villasection = `
    
    <section class="vila-section container py-5">
        <h2 class="text-center bestvilas mb-4">BEST VILAS</h2>
        <div class="row g-3 mb-3">
            <div class="col-sm-6 col-md-4">
                <div class="card shadow-sm">
                    <img src="https://images.unsplash.com/photo-1642330012430-3652a78a1ca8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fFN1bnNldCUyMFBhcmFkaXNlfGVufDB8fDB8fHww" alt="">
                   
                        <div class="card-title">Sunset Paradise</div>
                        <div class="card-text text-success fw-bold">$1,500</div>
                
                </div>
            </div>
                        <div class="col-sm-6 col-md-4">
                <div class="card shadow-sm">
                    <img src="https://images.unsplash.com/photo-1649678356183-54f92839e53b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T2NlYW4lMjBCcmVlemUlMjBWaWxsYXxlbnwwfHwwfHx8MA%3D%3D" alt="">
                   
                        <div class="card-title">Ocean Breeze Villa</div>
                        <div class="card-text text-success fw-bold">$1,500</div>
                
                </div>
            </div>
                        <div class="col-sm-6 col-md-4">
                <div class="card shadow-sm">
                    <img src="https://plus.unsplash.com/premium_photo-1683121837356-f458c940f0ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE1vdW50YWluJTIwUmV0cmVhdHxlbnwwfHwwfHx8MA%3D%3D" alt="">
                   
                        <div class="card-title">Mountain Retreat</div>
                        <div class="card-text text-success fw-bold">$1,500</div>
                
                </div>
            </div>
        </div>
         <div class="row g-3 mb-3">
            <div class="col-sm-6 col-md-4">
                <div class="card shadow-sm">
                    <img src="https://plus.unsplash.com/premium_photo-1724701624563-a7bb454393c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JTNFUGFsbSUyMEdyb3ZlJTIwRXN0YXRlfGVufDB8fDB8fHww" alt="">
                   
                        <div class="card-title">Palm Grove Estate</div>
                        <div class="card-text text-success fw-bold">$1,500</div>
                
                </div>
            </div>
                        <div class="col-sm-6 col-md-4">
                <div class="card shadow-sm">
                    <img src="https://plus.unsplash.com/premium_photo-1748428981016-5f34c4e76b6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R29sZGVuJTIwSG9yaXpvbiUyMFZpbGxhfGVufDB8fDB8fHww" alt="">
                   
                        <div class="card-title">Golden Horizon Villa</div>
                        <div class="card-text text-success fw-bold">$1,500</div>
                
                </div>
            </div>
                        <div class="col-sm-6 col-md-4">
                <div class="card shadow-sm">
                    <img src="https://images.unsplash.com/photo-1667839949220-12101dcf842b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFRyYW5xdWlsJTIwTmVzdCUyMGhvdGVsfGVufDB8fDB8fHww" alt="">
                   
                        <div class="card-title">Tranquil Nest</div>
                        <div class="card-text text-success fw-bold">$1,500</div>
                
                </div>
            </div>
        </div>
         <div class="row g-3 mb-3">
            <div class="col-sm-6 col-md-4">
                <div class="card shadow-sm">
                    <img src="https://plus.unsplash.com/premium_photo-1691858887511-1ec118550193?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U2VyZW5pdHklMjBTYW5kcyUyMGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D" alt="">
                   
                        <div class="card-title">Serenity Sands</div>
                        <div class="card-text text-success fw-bold">$1,500</div>
                
                </div>
            </div>
                        <div class="col-sm-6 col-md-4">
                <div class="card shadow-sm">
                    <img src="https://images.unsplash.com/photo-1633426768219-8891031e522c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8THVzaCUyMFZhbGxleSUyMExvZGdlfGVufDB8fDB8fHww" alt="">
                   
                        <div class="card-title">Lush Valley Lodge</div>
                        <div class="card-text text-success fw-bold">$1,500</div>
                
                </div>
            </div>
                        <div class="col-sm-6 col-md-4">
                <div class="card shadow-sm">
                    <img src="https://images.unsplash.com/photo-1742018574649-43eb2aee36e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNreWxpbmUlMjBFc2NhcGUlMjBob3RlbCUyMGJlYXV0aWZ1bHxlbnwwfHwwfHx8MA%3D%3D" alt="">
                   
                        <div class="card-title">Skyline Escape</div>
                        <div class="card-text text-success fw-bold">$1,500</div>
                
                </div>
            </div>
        </div>
    </section>
    `

    $('#vilassection').html(villasection);

    $("#row").append(`
<div class="col-md-6 mb-3">
<div class="item-container">
    <img src="/images/team1.avif" class="circle-img" alt="team">
    <div class="content-text">
<p>Lorem ipsum dolomquam fugiat in ducimus, repellat molestiae error excepturi ad, consequatur, aspernatur maiores incidunt omnis? Molestiae.</p>
    </div>
</div>
</div>
        `);
    $("#row").append(`
<div class="col-md-6 mb-3">
<div class="item-container">
    <img src="/images/team2.avif" class="circle-img" alt="team">
    <div class="content-text">
<p>Lorem ipsum dolomquam fugiat in ducimus, repellat molestiae error excepturi ad, consequatur, aspernatur maiores incidunt omnis? Molestiae.</p>
    </div>
</div>
</div>
        `);

    $("#row").append(`
<div class="col-md-6 mb-3">
<div class="item-container">
    <img src="/images/team5.jpg" class="circle-img" alt="team">
    <div class="content-text">
<p>Lorem ipsum dolomquam fugiat in ducimus, repellat molestiae error excepturi ad, consequatur, aspernatur maiores incidunt omnis? Molestiae.</p>
    </div>
</div>
</div>
        `);
    $("#row").append(`
<div class="col-md-6 mb-3">
<div class="item-container">
    <img src="/images/team6.webp" class="circle-img" alt="team">
    <div class="content-text">
<p>Lorem ipsum dolomquam fugiat in ducimus, repellat molestiae error excepturi ad, consequatur, aspernatur maiores incidunt omnis? Molestiae.</p>
    </div>
</div>
</div>
        `);
    $("#row").append(`
<div class="col-md-6 mb-3 ">
<div class="item-container">
    <img src="/images/team4.webp" class="circle-img" alt="team">
    <div class="content-text">
<p>Lorem ipsum dolomquam fugiat in ducimus, repellat molestiae error excepturi ad, consequatur, aspernatur maiores incidunt omnis? Molestiae.</p>
    </div>
</div>
</div>
        `);
    $("#row").append(`
<div class="col-md-6 mb-3">
<div class="item-container">
    <img src="/images/team7.jpg" class="circle-img" alt="team">
    <div class="content-text">
<p>Lorem ipsum dolomquam fugiat in ducimus, repellat molestiae error excepturi ad, consequatur, aspernatur maiores incidunt omnis? Molestiae.</p>
    </div>
</div>
</div>
        `);

    new Waypoint({
        element: document.querySelector(`.about-section`),
        handler: function () {
            $('.content').addClass('show');
            $('.image-box img').fadeIn(1000, function () {
                $('.text-box h1').fadeIn(700, function () {
                    $('.text-box p').fadeIn(700, function () {
                        $('.text-box .btn').fadeIn(700);
                    });
                });
            });
        },
        offset: '75%'
    })

    $(".circle-img").click(function () {
        $(this).toggleClass("grow")
    });

const formSection = `

    <section class="form_section bg-light">
        <h2>contact & booking</h2>
        <form>
            <div class="row g-3">
                <div class="col-md-6">
                    <label class="form_label">Name</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6">
                    <label class="form_label">Email</label>
                    <input type="text" class="form-control" id="email" name="email" placeholder="Email" required>
                </div>
                <div class="col-md-6">
                    <label class="form_label">Phone Number</label>
                    <input type="text" class="form-control" placeholder="Phone Number" id="phone" name="phone" required>
                </div>
                <div class="col-md-6">
                    <label class="form_label" id="villa" name="villa">Select Vills</label>
                    <select class="form_select" required>
                        <option selected disabled>choose...</option>
                        <option >Sunset Paradise</option>
                        <option >Ocean Breeze Villa</option>
                        <option >Mountain Retreat</option>
                        <option >Palm Grove Estate</option>
                        <option >Golden Horizon Villa</option>
                        <option >Tranquil Nest</option>
                        <option >Serenity Sands</option>
                        <option >Lush Valley Lodge</option>
                        <option >Skyline Escape</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form_label">Booking Date</label>
                    <input type="date" id="booking-date" name="bookingDate"  class="form-control" placeholder="Phone Number" required></input>
                </div>
                <div class="col-12">
                    <label class="form-label">Message</label>
                    <textarea class="form-control" rows="4" id="message" name="message placeholder="Any Query Fell Free To Contact.."></textarea>
                </div>
                <div class="col-12  d-md-flex justify-content-center">
                    <button type="submit" class="form_button d-md-flex justify-content-center px-4">Book Now</button>
                </div>
            </div>
        </form>
    </section>`

    $('#contact').append(formSection);
$(document).on('submit',function(e){
         e.preventDefault();

    alert('Thank you for Booking....');
    this.reset();
})



})