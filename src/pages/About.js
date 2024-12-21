import React from 'react'
import styles from '../styles/about.module.css'
import Accordion from 'react-bootstrap/Accordion';

function About() {
  return (
    <div>
      <div className="containerfluid">
        <div className="container">
          <div className={styles.aboutmain}>
            {/* 
            <h3>Number that speaks</h3>
            <h3>FAQs</h3> */}
            <div className={styles.aboutcontent}>
              <div className="row">
                <div className="col-lg-6">
                  <h1>About Us</h1>
                  <p>
                    Welcome to Arsh Tailor's We’re a family-owned tailoring business with a passion for creating high-quality, custom-made garments. Founded in 1990, our shop has been a go-to destination for people who value style, fit, and fine craftsmanship.
                  </p>
                  <p>
                    Our team of experienced tailors specializes in creating bespoke clothing, ranging from suits and dresses to traditional wear. We also offer alteration services to help make your favorite pieces fit perfectly, ensuring they look as good as new.
                  </p>
                  <h2>Our History & Values</h2>
                  <p>
                    Established over two decades ago, Arsh Tailor's has built a reputation for quality, attention to detail, and a personalized approach to tailoring. Our founder, Anver beg Mirza, started with a vision to bring tailored fashion to the community, making each piece unique and fit to perfection.
                  </p>
                  <p>
                    We believe in sustainable fashion, creating pieces that last and reflect the personal style of each client. Every garment we craft is a testament to our dedication to quality, respect for tradition, and passion for innovation.
                  </p>
                </div>
                <di className="col-lg-6">
                  <img src='../images/about_main.webp' />
                </di>
              </div>
            </div>

            <div className={styles.aboutservice}>
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className={styles.abouttitle}>
                    <h2>Crafting timeless pieces, tailored to perfection just for you.</h2>
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className={styles.serviceitem}>
                        {/* <i class="fa-solid fa-circle-check"></i> */}
                        <div className={styles.child1}>
                          <img src="./images/about_custom.webp" alt="" />
                        </div>
                        <div className={styles.childservice}>
                          <h3>Custom Tailoring</h3>
                          <p>From formal suits to evening gowns, we make custom clothing that fits you flawlessly.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className={styles.serviceitem}>
                        <div className={styles.child1}>
                          <img src="./images/about_alteration.webp" alt="" />
                        </div>
                        <div className={styles.childservice}>
                          <h3>Alterations</h3>
                          <p>We offer alteration services to enhance the fit and comfort of your existing wardrobe.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className={styles.serviceitem}>
                        <div className={styles.child1}>
                          <img src="./images/about_repairs.webp" alt="" />
                        </div>
                        <div className={styles.childservice}>
                          <h3>Repairs</h3>
                          <p>Our tailors skillfully mend garments to give them new life.heritage and style.anas mirza</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className={styles.serviceitem}>
                        <div className={styles.child1}>
                          <img src="./images/about_traditional.webp" alt="" />
                        </div>
                        <div className={styles.childservice}>
                          <h3>Traditional Attire</h3>
                          <p>Specializing in traditional garments, we create pieces that honor heritage and style.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.aboutfaqs}>
              <div className={styles.faqshead}>
                <h3>Frequantly asked questions.</h3>
                <p>We're here to answer all Your Questions.If </p>
              </div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header><i class="fa-solid fa-arrow-right"></i><b> What services do you offer for men's clothing?</b></Accordion.Header>
                  <Accordion.Body>
                    We provide custom tailoring, alterations, and repairs for suits, shirts, trousers, and jackets. We also offer bespoke tailoring services for personalized garments.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header><i class="fa-solid fa-arrow-right"></i><b>What should I wear to my fitting?</b></Accordion.Header>
                  <Accordion.Body>
                    Please wear fitted clothing, such as a dress shirt and trousers, to help us assess your measurements accurately.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header><i class="fa-solid fa-arrow-right"></i><b>How long does it take to complete a custom suit?</b></Accordion.Header>
                  <Accordion.Body>
                    Custom suits typically take 4 to 6 weeks to complete, depending on the complexity of the design and current demand. We’ll provide an estimated timeline during your fitting.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header><i class="fa-solid fa-arrow-right"></i><b>Can I bring my own fabric for custom garments?</b></Accordion.Header>
                  <Accordion.Body>
                    Yes, you’re welcome to bring your own fabric. We recommend discussing your choice with us to ensure it’s suitable for the garment you want.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header><i class="fa-solid fa-arrow-right"></i><b>What payment methods do you accept?</b></Accordion.Header>
                  <Accordion.Body>
                    We accept cash and mobile payment options.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header><i class="fa-solid fa-arrow-right"></i><b>What is the best way to contact you for inquiries?</b></Accordion.Header>
                  <Accordion.Body>
                    You can reach us via phone, email, or through our website’s contact form. We are happy to answer any questions you may have!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header><i class="fa-solid fa-arrow-right"></i><b>Can I return or exchange custom garments?</b></Accordion.Header>
                  <Accordion.Body>
                    Custom garments are non-returnable due to their tailored nature. However, we strive for your complete satisfaction and will work to address any fitting concerns.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
