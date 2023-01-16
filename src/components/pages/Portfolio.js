import React from "react";
import cuisineAndRecipes from "../../assets/images/cuisine-and-recipes.png";
import movieRandomizer from "../../assets/images/movie-randomizer.jpg";
import weatherDashboard from "../../assets/images/weather-dashboard.jpg";
import timedCodeQuiz from "../../assets/images/timed-code-quiz.jpg";
import passwordGen from "../../assets/images/password-generator.png";

export default function Portfolio() {
  const styles = {
    imageSize: {
      height: "100%",
      width: "100%",
    }
  }

  return (
    <div className="row mb-5">
      <h3>Portfolio</h3>
      <div className="col-8 d-flex">
        <div className="row row-cols-2">
          {/* Proj */}
          <div className="col d-flex">
            <div className="card mb-4 image-card">
              <img
                src={cuisineAndRecipes}
                className="port-image"
                alt=""
                style={styles.imageSize}
              />
              <div className="top-left">
                <a href="https://guarded-basin-90757.herokuapp.com/">
                  Cuisines and Recipes Logbook
                </a>
                <a href="https://github.com/francescortuna/cuisine-and-recipes-logbook">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          {/* Proj */}
          <div className="col d-flex">
            <div className="card mb-4 image-card">
              <img
                src={movieRandomizer}
                className="port-image"
                alt=""
                style={styles.imageSize}
              />
              <div className="top-left">
                <a href="https://faye3091.github.io/Movie-Randomizer/">
                  Movie Randomizer
                </a>
                <a href="https://github.com/faye3091/Movie-Randomizer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          {/* Proj  */}
          <div className="col d-flex">
            <div className="card mb-4 image-card">
              <img
                src={weatherDashboard}
                className="port-image"
                alt=""
                style={styles.imageSize}
              />
              <div className="top-left">
                <a href="https://marousiss.github.io/weather-dashboard">
                  Weather Dashboard
                </a>
                <a href="https://github.com/marousiss/weather-dashboard">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          {/* Proj  */}
          <div className="col d-flex">
            <div className="card mb-4 image-card">
              <img
                src={timedCodeQuiz}
                className="port-image"
                alt=""
                style={styles.imageSize}
              />
              <div className="top-left">
                <a href="https://marousiss.github.io/timed-coding-quiz/">
                  Timed Coding Quiz
                </a>
                <a href="https://github.com/marousiss/timed-coding-quiz">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          {/* Proj  */}
          <div className="col d-flex">
            <div className="card mb-4 image-card">
              <img
                src={passwordGen}
                className="port-image"
                alt=""
                style={styles.imageSize}
              />
              <div className="top-left">
                <a href="https://marousiss.github.io/password-generator/">
                  Password Generator
                </a>
                <a href="https://github.com/marousiss/password-generator">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
