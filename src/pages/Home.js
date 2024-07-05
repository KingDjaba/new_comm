import React from 'react';

function Home(props) {
    return (
    <div>
    
    {/* Header Area Start */}
<header id="header-area" class="header__3">
    <div class="ruby-container">
        <div class="row">
            {/* Logo Area Start */}
            <div class="col-3 col-lg-1 col-xl-2 m-auto">
                <a href="index.html" class="logo-area">
                    <img src="assets/img/logo-black.png" alt="Logo" class="img-fluid"/>
                </a>
            </div>
            {/* Logo Area End */}

            {/* Navigation Area Start */}
            <div class="col-3 col-lg-9 col-xl-8 m-auto">
                <div class="main-menu-wrap">
                    <nav id="mainmenu">
                        <ul>
                            <li class="dropdown-show"><a href="index.html">Home</a>
                                <ul class="dropdown-nav sub-dropdown">
                                    <li><a href="index.html">Home Layout 1</a></li>
                                    <li><a href="index2.html">Home Layout 2</a></li>
                                    <li><a href="index3.html">Home Layout 3</a></li>
                                    <li><a href="index4.html">Home Layout 4</a></li>
                                    <li><a href="index5.html">Home Layout 5</a></li>
                                    <li><a href="index6.html">Home Layout 6</a></li>
                                </ul>
                            </li>
                            <li class="dropdown-show"><a href="#">Shop</a>
                                <ul class="mega-menu-wrap dropdown-nav">
                                    <li class="mega-menu-item"><a href="shop.html" class="mega-item-title">Shop
                                        Layout</a>
                                        <ul>
                                            <li><a href="shop.html">Shop Left Sidebar</a></li>
                                            <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                            <li><a href="shop-left-full-wide.html">Shop Left Full Wide</a></li>
                                            <li><a href="shop-right-full-wide.html">Shop Right Full Wide</a></li>
                                            <li><a href="shop-full-wide.html">Shop Without Sidebar</a></li>
                                        </ul>
                                    </li>

                                    <li class="mega-menu-item"><a href="single-product.html" class="mega-item-title">Single
                                        Products</a>
                                        <ul>
                                            <li><a href="single-product.html">Single Product</a></li>
                                            <li><a href="single-product-normal.html">Single Product Normal</a></li>
                                            <li><a href="single-product-group.html">Single Product Group</a></li>
                                            <li><a href="single-product-external.html">Single Product External</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown-show"><a href="#">Pages</a>
                                <ul class="dropdown-nav">
                                    <li><a href="cart.html">Shopping Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="compare.html">Compare</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="login-register.html">Login & Register</a></li>
                                    <li><a href="my-account.html">My Account</a></li>
                                    <li><a href="404.html">404 Error</a></li>
                                </ul>
                            </li>
                            <li class="dropdown-show"><a href="#">Men</a>
                                <ul class="mega-menu-wrap dropdown-nav">
                                    <li class="mega-menu-item"><a href="shop-left-full-wide.html"
                                                                  class="mega-item-title">Shirt</a>
                                        <ul>
                                            <li><a href="shop.html">Tops & Tees</a></li>
                                            <li><a href="shop.html">Polo Short Sleeve</a></li>
                                            <li><a href="shop.html">Graphic T-Shirts</a></li>
                                            <li><a href="shop.html">Jackets & Coats</a></li>
                                            <li><a href="shop.html">Fashion Jackets</a></li>
                                        </ul>
                                    </li>

                                    <li class="mega-menu-item"><a href="shop-left-full-wide.html"
                                                                  class="mega-item-title">Jeans</a>
                                        <ul>
                                            <li><a href="shop.html">Crochet</a></li>
                                            <li><a href="shop.html">Sleeveless</a></li>
                                            <li><a href="shop.html">Stripes</a></li>
                                            <li><a href="shop.html">Sweaters</a></li>
                                            <li><a href="shop.html">Hoodies</a></li>
                                        </ul>
                                    </li>

                                    <li class="mega-menu-item"><a href="shop-left-full-wide.html"
                                                                  class="mega-item-title">Shoes</a>
                                        <ul>
                                            <li><a href="shop.html">Tops & Tees</a></li>
                                            <li><a href="shop.html">Polo Short Sleeve</a></li>
                                            <li><a href="shop.html">Graphic T-Shirts</a></li>
                                            <li><a href="shop.html">Jackets & Coats</a></li>
                                            <li><a href="shop.html">Fashion Jackets</a></li>
                                        </ul>
                                    </li>

                                    <li class="mega-menu-item"><a href="shop-left-full-wide.html"
                                                                  class="mega-item-title">Watches</a>
                                        <ul>
                                            <li><a href="shop.html">Crochet</a></li>
                                            <li><a href="shop.html">Sleeveless</a></li>
                                            <li><a href="shop.html">Stripes</a></li>
                                            <li><a href="shop.html">Sweaters</a></li>
                                            <li><a href="shop.html">Hoodies</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown-show"><a href="shop-left-full-wide.html">Women</a>
                                <ul class="mega-menu-wrap dropdown-nav">
                                    <li class="mega-menu-item"><a href="shop-left-full-wide.html"
                                                                  class="mega-item-title">Kamiz</a>
                                        <ul>
                                            <li><a href="shop.html">Tops & Tees</a></li>
                                            <li><a href="shop.html">Polo Short Sleeve</a></li>
                                            <li><a href="shop.html">Graphic T-Shirts</a></li>
                                            <li><a href="shop.html">Jackets & Coats</a></li>
                                            <li><a href="shop.html">Fashion Jackets</a></li>
                                        </ul>
                                    </li>

                                    <li class="mega-menu-item"><a href="shop-left-full-wide.html"
                                                                  class="mega-item-title">Life Style</a>
                                        <ul>
                                            <li><a href="shop.html">Crochet</a></li>
                                            <li><a href="shop.html">Sleeveless</a></li>
                                            <li><a href="shop.html">Stripes</a></li>
                                            <li><a href="shop.html">Sweaters</a></li>
                                            <li><a href="shop.html">Hoodies</a></li>
                                        </ul>
                                    </li>

                                    <li class="mega-menu-item"><a href="shop-left-full-wide.html"
                                                                  class="mega-item-title">Shoes</a>
                                        <ul>
                                            <li><a href="shop.html">Tops & Tees</a></li>
                                            <li><a href="shop.html">Polo Short Sleeve</a></li>
                                            <li><a href="shop.html">Graphic T-Shirts</a></li>
                                            <li><a href="shop.html">Jackets & Coats</a></li>
                                            <li><a href="shop.html">Fashion Jackets</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown-show"><a href="#">Blog</a>
                                <ul class="dropdown-nav">
                                    <li><a href="blog.html">Blog Right Sidebar</a></li>
                                    <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                    <li><a href="blog-grid.html">Blog Grid Layout</a></li>
                                    <li><a href="single-blog.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* Navigation Area End */}

            {/* Header Right Meta Start */}
            <div class="col-6 col-lg-2 m-auto">
                <div class="header-right-meta text-right">
                    <ul>
                        <li><a href="#" class="modal-active"><i class="fa fa-search"></i></a></li>
                        <li class="settings"><a href="#"><i class="fa fa-cog"></i></a>
                            <div class="site-settings d-block d-sm-flex">
                                <dl class="currency">
                                    <dt>Currency</dt>
                                    <dd class="current"><a href="#">USD</a></dd>
                                    <dd><a href="#">AUD</a></dd>
                                    <dd><a href="#">CAD</a></dd>
                                    <dd><a href="#">BDT</a></dd>
                                </dl>

                                <dl class="my-account">
                                    <dt>My Account</dt>
                                    <dd><a href="#">Dashboard</a></dd>
                                    <dd><a href="#">Profile</a></dd>
                                    <dd><a href="#">Sign</a></dd>
                                </dl>

                                <dl class="language">
                                    <dt>Language</dt>
                                    <dd class="current"><a href="#">English (US)</a></dd>
                                    <dd><a href="#">English (UK)</a></dd>
                                    <dd><a href="#">Chinees</a></dd>
                                    <dd><a href="#">Bengali</a></dd>
                                    <dd><a href="#">Hindi</a></dd>
                                    <dd><a href="#">Japanees</a></dd>
                                </dl>
                            </div>
                        </li>
                        <li class="shop-cart"><a href="#"><i class="fa fa-shopping-bag"></i> <span
                                class="count">3</span></a>
                            <div class="mini-cart">
                                <div class="mini-cart-body">
                                    <div class="single-cart-item d-flex">
                                        <figure class="product-thumb">
                                            <a href="#"><img class="img-fluid" src="assets/img/product-1.jpg"
                                                             alt="Products"/></a>
                                        </figure>

                                        <div class="product-details">
                                            <h2><a href="#">Sprite Yoga Companion</a></h2>
                                            <div class="cal d-flex align-items-center">
                                                <span class="quantity">3</span>
                                                <span class="multiplication">X</span>
                                                <span class="price">$77.00</span>
                                            </div>
                                        </div>
                                        <a href="#" class="remove-icon"><i class="fa fa-trash-o"></i></a>
                                    </div>
                                    <div class="single-cart-item d-flex">
                                        <figure class="product-thumb">
                                            <a href="#"><img class="img-fluid" src="assets/img/product-2.jpg"
                                                             alt="Products"/></a>
                                        </figure>
                                        <div class="product-details">
                                            <h2><a href="#">Yoga Companion Kit</a></h2>
                                            <div class="cal d-flex align-items-center">
                                                <span class="quantity">2</span>
                                                <span class="multiplication">X</span>
                                                <span class="price">$6.00</span>
                                            </div>
                                        </div>
                                        <a href="#" class="remove-icon"><i class="fa fa-trash-o"></i></a>
                                    </div>
                                    <div class="single-cart-item d-flex">
                                        <figure class="product-thumb">
                                            <a href="#"><img class="img-fluid" src="assets/img/product-3.jpg"
                                                             alt="Products"/></a>
                                        </figure>
                                        <div class="product-details">
                                            <h2><a href="#">Sprite Yoga Companion Kit</a></h2>
                                            <div class="cal d-flex align-items-center">
                                                <span class="quantity">1</span>
                                                <span class="multiplication">X</span>
                                                <span class="price">$116.00</span>
                                            </div>
                                        </div>
                                        <a href="#" class="remove-icon"><i class="fa fa-trash-o"></i></a>
                                    </div>
                                </div>
                                <div class="mini-cart-footer">
                                    <a href="checkout.html" class="btn-add-to-cart">Checkout</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Header Right Meta End */}
        </div>
    </div>
</header>
{/* Header Area End */}

{/* Search Box Area Start */}
<div class="body-popup-modal-area">
    <span class="modal-close"><img src="assets/img/cancel.png" alt="Close" class="img-fluid"/></span>
    <div class="modal-container d-flex">
        <div class="search-box-area">
            <div class="search-box-form">
                <form action="#" method="post">
                    <input type="search" placeholder="type keyword and hit enter"/>
                    <button class="btn" type="button"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div>
    </div>
</div>
{/* Search Box Area End */}

{/* Banner // Slider Area Start */}
<section id="banner-area" class="banner__2">
    <div class="ruby-container">
        <div class="row">
            <div class="col-lg-12">
                <div id="banner-carousel" class="owl-carousel">
                    {/* Banner Single Carousel Start */}
                    <div class="single-carousel-wrap home_6_slide_1">
                        <div class="banner-caption text-center text-lg-left">
                            <h4>Rubby Store</h4>
                            <h2>Ring Solitaire <br/> for Princess</h2>
                            <p>Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                            <a href="#" class="btn-long-arrow">Learn More</a>
                        </div>
                    </div>
                    {/* Banner Single Carousel End */}

                    {/* Banner Single Carousel Start */}
                    <div class="single-carousel-wrap home_6_slide_2">
                        <div class="banner-caption text-center text-lg-left">
                            <h4>New Collection 2017</h4>
                            <h2>Nice Earrings <br/> Collection</h2>
                            <p>Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                            <a href="#" class="btn-long-arrow">Learn More</a>
                        </div>
                    </div>
                    {/* Banner Single Carousel End */}
                </div>
            </div>
        </div>
    </div>
</section>
{/* Banner Slider End */}

{/* Featured Products Area Start */}
<div id="category-feature-product" class="pt-9">
    <div class="ruby-container">
        <div class="row">
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="single-featured-product">
                            <a href="#"><img src="assets/img/home_6_cat_1.jpg" alt="Products" class="img-fluid"/></a>
                        </div>
                    </div>

                    <div class="col-lg-12">
                        <div class="single-featured-product">
                            <a href="#"><img src="assets/img/home_6_cat_2.jpg" alt="Products" class="img-fluid"/></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="single-featured-product">
                            <a href="#"><img src="assets/img/home_6_cat_3.jpg" alt="Products" class="img-fluid"/></a>
                        </div>
                    </div>

                    <div class="col-lg-12">
                        <div class="single-featured-product">
                            <a href="#"><img src="assets/img/home_6_cat_4.jpg" alt="Products" class="img-fluid"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* Featured Products Area End */}

