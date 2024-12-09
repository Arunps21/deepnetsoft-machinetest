import React from "react";

function FooterPage() {
  return (
    <>
      <div className="footerParent">
        <p>
          &copy; {new Date().getFullYear()} Deepnetsoft Solutions. All rights
          reserved.
        </p>
        <div className="footercChild">
          <p>Terms & Conditions</p>
          <p>Privacy Policiy</p>
        </div>
      </div>
    </>
  );
}

export default FooterPage;
