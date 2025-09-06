function Footer() {
  return (
    <footer className="bg-brandGray text-white p-6 text-center">
      <div className="max-w-6xl mx-auto px-4 py-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <div className="font-semibold text-4xl">Crafto Design</div>
          <p className="mt-2 text-sm font-medium text-white">
            We have been creating functional, beautiful and innovative homes for our clients since 2018.
            Expert team of designers, architects and project managers, completed over 200+ home and 10+ commercial projects.
          </p>
          <br />
          <p>Design • Develop • Deliver</p>


        </div>

        <div>
          <div className="text-2xl font-medium">Locations</div>
          <ul className="mt-2 space-y-1 text-white">
            <li>Bengaluru</li>
            <li>Hyderabad</li>
            <li>Mysuru</li>
          </ul>
        </div>

        <div>
          <div className="text-2xl font-medium">Term & Conditions</div>
          <ul className="mt-2 space-y-1 text-white">
            <li>Terms &</li>
            <li>Conditions</li>
          </ul>
        </div>

        <div>
          <div className="text-2xl font-medium">Contact</div>
          <p className="mt-2 text-white text-sm">
            Government school, 3rd cross, road, Chikka Banaswadi, Bengaluru, Karnataka 560033
          </p>
          <p className="mt-2">📞 +91 99865 15115

          <div className="flex gap-4 ml-9 mt-4 justify-center md:justify-start text-xl">
            <a href="#" className="text-blue-500"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/crafto_design_?igsh=OTBvNjdpdnA3eTNw " className="text-pink-500"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-blue-400"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://maps.app.goo.gl/JiiWC3djdxB5hQbX8?g_st=aw" className="text-red-600"><i class="fas fa-map-marker-alt"></i></a>
          </div>  </p>        
        </div>


      </div>

      <div className="border-t py-4 text-center text-xs text-white">
        © {new Date().getFullYear()} Crafto Design Studio. All rights reserved.
      </div>
    </footer>

  );
}
export default Footer;


