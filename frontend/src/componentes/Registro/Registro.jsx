import React from 'react';

const MailchimpForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simula el envío del formulario
    const form = e.target.closest('form');
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      mode: 'no-cors',
    })
      .then(() => {
        // Mostrar mensaje de éxito (puedes ajustar esto según tus necesidades)
        const successResponse = document.getElementById('mce-success-response');
        successResponse.style.display = 'block';
        successResponse.textContent = 'Subscription successful! Thank you.';

        // Redireccionar después de 5 segundos
        setTimeout(() => {
          window.location.href = 'https://your-redirect-url.com'; // Cambia esto por la URL a la que quieres redirigir
        }, 5000); // 5000 ms = 5 segundos
      })
      .catch(() => {
        // Manejo de error (puedes ajustar esto según tus necesidades)
        const errorResponse = document.getElementById('mce-error-response');
        errorResponse.style.display = 'block';
        errorResponse.textContent = 'Subscription failed. Please try again.';
      });
  };

  return (
    <div id="mc_embed_signup">
      <form
        action="https://ifbeauty.us17.list-manage.com/subscribe/post?u=b2596fa7110a14cbec54e7220&amp;id=a3aaa3572b&amp;f_id=00aaf3e2f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_self"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe</h2>
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-FNAME">First Name </label>
            <input type="text" name="FNAME" className="text" id="mce-FNAME" />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-PHONE">Phone Number </label>
            <input type="text" name="PHONE" className="REQ_CSS" id="mce-PHONE" />
          </div>
          <div id="mce-responses" className="clear foot">
            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
          </div>
          <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
            <input type="text" name="b_b2596fa7110a14cbec54e7220_a3aaa3572b" tabIndex="-1" value="" />
          </div>
          <div className="optionalParent">
            <div className="clear foot">
              <button
                type="button"
                onClick={handleSubmit}
                className="button"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MailchimpForm;