{/* New Products Area Start */}
<section id="new-products-area" class="p-9">
    <div class="ruby-container">
        <div class="row">
            <div class="col-lg-12 text-center">
                {/* Section Title Start */}
                <div class="section-title">
                    <h2>New Products</h2>
                    <p>Trending stunning Unique</p>
                </div>
                {/* Section Title End */}
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="products-wrapper">
                    <div class="new-products-carousel owl-carousel">
                        {/* Single Product Item */}
                        <div class="single-product-item text-center">
                            <figure class="product-thumb">
                                <a href="single-product.html"><img src="assets/img/new-product-1.jpg" alt="Products"
                                                                   class="img-fluid"/></a>
                            </figure>

                            <div class="product-details">
                                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                                <span class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star-half"></i>
                                                <i class="fa fa-star-o"></i>
                                            </span>
                                <span class="price">$52.00</span>
                                <a href="single-product.html" class="btn btn-add-to-cart">+ Add to Cart</a>
                                <span class="product-bedge">New</span>
                            </div>

                            <div class="product-meta">
                                <button type="button" data-toggle="modal" data-target="#quickView">
                                    <span data-toggle="tooltip" data-placement="left" title="Quick View"><i
                                            class="fa fa-compress"></i></span>
                                </button>
                                <a href="wishlist.html" data-toggle="tooltip" data-placement="left"
                                   title="Add to Wishlist"><i class="fa fa-heart-o"></i></a>
                                <a href="compare.html" data-toggle="tooltip" data-placement="left"
                                   title="Compare"><i class="fa fa-tags"></i></a>
                            </div>
                        </div>
                        {/* Single Product Item */}

                        {/* Single Product Item */}
                        <div class="single-product-item text-center">
                            <figure class="product-thumb">
                                <a href="single-product.html"><img src="assets/img/new-product-2.jpg" alt="Products"
                                                                   class="img-fluid"/></a>
                            </figure>

                            <div class="product-details">
                                <h2><a href="single-product.html">Bruno Compete Hoodie</a></h2>
                                <span class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star-o"></i>
                                            </span>
                                <span class="price">$152.00</span>
                                <a href="single-product.html" class="btn btn-add-to-cart">+ Add to Cart</a>
                                <span class="product-bedge">New</span>
                            </div>

                            <div class="product-meta">
                                <button type="button" data-toggle="modal" data-target="#quickView">
                                    <span data-toggle="tooltip" data-placement="left" title="Quick View"><i
                                            class="fa fa-compress"></i></span>
                                </button>
                                <a href="wishlist.html" data-toggle="tooltip" data-placement="left"
                                   title="Add to Wishlist"><i class="fa fa-heart-o"></i></a>
                                <a href="compare.html" data-toggle="tooltip" data-placement="left"
                                   title="Compare"><i class="fa fa-tags"></i></a>
                            </div>
                        </div>
                        {/* Single Product Item */}

                        {/* Single Product Item */}
                        <div class="single-product-item text-center">
                            <figure class="product-thumb">
                                <a href="single-product.html"><img src="assets/img/new-product-3.jpg" alt="Products"
                                                                   class="img-fluid"/></a>
                            </figure>

                            <div class="product-details">
                                <h2><a href="single-product.html">MH01-Black</a></h2>
                                <span class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </span>
                                <span class="price">$43.00</span>
                                <a href="single-product.html" class="btn btn-add-to-cart">+ Add to Cart</a>
                                <span class="product-bedge">New</span>
                            </div>

                            <div class="product-meta">
                                <button type="button" data-toggle="modal" data-target="#quickView">
                                    <span data-toggle="tooltip" data-placement="left" title="Quick View"><i
                                            class="fa fa-compress"></i></span>
                                </button>
                                <a href="wishlist.html" data-toggle="tooltip" data-placement="left"
                                   title="Add to Wishlist"><i class="fa fa-heart-o"></i></a>
                                <a href="compare.html" data-toggle="tooltip" data-placement="left"
                                   title="Compare"><i class="fa fa-tags"></i></a>
                            </div>
                        </div>
                        {/* Single Product Item */}

                        {/* Single Product Item */}
                        <div class="single-product-item text-center">
                            <figure class="product-thumb">
                                <a href="single-product.html"><img src="assets/img/new-product-4.jpg" alt="Products"
                                                                   class="img-fluid"/></a>
                            </figure>

                            <div class="product-details">
                                <h2><a href="single-product.html">Chaz Kangeroo Hoodie</a></h2>
                                <span class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star-half"></i>
                                            </span>
                                <span class="price">$83.00</span>
                                <a href="single-product.html" class="btn btn-add-to-cart">+ Add to Cart</a>
                                <span class="product-bedge sale">Sale</span>
                            </div>

                            <div class="product-meta">
                                <button type="button" data-toggle="modal" data-target="#quickView">
                                    <span data-toggle="tooltip" data-placement="left" title="Quick View"><i
                                            class="fa fa-compress"></i></span>
                                </button>
                                <a href="wishlist.html" data-toggle="tooltip" data-placement="left"
                                   title="Add to Wishlist"><i class="fa fa-heart-o"></i></a>
                                <a href="compare.html" data-toggle="tooltip" data-placement="left"
                                   title="Compare"><i class="fa fa-tags"></i></a>
                            </div>
                        </div>
                        {/* Single Product Item */}

                        {/* Single Product Item */}
                        <div class="single-product-item text-center">
                            <figure class="product-thumb">
                                <a href="single-product.html"><img src="assets/img/new-product-4.jpg" alt="Products"
                                                                   class="img-fluid"/></a>
                            </figure>

                            <div class="product-details">
                                <h2><a href="single-product.html">Chaz Kangeroo Hoodie</a></h2>
                                <span class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star-half"></i>
                                            </span>
                                <span class="price">$83.00</span>
                                <a href="single-product.html" class="btn btn-add-to-cart">+ Add to Cart</a>
                                <span class="product-bedge sale">Sale</span>
                            </div>

                            <div class="product-meta">
                                <button type="button" data-toggle="modal" data-target="#quickView">
                                    <span data-toggle="tooltip" data-placement="left" title="Quick View"><i
                                            class="fa fa-compress"></i></span>
                                </button>
                                <a href="wishlist.html" data-toggle="tooltip" data-placement="left"
                                   title="Add to Wishlist"><i class="fa fa-heart-o"></i></a>
                                <a href="compare.html" data-toggle="tooltip" data-placement="left"
                                   title="Compare"><i class="fa fa-tags"></i></a>
                            </div>
                        </div>
                        {/* Single Product Item */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* New Products Area End */}

