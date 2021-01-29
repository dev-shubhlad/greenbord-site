import React from "react";

const Career = () => {
  return (
    <div>
      <div className="bg-success text-center p-4">
        <p className="m-0 gb-heading font-35 text-white">We are hiring</p>
        <p className="gb-heading font-35 text-white">Full Stack Devloper</p>
        <div className="text-center">
          <span className="gb-btn m-auto">Apply Now</span>
        </div>
      </div>

      <div className="container p-4">
        <div>
          <p className="gb-heading font-30">Job Description</p>
        </div>
        <div>
          <p>
            <strong>Required Key Skills:</strong>
          </p>
          <p>
            Node.JS, React Native, ReactJS, Redux, Express, Android, IOS, Mobile
            UI, Mobile application{" "}
          </p>
        </div>

        <div>
          <p>
            <strong>Responsibilities</strong>
          </p>
          <ul>
            <li>Architect and develop new flows and features for our app</li>
            <li>
              Build robust UI which work well on different screen densities and
              interactions that result in a delightful investing experience
            </li>
            <li>Build an application from scratch</li>
            <li>
              Obsessively test, optimize and improve app stability and
              performance
            </li>
            <li>
              Understanding of REST APIs, the document request model, and
              offline storage
            </li>
            <li>Should have a better knowledge of Redux</li>
            <li>
              Maintain code and write automated tests to ensure the product is
              of the highest quality.
            </li>
            <li>
              Leverage native APIs for deep integrations with both platforms.
            </li>
            <li>
              Diagnose and fix bugs and performance bottlenecks for performance
              that feels native.
            </li>
          </ul>
        </div>

        <div>
          <p>
            <strong>Additional Information</strong>
          </p>
          <ul>
            <li>
              <strong>Position</strong>: Contract basis for 1 month and will be
              converted to Full Time after 1 month according to performance
              (currently remote work) ​
            </li>
            <li>
              <strong>Experience: 2+ years</strong>
            </li>
            <li>Selected candidate will join immediately</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Career;
