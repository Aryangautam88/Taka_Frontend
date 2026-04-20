import { useState } from "react";
import flows from "../components/register/question";
import "./Register.css";
import axios from "axios";

const Register = () => {
  const [role, setRole] = useState("");
  const [current, setCurrent] = useState(-1);

  const [formData, setFormData] = useState({});
  const [selected, setSelected] = useState([]);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const steps = role ? flows[role] : [];
  const step = current >= 0 ? steps[current] : null;

  const next = () => {
    setCurrent((prev) => prev + 1);
    setSelected([]);
  };

  const prev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    } else {
      setCurrent(-1);
      setRole("");
    }
  };

  const isValid = () => {
    if (!step) return false;

    if (step.type === "single") {
      return !!formData[step.id];
    }

    if (step.type === "multi") {
      return formData[step.id] && formData[step.id].length > 0;
    }

    if (step.type === "input") {
      return formData[step.id] && formData[step.id].trim() !== "";
    }

    if (step.type === "form") {
      return (
        formData.tempFirstName &&
        formData.tempLastName &&
        formData.tempPhone &&
        formData.tempEmail
      );
    }

    if (step.type === "double") {
      return step.questions.every((_, index) => {
        return formData[`${step.id}_${index}`];
      });
    }

    return true;
  };

  const canRegister = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.phone &&
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.password === formData.confirmPassword &&
      formData.acceptTerms
    );
  };

  if (current === -1) {
    return (
      <div className="container-R">
        <div className="card-R">
          <h2>Who Are You On TAKA?</h2>
          <p>Select your role to continue</p>

          <button
            className="common-btn-R"
            onClick={() => {
              setRole("creator");
              setCurrent(0);
            }}
          >
            Creator / Influencer 🚀
          </button>

          <button
            className="common-btn-R"
            onClick={() => {
              setRole("brand");
              setCurrent(0);
            }}
          >
            Brand / Business 📈
          </button>
        </div>
      </div>
    );
  }

  if (!step) return null;

  return (
    <>
      {step.type !== "register" && (
        <div className="container-R">
          <div className="card-R">
            <h2>{step.title}</h2>
            {step.subtitle && <p>{step.subtitle}</p>}

            {step.type === "single" &&
              step.options.map((opt, i) => (
                <button
                  key={i}
                  className={`common-btn-R ${
                    formData[step.id] === opt ? "active-R" : ""
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      [step.id]: opt
                    }))
                  }
                >
                  {opt}
                </button>
              ))}

            {step.type === "multi" &&
              step.options.map((opt, i) => (
                <button
                  key={i}
                  className={`common-btn-R ${
                    selected.includes(opt) ? "active-R" : ""
                  }`}
                  onClick={() => {
                    let updated = [];

                    if (selected.includes(opt)) {
                      updated = selected.filter((item) => item !== opt);
                    } else {
                      updated = [...selected, opt];
                    }

                    setSelected(updated);

                    setFormData((prev) => ({
                      ...prev,
                      [step.id]: updated
                    }));
                  }}
                >
                  {opt}
                </button>
              ))}

            {step.type === "input" && (
              <input
                placeholder="Type here..."
                value={formData[step.id] || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [step.id]: e.target.value
                  }))
                }
              />
            )}

            {step.type === "form" && (
              <>
                <input
                  placeholder="First Name"
                  value={formData.tempFirstName || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      tempFirstName: e.target.value
                    }))
                  }
                />

                <input
                  placeholder="Last Name"
                  value={formData.tempLastName || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      tempLastName: e.target.value
                    }))
                  }
                />

                <input
                  placeholder="Phone"
                  value={formData.tempPhone || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      tempPhone: e.target.value
                    }))
                  }
                />

                <input
                  placeholder="Email"
                  value={formData.tempEmail || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      tempEmail: e.target.value
                    }))
                  }
                />
              </>
            )}

            {step.type === "double" &&
              step.questions.map((q, i) => (
                <div key={i} className="double-box-R">
                  <h4>{q.q}</h4>

                  {q.options.map((opt, j) => (
                    <button
                      key={j}
                      className={`common-btn-R ${
                        formData[`${step.id}_${i}`] === opt
                          ? "active-R"
                          : ""
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          [`${step.id}_${i}`]: opt
                        }))
                      }
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ))}

            <div className="btn-row-R">
              <button
                className="prev-R common-btn-R"
                onClick={prev}
              >
                Previous
              </button>

              <button
                className="next-R common-btn-R"
                onClick={next}
                disabled={!isValid()}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {step.type === "register" && (
        <div className="final-container-R">
          <div className="right-R">
            <h2>Create Your Account</h2>
            <p>Complete registration to continue</p>

            <input
              placeholder="First Name"
              value={formData.firstName || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  firstName: e.target.value
                }))
              }
            />

            <input
              placeholder="Last Name"
              value={formData.lastName || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  lastName: e.target.value
                }))
              }
            />

            <input
              placeholder="Email"
              value={formData.email || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  email: e.target.value
                }))
              }
            />

            <input
              placeholder="Phone Number"
              value={formData.phone || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  phone: e.target.value
                }))
              }
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  password: e.target.value
                }))
              }
            />

            <label className="check-line-R">
              <input
                type="checkbox"
                checked={showPassword || false}
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Password
            </label>

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={formData.confirmPassword || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value
                }))
              }
            />

            <label className="check-line-R">
              <input
                type="checkbox"
                checked={showConfirm || false}
                onChange={() => setShowConfirm(!showConfirm)}
              />
              Show Confirm Password
            </label>

            <label className="check-line-R">
              <input
                type="checkbox"
                checked={formData.acceptTerms || false}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    acceptTerms: e.target.checked
                  }))
                }
              />
              I accept Terms & Conditions
            </label>

            <div className="btn-row-R">
              <button
                className="prev-R common-btn-R"
                onClick={prev}
              >
                Previous
              </button>

              <button
                className="main-btn-R common-btn-R"
                disabled={!canRegister()}
                onClick={async () => {
                  try {
                    const payload = {
                      role: role.trim().toLowerCase(),
                      firstName: formData.firstName?.trim(),
                      lastName: formData.lastName?.trim(),
                      email: formData.email?.trim().toLowerCase(),
                      phone: formData.phone?.trim(),
                      password: formData.password,
                      acceptTerms: formData.acceptTerms,
                      onboarding: {
                        answers: formData
                      }
                    };

                    const res = await axios.post(
                      "http://localhost:5000/api/auth/register",
                      payload
                    );

                    alert(res.data.message);

                  } catch (error) {
                    alert(
                      error.response?.data?.message ||
                      "Registration Failed"
                    );
                  }
                }}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;