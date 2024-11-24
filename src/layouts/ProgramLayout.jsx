import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Programs = () => {
  return (
    <>
      <div className="pages programs text-center py-4">
        <h2 className="title display-4">Academics</h2>
        <p className="lead">Ignite your path to success and begin to explore your passion</p>
      </div>
      <div className="rules container my-5">
        <h3 className="text-primary mb-4">Rules And Regulations</h3>
        <ul className="rules1 list-group">
          <li className="list-group-item">
            Students need to attend school regularly and punctually.
          </li>
          <li className="list-group-item">
            Every student will bring his/her school diary daily and without fail.
          </li>
          <li className="list-group-item">
            Students who come to school in their own transport should not reach before 7:25 am. School gates will be open in the morning at 7:25 am and closed at 8:00 am.
          </li>
          <li className="list-group-item">
            The bell is a signal for all to go to their respective classrooms. They should enter classrooms silently without jostling and pushing.
          </li>
          <li className="list-group-item">
            The school uniform is to be worn on all school days and at all school functions. Students should not be shabbily dressed.
          </li>
          <li className="list-group-item">
            Care should be taken not to disfigure or damage school property. Any loss or damage to school property due to wanton destruction or carelessness of a student will lead to the imposition of a fine and recovery of costs.
          </li>
          <li className="list-group-item">
            No books (other than text or library books), magazines, or periodicals may be brought to the school without the Principal’s permission.
          </li>
          <li className="list-group-item">
            Children are not allowed to bring valuables (gold, precious ornaments, electrical gadgets, or cash) to the school. The school is not responsible for articles or personal belongings lost by the students.
          </li>
          <li className="list-group-item">
            Parents should fill up the record for non-attendance for each day the student is absent from school stating the reasons for his/her absence.
          </li>
          <li className="list-group-item">
            Parents/Guardians are not allowed to meet their wards or the teachers in classrooms during school hours. Prior permission is to be sought from the Principal in case of emergencies.
          </li>
          <li className="list-group-item">
            Parents are required to inform the school if there is any change in their address and/or telephone numbers immediately.
          </li>
          <li className="list-group-item">
            No student is allowed to leave the class or school premises during school hours without the permission of the class teacher and the Principal.
          </li>
          <li className="list-group-item">
            The school insists on the maintenance of strict discipline. Any child who violates the set rules of the school discipline will not be allowed to attend the school. The Principal reserves the right to dismiss any student without assigning any reason.
          </li>
        </ul>
      </div>
      <div className="rules container my-5">
  <h3 className="text-primary mb-4 text-center">Assessment</h3>
  <p className="text-muted text-center">
    There will be an Internal Evaluation System for classes.
  </p>
  <ul className="rules1 list-group">
    <li className="list-group-item">
      <label className="fw-bold">(i) L.K.G., U.K.G. and II -</label>
      <p className="mb-0">
        Students will be evaluated through their everyday work, class response,
        participation in various co-scholastic activities, and writing skills.
        Only worksheets will be given. Evaluation will be divided into both
        terms.
      </p>
    </li>
    <li className="list-group-item">
      <label className="fw-bold">(ii) Classes: III-V</label>
      <p className="mb-0">
        Evaluation is divided into two terms. Along with periodic tests,
        internal assessment will be taken. Internal assessment will be based on
        language skills (reading, speaking, listening, and writing), project
        work, notebook, holiday homework, activities, quizzes, OTBA, portfolio,
        and subject enrichment.
      </p>
    </li>
    <li className="list-group-item">
      <label className="fw-bold">(iii) Classes: VI-XII</label>
      <p className="mb-0">
        The examination pattern for class XI will be spread over the whole year
        with unit tests, half-yearly exams, and annual examinations of 80 marks
        each. Marks are allocated for an internal assessment (20 marks), which
        includes unit tests, OTBA, projects, portfolios, notebooks, subject
        enrichment activities, quizzes, and pre-board examinations. <br />
        <strong>Attendance Requirement:</strong> 75% attendance is mandatory to
        appear in the annual examination. <br />
        <strong>Subject Options for Class XI:</strong> Students can choose
        subjects based on their grades and percentile ranks in the Class X
        final result.
      </p>
    </li>
    <li className="list-group-item">
      <h5 className="text-primary">Subject Streams</h5>
      <p>
        <strong>1. SCIENCE STREAM:</strong> <br />
        (a) Medical: English, Physics, Chemistry, Biology, Maths, I.P.,
        Physical Education. <br />
        (b) Engineering: English, Physics, Chemistry, Maths, CS, Physical
        Education.
      </p>
      <p>
        <strong>2. COMMERCE STREAM:</strong> <br />
        (a) With Maths: English, Maths, Accountancy, Business Studies,
        Economics, Physical Education. <br />
        (b) Without Maths: English, IT/Physical Education, Accountancy,
        Business Studies, Economics.
      </p>
      <p>
        <strong>3. ARTS/HUMANITIES:</strong> <br />
        English Core, Hindi Elective, Political Science, Economics, Sociology,
        Physical Education.
      </p>
    </li>
  </ul>
</div>

      <Outlet />
      <Footer />
    </>
  );
};

export default Programs;
