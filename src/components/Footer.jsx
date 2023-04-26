import React from 'react'
import './Footer.css'

    function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h3>Subscribe to our Newsletter</h3>
                        <p>Stay up-to-date with the latest news and promotions from us.</p>
                    </div>
                    <div class="col-md-6">
                        <form action="#" method="post">
                        <div class="form-group">
                            <input type="email" class="form-control" name="email" placeholder="Your Email Address" required></input>
                        </div>
                        <button type="submit" class="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer