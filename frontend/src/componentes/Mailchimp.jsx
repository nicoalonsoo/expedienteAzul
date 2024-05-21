import React from 'react';

const MailchimpForm = ({ email, firstName, lastName }) => (
    <div id="mc_embed_shell">
    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
    {`
            /* Estilos CSS del formulario */
            `}
    </style>
    <div id="mc_embed_signup">
      <form action="https://ifbeauty.us22.list-manage.com/subscribe/post?u=b7e90f222695eccac0a3b2ae2&amp;id=b55845cd5b&amp;f_id=003ac8e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
        <div id="mc_embed_signup_scroll">
          <h2>Suscribir</h2>
          <div className="indicates-required">
            <span className="asterisk">*</span> indica que es obligatorio
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">Dirección de correo electrónico <span className="asterisk">*</span></label>
            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" value={email} />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-FNAME">Nombre </label>
            <input type="text" name="FNAME" className=" text" id="mce-FNAME" value={firstName} />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-LNAME">Apellidos </label>
            <input type="text" name="LNAME" className=" text" id="mce-LNAME" value={lastName} />
          </div>
          <div id="mce-responses" className="clear foot">
            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
          </div>
          <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
            {/* Real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
            <input type="text" name="b_b7e90f222695eccac0a3b2ae2_b55845cd5b" tabIndex="-1" value="" />
          </div>
          <div className="optionalParent">
            <div className="clear foot">
              <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
              <p style={{ margin: '0px auto' }}>
                <a href="http://eepurl.com/iQkNr6" title="Mailchimp: marketing por correo electrónico fácil y divertido">
                  <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                    <img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }} />
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
    <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
    <script type="text/javascript">
            {`
            (function($) {
                window.fnames = new Array();
                window.ftypes = new Array();
                fnames[0]='EMAIL';
                ftypes[0]='email';
                fnames[1]='FNAME';
                ftypes[1]='text';
                fnames[2]='LNAME';
                ftypes[2]='text';
            }(jQuery));
            var $mcj = jQuery.noConflict(true);
            `}
        </script>
  </div>
);

export default MailchimpForm;
