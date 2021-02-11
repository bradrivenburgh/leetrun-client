import React from "react";

function LandingPage() {
  return (
    <>
      <header role='banner'>
        <h1>LeetRun</h1>
        <p>
          <strong>
            Track your runs. <br />
            Share your achievements. <br />
            Become elite.
          </strong>
        </p>
      </header>

      <section>
        <h2>A better way to track and share your progress</h2>
        <p>
          Spreadsheets and running journals have their place for tracking
          progress, but LeetRun takes monitoring your progress to the next level
          with dynamic summaries and stats tracking, as well as a leaderboard to
          make it social.
        </p>
      </section>

      <section>
        <h2>Record your runs</h2>
        <img
          src='https://placehold.it/600x300?text=run%20recording%20interface'
          alt='record run form'
        />
        <p>
          LeetRun allows you to all the details about your runs and races,
          including location, distance, race information, terrain type, weather
          conditions, completion time, and notes.
        </p>
      </section>

      <section>
        <h2>Track your progress</h2>
        <img
          src='https://placehold.it/600x300?text=summary%20view'
          alt='summary view'
        />
        <p>
          View your PRs for common race distances, a chart of your run
          frequency, badges for accomplishments, and sort and filter your all
          your runs in once place.
        </p>
      </section>

      <section>
        <h2>Measure up against the competition</h2>
        <img
          src='https://placehold.it/600x300?text=leaderboard'
          alt='leaderboard'
        />
        <p>
          Make it social and see where your latest race PR lands you in the
          rankings. LeetRun includes a leaderboard that shows top times among
          users for common race distances.
        </p>
      </section>

      <section>
        <h2>Start your running journey now</h2>
        <button>View Demo</button>
      </section>
      <footer role='content-info'>
        <p>Created by Brad Rivenburgh</p>
        <p>
          <a href='https://www.linkedin.com/in/brad-rivenburgh/'>LinkedIn</a> |{" "}
          <a href='https://github.com/bradrivenburgh'>GitHub</a>
        </p>
        <p>Copyright &copy 2021</p>
      </footer>
    </>
  );
}

export default LandingPage;
