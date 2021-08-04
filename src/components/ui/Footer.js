//Footer
import React from 'react';
import './ui.css';

export const Footer = () => {
  return (
    <div>
      <footer class="page-footer font-small bg-dark pt-4">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <h5 class="text-uppercase">Valve</h5>
              <p>About Valve | Steamworks | Work | Steam | @steam</p>
            </div>

            <div class="footer-copyright text-center py-3">
              © 2020 Copyright:
              <a href="https://github.com/franbaigorria">FranciscoBaigorria</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