{/* Categories Products Area Start */}
<div id="products-area-wrapper" class="mt-0">
    <div class="ruby-container">
        <div class="row no-gutters">
            <div class="col-md-7">
                <a href="#" class="product-category-name-warp d-flex">
                    <div class="category-title-box d-flex">
                        <h2 class="pro-cate-title">Men</h2>
                    </div>
                </a>
            </div>

            <div class="col-md-5">
                <div class="products-wrapper text-center">
                    <div class="products-categories-carousel owl-carousel">
                        <div class="single-product-item">
                            <figure class="product-thumb">
                                <a href="#"><img src="assets/img/product-1.jpg" alt="Product"
                                                 class="img-fluid"/></a>
                            </figure>
                            <div class="product-details">
                                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                                <div class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <span class="price">$52.00</span>
                                <a href="single-product.html" class="btn btn-add-to-cart">+ Add to Cart</a>
                            </div>
                        </div>

                        <div class="single-product-item">
                            <figure class="product-thumb">
                                <a href="#"><img src="assets/img/product-2.jpg" alt="Product"
                                                 class="img-fluid"/></a>
                            </figure>
                            <div class="product-details">
                                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                                <div class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <span class="price">$52.00</span>
                                <a href="single-product.html" class="btn btn-add-to-cart">+ Add to Cart</a>
                            </div>
                        </div>

                        <div class="single-product-item">
                            <figure class="product-thumb">
                                <a href="#"><img src="assets/img/product-3.jpg" alt="Product"
                                                 class="img-fluid"/></a>
                            </figure>
                            <div class="product-details">
                                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                                <div class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <span class="price">$52.00</span>
                                <a href="single-product.html" class="btn btn-add-to-cart">+ Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row no-gutters">
            <div class="col-md-5">
                <div class="products-wrapper text-center">
                    <div class="products-categories-carousel owl-carousel">
                        <div class="single-product-item">
                            <figure class="product-thumb">
                                <a href="#"><img src="assets/img/product-1.jpg" alt="Product"
                                                 class="img-fluid"/></a>
                            </figure>
                            <div class="product-details">
                                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                                <div class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <span class="price">$52.00</span>
                                <a href="single-product.html" class="btn btn-add-to-cart">+ Add to Cart</a>
                            </div>
                        </div>

                        <div class="single-product-item">
                            <figure class="product-thumb">
                                <a href="#"><img src="assets/img/product-2.jpg" alt="Product"
                                                 class="img-fluid"/></a>
                            </figure>
                            <div class="product-details">
                                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                                <div class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <span class="price">$52.00</span>
                                <a href="single-product.html" class="btn btn-add-to-cart">+ Add to Cart</a>
                            </div>
                        </div>

                        <div class="single-product-item">
                            <figure class="product-thumb">
                                <a href="#"><img src="assets/img/product-3.jpg" alt="Product"
                                                 class="img-fluid"/></a>
                            </figure>
                            <div class="product-details">
                                <h2><a href="single-product.html">Crown Summit Backpack</a></h2>
                                <div class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <span class="price">$52.00</span>
                                <a href="single-product.html" class="btn btn-add-to-cart">+ Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-7 order-first order-md-last">
                <a href="#" class="product-category-name-warp women d-flex">
                    <div class="category-title-box d-flex">
                        <h2 class="pro-cate-title">Women</h2>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
{/* Categories Products Area End */}

