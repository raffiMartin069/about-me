function Skills() {
  return (
    <div
      className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-6 g-4 mx-auto mt-5"
      style={{ maxWidth: "100%", minWidth: "100%" }} id="skill-wrapper"
    >
      <div className="col">
        <div className="card" style={{ height: "100%" }}>
          <i className="devicon-dotnetcore-plain colored fs-1"></i>
          <div className="card-body">
            <h5 className="card-title">ASP.NET</h5>
            <p className="card-text">
              Leveraging the power of C# to develop robust and scalable web
              applications within the Microsoft ecosystem.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ height: "100%" }}>
          <i className="devicon-react-original-wordmark colored fs-1"></i>
          <div className="card-body">
            <h5 className="card-title">ReactJS</h5>
            <p className="card-text">
              Building dynamic and interactive user interfaces with a focus on
              component-based architecture and performance optimization.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ height: "100%" }}>
          <i className="devicon-django-plain colored colored fs-1"></i>
          <div className="card-body">
            <h5 className="card-title">Django</h5>
            <p className="card-text">
              Utilizing Django's comprehensive features to rapidly develop
              secure, scalable, and feature-rich web applications. This includes
              building web APIs, handling user authentication, and integrating
              with various databases.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ height: "100%" }}>
          <i className="devicon-flask-original colored fs-1"></i>
          <div className="card-body">
            <h5 className="card-title">Flask</h5>
            <p className="card-text">
              Building lightweight and flexible web applications with Flask.
              This provides granular control over application structure and
              allows for the integration of various third-party libraries to
              achieve specific functionalities.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ height: "100%" }}>
          <i className="devicon-postgresql-plain colored fs-1"></i>
          <div className="card-body">
            <h5 className="card-title">PostgreSQL</h5>
            <p className="card-text">
              Managing complex relational data with a focus on data integrity,
              security, and advanced querying capabilities.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ height: "100%" }}>
          <i className="devicon-mongodb-plain colored fs-1"></i>
          <div className="card-body">
            <h5 className="card-title">MongoDB</h5>
            <p className="card-text">
              Building flexible and scalable applications that utilize NoSQL
              data structures for dynamic data models.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
