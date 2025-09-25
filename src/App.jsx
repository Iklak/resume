export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        {/* Header */}
        <header className="text-center border-b pb-6 mb-6">
          <h1 className="text-3xl font-bold">IKLAKH HUSSAIN</h1>
          <p className="mt-2">
            📞 7033452583 | 📧{" "}
            <a
              href="mailto:Iklakhhussain1503@gmail.com"
              className="text-blue-600"
            >
              Iklakhhussain1503@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://linkedin.com/in/iklakh-hussain"
              className="text-blue-600"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Iklak"
              className="text-blue-600"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </header>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">Summary</h2>
          <p>
            Motivated Full-Stack Web Developer specializing in the MERN stack
            (MongoDB, Express.js, React.js, Node.js). Skilled in building
            responsive, dynamic applications with modern JavaScript frameworks,
            RESTful APIs, and database-driven solutions. Strong problem-solving
            and project management skills.
          </p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">
            Education
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Master of Computer Applications (MCA), Galgotias University | 2023
              – 2025
            </li>
            <li>
              Bachelor of Computer Applications (BCA), Hansraj College | 2020 –
              2023
            </li>
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">Projects</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">
                Gym Management Website |{" "}
                <a
                  href="https://github.com/Iklak/Gym-management-web-app/tree/main/backend"
                  className="text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Link
                </a>
              </h3>
              <ul className="list-disc pl-5">
                <li>
                  Built a responsive fitness and gym management website using
                  React.js, Node.js, Express.js, and MongoDB.
                </li>
                <li>
                  Implemented membership plans, trainer profiles, and contact
                  form with backend integration.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">
                Food Delivery Application |{" "}
                <a
                  href="https://github.com/Iklak/Food-delivery-website"
                  className="text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Link
                </a>
              </h3>
              <ul className="list-disc pl-5">
                <li>
                  Built a web-based food ordering platform with cart, order, and
                  payment features.
                </li>
                <li>
                  Admin panel for managing food items and tracking orders.
                </li>
                <li>
                  Tech: React.js, Node.js, Express.js, MongoDB, REST APIs.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">
                Real Estate Application |{" "}
                <a
                  href="https://github.com/Iklak/Real-state-application-using-react"
                  className="text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Link
                </a>
              </h3>
              <ul className="list-disc pl-5">
                <li>
                  Full-stack property listing app with search & filter
                  (location, price, type).
                </li>
                <li>Backend APIs with MongoDB integration.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">Skills</h2>
          <p>
            <strong>Programming:</strong> JavaScript, Core Java, SQL <br />
            <strong>Frontend:</strong> HTML, CSS, React.js <br />
            <strong>Backend:</strong> Node.js, Express.js <br />
            <strong>Database:</strong> MongoDB, SQL <br />
            <strong>Other:</strong> Data Structures & Algorithms, Git, REST
            APIs, Project Management
          </p>
        </section>
      </div>
    </div>
  );
}
