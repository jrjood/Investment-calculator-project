// import { useState } from "react";

export default function UserInput({ userData, onChangeUserInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userData.initialInvestment}
            onChange={(event) =>
              onChangeUserInput("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userData.annualInvestment}
            onChange={(event) =>
              onChangeUserInput("annualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userData.expectedReturn}
            onChange={(event) =>
              onChangeUserInput("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userData.duration}
            onChange={(event) =>
              onChangeUserInput("duration", event.target.value)
            }
            required
          />
        </p>
      </div>
    </section>
  );
}