{/* Footer Area Start */}
<footer id="footer-area">
    {/* Footer Call to Action Start */}
    <div class="footer-callto-action">
        <div class="ruby-container">
            <div class="callto-action-wrapper">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        {/* Single Call-to Action Start */}
                        <div class="single-callto-action d-flex">
                            <figure class="callto-thumb">
                                <img src="assets/img/air-plane.png" alt="WorldWide Shipping"/>
                            </figure>
                            <div class="callto-info">
                                <h2>Free Shipping Worldwide</h2>
                                <p>On order over $150 - 7 days a week</p>
                            </div>
                        </div>
                        {/* Single Call-to Action End */}
                    </div>

                    <div class="col-lg-3 col-md-6">
                        {/* Single Call-to Action Start */}
                        <div class="single-callto-action d-flex">
                            <figure class="callto-thumb">
                                <img src="assets/img/support.png" alt="Support"/>
                            </figure>
                            <div class="callto-info">
                                <h2>24/7 CUSTOMER SERVICE</h2>
                                <p>Call us 24/7 at 000 - 123 - 456k</p>
                            </div>
                        </div>
                        {/* Single Call-to Action End */}
                    </div>

                    <div class="col-lg-3 col-md-6">
                        {/* Single Call-to Action Start */}
                        <div class="single-callto-action d-flex">
                            <figure class="callto-thumb">
                                <img src="assets/img/money-back.png" alt="Money Back"/>
                            </figure>
                            <div class="callto-info">
                                <h2>MONEY BACK Guarantee!</h2>
                                <p>Send within 30 days</p>
                            </div>
                        </div>
                        {/* Single Call-to Action End */}
                    </div>

                    <div class="col-lg-3 col-md-6">
                        {/* Single Call-to Action Start */}
                        <div class="single-callto-action d-flex">
                            <figure class="callto-thumb">
                                <img src="assets/img/cog.png" alt="Guide"/>
                            </figure>
                            <div class="callto-info">
                                <h2>SHOPPING GUIDE</h2>
                                <p>Quis Eum Iure Reprehenderit</p>
                            </div>
                        </div>
                        {/* Single Call-to Action End */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Footer Call to Action End */}

    {/* Footer Follow Up Area Start */}
    <div class="footer-followup-area">
        <div class="ruby-container">
            <div class="followup-wrapper">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="follow-content-wrap">
                            <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="logo"/></a>
                            <p>Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum</p>

                            <div class="footer-social-icons">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-pinterest"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa fa-flickr"></i></a>
                            </div>

                            <a href="#"><img src="assets/img/payment.png" alt="Payment Method"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Footer Follow Up Area End */}

    {/* Footer Image Gallery Area Start */}
    <div class="footer-image-gallery">
        <div class="ruby-container">
            <div class="image-gallery-wrapper">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="imgage-gallery-carousel owl-carousel">
                            <div class="gallery-item">
                                <a href="#"><img src="assets/img/gallery-img-1.jpg" alt="Gallery"/></a>
                            </div>
                            <div class="gallery-item">
                                <a href="#"><img src="assets/img/gallery-img-2.jpg" alt="Gallery"/></a>
                            </div>
                            <div class="gallery-item">
                                <a href="#"><img src="assets/img/gallery-img-3.jpg" alt="Gallery"/></a>
                            </div>
                            <div class="gallery-item">
                                <a href="#"><img src="assets/img/gallery-img-4.jpg" alt="Gallery"/></a>
                            </div>
                            <div class="gallery-item">
                                <a href="#"><img src="assets/img/gallery-img-3.jpg" alt="Gallery"/></a>
                            </div>
                            <div class="gallery-item">
                                <a href="#"><img src="assets/img/gallery-img-2.jpg" alt="Gallery"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Footer Image Gallery Area End */}

    {/* Copyright Area Start */}
    <div class="copyright-area">
        <div class="ruby-container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="copyright-text">
                        <p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Copyright Area End */}

</footer>
{/* Footer Area End */}

    </div>
    );
}

export default Home;

