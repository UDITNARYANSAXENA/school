import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdMoreInfo = () => {
  return (
    <div className="ad-more">
      <h1>More Information:</h1>
      
      <div>
        <h3>Admission Procedure</h3>
        <iframe
          src="https://img1.wsimg.com/blobby/go/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/admission%20procedure%20vbs%202025-26.pdf"
          title="Admission Procedure"
        ></iframe>
      </div>
      <div>
        <h3>Registration Form</h3>
        <iframe
          src="https://img1.wsimg.com/blobby/go/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/ADMISSION%20FORM_VBS.pdf"
          title="Admission Form"
        ></iframe>
      </div>
      <div>
        <h3>Admission and Withdrawal Rule</h3>
        <iframe
          src="https://img1.wsimg.com/blobby/go/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/Admission-Withdrawal%20rules_vbs_2024-25.pdf"
          title="Another Admission Form"
        ></iframe>
      </div>
    </div>
  );
};

export default AdMoreInfo;