module.exports = (survey) => {
    return `
      <html>
        <body>
          <div style="text-align:center;">
            <h3>Check it out!</h3>
            <p>Plz anser the following questions below:</p>
            <p>${survey.body}</p>
            <div>
              <a href="http://localhost:3000">Yes</a>
            </div>
            <div>
              <a href="http://localhost:3000">No</a>
            </div>
          </div>
        </body>
      </html>
    `
};
